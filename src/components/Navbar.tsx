
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-ume-purple via-ume-pink to-ume-yellow text-transparent bg-clip-text">
            Ume
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-ume-purple transition-colors">
            Features
          </button>
          <button onClick={() => scrollToSection('who-its-for')} className="text-gray-700 hover:text-ume-purple transition-colors">
            Who It's For
          </button>
          <button onClick={() => scrollToSection('story')} className="text-gray-700 hover:text-ume-purple transition-colors">
            Our Story
          </button>
          <button 
            onClick={() => scrollToSection('cta')}
            className="px-4 py-2 bg-ume-purple hover:bg-ume-purple/90 text-white rounded-full transition-all transform hover:scale-105"
          >
            Download Now
          </button>
        </nav>
        
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-scale">
          <div className="flex flex-col space-y-4 p-4">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-ume-purple transition-colors py-2">
              Features
            </button>
            <button onClick={() => scrollToSection('who-its-for')} className="text-gray-700 hover:text-ume-purple transition-colors py-2">
              Who It's For
            </button>
            <button onClick={() => scrollToSection('story')} className="text-gray-700 hover:text-ume-purple transition-colors py-2">
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="px-4 py-2 bg-ume-purple hover:bg-ume-purple/90 text-white rounded-full transition-all"
            >
              Download Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
