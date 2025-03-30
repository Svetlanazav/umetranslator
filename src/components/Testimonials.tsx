
import React, { useState } from 'react';
import Modal from './Modal';

const Testimonials: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-ume-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What People Are Saying</h2>
            <p className="text-xl text-gray-600 mt-4">Join thousands who are texting smarter with Ume</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80" 
                    alt="Jamie" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Jamie, 24</div>
                  <div className="text-sm text-gray-500">Nursing Student</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Ume turned my 'lol' into a flirty convo that lasted till 2AM. Lifesaver!"
              </p>
              <div className="mt-4 flex">
                <div className="flex text-ume-yellow">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80" 
                    alt="Sam" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Sam, 31</div>
                  <div className="text-sm text-gray-500">Software Developer</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Finally understand what my girlfriend means when she says 'fine.' 10/10 would recommend."
              </p>
              <div className="mt-4 flex">
                <div className="flex text-ume-yellow">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80" 
                    alt="Social Influencer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Social Mention</div>
                  <div className="text-sm text-gray-500">@flirtguru</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Twitter's buzzing about Ume—it's a game-changer for dating app convos! My followers love it."
              </p>
              <div className="mt-4 flex">
                <div className="flex text-ume-yellow">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-ume-purple/10 text-ume-purple hover:bg-ume-purple/20 rounded-full transition-colors"
            >
              Join Them Today
            </button>
          </div>
        </div>
      </div>
      
      {/* Modal for CTA button */}
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

export default Testimonials;
