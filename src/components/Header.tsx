
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, MessageCircle, BarChart, Headphones, BookText, Mic, Info } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Function to check if a path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
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
            to="/" 
            className={`font-medium transition-colors flex items-center gap-1 ${
              isActive('/') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Beranda</span>
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
          <div className="relative group">
            <div className={`font-medium cursor-pointer flex items-center gap-1 ${
              isActive('/listening') || isActive('/reading') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
            }`}>
              <Headphones className="h-4 w-4" />
              <span>Latihan Pemahaman</span>
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top z-50">
              <Link 
                to="/listening/listen-1" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Listening (Mendengarkan)
              </Link>
              <Link 
                to="/reading/read-1" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Reading (Membaca)
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className={`font-medium cursor-pointer flex items-center gap-1 ${
              isActive('/practice') || isActive('/conversation') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
            }`}>
              <Mic className="h-4 w-4" />
              <span>Latihan Berbicara</span>
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top z-50">
              <Link 
                to="/practice" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Speaking (Berbicara)
              </Link>
              <Link 
                to="/conversation" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Conversation (Percakapan)
              </Link>
            </div>
          </div>
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
            to="/dashboard" 
            className={`font-medium transition-colors flex items-center gap-1 ${
              isActive('/dashboard') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
            }`}
          >
            <BarChart className="h-4 w-4" />
            <span>Progres Saya</span>
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
          <Button variant="outline" className="font-medium">
            Masuk
          </Button>
          <Button className="font-medium">Daftar</Button>
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
              to="/" 
              className={`font-medium flex items-center gap-2 ${
                isActive('/') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="h-4 w-4" />
              <span>Beranda</span>
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
            
            <div className="pl-2 border-l-2 border-gray-200 ml-1">
              <p className="font-medium text-gray-500 text-sm mb-2">Latihan Pemahaman:</p>
              <Link 
                to="/listening/listen-1" 
                className={`font-medium flex items-center gap-2 mb-2 ${
                  isActive('/listening') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Headphones className="h-4 w-4" />
                <span>Listening (Mendengarkan)</span>
              </Link>
              <Link 
                to="/reading/read-1" 
                className={`font-medium flex items-center gap-2 ${
                  isActive('/reading') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <BookText className="h-4 w-4" />
                <span>Reading (Membaca)</span>
              </Link>
            </div>
            
            <div className="pl-2 border-l-2 border-gray-200 ml-1">
              <p className="font-medium text-gray-500 text-sm mb-2">Latihan Berbicara:</p>
              <Link 
                to="/practice" 
                className={`font-medium flex items-center gap-2 mb-2 ${
                  isActive('/practice') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Mic className="h-4 w-4" />
                <span>Speaking (Berbicara)</span>
              </Link>
              <Link 
                to="/conversation" 
                className={`font-medium flex items-center gap-2 ${
                  isActive('/conversation') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                <span>Conversation (Percakapan)</span>
              </Link>
            </div>
            
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
              to="/dashboard" 
              className={`font-medium flex items-center gap-2 ${
                isActive('/dashboard') ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <BarChart className="h-4 w-4" />
              <span>Progres Saya</span>
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
            <div className="pt-2 flex flex-col gap-2">
              <Button variant="outline" className="w-full font-medium">
                Masuk
              </Button>
              <Button className="w-full font-medium">
                Daftar
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
