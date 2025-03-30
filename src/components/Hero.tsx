
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
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-periwinkle/20 rounded-full blur-3xl parallax-element"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-dogwood_rose/20 rounded-full blur-3xl parallax-element"></div>
      <div className="absolute bottom-20 left-40 w-60 h-60 bg-mikado_yellow/20 rounded-full blur-3xl parallax-element"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-8 max-w-xl">
            {/* Pain Points */}
            <div className="inline-block bg-periwinkle/10 text-periwinkle px-4 py-1 rounded-full text-sm font-medium animate-fade-in">
              Let's be honest. We've all faced:
            </div>
            
            <ul className="text-gray-600 text-lg space-y-2">
              <li>😖 That awkward "K" that leaves you spiraling—<em>"Are they mad or just busy?"</em></li>
              <li>😡 A flirty "Hey cutie" that gets a flat "lol ok"—<em>total vibe killer.</em></li>
              <li>🤔 "I'm fine" staring you down—<em>what did I do wrong this time?</em></li>
            </ul>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in mt-4">
              Ume Translator: <span className="bg-gradient-to-r from-periwinkle via-dogwood_rose to-mikado_yellow text-transparent bg-clip-text">The Only App That Decodes Texts AND Flirts for You</span>
            </h1>
            
            {/* Solution */}
            <p className="text-xl text-gray-600 animate-fade-in-delayed mt-4">
              Ume reads your texts, figures out what they mean, and helps you reply with sass and smarts.
            </p>
            
            <ul className="text-gray-600 text-lg space-y-2">
              <li>💬 Decode their cryptic replies with smarts that <em>gets it</em>.</li>
              <li>😎 Flirt like a pro with sass, zero awkwardness.</li>
              <li>❤️ Understand your partner—no more guessing games.</li>
            </ul>
            
            {/* Data to support */}
            <p className="text-gray-600 text-base mt-4">
              Pew Research: 51% of guys and 49% of gals misinterpret texts daily. Sound familiar? Texting matters—80% of relationships hinge on it. Ume bridges the women-vs-men texting gap.
            </p>
            
            {/* Clarity before CTA */}
            <p className="text-lg text-gray-600 mt-4">
              <strong>Who's it for?</strong> Anyone texting a partner, crush, or fling.<br />
              <strong>What is it?</strong> A free app that decodes messages and suggests replies.<br />
              <strong>Why you need it?</strong> Stop guessing, start connecting—80% of relationships depend on texting!
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
              <button 
                onClick={() => {
                  scrollToSection('cta');
                  // Track click with PostHog when implemented
                  if (typeof window !== 'undefined' && (window as any).posthog) {
                    (window as any).posthog.capture('download_clicked');
                  }
                }}
                className="px-8 py-4 bg-periwinkle hover:bg-periwinkle/90 text-white rounded-full font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-periwinkle/50 shadow-lg"
              >
                Try it Free – Decode Your Texts Now
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
                {/* App interface mockup with interactive demo */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-inner">
                  {/* App header */}
                  <div className="bg-periwinkle p-4 text-white text-center">
                    <div className="text-lg font-semibold">Try Ume Live!</div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-6 space-y-4">
                    <div className="flex gap-3">
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-200 rounded-2xl p-3 max-w-[80%] text-gray-700">
                        "K"
                      </div>
                    </div>
                    
                    <div className="flex gap-3 justify-end">
                      <div className="bg-periwinkle/80 rounded-2xl p-3 max-w-[80%] text-white">
                        Ume Translator: "They're just busy, not mad. Reply with 'Miss you!'"
                      </div>
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-200 rounded-2xl p-3 max-w-[80%] text-gray-700">
                        "I'm fine"
                      </div>
                    </div>
                    
                    <div className="mt-6 p-3 bg-gray-100 rounded-xl">
                      <div className="text-xs text-gray-400 mb-2">Ume Translation:</div>
                      <div className="w-full text-periwinkle">
                        "They're upset. Try 'Wanna talk about it?'"
                      </div>
                    </div>
                  </div>
                  
                  {/* App input */}
                  <div className="p-4 border-t border-gray-200 flex">
                    <input type="text" className="flex-1 bg-gray-200 h-10 rounded-full px-4" placeholder="Type a message like 'I'm fine'"/>
                    <button className="ml-2 w-10 h-10 bg-periwinkle rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-mikado_yellow rounded-2xl rotate-12 shadow-lg z-0 parallax-element animate-float"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-dogwood_rose rounded-2xl -rotate-12 shadow-lg z-0 parallax-element animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
