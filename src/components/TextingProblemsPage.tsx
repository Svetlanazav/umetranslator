import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";

const TextingProblemsPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollTimerRef = useRef(null);

  const problemMessages = [
    {
      id: 1,
      text: "Your crush says 'We should hang out'—date or dodge? Cue the overthinking spiral.",
      color: "bg-ume-purple",
    },
    {
      id: 2,
      text: "Are your friends over your nonstop worry-fests and 'why he wrote that' questions?",
      color: "bg-ume-pink",
    },
    {
      id: 3,
      text: "You're staring at 'Do I look okay in this?'—is it a trap, a cry, or a flex? Spoiler: You're clueless.",
      color: "bg-ume-yellow",
    },
    {
      id: 4,
      text: "They hit you with 'Busy week, ttyl'—genuine or a slow fade? You're stalking their 'last seen' already.",
      color: "bg-red-500",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollTimerRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % problemMessages.length);
      }, 3000);
    }

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [isAutoScrolling, problemMessages.length]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    // Reset auto-scrolling timer when manually changing slides
    if (isAutoScrolling) {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
      autoScrollTimerRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % problemMessages.length);
      }, 3000);
    }
  };

  const handleNext = () => {
    handleSlideChange((activeSlide + 1) % problemMessages.length);
  };

  const handlePrev = () => {
    handleSlideChange(
      (activeSlide - 1 + problemMessages.length) % problemMessages.length
    );
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section
      id="texting-problems"
      className="py-20 bg-gradient-to-r from-ume-yellow/3 to-ume-pink/5 relative shadow-md"
    >
      {/* Background gradient elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-ume-purple/20 rounded-full blur-3xl parallax-element"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-ume-pink/20 rounded-full blur-3xl parallax-element"></div>
      <div className="absolute bottom-10 left-40 w-60 h-60 bg-ume-yellow/20 rounded-full blur-3xl parallax-element"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-ume-purple/10 text-ume-purple px-4 py-1 rounded-full text-sm font-medium">
            Texting's a Hot Mess—Admit It!
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            {" "}
            Ever Wondered What "I'm Fine" REALLY Means?
          </h2>
          {/* Engagement hooks

          <div className="text-xl italic text-gray-700 mb-4">
            "Caught decoding 'Fine' like it's a CIA file? You need help—scroll
            on!"
          </div> */}
        </div>

        {/* Carousel */}
        <div
          className="max-w-3xl mx-auto mb-12 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {problemMessages.map((message, index) => (
                <div key={message.id} className="min-w-full px-4">
                  <div className="glass-card p-6 border-2 border-transparent hover:border-gray-200 transition-all duration-300 h-48 flex flex-col">
                    <p className="text-base text-pretty text-slate-900 text-gray-700 flex-grow flex items-center justify-center text-center">
                      {message.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {problemMessages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSlide === index
                    ? `bg-${
                        problemMessages[index].color.split("-")[1]
                      } scale-125`
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextingProblemsPage;
