
import React, { useEffect, useRef } from 'react';

const FounderStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const elements = container.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Check if element is in viewport
        if (
          elementTop < window.innerHeight - 100 &&
          elementBottom > 0
        ) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    // Trigger once on load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="story" ref={containerRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="animate-on-scroll opacity-0">
                <div className="inline-block bg-ume-yellow/10 text-ume-yellow px-4 py-1 rounded-full text-sm font-medium">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  The Text Mess That Sparked a Love Fix
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    It all started with a message—"K."
                  </p>
                  <p>
                    Those infamous one-letter texts that can mean anything from "cool" to "I'm planning your demise." Our founder, Alex, had just sent a heartfelt paragraph to their crush, only to receive that dreaded single letter in response.
                  </p>
                  <p>
                    After three days of overanalyzing (and possibly a few tearful calls to friends), Alex realized there had to be a better way. If only there was an app that could decode the true meaning behind cryptic texts...
                  </p>
                  <p>
                    And thus, Ume was born—a fusion of cutting-edge AI and the collective wisdom of thousands of relationship experts, linguists, and people who've been ghosted one too many times.
                  </p>
                  <p className="font-medium text-gray-800">
                    Now we're on a mission to eliminate communication confusion, one text at a time.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-ume-yellow/30 to-ume-pink/30 overflow-hidden shadow-lg p-8 flex items-center justify-center">
                  <div className="glass-card p-8 max-w-xs rotate-3 shadow-xl">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0"></div>
                      <div className="bg-white rounded-2xl p-4 shadow-sm">
                        <p className="text-sm text-gray-800">Hey, I had a really great time tonight. You're amazing and I'd love to see you again soon! 💫</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-ume-purple/80 text-white rounded-2xl p-4 shadow-sm">
                        <p className="text-sm">K</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0"></div>
                    </div>
                    
                    <div className="mt-6 bg-red-50 p-4 rounded-xl border border-red-100">
                      <p className="text-xs text-gray-500 mb-1">Ume Translation:</p>
                      <p className="text-sm text-gray-800 font-medium">Either they're busy, not interested, or their phone fell in the toilet. Best to wait 24hrs before panicking.</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-ume-purple rounded-xl rotate-12 shadow-lg z-0"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-ume-pink rounded-xl -rotate-12 shadow-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
