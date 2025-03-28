
import React from 'react';

const PersonaSection: React.FC = () => {
  const personas = [
    {
      title: "Singles",
      description: "Just dipping your toe in the dating pool? Ume helps you navigate mixed signals and decode those 'interesting' dating app messages.",
      icon: "🧍",
      color: "from-ume-purple/20 to-ume-purple/5"
    },
    {
      title: "Couples",
      description: "Level up your relationship communication. Understand what your partner is really saying and respond in a way that builds connection.",
      icon: "👫",
      color: "from-ume-pink/20 to-ume-pink/5"
    },
    {
      title: "Flirt Fiends",
      description: "Take your flirting game from awkward to amazing. Ume helps you craft responses that keep the conversation flowing and the interest growing.",
      icon: "😏",
      color: "from-ume-yellow/20 to-ume-yellow/5"
    }
  ];
  
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
            <div key={index} className="flex flex-col items-center">
              <div className={`w-full h-64 rounded-2xl bg-gradient-to-b ${persona.color} p-6 mb-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}>
                <div className="text-6xl mb-4">{persona.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{persona.title}</h3>
                <p className="text-gray-700">{persona.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
