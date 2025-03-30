
import React, { useState, useEffect } from 'react';

const ExitIntentSurvey: React.FC = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger once
      if (e.clientY < 0 && !showSurvey && !localStorage.getItem('exitSurveyShown')) {
        setShowSurvey(true);
        localStorage.setItem('exitSurveyShown', 'true');
        
        // Reset after 24 hours
        setTimeout(() => {
          localStorage.removeItem('exitSurveyShown');
        }, 24 * 60 * 60 * 1000);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [showSurvey]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Exit survey feedback:', feedback);
    setSubmitted(true);
    
    // Close after 2 seconds
    setTimeout(() => {
      setShowSurvey(false);
      setFeedback('');
      setSubmitted(false);
    }, 2000);
  };
  
  if (!showSurvey) return null;
  
  return (
    <div className="exit-intent-popup">
      {submitted ? (
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-lg font-medium mb-1">Thank You!</h4>
          <p className="text-sm text-gray-500">Your feedback helps us improve.</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold">Leaving so soon?</h3>
            <button
              onClick={() => setShowSurvey(false)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">What's missing? Share your thoughts!</p>
          <form onSubmit={handleSubmit}>
            <textarea
              rows={3}
              className="w-full p-2 text-sm border border-gray-300 rounded-md mb-2"
              placeholder="Tell us what you're looking for..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-1 bg-ume-purple text-white text-sm rounded-md hover:bg-ume-purple/90"
              >
                Send
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ExitIntentSurvey;
