
import React, { useState } from 'react';

const FeedbackSection: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFeedback('');
    }, 3000);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto glass-card p-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-ume-yellow/10 text-ume-yellow px-4 py-1 rounded-full text-sm font-medium">
              Feedback
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-2">
              Have Something to Say? We Hear You!
            </h2>
            <p className="text-gray-600">
              Share your ideas and thoughts with us. We're constantly improving Ume based on your feedback.
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="text-center py-6 animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your feedback has been received. We appreciate your input!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Feedback
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ume-purple focus:border-transparent outline-none"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ume-purple/50"
                >
                  Send It
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
