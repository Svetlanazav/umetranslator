
import React, { useState } from 'react';
import Modal from './Modal';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const faqs = [
    {
      question: "Will it really understand my partner?",
      answer: "Yes! Ume's trained on millions of texts to catch nuances others miss. It analyzes patterns, context, and common communication styles to give you accurate insights."
    },
    {
      question: "Is it worth downloading?",
      answer: "Totally free to try—no risk, all reward. See the difference in one conversation! Thousands of users have already transformed their text communication."
    },
    {
      question: "What if I'm bad at flirting?",
      answer: "Ume gives you sassy, flirty suggestions that feel like you, only better. No more awkward messages or missed opportunities—we've got your back!"
    },
    {
      question: "How accurate is the text decoder?",
      answer: "Our decoder uses advanced language processing to identify emotions, intentions, and hidden meanings. It's constantly learning and improving, with an 85% accuracy rate."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
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
              <div key={index} className="glass-card overflow-hidden transition-all duration-300">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-ume-purple transition-transform duration-300 ${
                      activeIndex === index ? 'transform rotate-180' : ''
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
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ume-purple/50"
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

export default FAQSection;
