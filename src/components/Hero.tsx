import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import StatsSection from "./StatsSection";
import HeroInfo from "./HeroInfo";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = hero.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      // Apply parallax effect to child elements
      const children = hero.querySelectorAll(".parallax-element");
      children.forEach((child, index) => {
        const factor = (index + 1) * 10;
        if (child instanceof HTMLElement) {
          child.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-ume-purple/20 rounded-full blur-3xl parallax-element"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-ume-pink/20 rounded-full blur-3xl parallax-element"></div>
      <div className="absolute bottom-20 left-40 w-60 h-60 bg-ume-yellow/20 rounded-full blur-3xl parallax-element"></div>

      <div className="container mx-auto px-4 py-6 md:py-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-5 max-w-xl">
            {/* Pain Points (simplified) */}
            <div className="inline-block bg-ume-purple/10 text-ume-purple px-4 py-1 rounded-full text-sm font-medium animate-fade-in">
              <span className="font-medium">
                Say goodbye to texting confusion
              </span>
            </div>

            {/* Headline - Simplified */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Ume Translator:{" "}
              <span className="bg-gradient-to-r from-ume-purple via-ume-pink to-ume-yellow text-transparent bg-clip-text">
                Decode Texts & Flirt Like a Pro
              </span>
            </h1>

            {/* Core benefits with icons */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 animate-fade-in-delayed">
              <div className="flex items-center gap-2 animate-fade-in-delayed">
                <span className="text-ume-purple">💬</span>
                <span className="text-gray-600">
                  Decode cryptic replies with AI that gets it
                </span>
              </div>
              <div className="flex items-center gap-2 animate-fade-in-delayed">
                <span className="text-ume-pink">😎</span>
                <span className="text-gray-600">
                  Flirt like a pro with sass, zero cringe
                </span>
              </div>
              <div className="flex items-center gap-2 animate-fade-in-delayed">
                <span className="text-ume-yellow">❤️</span>
                <span className="text-gray-600">
                  Understand your partner—no guesswork needed
                </span>
              </div>
            </div>
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ume-purple/50 shadow-md"
              >
                Try Free
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("features");
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 rounded-full font-medium transition-all border border-gray-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Learn More
              </button>
            </div>
          </div>
          {/* Right side - Try Ume Live component */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Phone mockup */}
              <div className="glass-card p-6 md:p-8 rounded-3xl shadow-xl animate-float parallax-element transition-transform hover:scale-[1.02]">
                {/* App interface mockup */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-inner">
                  {/* App header */}
                  <div className="bg-gradient-to-r from-ume-purple to-ume-pink p-4 text-white text-center">
                    <div className="text-lg font-semibold">Try Ume Live!</div>
                  </div>

                  {/* App content */}
                  <div className="p-4 md:p-6 space-y-4">
                    <div className="flex gap-3">
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-200 rounded-2xl p-3 max-w-[80%] text-gray-700">
                        "K"
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <div className="bg-gradient-to-r from-ume-purple to-ume-pink rounded-2xl p-3 max-w-[80%] text-white">
                        Ume Translator: "They're just busy, not mad. Reply with
                        'Miss you!'"
                      </div>
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0"></div>
                    </div>

                    <div className="mt-4 p-3 bg-gray-100 rounded-xl">
                      <div className="text-xs text-gray-400 mb-2">
                        Try it yourself:
                      </div>
                      <input
                        type="text"
                        placeholder="Type 'I'm fine'"
                        className="w-full p-2 mb-2 border rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          const parent = e.currentTarget.parentElement;
                          const result = parent?.querySelector(
                            ".translation-result"
                          );
                          if (result) {
                            result.classList.remove("hidden");
                          }
                        }}
                        className="w-full bg-gradient-to-r from-ume-purple to-ume-pink text-white py-2 rounded-lg transform hover:scale-[1.02] transition-all"
                      >
                        Translate It
                      </button>
                      <div className="translation-result hidden mt-3 bg-gradient-to-r from-ume-purple to-ume-pink text-white p-3 rounded-lg">
                        Ume: "They're upset. Try 'Wanna talk about it?'"
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-16 md:w-20 h-16 md:h-20 bg-ume-yellow rounded-2xl rotate-12 shadow-lg z-0 parallax-element animate-float"></div>
              <div className="absolute -top-6 -right-6 w-14 md:w-16 h-14 md:h-16 bg-ume-pink rounded-2xl -rotate-12 shadow-lg z-0 parallax-element animate-float"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for "Try it Free" button */}
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
              className="w-full bg-gradient-to-r from-ume-purple to-ume-pink text-white py-3 rounded-lg hover:bg-ume-purple/90 transition-all"
            >
              Notify Me
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
