
import React, { useState } from 'react';
import Modal from './Modal';

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    
    // Track with PostHog
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('early_access_submitted', { email: email });
    }
    
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
      <div className="absolute inset-0 bg-gradient-to-br from-periwinkle/10 to-dogwood_rose/10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Guessing What They Mean – Try Ume Now!
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who've transformed their text game from confused to confident.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="px-8 py-4 bg-gray-200 text-gray-500 rounded-full font-medium opacity-70 cursor-not-allowed"
                disabled
                aria-label="Download button disabled as app is not yet released"
              >
                Download Now
              </button>
              <button 
                onClick={() => {
                  setIsModalOpen(true);
                  // Track with PostHog
                  if (typeof window !== 'undefined' && (window as any).posthog) {
                    (window as any).posthog.capture('try_it_now_clicked');
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-periwinkle to-dogwood_rose text-white rounded-full font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-dogwood_rose/50 shadow-lg"
              >
                Try It Free – Decode Your Texts Now
              </button>
            </div>
            
            <div className="text-center mt-8 p-6 bg-white/50 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Why Wait? Here's What You Get:</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-dogwood_rose mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Instant text translations that reveal hidden meaning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-dogwood_rose mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Flirty, clever responses that aren't awkward</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-dogwood_rose mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>100% free to try – see results in your very first conversation</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-gray-500">
                Follow us on social media <a href="#" className="text-periwinkle hover:underline">@UmeTranslator</a>
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
              We'll notify you as soon as Ume is ready to launch.
            </p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Be the first to know when Ume launches! Sign up for early access and get premium features free for 3 months.
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-periwinkle focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-periwinkle hover:bg-periwinkle/90 text-white py-3 rounded-lg transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-periwinkle/50"
              >
                Get Early Access + 3 Months Free
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
