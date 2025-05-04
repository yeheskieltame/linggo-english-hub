
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from '@/providers/AuthProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProfilePage = () => {
  const { user, profile, updateProfile, signOut } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url || '');
  const [preferredLevel, setPreferredLevel] = useState(profile?.preferred_level || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to get user initials for avatar fallback
  const getUserInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(' ')
        .map(name => name[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return user?.email?.substring(0, 2).toUpperCase() || 'U';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await updateProfile({
        full_name: fullName,
        avatar_url: avatarUrl,
        preferred_level: preferredLevel
      });
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container max-w-4xl mx-auto py-20 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile Saya</h1>
          <p className="text-gray-600 mt-2">Kelola informasi profil Anda</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-32 h-32 mb-4">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={profile?.avatar_url || ''} alt={profile?.full_name || ''} />
                    <AvatarFallback className="text-3xl bg-purple-100 text-purple-800">{getUserInitials()}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold">{profile?.full_name || 'User'}</h3>
                <p className="text-gray-500">{user?.email}</p>
                
                <div className="w-full mt-6 space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => navigate('/dashboard')}
                  >
                    Lihat Dashboard
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-red-200 text-red-600 hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    Keluar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Edit Profil</CardTitle>
                <CardDescription>Perbarui informasi profil Anda</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nama Lengkap</Label>
                    <Input 
                      id="fullName" 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      placeholder="Nama lengkap Anda"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={user?.email || ''} disabled />
                    <p className="text-xs text-gray-500">Email tidak dapat diubah</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="avatarUrl">URL Avatar</Label>
                    <Input 
                      id="avatarUrl" 
                      value={avatarUrl || ''} 
                      onChange={(e) => setAvatarUrl(e.target.value)} 
                      placeholder="https://example.com/avatar.jpg"
                    />
                    <p className="text-xs text-gray-500">Masukkan URL gambar untuk avatar Anda</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="preferredLevel">Level Bahasa Inggris yang Diinginkan</Label>
                    <Select
                      value={preferredLevel}
                      onValueChange={setPreferredLevel}
                    >
                      <SelectTrigger id="preferredLevel">
                        <SelectValue placeholder="Pilih level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Pemula (A1)</SelectItem>
                        <SelectItem value="elementary">Dasar (A2)</SelectItem>
                        <SelectItem value="intermediate">Menengah (B1)</SelectItem>
                        <SelectItem value="upper_intermediate">Menengah Atas (B2)</SelectItem>
                        <SelectItem value="advanced">Mahir (C1)</SelectItem>
                        <SelectItem value="proficient">Sangat Mahir (C2)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-purple-600 hover:bg-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
