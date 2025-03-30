
import React from 'react';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-ume-light to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto glass-card p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-ume-purple rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <h2 className="text-2xl font-bold">"Ume Saved My Date!"</h2>
              <p className="text-gray-500">Alex, 28</p>
            </div>
          </div>
          
          <div className="text-gray-600 text-lg italic">
            "I texted 'You free tonight?' and got 'Maybe.' I was about to give up, but Ume told me she was playing coy and suggested 'Only if you say yes first.' She laughed and said yes! We've been dating for 2 months now."
          </div>
          
          <div className="mt-6 flex">
            <div className="flex text-ume-yellow">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
