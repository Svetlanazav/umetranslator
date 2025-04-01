import React, { useState } from "react";
import Modal from "./Modal";
import { useFormSubmit } from "./useFormSubmit";

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSubmitted, handleSubmit } = useFormSubmit();

  const faqs = [
    {
      question: "Will it really understand my partner?",
      answer:
        "This's Ume's direct task! Ume's trained on millions of texts to catch nuances others miss. It analyzes patterns, context, and common communication styles to give you accurate insights.",
    },
    {
      question: "Is it worth downloading?",
      answer:
        "Totally free to try—no risk, all reward. See the difference in one conversation! Thousands of users have already transformed their text communication.",
    },
    {
      question: "What if I'm bad at flirting?",
      answer:
        "Ume gives you sassy, flirty suggestions that feel like you, only better. No more awkward messages or missed opportunities—we've got your back!",
    },
    {
      question: "How accurate is the text decoder?",
      answer:
        "Our decoder uses advanced language processing to identify emotions, intentions, and hidden meanings. It's constantly learning and improving, with an 85% accuracy rate.",
    },
    {
      question: "Is my conversation data private?",
      answer:
        "Absolutely! Your privacy is our priority. All conversations are encrypted, and we never share your personal data with third parties. You can also delete your data anytime.",
    },
  ];

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="FAQ"
      className="py-20 bg-gradient-to-br from-ume-pink/5 to-white/50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-ume-yellow blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-ume-purple blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-ume-yellow/10 text-ume-yellow px-4 py-1 rounded-full text-sm font-medium">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Got Doubts? We've Got Answers
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Ume Translator
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden transition-all duration-300 border border-gray-100 hover:border-gray-200 rounded-xl shadow-sm hover:shadow"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg group-hover:text-ume-purple transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-ume-purple/10 transition-colors ${
                      activeIndex === index ? "bg-ume-purple/10" : ""
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 text-ume-purple transition-transform duration-300 ${
                        activeIndex === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <div className="flex items-start gap-3 bg-gradient-to-r from-gray-50/50 to-transparent p-3 rounded-lg">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full">
              <div className="h-px w-1/3 mx-auto bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>
            <p className="text-gray-500 mb-6">
              Still have questions? Try Ume for free!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ume-purple/50 relative overflow-hidden group"
            >
              <span className="relative z-10">Try Free</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal for CTA button */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => !isSubmitted && setIsModalOpen(false)}
      >
        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-600">
              We'll notify you as soon as Ume is ready to launch. Get ready to
              transform your texting game!
            </p>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-gradient-to-r from-ume-purple/20 to-ume-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-2">We're Launching Soon!</h3>
            <p className="text-gray-600 mb-4">
              Ume is currently in final development. Sign up to be the first to
              know when we launch!
            </p>
            <form
              method="POST"
              action="https://liangas.tech:8001/umi/subscribe"
              className="mt-4"
              onSubmit={handleSubmit}
            >
              <input
                name="email"
                type="email"
                placeholder="Your email address"
                className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-ume-purple focus:border-transparent outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-ume-purple to-ume-pink text-white py-3 rounded-lg hover:shadow-md transition-all"
              >
                Notify Me
              </button>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default FAQSection;
