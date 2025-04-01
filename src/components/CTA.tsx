import React, { useState } from "react";
import Modal from "./Modal";
import { useFormSubmit } from "./useFormSubmit";
import { Ok } from "./Ok";

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSubmitted, handleSubmit } = useFormSubmit();

  return (
    <section id="cta" className="py-8 md:py-12 relative overflow-hidden">
      {/* Enhanced decorative background with more color - mobile optimized */}
      <div className="absolute inset-0 bg-gradient-to-br from-ume-purple/5 to-ume-pink/5 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-5 left-5 w-20 h-20 md:w-32 md:h-32 rounded-full bg-ume-purple/30 blur-xl"></div>
          <div className="absolute bottom-5 right-5 w-24 h-24 md:w-40 md:h-40 rounded-full bg-ume-pink/30 blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-ume-purple/20 blur-lg"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-lg md:max-w-4xl mx-auto glass-card p-5 sm:p-6 md:p-8 transition-all hover:shadow-lg border border-white/10 bg-white/80 backdrop-blur-sm rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 justify-between">
            <div className="text-center md:text-left md:max-w-md">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-ume-purple to-ume-pink bg-clip-text text-transparent">
                Stop Guessing, Start Connecting
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Join thousands who are decoding texts and transforming
                relationships.
              </p>
            </div>

            <div className="flex flex-col items-center mt-4 md:mt-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ume-pink/50 relative overflow-hidden group"
              >
                <span className="relative z-10">Try Free</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
              </button>

              <div className="mt-2">
                <p className="text-xs sm:text-sm text-gray-500">
                  <span className="inline-block mr-1">Follow us</span>
                  <a href="#" className="text-ume-purple hover:underline">
                    @UmeTranslator
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => !isSubmitted && setIsModalOpen(false)}
      >
        {isSubmitted ? (
          <Ok />
        ) : (
          <>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Be the first to know when Ume Translator launches. Sign up for
              early access!
            </p>

            <form
              method="POST"
              action="http://liangas.tech:8001/umi/subscribe"
              className="mt-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ume-purple focus:border-transparent outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-ume-purple to-ume-pink text-white py-2 rounded-lg transition-all transform hover:scale-[1.01] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ume-purple/50"
              >
                Get Early Access
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-3 text-center">
              We respect your privacy and will never share your information.
            </p>
          </>
        )}
      </Modal>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
