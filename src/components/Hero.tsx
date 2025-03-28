
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = hero.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      // Apply parallax effect to child elements
      const children = hero.querySelectorAll('.parallax-element');
      children.forEach((child, index) => {
        const factor = (index + 1) * 10;
        if (child instanceof HTMLElement) {
          child.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section 
      ref={heroRef}
      className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-ume-purple/20 rounded-full blur-3xl parallax-element"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-ume-pink/20 rounded-full blur-3xl parallax-element"></div>
      <div className="absolute bottom-20 left-40 w-60 h-60 bg-ume-yellow/20 rounded-full blur-3xl parallax-element"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-8 max-w-xl">
            {/* Tag */}
            <div className="inline-block bg-ume-purple/10 text-ume-purple px-4 py-1 rounded-full text-sm font-medium animate-fade-in">
              Say goodbye to texting confusion
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Ume Translator: <span className="bg-gradient-to-r from-ume-purple via-ume-pink to-ume-yellow text-transparent bg-clip-text">Decode Texts, Flirt Like a Pro</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-600 animate-fade-in-delayed">
              The AI-powered app that turns relationship confusion into clarity, laughter, and a dash of sass.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
              <button 
                onClick={() => scrollToSection('cta')}
                className="px-8 py-4 bg-ume-purple hover:bg-ume-purple/90 text-white rounded-full font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ume-purple/50 shadow-lg"
              >
                Download Now
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 rounded-full font-medium transition-all border border-gray-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Phone mockup */}
              <div className="glass-card p-8 rounded-3xl shadow-xl animate-float parallax-element">
                {/* App interface mockup */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-inner">
                  {/* App header */}
                  <div className="bg-ume-purple p-4 text-white text-center">
                    <div className="text-lg font-semibold">Ume Translator</div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-6 space-y-4">
                    <div className="flex gap-3">
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-200 rounded-2xl p-3 max-w-[80%]">
                        <div className="w-32 h-4 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 justify-end">
                      <div className="bg-ume-purple/80 rounded-2xl p-3 max-w-[80%]">
                        <div className="w-40 h-4 bg-ume-purple rounded"></div>
                      </div>
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-200 rounded-2xl p-3 max-w-[80%]">
                        <div className="w-48 h-4 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-3 bg-gray-100 rounded-xl">
                      <div className="text-xs text-gray-400 mb-2">Ume Translation:</div>
                      <div className="w-full h-12 bg-gray-300 rounded animate-pulse-light"></div>
                    </div>
                  </div>
                  
                  {/* App input */}
                  <div className="p-4 border-t border-gray-200 flex">
                    <div className="flex-1 bg-gray-200 h-10 rounded-full"></div>
                    <button className="ml-2 w-10 h-10 bg-ume-purple rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-ume-yellow rounded-2xl rotate-12 shadow-lg z-0 parallax-element animate-float"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-ume-pink rounded-2xl -rotate-12 shadow-lg z-0 parallax-element animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
