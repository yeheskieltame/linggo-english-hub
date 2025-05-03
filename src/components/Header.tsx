
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link to="/" className="font-medium text-gray-800 hover:text-purple-600 transition-colors">
            Home
          </Link>
          <Link to="/lessons" className="font-medium text-gray-800 hover:text-purple-600 transition-colors">
            Lessons
          </Link>
          <Link to="/conversation" className="font-medium text-gray-800 hover:text-purple-600 transition-colors">
            Conversation
          </Link>
          <Link to="/dashboard" className="font-medium text-gray-800 hover:text-purple-600 transition-colors">
            Dashboard
          </Link>
          <Link to="/about" className="font-medium text-gray-800 hover:text-purple-600 transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="font-medium">
            Sign In
          </Button>
          <Button className="font-medium">Get Started</Button>
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
              className="font-medium text-gray-800 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/lessons" 
              className="font-medium text-gray-800 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Lessons
            </Link>
            <Link 
              to="/conversation" 
              className="font-medium text-gray-800 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Conversation
            </Link>
            <Link 
              to="/dashboard" 
              className="font-medium text-gray-800 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-800 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <Button variant="outline" className="w-full font-medium">
                Sign In
              </Button>
              <Button className="w-full font-medium">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
