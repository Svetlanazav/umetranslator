
import React, { useState } from 'react';

const DecodeQuiz: React.FC = () => {
  const [userText, setUserText] = useState('');
  const [result, setResult] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userText) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      let response = '';
      
      // Simple matching logic
      const text = userText.toLowerCase();
      if (text.includes('fine') || text.includes('okay') || text.includes('ok')) {
        response = "They're definitely not fine. Try asking 'Want to talk about it?' to get the real story.";
      } else if (text.includes('whatever') || text.includes('k') || text === 'k') {
        response = "They might be upset. Don't ignore this - check in with them.";
      } else if (text.includes('busy') || text.includes('later') || text.includes('ttyl')) {
        response = "They might be creating distance. Try 'Miss you, no pressure' to keep it warm.";
      } else if (text.includes('hey') || text.includes('hi') || text.includes('hello')) {
        response = "This is a casual opener. Respond with warmth but match their energy level.";
      } else {
        response = "I need more context to decode this. Try sending a clearer message.";
      }
      
      setResult(response);
      setIsAnalyzing(false);
    }, 1500);
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try Our Text Decoder
          </h2>
          <p className="text-xl text-gray-600">
            Enter a message you've received and let Ume decode it for you.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="glass-card p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Paste the text message here:
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ume-purple focus:border-transparent"
                  placeholder="e.g., 'K' or 'I'm fine'"
                  value={userText}
                  onChange={(e) => setUserText(e.target.value)}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? 'Decoding...' : 'Decode This Text'}
              </button>
            </form>
            
            {result && (
              <div className="mt-6 p-4 bg-ume-purple/10 rounded-lg">
                <h3 className="font-bold text-ume-purple mb-2">Ume's Decode:</h3>
                <p className="text-gray-700">{result}</p>
              </div>
            )}
            
            {isAnalyzing && (
              <div className="mt-6 text-center">
                <div className="inline-flex space-x-1">
                  <div className="w-2 h-2 bg-ume-purple rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-ume-pink rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  <div className="w-2 h-2 bg-ume-yellow rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Analyzing message patterns...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecodeQuiz;
