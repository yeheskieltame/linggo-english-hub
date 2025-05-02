
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-linggo-dark text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
                <span className="text-linggo-primary font-display font-bold text-xl">L</span>
              </div>
              <span className="font-display font-semibold text-xl text-white">
                Linggo<span className="text-linggo-secondary">ID</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-300">
              Unlock fluent English communication with personalized learning.
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Learning</h3>
            <ul className="space-y-2">
              <li><Link to="/lessons" className="text-gray-300 hover:text-white transition-colors">Lesson Library</Link></li>
              <li><Link to="/practice" className="text-gray-300 hover:text-white transition-colors">Practice Speaking</Link></li>
              <li><Link to="/vocabulary" className="text-gray-300 hover:text-white transition-colors">Vocabulary</Link></li>
              <li><Link to="/grammar" className="text-gray-300 hover:text-white transition-colors">Grammar Rules</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} LinggoID. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
            <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
            <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
