
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-ume-deep-blue-600/10 text-ume-deep-blue-700 px-4 py-1 rounded-full text-sm font-medium">
              Social Proof
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Thousands Are Decoding Their Way to Love Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the text revolution that's changing how we communicate in relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 text-center animate-fade-in">
              <div className="text-5xl font-bold bg-gradient-to-r from-ume-deep-blue-600 to-ume-ocean-blue-500 text-transparent bg-clip-text mb-4">
                78%
              </div>
              <p className="text-lg text-gray-600">
                <span className="font-medium">of people misinterpret text messages</span> at least once a week, according to a recent Pew Research study.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-1 w-20 bg-gradient-to-r from-ume-deep-blue-600 to-ume-ocean-blue-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-delayed">
              <div className="glass-card p-8 shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-ume-ocean-blue-500/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ume-ocean-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Emily, 28</div>
                    <div className="text-sm text-gray-500">Dating app user</div>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 italic">
                  "Ume helped me realize my crush was actually flirting with me for WEEKS and I had no idea. We just celebrated our 3-month anniversary, and I'm convinced we wouldn't be together without this app!"
                </blockquote>
                
                <div className="mt-6 flex">
                  <div className="flex text-ume-energetic-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative quotes */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-ume-deep-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-serif">
                "
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-ume-ocean-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-serif rotate-180">
                "
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
