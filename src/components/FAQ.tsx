
import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-floral_white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Got Doubts? We've Got Answers</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-penn_blue mb-3">"Will it really understand my partner?"</h3>
            <p className="text-gray-600">
              <svg className="inline w-5 h-5 mr-2 text-dogwood_rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Yes! Ume's trained on millions of texts. It catches nuances others miss.
            </p>
          </div>
          
          <div className="glass-card p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-penn_blue mb-3">"Is it worth downloading?"</h3>
            <p className="text-gray-600">
              <svg className="inline w-5 h-5 mr-2 text-dogwood_rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Totally free to try—no risk, all reward. See the difference in one convo!
            </p>
          </div>
          
          <div className="glass-card p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-penn_blue mb-3">"What if I'm bad at flirting?"</h3>
            <p className="text-gray-600">
              <svg className="inline w-5 h-5 mr-2 text-dogwood_rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Ume gives you sassy, flirty suggestions that feel like <em>you</em>, only better.
            </p>
          </div>
          
          <div className="glass-card p-6 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-penn_blue mb-3">"Is my data private?"</h3>
            <p className="text-gray-600">
              <svg className="inline w-5 h-5 mr-2 text-dogwood_rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              100%. Your messages stay on your device. We never share or sell your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
