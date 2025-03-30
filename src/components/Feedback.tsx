
import React, { useState } from 'react';

const Feedback: React.FC = () => {
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
    <section id="feedback" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Has Something to Say? We Hear You!</h2>
          <p className="text-gray-600 mt-4 mb-8">Share your ideas and thoughts with us.</p>
          
          {isSubmitted ? (
            <div className="text-center py-8 glass-card">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">Thank You!</h4>
              <p className="text-gray-600">
                Your feedback helps us make Ume better for everyone!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 mx-auto glass-card p-6">
              <div className="mb-4">
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Feedback
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-periwinkle focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-periwinkle hover:bg-periwinkle/90 text-white py-3 rounded-lg transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-periwinkle/50"
              >
                Send It
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
