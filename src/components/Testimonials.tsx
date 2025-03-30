
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-floral_white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">What People Are Saying</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Join thousands who are decoding texts and transforming their relationships
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 shadow-md transform hover:-translate-y-1 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-periwinkle/20 rounded-full flex items-center justify-center text-periwinkle font-bold">
                J
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Jamie, 24</h3>
                <div className="flex text-mikado_yellow">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"Ume turned my 'lol' into a flirty convo that led to a date. Absolute lifesaver!"</p>
          </div>
          
          <div className="glass-card p-6 shadow-md transform hover:-translate-y-1 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-dogwood_rose/20 rounded-full flex items-center justify-center text-dogwood_rose font-bold">
                S
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Sam, 31</h3>
                <div className="flex text-mikado_yellow">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"Finally understand what my girlfriend means when she says 'I'm fine.' Worth every penny. 10/10 would recommend."</p>
          </div>
          
          <div className="glass-card p-6 shadow-md transform hover:-translate-y-1 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-mikado_yellow/20 rounded-full flex items-center justify-center text-mikado_yellow font-bold">
                M
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Morgan, 26</h3>
                <div className="flex text-mikado_yellow">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"Used to overthink every text I sent. Now I just ask Ume and send with confidence. Game changer for my dating life!"</p>
          </div>
        </div>
        
        {/* Case Study Section */}
        <div className="mt-16 max-w-3xl mx-auto glass-card p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">"Ume Saved My Date!"</h3>
          <div className="flex items-start">
            <svg className="w-10 h-10 text-dogwood_rose mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
            </svg>
            <div>
              <p className="text-gray-600 italic mb-4">
                "I texted 'You free tonight?' and got 'Maybe.' Ume told me she was playing coy and suggested 'Only if you say yes first.' She laughed and said yes!"
              </p>
              <p className="font-semibold">– Alex, 28</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
