
import React from "react";
import { ArrowDown, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TextMessageExamples: React.FC = () => {
  const examples = [
    {
      title: "The Fine Fake-Out",
      text: "I'm fine",
      decode: {
        manToWoman: "She's not fine—ask 'Wanna talk, babe?'",
      },
      emoji: "🧐",
      detailEmoji: "😏",
      color: "purple",
      message:
        "It takes just a little bit more attention to make both feel better and foster your relationship",
    },
    {
      title: "The Busy Bee",
      text: "Busy week, ttyl",
      decode: {
        manToWoman: "He's dodging—try 'Too busy to miss me?'",
      },
      emoji: "🐝",
      detailEmoji: "😏",
      color: "pink",
      message: "Ume's translation glow-up. Understand, act, love!",
    },
    {
      title: "Make it Flirt",
      text: "Wanna grab coffee sometime",
      decode: {
        flirtStyle:
          "Flirt Style: 'How about coffee and some steamy eye contact—when's my VIP slot?",
      },
      emoji: "☕",
      detailEmoji: "😏",
      color: "yellow",
      message:
        "Don't just wait - Act on your love life! Make it playful and full of energy.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-white to-ume-purple/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block bg-ume-pink/10 text-ume-pink px-4 py-1 rounded-full text-sm font-medium">
              Real Message Examples
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-4 sm:mb-6">
              Text Translation That'll Save Your Love Life
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Wondering what your partner really means? Ume Translator turns
              cryptic texts into clarity, flirtation, and straight-up sass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {examples.map((example, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-md border border-white/30 overflow-hidden transform transition-all hover:scale-[1.02] shadow-lg"
              >
                <div
                  className={`bg-gradient-to-r from-ume-${example.color}/70 to-ume-${example.color}/40 p-3 sm:p-4 mb-4`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{example.emoji}</span>
                    <h3 className="font-bold text-lg text-gray-800">
                      {example.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                    <div className="bg-gray-200 rounded-2xl p-3 max-w-[90%]">
                      <p className="text-gray-700">"{example.text}"</p>
                    </div>
                  </div>

                  <div className="flex justify-center my-3 sm:my-4">
                    <ArrowDown
                      className={`text-ume-${example.color} animate-bounce`}
                    />
                  </div>

                  <div
                    className={`bg-ume-${example.color}/10 rounded-xl p-3 sm:p-4 mb-4`}
                  >
                    <div className="text-xs text-gray-500 mb-1">
                      Ume translates:
                    </div>

                    {example.decode.manToWoman && (
                      <div className="mb-2">
                        <div
                          className={`font-medium text-ume-${example.color} flex items-start gap-1`}
                        >
                          <span>{example.detailEmoji}</span>
                          <span>"{example.decode.manToWoman}"</span>
                        </div>
                      </div>
                    )}

                    {example.decode.flirtStyle && (
                      <div>
                        <div
                          className={`font-medium text-gray-700 flex items-start gap-1`}
                        >
                          <span>{example.detailEmoji}</span>
                          <span>"{example.decode.flirtStyle}"</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 items-center mt-4 sm:mt-6">
                    <div
                      className={`w-10 h-10 rounded-full bg-ume-${example.color}/20 flex items-center justify-center flex-shrink-0`}
                    >
                      <MessageSquare
                        size={18}
                        className={`text-ume-${example.color}`}
                      />
                    </div>
                    <p className="text-sm text-gray-600">{example.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextMessageExamples;
