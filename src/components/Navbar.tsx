
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

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
    // If we're on the homepage, scroll to the section
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      window.location.href = `/#${id}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
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
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-ume-purple via-ume-pink to-ume-yellow text-transparent bg-clip-text">
              Ume
            </Link>
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
            <Link to="/blog" className="text-gray-700 hover:text-ume-purple transition-colors">
              Blog
            </Link>
            <button 
              onClick={() => {
                scrollToSection('cta');
                // If we had PostHog tracking, we'd add it here
                // posthog.capture('download_clicked');
              }}
              className="px-4 py-2 bg-ume-purple hover:bg-ume-purple/90 text-white rounded-full transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ume-purple/50"
              aria-label="Get early access to Ume Translator"
            >
              Try it Free
            </button>
          </nav>
          
          <button 
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-ume-purple/50 rounded-md p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
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
              <Link to="/blog" className="text-gray-700 hover:text-ume-purple transition-colors py-2">
                Blog
              </Link>
              <button 
                onClick={() => {
                  scrollToSection('cta');
                  // If we had PostHog tracking, we'd add it here
                  // posthog.capture('download_clicked');
                }}
                className="px-4 py-2 bg-ume-purple hover:bg-ume-purple/90 text-white rounded-full transition-all"
                aria-label="Get early access to Ume Translator"
              >
                Try it Free
              </button>
            </div>
          </div>
        )}
      </header>
      
      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-40 flex justify-center px-4">
        <button 
          onClick={() => scrollToSection('cta')}
          className="px-6 py-3 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full font-medium shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ume-purple/50"
        >
          Try it Free – Decode Your Texts Now
        </button>
      </div>
    </>
  );
};

export default Navbar;
