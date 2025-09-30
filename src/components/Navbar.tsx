"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white font-bold text-xl hover:text-purple-400 transition-colors duration-300"
            >
              FeRON
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('solution')}
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              Solution
            </button>
            <button 
              onClick={() => scrollToSection('explore')}
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('whyferon')}
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              Why FeRON
            </button>
            <button 
              onClick={() => scrollToSection('business')}
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              Business Model
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-transparent border border-white text-white font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Contact Us
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-purple-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('solution')}
                className="text-white hover:text-purple-400 transition-colors duration-300 text-left"
              >
                Solution
              </button>
              <button 
                onClick={() => scrollToSection('explore')}
                className="text-white hover:text-purple-400 transition-colors duration-300 text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('whyferon')}
                className="text-white hover:text-purple-400 transition-colors duration-300 text-left"
              >
                Why FeRON
              </button>
              <button 
                onClick={() => scrollToSection('business')}
                className="text-white hover:text-purple-400 transition-colors duration-300 text-left"
              >
                Business Model
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-purple-400 transition-colors duration-300 text-left"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
