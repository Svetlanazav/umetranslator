
import React, { useState } from 'react';
import Modal from './Modal';

const PersonaSection: React.FC = () => {
  const [activePersona, setActivePersona] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const personas = [
    {
      title: "Singles",
      description: "Just dipping your toe in the dating pool? Ume helps you navigate mixed signals and decode those 'interesting' dating app messages.",
      icon: "🧍",
      color: "from-ume-purple/20 to-ume-purple/5",
      testimonial: "Ume helped me understand when 'Let's hang out sometime' actually meant 'I'm interested' vs just being polite!"
    },
    {
      title: "Couples",
      description: "Level up your relationship communication. Understand what your partner is really saying and respond in a way that builds connection.",
      icon: "👫",
      color: "from-ume-pink/20 to-ume-pink/5",
      testimonial: "My boyfriend and I were constantly misunderstanding each other's texts. Ume has helped us avoid so many unnecessary arguments!"
    },
    {
      title: "Flirt Fiends",
      description: "Take your flirting game from awkward to amazing. Ume helps you craft responses that keep the conversation flowing and the interest growing.",
      icon: "😏",
      color: "from-ume-yellow/20 to-ume-yellow/5",
      testimonial: "I was always overthinking my flirty texts, but Ume gives me the confidence to send messages that actually get responses!"
    }
  ];
  
  const handlePersonaClick = (index: number) => {
    if (activePersona === index) {
      setActivePersona(null);
    } else {
      setActivePersona(index);
    }
  };
  
  return (
    <section id="who-its-for" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-ume-pink/10 text-ume-pink px-4 py-1 rounded-full text-sm font-medium">
            Who It's For
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            For YOU—Yes, YOU, Love Rebel!
          </h2>
          <p className="text-xl text-gray-600">
            Whether you're single, coupled up, or somewhere in between, Ume is your secret weapon for text communication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
              onClick={() => handlePersonaClick(index)}
            >
              <div className={`w-full h-64 rounded-2xl bg-gradient-to-b ${persona.color} p-6 mb-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer`}>
                <div className="text-6xl mb-4">{persona.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{persona.title}</h3>
                {activePersona === index ? (
                  <div className="animate-fade-in">
                    <p className="text-gray-700 italic">"{persona.testimonial}"</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(true);
                      }}
                      className="mt-3 px-4 py-1 bg-gradient-to-r from-ume-purple to-ume-pink text-white text-sm rounded-full"
                    >
                      Try Free
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-700">{persona.description}</p>
                )}
              </div>
            </div>
          ))}
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
              className="w-full bg-gradient-to-r from-ume-purple to-ume-pink text-white py-3 rounded-lg hover:shadow-md transition-all"
            >
              Notify Me
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default PersonaSection;
