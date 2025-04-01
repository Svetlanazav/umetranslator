import React, { useState } from "react";

const FeedbackSection: React.FC = () => {
  const [feedback, setFeedback] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    const formElement = e.currentTarget;
    fetch(formElement.action!, {
      method: formElement.method!,
      body: new FormData(formElement),
    }).catch((e) => console.error(e));

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-ume-pink blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-ume-purple blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto glass-card p-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-ume-yellow/10 text-ume-yellow px-4 py-1 rounded-full text-sm font-medium">
              Feedback
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Have Something to Say? We Hear You!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Share your ideas and thoughts with us. We're constantly improving
              Ume based on your feedback.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-6 animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
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
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your feedback has been received. We appreciate your input!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              method="POST"
              action="http://liangas.tech:8001/umi/feedback"
            >
              <div>
                <label
                  htmlFor="feedback"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Feedback
                </label>
                <textarea
                  name="feedback"
                  id="feedback"
                  rows={4}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ume-purple focus:border-transparent outline-none"
                  required
                ></textarea>
                <div className="text-xs text-right text-gray-500 mt-1">
                  {feedback.length} / 500 characters
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-ume-purple to-ume-pink text-white rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ume-purple/50"
                >
                  Send Feedback
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Testimonial/Stats element */}
        <div className="max-w-3xl mx-auto mt-6 px-4 text-center">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Join our community</span> • Over
            5,000 pieces of feedback collected • 87% of feature requests
            considered
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
