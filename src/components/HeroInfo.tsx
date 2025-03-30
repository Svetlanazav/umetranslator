
import React from 'react';

const HeroInfo: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg animate-fade-in-delayed">
      <p className="text-gray-700">
        <strong>Who's it for?</strong> Anyone texting a partner, crush, or fling.<br />
        <strong>What is it?</strong> A free app that decodes messages and suggests replies.<br />
        <strong>Why you need it?</strong> Stop guessing, start connecting—80% of relationships depend on texting!
      </p>
    </div>
  );
};

export default HeroInfo;
