
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Modal from './Modal';

const ExampleSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example 1: The "Fine" Fake-Out */}
            <Card className="glass-card overflow-hidden transform transition-all hover:scale-[1.02] shadow-lg">
              <div className="bg-ume-purple/20 p-4">
                <h3 className="font-bold text-lg text-gray-800">The "Fine" Fake-Out</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-200 rounded-2xl p-3 max-w-[90%]">
                    <p className="text-gray-700">"I'm fine"</p>
                  </div>
                </div>
                
                <div className="flex justify-center my-4">
                  <ArrowDown className="text-ume-purple animate-bounce" />
                </div>
                
                <div className="space-y-3">
                  <div className="bg-ume-purple/10 rounded-xl p-3">
                    <div className="text-xs text-gray-500 mb-1">Man-to-Woman:</div>
                    <div className="font-medium text-sm text-ume-purple">
                      "She's not fine—ask 'Wanna talk, babe?'"
                    </div>
                  </div>
                  
                  <div className="bg-ume-pink/10 rounded-xl p-3">
                    <div className="text-xs text-gray-500 mb-1">Woman-to-Man:</div>
                    <div className="font-medium text-sm text-ume-pink">
                      "He's hiding—say 'Spill it, tough guy!'"
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 items-center mt-6">
                  <div className="w-10 h-10 rounded-full bg-ume-purple/20 flex items-center justify-center">
                    <span className="text-lg">🧐</span>
                  </div>
                  <p className="text-sm text-gray-600">Left: A "fine" bubble with skepticism. Right: Ume's actual decode.</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Example 2: The "Busy Bee" */}
            <Card className="glass-card overflow-hidden transform transition-all hover:scale-[1.02] shadow-lg">
              <div className="bg-ume-pink/20 p-4">
                <h3 className="font-bold text-lg text-gray-800">The "Busy Bee"</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-200 rounded-2xl p-3 max-w-[90%]">
                    <p className="text-gray-700">"Busy week, ttyl"</p>
                  </div>
                </div>
                
                <div className="flex justify-center my-4">
                  <ArrowDown className="text-ume-pink animate-bounce" />
                </div>
                
                <div className="bg-ume-pink/10 rounded-xl p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">Man-to-Woman:</div>
                  <div className="font-medium text-ume-pink">
                    "He's dodging—try 'Too busy to miss me?'"
                  </div>
                </div>
                
                <div className="flex gap-3 items-center mt-6">
                  <div className="w-10 h-10 rounded-full bg-ume-yellow/30 flex items-center justify-center">
                    <span className="text-lg">🐝</span>
                  </div>
                  <p className="text-sm text-gray-600">A busy bee buzzing off vs. Ume's sly suggestion</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Example 3: Make it Flirt */}
            <Card className="glass-card overflow-hidden transform transition-all hover:scale-[1.02] shadow-lg">
              <div className="bg-ume-yellow/20 p-4">
                <h3 className="font-bold text-lg text-gray-800">Make it Flirt</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-200 rounded-2xl p-3 max-w-[90%]">
                    <p className="text-gray-700">"Wanna grab coffee sometime"</p>
                  </div>
                </div>
                
                <div className="flex justify-center my-4">
                  <ArrowDown className="text-ume-yellow animate-bounce" />
                </div>
                
                <div className="bg-ume-yellow/10 rounded-xl p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">Flirt Style Transform:</div>
                  <div className="font-medium text-gray-700">
                    "How about coffee and some steamy eye contact—when's my VIP slot?"
                  </div>
                </div>
                
                <div className="flex gap-3 items-center mt-6">
                  <div className="w-10 h-10 rounded-full bg-ume-yellow/30 flex items-center justify-center">
                    <span className="text-lg">😏</span>
                  </div>
                  <p className="text-sm text-gray-600">Light the spark before you see them!</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Call to Action Card */}
            <Card className="md:col-span-3 glass-card overflow-hidden transform transition-all shadow-lg bg-gradient-to-r from-ume-purple/20 via-ume-pink/20 to-ume-yellow/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to decode your own texts?</h3>
                <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
                  Ume Translator is your love life's secret weapon—try it now!
                </p>
                <Button 
                  onClick={() => setIsModalOpen(true)}
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
      
      {/* Modal for CTA buttons */}
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

export default ExampleSection;
