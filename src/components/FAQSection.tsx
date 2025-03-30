
import React from 'react';
import { CheckCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-ume-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Got Doubts? We've Got Answers</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">"Will it really understand my partner?"</h3>
              <p className="text-gray-600 flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-ume-purple flex-shrink-0" />
                <span>Yes! Ume's trained on millions of texts. It catches nuances others miss.</span>
              </p>
            </div>
            
            <div className="glass-card p-6 transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">"Is it worth downloading?"</h3>
              <p className="text-gray-600 flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-ume-purple flex-shrink-0" />
                <span>Totally free to try—no risk, all reward. See the difference in one convo!</span>
              </p>
            </div>
            
            <div className="glass-card p-6 transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">"What if I'm bad at flirting?"</h3>
              <p className="text-gray-600 flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-ume-purple flex-shrink-0" />
                <span>Ume gives you sassy, flirty suggestions that feel like <em>you</em>, only better.</span>
              </p>
            </div>
            
            <div className="glass-card p-6 transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">"How accurate is it?"</h3>
              <p className="text-gray-600 flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-ume-purple flex-shrink-0" />
                <span>Our testers report 87% accuracy in decoding text meanings. That's better than most humans!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
