
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExampleSection: React.FC = () => {
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
    <section className="py-24 bg-gradient-to-br from-white to-ume-purple/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-60 h-60 bg-ume-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-ume-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-ume-purple/10 text-ume-purple px-4 py-1 rounded-full text-sm font-medium">
              Real Message Examples
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Text Decodes That'll Save Your Love Life (and Make You LOL)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wondering what your partner really means? Ume Translator turns cryptic texts into clarity, flirtation, and straight-up sass. Check these out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example 1: The Milk Mishap */}
            <Card className="glass-card overflow-hidden transform transition-all hover:scale-[1.02] shadow-lg">
              <div className="bg-ume-purple/20 p-4">
                <h3 className="font-bold text-lg text-gray-800">The Milk Mishap</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-200 rounded-2xl p-3 max-w-[90%]">
                    <p className="text-gray-700">"You forgot the milk again"</p>
                  </div>
                </div>
                
                <div className="flex justify-center my-4">
                  <ArrowDown className="text-ume-purple animate-bounce" />
                </div>
                
                <div className="bg-ume-purple/10 rounded-xl p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">Ume Decode:</div>
                  <div className="font-medium text-ume-purple">
                    Woman-to-Man: "She's low-key mad you're not her dairy hero—step it up, champ!"
                  </div>
                </div>
                
                <div className="flex gap-3 items-center mt-6">
                  <div className="w-10 h-10 rounded-full bg-ume-pink/20 flex items-center justify-center">
                    <MessageSquare size={18} className="text-ume-pink" />
                  </div>
                  <p className="text-sm text-gray-600">A playful reminder that small errands = big brownie points</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Example 2: The Date Check */}
            <Card className="glass-card overflow-hidden transform transition-all hover:scale-[1.02] shadow-lg">
              <div className="bg-ume-pink/20 p-4">
                <h3 className="font-bold text-lg text-gray-800">The Date Check</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-200 rounded-2xl p-3 max-w-[90%]">
                    <p className="text-gray-700">"Are we still on for tonight?"</p>
                  </div>
                </div>
                
                <div className="flex justify-center my-4">
                  <ArrowDown className="text-ume-pink animate-bounce" />
                </div>
                
                <div className="bg-ume-pink/10 rounded-xl p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">Ume Decode:</div>
                  <div className="font-medium text-ume-pink">
                    Man-to-Woman: "He's checking if you're still into him—don't leave him hanging!"
                  </div>
                </div>
                
                <div className="flex gap-3 items-center mt-6">
                  <div className="w-10 h-10 rounded-full bg-ume-purple/20 flex items-center justify-center">
                    <MessageSquare size={18} className="text-ume-purple" />
                  </div>
                  <p className="text-sm text-gray-600">A before/after bubble—raw text vs. Ume's Decode glow-up</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Example 3: The Tired Hint */}
            <Card className="glass-card overflow-hidden transform transition-all hover:scale-[1.02] shadow-lg">
              <div className="bg-ume-yellow/20 p-4">
                <h3 className="font-bold text-lg text-gray-800">The Tired Hint</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-200 rounded-2xl p-3 max-w-[90%]">
                    <p className="text-gray-700">"I'm kinda too tired today to go out"</p>
                  </div>
                </div>
                
                <div className="flex justify-center my-4">
                  <ArrowDown className="text-ume-yellow animate-bounce" />
                </div>
                
                <div className="bg-ume-yellow/10 rounded-xl p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">Flirt Style Transform:</div>
                  <div className="font-medium text-gray-700">
                    "I'm dreaming of a cozy night with you—wanna join?"
                  </div>
                </div>
                
                <div className="flex gap-3 items-center mt-6">
                  <div className="w-10 h-10 rounded-full bg-ume-yellow/30 flex items-center justify-center">
                    <span className="text-lg">😴</span>
                  </div>
                  <p className="text-sm text-gray-600">A cozy vibe paired with Ume's cheeky output</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Example 4: The Outfit Panic */}
            <Card className="glass-card overflow-hidden transform transition-all hover:scale-[1.02] shadow-lg">
              <div className="bg-ume-purple/20 p-4">
                <h3 className="font-bold text-lg text-gray-800">The Outfit Panic</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-200 rounded-2xl p-3 max-w-[90%]">
                    <p className="text-gray-700">"Do I look okay in this?"</p>
                  </div>
                </div>
                
                <div className="flex justify-center my-4">
                  <ArrowDown className="text-ume-purple animate-bounce" />
                </div>
                
                <div className="space-y-3">
                  <div className="bg-ume-pink/10 rounded-xl p-3">
                    <div className="text-xs text-gray-500 mb-1">Context 1: Glow-Up Check</div>
                    <div className="font-medium text-sm text-ume-pink">
                      "She's begging for a hype—hit her with, 'Girl, you're serving looks!'"
                    </div>
                  </div>
                  
                  <div className="bg-ume-purple/10 rounded-xl p-3">
                    <div className="text-xs text-gray-500 mb-1">Context 2: Freak-Out Mode</div>
                    <div className="font-medium text-sm text-ume-purple">
                      "She's spiraling over sequins—say, 'You're slaying, babe, own it!'"
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 items-center mt-6">
                  <div className="w-10 h-10 rounded-full bg-ume-pink/20 flex items-center justify-center">
                    <span className="text-lg">👗</span>
                  </div>
                  <p className="text-sm text-gray-600">A mini wardrobe scene with Ume's multi-angle breakdown</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Example 5: The Rain Check */}
            <Card className="glass-card overflow-hidden transform transition-all hover:scale-[1.02] shadow-lg">
              <div className="bg-ume-pink/20 p-4">
                <h3 className="font-bold text-lg text-gray-800">The Rain Check</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-200 rounded-2xl p-3 max-w-[90%]">
                    <p className="text-gray-700">"I'm swamped today—rain check?"</p>
                  </div>
                </div>
                
                <div className="flex justify-center my-4">
                  <ArrowDown className="text-ume-pink animate-bounce" />
                </div>
                
                <div className="space-y-3">
                  <div className="bg-ume-purple/10 rounded-xl p-3">
                    <div className="text-xs text-gray-500 mb-1">Man-to-Woman:</div>
                    <div className="font-medium text-sm text-ume-purple">
                      "He's drowning in work, not ditching you—chill, queen!"
                    </div>
                  </div>
                  
                  <div className="bg-ume-pink/10 rounded-xl p-3">
                    <div className="text-xs text-gray-500 mb-1">Flirt Style Version:</div>
                    <div className="font-medium text-sm text-ume-pink">
                      "I'm tangled in chaos, but I'd untangle the world for a night with you!"
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 items-center mt-6">
                  <div className="w-10 h-10 rounded-full bg-ume-purple/20 flex items-center justify-center">
                    <span className="text-lg">📅</span>
                  </div>
                  <p className="text-sm text-gray-600">A chaotic desk vs. Ume's smooth translation</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Call to Action Card */}
            <Card className="md:col-span-2 lg:col-span-3 glass-card overflow-hidden transform transition-all shadow-lg bg-gradient-to-r from-ume-purple/20 via-ume-pink/20 to-ume-yellow/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to decode your own texts?</h3>
                <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
                  Scroll up and snag Ume Translator—your love life's about to get a whole lot spicier!
                </p>
                <Button 
                  onClick={() => scrollToSection('cta')}
                  className="bg-ume-purple hover:bg-ume-purple/90 text-white px-8 py-6 rounded-full font-medium transition-all transform hover:scale-105"
                  size="lg"
                >
                  Download Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
