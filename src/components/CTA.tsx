
import React, { useState } from 'react';
import Modal from './Modal';

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setIsModalOpen(false);
    }, 3000);
  };
  
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ume-purple/10 to-ume-pink/10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 transition-all hover:shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Guessing, Start Connecting—Try Ume Now!
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of users who are decoding texts and transforming their relationships.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ume-pink/50"
            >
              Try Free
            </button>
            
            <div className="text-center mt-4">
              <p className="text-gray-500">
                Follow us on social media <a href="#" className="text-ume-purple hover:underline">@UmeTranslator</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => !isSubmitted && setIsModalOpen(false)}>
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-medium text-gray-800 mb-2">Thank You!</h4>
            <p className="text-gray-600">
              We'll notify you as soon as Ume is ready to launch. Get ready to transform your texting game!
            </p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Be the first to know when Ume Translator launches. Sign up for early access and exclusive perks!
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ume-purple focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-ume-purple to-ume-pink text-white py-3 rounded-lg transition-all transform hover:scale-[1.01] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ume-purple/50"
              >
                Get Early Access
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy and will never share your information.
            </p>
          </>
        )}
      </Modal>
    </section>
  );
};

export default CTA;
