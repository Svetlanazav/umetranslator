
import React, { useState } from 'react';

const FeedbackSection: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFeedback('');
    }, 3000);
  };
  
  return (
    <section id="feedback" className="py-20 bg-gradient-to-b from-ume-light to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Has Something to Say? We Hear You!</h2>
          <p className="text-gray-600 mb-8">Share your ideas and thoughts with us. We're constantly improving Ume based on your feedback.</p>
          
          {submitted ? (
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We appreciate your feedback and will use it to make Ume even better.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <textarea 
                rows={4} 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ume-purple focus:border-transparent outline-none transition-all"
                placeholder="Tell us what's on your mind..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              ></textarea>
              <button 
                type="submit"
                className="mt-4 px-8 py-3 bg-ume-purple hover:bg-ume-purple/90 text-white rounded-full font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ume-purple/50"
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

export default FeedbackSection;
