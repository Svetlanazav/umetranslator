
import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
          <div className="md:w-1/2 space-y-6 max-w-xl">
            {/* Tag */}
            <div className="inline-block bg-ume-purple/10 text-ume-purple px-4 py-1 rounded-full text-sm font-medium animate-fade-in">
              Let's be honest. We've all faced:
            </div>
            
            {/* Pain Points */}
            <ul className="text-gray-600 text-lg space-y-2 animate-fade-in">
              <li className="flex items-start gap-2">
                <span className="text-xl">😖</span>
                <span>That awkward "K" that leaves you spiraling—<em>Are they mad or just busy?</em></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">😡</span>
                <span>A flirty "Hey cutie" that gets a flat "lol ok"—<em>total vibe killer.</em></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">🤔</span>
                <span>"I'm fine" staring you down—<em>what did I do wrong this time?</em></span>
              </li>
            </ul>
            
            {/* Headline - Updated as requested */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Ume Translator: <span className="bg-gradient-to-r from-ume-purple via-ume-pink to-ume-yellow text-transparent bg-clip-text">Fixes That Mess</span>
            </h1>
            
            {/* New subheadline */}
            <p className="text-xl text-gray-700 animate-fade-in-delayed">
              The Only App That Decodes Texts AND Flirts for You!
            </p>
            
            {/* Statistics section */}
            <div className="bg-white/70 p-5 rounded-xl shadow-sm border border-gray-100 animate-fade-in-delayed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-ume-purple">51% / 49%</span>
                  <p className="text-gray-600 text-sm">guys vs gals misinterpret texts daily</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-ume-pink">80%</span>
                  <p className="text-gray-600 text-sm">of relationships hinge on texting</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-ume-yellow">68%</span>
                  <p className="text-gray-600 text-sm">of texters misread 'LOL'</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-ume-purple">53%</span>
                  <p className="text-gray-600 text-sm">overthink 'What's up?'</p>
                </div>
              </div>
            </div>
            
            {/* And we can all do better */}
            <p className="text-xl text-gray-600 animate-fade-in-delayed">
              And we can all do better with text:
            </p>
            
            <ul className="text-gray-600 text-lg space-y-2 animate-fade-in-delayed">
              <li className="flex items-start gap-2">
                <span>💬</span>
                <span>Decode their cryptic replies with AI that <em>gets it</em>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>😎</span>
                <span>Flirt like a pro with sass, zero cringe.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>❤️</span>
                <span>Understand your partner—no guesswork needed.</span>
              </li>
            </ul>
            
            {/* Clarify Who/What/Why */}
            <div className="bg-gray-50 p-4 rounded-lg animate-fade-in-delayed">
              <p className="text-gray-700">
                <strong>Who's it for?</strong> Anyone texting a partner, crush, or fling.<br />
                <strong>What is it?</strong> A free app that decodes messages and suggests replies.<br />
                <strong>Why you need it?</strong> Stop guessing, start connecting—80% of relationships depend on texting!
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-ume-purple hover:bg-ume-purple/90 text-white rounded-full font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ume-purple/50 shadow-lg"
              >
                Try it Free – Decode Your Texts Now
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('features');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 rounded-full font-medium transition-all border border-gray-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right side - Try Ume Live component */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Phone mockup */}
              <div className="glass-card p-8 rounded-3xl shadow-xl animate-float parallax-element">
                {/* App interface mockup */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-inner">
                  {/* App header */}
                  <div className="bg-ume-purple p-4 text-white text-center">
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
                      <div className="bg-ume-purple/80 rounded-2xl p-3 max-w-[80%] text-white">
                        Ume Translator: "They're just busy, not mad. Reply with 'Miss you!'"
                      </div>
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                    </div>
                    
                    <div className="mt-6 p-3 bg-gray-100 rounded-xl">
                      <div className="text-xs text-gray-400 mb-2">Try it yourself:</div>
                      <input type="text" placeholder="Type 'I'm fine'" className="w-full p-2 mb-2 border rounded-lg" />
                      <button 
                        onClick={(e) => {
                          const parent = e.currentTarget.parentElement;
                          const result = parent?.querySelector('.translation-result');
                          if (result) {
                            result.classList.remove('hidden');
                          }
                        }}
                        className="w-full bg-ume-purple text-white py-2 rounded-lg"
                      >
                        Translate It
                      </button>
                      <div className="translation-result hidden mt-3 bg-ume-purple/80 text-white p-3 rounded-lg">
                        Ume: "They're upset. Try 'Wanna talk about it?'"
                      </div>
                    </div>
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

      {/* Modal for "Try it Free" button */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-ume-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-bold mb-2">We're Launching Soon!</h3>
          <p className="text-gray-600 mb-4">
            Ume is currently in final development. Sign up to be the first to know when we launch!
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 border border-gray-300 rounded-lg mb-3"
              required
            />
            <button
              type="submit"
              className="w-full bg-ume-purple text-white py-3 rounded-lg hover:bg-ume-purple/90 transition-colors"
            >
              Notify Me
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
