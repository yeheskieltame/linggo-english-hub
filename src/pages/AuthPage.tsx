
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/providers/AuthProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AuthPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultMode = searchParams.get('mode') === 'register' ? 'register' : 'login';
  const [activeTab, setActiveTab] = useState(defaultMode);
  
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoginSubmitting, setIsLoginSubmitting] = useState(false);
  
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerFullName, setRegisterFullName] = useState('');
  const [isRegisterSubmitting, setIsRegisterSubmitting] = useState(false);
  
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect if already logged in
    if (user) {
      navigate('/assessment');
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginSubmitting(true);
    
    try {
      const { error } = await signIn(loginEmail, loginPassword);
      if (!error) {
        // Redirect is handled in AuthProvider
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoginSubmitting(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegisterSubmitting(true);
    
    try {
      const { error } = await signUp(registerEmail, registerPassword, registerFullName);
      if (!error) {
        // Redirect is handled in AuthProvider
      }
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsRegisterSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Selamat Datang di LinggoID</h1>
            <p className="text-gray-600 mt-2">Platform belajar bahasa Inggris untuk pemula hingga mahir</p>
          </div>
          
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Masuk</TabsTrigger>
              <TabsTrigger value="register">Daftar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Masuk ke Akun Anda</CardTitle>
                  <CardDescription>Masukkan email dan kata sandi untuk melanjutkan pembelajaran</CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input 
                        id="login-email"
                        type="email" 
                        placeholder="nama@email.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Kata Sandi</Label>
                        <Button type="button" variant="link" className="p-0 h-auto text-xs">
                          Lupa kata sandi?
                        </Button>
                      </div>
                      <Input 
                        id="login-password" 
                        type="password" 
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-purple-600 hover:bg-purple-700" 
                      disabled={isLoginSubmitting}
                    >
                      {isLoginSubmitting ? "Memproses..." : "Masuk"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>Buat Akun Baru</CardTitle>
                  <CardDescription>Daftar untuk mulai belajar bahasa Inggris hari ini</CardDescription>
                </CardHeader>
                <form onSubmit={handleRegister}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name">Nama Lengkap</Label>
                      <Input 
                        id="register-name" 
                        placeholder="John Doe"
                        value={registerFullName}
                        onChange={(e) => setRegisterFullName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input 
                        id="register-email" 
                        type="email" 
                        placeholder="nama@email.com"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Kata Sandi</Label>
                      <Input 
                        id="register-password" 
                        type="password" 
                        placeholder="••••••••"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                      />
                      <p className="text-xs text-gray-500">
                        Minimal 6 karakter, kombinasi huruf dan angka
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      disabled={isRegisterSubmitting}
                    >
                      {isRegisterSubmitting ? "Memproses..." : "Daftar"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AuthPage;
