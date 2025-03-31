import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Heart, User } from "lucide-react";

const PersonaSection: React.FC = () => {
  const [activePersona, setActivePersona] = useState<number | null>(null);

  const personas = [
    {
      title: "Singles",
      description:
        "Just dipping your toe in the dating pool? Ume helps you navigate mixed signals and decode those 'interesting' dating app messages.",
      icon: <User className="text-ume-purple" size={28} />,
      emoji: "🧍",
      color: "purple",
      testimonial:
        "Ume helped me understand when 'Let's hang out sometime' actually meant 'I'm interested' vs just being polite!",
    },
    {
      title: "Couples",
      description:
        "Level up your relationship communication. Understand what your partner is really saying and respond in a way that builds connection.",
      icon: <Heart className="text-ume-pink" size={28} />,
      emoji: "👫",
      color: "pink",
      testimonial:
        "My boyfriend and I were constantly misunderstanding each other's texts. Ume has helped us avoid so many unnecessary arguments!",
    },
    {
      title: "Flirt Fiends",
      description:
        "Take your flirting game from awkward to amazing. Ume helps you craft responses that keep the conversation flowing and the interest growing.",
      icon: <MessageSquare className="text-ume-yellow" size={28} />,
      emoji: "😏",
      color: "yellow",
      testimonial:
        "I was always overthinking my flirty texts, but Ume gives me the confidence to send messages that actually get responses!",
    },
  ];

  const handlePersonaClick = (index: number) => {
    if (activePersona === index) {
      setActivePersona(null);
    } else {
      setActivePersona(index);
    }
  };

  return (
    <section
      id="who-its-for"
      className="py-12 sm:py-16 md:py-20 bg-white relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-ume-pink blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-ume-purple blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-block bg-ume-purple/10 text-ume-purple px-4 py-1 rounded-full text-sm font-medium">
            Who It's For
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-4 sm:mb-6">
            For YOU—Yes, YOU, Love Rebel!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're single, coupled up, or somewhere in between, Ume is
            your secret weapon for text communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {personas.map((persona, index) => (
            <Card
              key={index}
              className={`bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer ${
                activePersona === index
                  ? "ring-2 ring-ume-" + persona.color
                  : ""
              }`}
              onClick={() => handlePersonaClick(index)}
            >
              <div
                className={`bg-gradient-to-r from-ume-${persona.color}/20 to-white p-4 flex items-center gap-3`}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center`}
                >
                  <span className="text-2xl">{persona.emoji}</span>
                </div>
                <h3 className="text-xl font-bold">{persona.title}</h3>
              </div>

              <CardContent className="p-5 md:p-6">
                {activePersona === index ? (
                  <div className="animate-fade-in">
                    <div className="flex items-start gap-2 mb-4">
                      <span className="text-ume-gray-500 text-xl">"</span>
                      <p className="text-gray-700 italic text-base sm:text-lg">
                        {persona.testimonial}
                      </p>
                      <span className="text-ume-gray-500 text-xl align-top">
                        "
                      </span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="h-32 flex items-center">
                      <p className="text-gray-600 text-base sm:text-lg">
                        {persona.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {persona.icon}
                          <span className="text-sm text-gray-500">
                            Perfect for you
                          </span>
                        </div>
                        <button
                          className="text-ume-purple text-sm font-medium"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePersonaClick(index);
                          }}
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ume-purple/5 rounded-full mb-4">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-gray-800 font-medium text-sm">
              5,000+ active users and growing
            </span>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
            Join the thousands who've transformed their communication from{" "}
            <span className="line-through decoration-ume-pink/50">
              confusing
            </span>{" "}
            to{" "}
            <span className="font-medium text-ume-purple">crystal clear</span>.
            Say goodbye to text anxiety!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
