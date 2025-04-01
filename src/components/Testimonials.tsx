import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Ume turned my 'lol' into a flirty convo that lasted for hours. Total game changer!",
      name: "Jamie, 29",
      title: "Dating App User",
      image: "public/imgs/Ivan.jpg",
      color: "purple",
    },
    {
      quote:
        "Finally understand my girlfriend's texts. No more sleeping on the couch because of misinterpreted messages!",
      name: "Sam, 31",
      title: "Relationship Saver",
      image: "public/imgs/sam31.jpeg",
      color: "pink",
    },
    {
      quote:
        "We don't get into fight anymore. But the fire between us is rising over and over thanks to this app!",
      name: "Sara, 27",
      title: "We have so much love now",
      image: "public/imgs/author1.jpg",
      color: "purple",
    },
    {
      quote:
        "Twitter's buzzing about Ume—@flirtguru says it's the future of relationship communication!",
      name: "@maryEll,",
      title: "Twitter",
      image: "public/imgs/sara1.jpg",
      color: "yellow",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4">
              What People Are Saying
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our users have to say
              about Ume.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="relative mb-10 sm:mb-12 md:mb-16">
            {/* Large quote marks */}
            <div className="absolute -top-6 sm:-top-8 md:-top-10 left-0 text-4xl sm:text-5xl md:text-6xl text-ume-purple/10 font-serif">
              "
            </div>
            <div className="absolute -bottom-10 sm:-bottom-12 md:-bottom-16 right-0 text-4xl sm:text-5xl md:text-6xl text-ume-purple/10 font-serif rotate-180">
              "
            </div>

            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 py-4 sm:py-6 md:py-8">
              {/* Image */}
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-ume-${testimonials[activeIndex].color} flex items-center justify-center shadow-md`}
                >
                  <Quote size={12} className="text-white" />
                </div>
              </div>

              {/* Quote */}
              <div className="w-full relative">
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-4 sm:mb-6">
                    {testimonials[activeIndex].quote}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h4 className="font-bold text-base sm:text-lg text-gray-800">
                      {testimonials[activeIndex].name}
                      <span className="font-normal text-sm text-gray-500 block sm:inline sm:ml-2">
                        {testimonials[activeIndex].title}
                      </span>
                    </h4>

                    <div className="flex gap-1 mt-2 sm:mt-0">
                      {testimonials.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === activeIndex
                              ? `bg-ume-${testimonials[activeIndex].color} w-4`
                              : "bg-gray-300"
                          }`}
                          aria-label={`View testimonial ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows - made smaller and positioned better for mobile */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/3 -left-2 sm:-left-3 md:-left-6 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} className="text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute top-1/3 -right-2 sm:-right-3 md:-right-6 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          </div>

          {/* Rating summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 py-6 border-t border-gray-100">
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-ume-purple to-ume-pink text-transparent bg-clip-text">
                4.9/5
              </div>
              <div className="flex mt-1 sm:mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-ume-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Average rating
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-ume-purple to-ume-pink text-transparent bg-clip-text">
                1,200+
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Happy users
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-ume-purple to-ume-pink text-transparent bg-clip-text">
                98%
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Would recommend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
