
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    
    // Track with PostHog when implemented
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('feedback_submitted', { feedback });
    }
    
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFeedback('');
    }, 3000);
  };
  
  return (
    <section id="feedback" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-ume-purple/10 text-ume-purple px-4 py-1 rounded-full text-sm font-medium">
            Your Voice Matters
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Has Something to Say? We Hear You!</h2>
          <p className="text-gray-600 mt-4 mb-8">Share your ideas and thoughts with us. Your feedback helps us make Ume better.</p>
          
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
                <Textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ume-purple focus:border-transparent outline-none transition-all"
                  rows={4}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-ume-purple hover:bg-ume-purple/90 text-white py-3 rounded-lg transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-ume-purple/50"
              >
                Send It
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
