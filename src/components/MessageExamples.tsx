
import React from "react";

interface MessageProps {
  message: string;
  gifUrl: string;
  reversed?: boolean;
}

const MessageWithGif: React.FC<MessageProps> = ({
  message,
  gifUrl,
  reversed = false,
}) => {
  return (
    <div
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-6 items-center my-8`}
    >
      {/* Message Side */}
      <div className="w-full md:w-1/2">
        <div className="bg-white bg-opacity-80 backdrop-blur-md border border-white border-opacity-30 p-6 rounded-3xl shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none inline-block">
            <p className="text-lg font-medium">{message}</p>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-ume-purple to-ume-pink rounded-full mt-4"></div>
        </div>
      </div>

      {/* GIF Side */}
      <div className="w-full md:w-1/2">
        <div
          className={`rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 ${
            reversed ? "md:-rotate-2" : "md:rotate-2"
          }`}
        >
          <img
            src={gifUrl}
            alt="Emotional reaction GIF"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

// Example usage component
const MessageExamples: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-ume-purple/5 to-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Let's be honest. We've all been there!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Overthinking every text, driving your friends crazy with 'Why did
              he say that?' and debating if 'What's up?' is flirty or just
              friendly? And then, the real struggle: how to respond without
              overanalyzing.
            </p>
          </div>

          {/* First message - text left, gif right */}
          <MessageWithGif
            message="Your crush says 'We should hang out'—date or dodge? Cue the overthinking spiral."
            gifUrl="/Wtf GIF.gif"
          />

          {/* Second message - reversed (gif left, text right) */}
          <MessageWithGif
            message="We need to talk..."
            gifUrl="/gif2.gif"
            reversed={true}
          />

          {/* Third message - text left, gif right */}
          <MessageWithGif
            message="They hit you with 'Busy week, ttyl'—genuine or a slow fade? You're stalking their 'last seen' already."
            gifUrl="/gif4.gif"
          />
        </div>
      </div>
    </section>
  );
};

export default MessageExamples;
