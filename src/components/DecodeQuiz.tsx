
import React, { useState } from 'react';

const funnyTranslations = [
  { input: "Hey", output: "Hey there, cutie! I've been thinking about you." },
  { input: "What's up?", output: "I'm checking if you're free to chat. I'm bored and you're my favorite distraction." },
  { input: "I'm fine", output: "I am absolutely NOT fine. Please ask me what's wrong at least 3 more times." },
  { input: "K", output: "I'm either busy, upset, or plotting your demise. Proceed with caution." },
  { input: "We need to talk", output: "Prepare yourself. I've been rehearsing this conversation for days." },
  { input: "I'll text you later", output: "Don't wait up. I might text you in 5 minutes or 5 days." },
  { input: "Whatever", output: "You've just triggered my passive-aggressive mode. Congratulations." },
  { input: "LOL", output: "I didn't actually laugh. Not even a smile. Just acknowledging your attempt at humor." }
];

const DecodeQuiz: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [isErrorShaking, setIsErrorShaking] = useState(false);
  
  const handleDecode = () => {
    if (inputText.trim().length === 0) {
      setIsErrorShaking(true);
      setTimeout(() => setIsErrorShaking(false), 500);
      return;
    }
    
    if (inputText.length > 50) {
      setResult("Whoa there! Keep it under 50 characters. Ume likes it short and sweet.");
      return;
    }
    
    setIsTranslating(true);
    
    // Check if there's an exact match
    const exactMatch = funnyTranslations.find(
      t => t.input.toLowerCase() === inputText.toLowerCase()
    );
    
    setTimeout(() => {
      if (exactMatch) {
        setResult(exactMatch.output);
      } else {
        // If no exact match, get a random translation
        const randomIndex = Math.floor(Math.random() * funnyTranslations.length);
        setResult(`${inputText}? ${funnyTranslations[randomIndex].output}`);
      }
      setIsTranslating(false);
    }, 1500);
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ume-purple/5 to-ume-pink/5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try Our Text Decoder
          </h2>
          <p className="text-xl text-gray-600">
            Ever wondered what they <span className="italic">really</span> mean? Type a message and let Ume decode the truth.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-6 md:p-8">
            <div className="flex flex-col">
              <div className="mb-6">
                <label htmlFor="decode-input" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter a text message (50 chars max)
                </label>
                <div className={`relative ${isErrorShaking ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}>
                  <input
                    id="decode-input"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message like 'I'm fine' or 'K'"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ume-purple focus:border-transparent outline-none transition-all"
                    maxLength={50}
                  />
                  <div className="absolute right-3 top-3 text-xs text-gray-400">
                    {inputText.length}/50
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleDecode}
                disabled={isTranslating}
                className="w-full bg-ume-purple hover:bg-ume-purple/90 text-white py-3 rounded-lg transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-ume-purple/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isTranslating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Decoding...
                  </>
                ) : "Decode This Message"}
              </button>
            </div>
            
            {result && (
              <div className="mt-8 animate-fade-in">
                <div className="text-sm font-medium text-gray-700 mb-2">
                  Ume Translation:
                </div>
                <div className="bg-ume-purple/10 p-4 rounded-lg border border-ume-purple/20">
                  <p className="text-gray-800">{result}</p>
                </div>
                <div className="mt-4 text-xs text-gray-500 italic text-center">
                  *Results may vary. Ume is still learning the complexities of human communication.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecodeQuiz;
