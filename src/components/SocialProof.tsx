import React from "react";

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Thousands Are Decoding Their Way to Love Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the text revolution that's changing how we communicate in
              relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="glass-card p-8 text-center animate-fade-in transition-all hover:shadow-md transform hover:-translate-y-1">
              <div className="text-5xl font-bold bg-gradient-to-r from-ume-purple to-ume-pink text-transparent bg-clip-text mb-4">
                78%
              </div>
              <p className="text-lg text-gray-600">
                <span className="font-medium">
                  of people misinterpret text messages
                </span>{" "}
                at least once a week, according to a recent Pew Research study.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-1 w-20 bg-gradient-to-r from-ume-purple to-ume-pink rounded-full"></div>
              </div>
            </div>

            <div className="glass-card p-8 text-center animate-fade-in transition-all hover:shadow-md transform hover:-translate-y-1">
              <div className="text-5xl font-bold bg-gradient-to-r from-ume-purple to-ume-pink text-transparent bg-clip-text mb-4">
                80%
              </div>
              <p className="text-lg text-gray-600">
                <span className="font-medium">
                  of relationships hinge on texting.
                </span>{" "}
                Stop guessing, start connecting!
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-1 w-20 bg-gradient-to-r from-ume-purple to-ume-pink rounded-full"></div>
              </div>
            </div>
            <div className="glass-card p-8 text-center animate-fade-in transition-all hover:shadow-md transform hover:-translate-y-1">
              <div className="text-5xl font-bold bg-gradient-to-r from-ume-purple to-ume-pink text-transparent bg-clip-text mb-4">
                62%
              </div>
              <p className="text-lg text-gray-600">
                <span className="font-medium">
                  of couples have argued over a text tone gone wrong
                </span>{" "}
                — ‘Hey’ vs. ‘HEY’ is a battlefield. According to NYMag
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-1 w-20 bg-gradient-to-r from-ume-purple to-ume-pink rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
