
import { User } from "@supabase/supabase-js";

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  preferred_level: string | null;
}
