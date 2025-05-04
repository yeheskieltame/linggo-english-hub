
import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthState, UserProfile } from "@/types/auth";
import { Session } from "@supabase/supabase-js";
import { toast } from "@/hooks/use-toast";

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<{ error: any | null }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any | null }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<{ error: any | null }>;
  profile: UserProfile | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
  });
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        setAuthState(prev => ({
          ...prev,
          user: currentSession?.user || null,
        }));
        
        setSession(currentSession);
        
        if (currentSession?.user) {
          // Fetch user profile data
          setTimeout(async () => {
            await fetchProfile(currentSession.user.id);
          }, 0);
        } else {
          setProfile(null);
        }

        if (event === 'SIGNED_IN' && location.pathname === '/auth') {
          navigate('/assessment');
        } else if (event === 'SIGNED_OUT') {
          navigate('/');
        }
      }
    );

    // Check initial session
    const initializeAuth = async () => {
      try {
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        setAuthState({
          user: initialSession?.user || null,
          loading: false,
        });
        setSession(initialSession);
        
        if (initialSession?.user) {
          await fetchProfile(initialSession.user.id);
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        setAuthState({ user: null, loading: false });
      }
    };

    initializeAuth();

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, location.pathname]);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      if (data) {
        setProfile(data as UserProfile);
      }
    } catch (error) {
      console.error("Unexpected error fetching profile:", error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        toast({
          title: "Login failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      toast({
        title: "Login successful",
        description: "Welcome back to LinggoID!",
      });
      
      return { error: null };
    } catch (error: any) {
      toast({
        title: "Login error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
      return { error };
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          }
        }
      });

      if (error) {
        toast({
          title: "Registration failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      toast({
        title: "Registration successful",
        description: "Welcome to LinggoID!",
      });
      
      return { error: null };
    } catch (error: any) {
      toast({
        title: "Registration error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
      return { error };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
    } catch (error: any) {
      toast({
        title: "Logout error",
        description: error.message || "An error occurred during logout",
        variant: "destructive",
      });
      console.error("Error signing out:", error);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!authState.user) {
      toast({
        title: "Authentication error",
        description: "You must be logged in to update your profile",
        variant: "destructive",
      });
      return { error: new Error("User not authenticated") };
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', authState.user.id);

      if (error) {
        toast({
          title: "Profile update failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      // Refresh profile data
      await fetchProfile(authState.user.id);

      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated",
      });
      
      return { error: null };
    } catch (error: any) {
      toast({
        title: "Profile update error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
      return { error };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        signIn,
        signUp,
        signOut,
        updateProfile,
        profile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
