
import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 p-5 rounded-xl shadow-sm border border-gray-100 animate-fade-in-delayed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-ume-purple">51% / 49%</span>
                <p className="text-gray-600 text-sm">guys vs gals misinterpret texts daily</p>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-ume-pink">80%</span>
                <p className="text-gray-600 text-sm">of relationships hinge on texting</p>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-ume-yellow">68%</span>
                <p className="text-gray-600 text-sm">of texters misread 'LOL'</p>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-ume-purple">53%</span>
                <p className="text-gray-600 text-sm">overthink 'What's up?'</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
