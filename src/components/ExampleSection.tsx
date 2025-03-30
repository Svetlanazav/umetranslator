
import React from 'react';

const ExampleSection: React.FC = () => {
  const examples = [
    {
      title: "The "Fine" Fake-Out",
      text: "I'm fine",
      decode: {
        manToWoman: "She's not fine—ask 'Wanna talk, babe?'",
        womanToMan: "He's hiding—say 'Spill it, tough guy!'"
      },
      emoji: "🧐",
      detailEmoji: "😏"
    },
    {
      title: "The "Busy Bee"",
      text: "Busy week, ttyl",
      decode: {
        manToWoman: "He's dodging—try 'Too busy to miss me?'"
      },
      emoji: "🐝",
      detailEmoji: "😏"
    },
    {
      title: "Make it Flirt",
      text: "Wanna grab coffee sometime",
      decode: {
        flirtStyle: "How about coffee and some steamy eye contact—when's my VIP slot?"
      },
      emoji: "☕",
      detailEmoji: "😏"
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block bg-ume-yellow/10 text-ume-yellow px-4 py-1 rounded-full text-sm font-medium">
            Examples
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            From Text Confusion to Text Confidence
          </h2>
          <p className="text-xl text-gray-600">
            See how Ume translates real-world texts and helps you respond with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-r from-ume-purple/10 to-ume-pink/10 p-3 rounded-lg mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{example.emoji}</span>
                  <h3 className="font-bold text-lg">{example.title}</h3>
                </div>
                <div className="bg-white p-3 rounded-lg text-gray-700 mb-2">
                  "{example.text}"
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-ume-purple/80 to-ume-pink/80 p-4 rounded-lg text-white">
                <div className="flex items-start gap-2 mb-2">
                  <span>✨</span>
                  <h4 className="font-medium">Ume Decode:</h4>
                </div>
                {example.decode.manToWoman && (
                  <div className="mb-2">
                    <div className="text-sm text-white/80 mb-1">Man-to-Woman:</div>
                    <div className="flex items-start gap-1">
                      <span>{example.detailEmoji}</span>
                      <p>"{example.decode.manToWoman}"</p>
                    </div>
                  </div>
                )}
                {example.decode.womanToMan && (
                  <div className="mb-2">
                    <div className="text-sm text-white/80 mb-1">Woman-to-Man:</div>
                    <div className="flex items-start gap-1">
                      <span>{example.detailEmoji}</span>
                      <p>"{example.decode.womanToMan}"</p>
                    </div>
                  </div>
                )}
                {example.decode.flirtStyle && (
                  <div>
                    <div className="text-sm text-white/80 mb-1">Flirt Style:</div>
                    <div className="flex items-start gap-1">
                      <span>{example.detailEmoji}</span>
                      <p>"{example.decode.flirtStyle}"</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
