
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, BookOpen, MessageCircle, BarChart, 
  BookText, Info, User, LogOut
} from "lucide-react";
import { useAuth } from '@/providers/AuthProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();
  
  // Function to check if a path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

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

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-linggo-primary flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl">L</span>
          </div>
          <span className="font-display font-semibold text-xl text-linggo-dark">
            inggo<span className="text-linggo-primary">ID</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to={user ? "/dashboard" : "/"} 
            className={`font-medium transition-colors flex items-center gap-1 ${
              isActive('/') || isActive('/dashboard') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>{user ? "Progres Saya" : "Beranda"}</span>
          </Link>
          <Link 
            to="/lessons" 
            className={`font-medium transition-colors flex items-center gap-1 ${
              isActive('/lessons') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
            }`}
          >
            <BookText className="h-4 w-4" />
            <span>Pelajaran</span>
          </Link>
          <Link 
            to="/conversation" 
            className={`font-medium transition-colors flex items-center gap-1 ${
              isActive('/conversation') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            <span>Percakapan</span>
          </Link>
          <Link 
            to="/assessment" 
            className={`font-medium transition-colors flex items-center gap-1 ${
              isActive('/assessment') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
            }`}
          >
            <BarChart className="h-4 w-4" />
            <span>Tes Level</span>
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition-colors flex items-center gap-1 ${
              isActive('/about') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
            }`}
          >
            <Info className="h-4 w-4" />
            <span>Tentang</span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarImage src={profile?.avatar_url || ''} alt={profile?.full_name || ''} />
                    <AvatarFallback className="bg-purple-100 text-purple-800">{getUserInitials()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{profile?.full_name || 'User'}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="w-full cursor-pointer">
                    <BarChart className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Keluar</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" className="font-medium" asChild>
                <Link to="/auth?mode=login">Masuk</Link>
              </Button>
              <Button className="font-medium" asChild>
                <Link to="/auth?mode=register">Daftar</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t absolute w-full">
          <nav className="flex flex-col space-y-4">
            <Link 
              to={user ? "/dashboard" : "/"} 
              className={`font-medium flex items-center gap-2 ${
                isActive('/') || isActive('/dashboard') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="h-4 w-4" />
              <span>{user ? "Progres Saya" : "Beranda"}</span>
            </Link>
            <Link 
              to="/lessons" 
              className={`font-medium flex items-center gap-2 ${
                isActive('/lessons') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <BookText className="h-4 w-4" />
              <span>Pelajaran</span>
            </Link>
            <Link 
              to="/conversation" 
              className={`font-medium flex items-center gap-2 ${
                isActive('/conversation') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="h-4 w-4" />
              <span>Percakapan</span>
            </Link>
            <Link 
              to="/assessment" 
              className={`font-medium flex items-center gap-2 ${
                isActive('/assessment') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <BarChart className="h-4 w-4" />
              <span>Tes Level</span>
            </Link>
            <Link 
              to="/about" 
              className={`font-medium flex items-center gap-2 ${
                isActive('/about') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Info className="h-4 w-4" />
              <span>Tentang</span>
            </Link>

            {user ? (
              <>
                <Link
                  to="/profile"
                  className="font-medium flex items-center gap-2 text-gray-800 hover:text-purple-600"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="font-medium flex items-center gap-2 text-gray-800 hover:text-purple-600"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Keluar</span>
                </button>
              </>
            ) : (
              <div className="pt-2 flex flex-col gap-2">
                <Button variant="outline" className="w-full font-medium" asChild>
                  <Link to="/auth?mode=login" onClick={() => setIsOpen(false)}>
                    Masuk
                  </Link>
                </Button>
                <Button className="w-full font-medium" asChild>
                  <Link to="/auth?mode=register" onClick={() => setIsOpen(false)}>
                    Daftar
                  </Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
