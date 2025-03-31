import React, { useState } from "react";
import { Sparkles, MessageSquare, Brain, AlertTriangle } from "lucide-react";
import Modal from "./Modal";

const Features: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Decode Any Text",
      description:
        "They text 'Whatever'—Ume says, 'They're mad, babe—don't sleep on this!'",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      color: "bg-ume-purple border-ume-purple/20",
      example:
        "When they say 'Whatever' → Ume decodes the passive aggression and helps you respond appropriately.",
    },
    {
      title: "Flirt Mode",
      description:
        "'Nice chatting with you' becomes, 'Too much fun with you—consider me caught!'",
      icon: <Sparkles className="h-6 w-6 text-white" />,
      color: "bg-ume-pink border-ume-pink/20",
      example:
        "Turn 'Had a good time' into 'Can't stop thinking about that laugh of yours' with Ume's flirt suggestions.",
    },
    {
      title: "Context Clues",
      description:
        "'I'm good' after a fight? Ume digs in: 'They're still salty—tread soft, tiger!'",
      icon: <Brain className="h-6 w-6 text-white" />,
      color: "bg-ume-yellow border-ume-yellow/20",
      example:
        "Ume recognizes when 'I'm fine' isn't fine at all, and helps you navigate sensitive conversations.",
    },
    {
      title: "Manipulation Radar",
      description:
        "'You always do this'—Ume flags it: 'Guilt trip alert—watch your step!'",
      icon: <AlertTriangle className="h-6 w-6 text-white" />,
      color: "bg-red-500 border-red-200",
      example:
        "Ume helps you identify and respond to manipulative language in your conversations.",
    },
  ];

  const handleFeatureClick = (index: number) => {
    if (activeFeature === index) {
      setActiveFeature(null);
    } else {
      setActiveFeature(index);
    }
  };

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-r from-ume-yellow/3 to-ume-pink/5 relative"
    >
      {/* Background gradient elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-ume-purple/20 rounded-full blur-3xl parallax-element"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-ume-pink/20 rounded-full blur-3xl parallax-element"></div>
      <div className="absolute bottom-20 left-40 w-60 h-60 bg-ume-yellow/20 rounded-full blur-3xl parallax-element"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-ume-purple/10 text-ume-purple px-4 py-1 rounded-full text-sm font-medium">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            From Text Fails to Epic Tales—Ume's Got You Covered!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our smart features decode, enhance, and transform your text
            conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card p-6 border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-pointer ${
                activeFeature === index
                  ? "border-" + feature.color.split(" ")[0].substring(3)
                  : "border-transparent"
              }`}
              onClick={() => handleFeatureClick(index)}
            >
              <div className="flex items-start gap-4">
                <div className={`${feature.color} p-3 rounded-lg`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>

                  {activeFeature === index && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg animate-fade-in">
                      <p className="text-sm text-gray-700">{feature.example}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
          <div className="md:w-1/4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-ume-purple/10 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="text-xl italic text-gray-700 mb-4">
              "It all started with a chat so cringe it hurt — so I built this
              app to turn texts into clear, clever, and a bit flirty gold!"
            </div>
            <p className="text-ume-purple font-semibold">
              – Founder. The Sassy voice behind Ume
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ume-pink/50"
            >
              Try Free
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
            Ume is currently in final development. Sign up to be the first to
            know when we launch!
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

export default Features;
