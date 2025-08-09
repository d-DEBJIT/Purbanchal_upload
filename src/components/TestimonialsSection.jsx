/* global __IMAGE_BASE_PATH__ */
import React, { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "For over 15 years, Purbanchal Cement has been our trusted choice for all residential projects in Guwahati. Their quality and consistency make every project a success.",
      name: "Mr. Manoj Jalan",
      position: "Director, Protech Group",
      logo: "protech-logo (1).png"
    },
    {
      quote: "Surya Gold cement delivers unmatched reliability for our construction projects. Our decade-long partnership with Purbanchal Cement is built on trust and proven quality.",
      name: "Mr. Amarchand Kalani",
      position: "Owner, Uttrayan Group",
      logo: "uttarayan-logo.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-2xl text-orange-500 font-semibold mb-3">
            ← Trusted By Industry Leaders →
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from our long-standing partners who've built success with Purbanchal Cement
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mobile: Show only current testimonial */}
          <div className="md:hidden">
            <div className="bg-[#3366BB] text-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute top-6 left-6 text-orange-400 text-5xl opacity-20">
                &quot;
              </div>
              <p className="text-base leading-relaxed mb-6 relative z-10 pl-6">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="flex items-center justify-between mt-6 border-t border-white/20 pt-6">
                <div>
                  <h4 className="font-bold text-white text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-white/80 mt-1">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <div className="text-yellow-400 text-lg mt-2">★★★★★</div>
                </div>
                <img
                  src={`${__IMAGE_BASE_PATH__}/${testimonials[currentTestimonial].logo}`}
                  alt={`${testimonials[currentTestimonial].name}'s company logo`}
                  className="h-12 object-contain brightness-0 invert"
                />
              </div>
            </div>
          </div>

          {/* Desktop: Show both testimonials */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="hidden md:block">
              <div className="bg-[#3366BB] text-white p-8 rounded-xl shadow-lg relative">
                <div className="absolute top-6 left-6 text-orange-400 text-5xl opacity-20">
                  &quot;
                </div>
                <p className="text-base leading-relaxed mb-6 relative z-10 pl-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center justify-between mt-6 border-t border-white/20 pt-6">
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-white/80 mt-1">
                      {testimonial.position}
                    </p>
                    <div className="text-yellow-400 text-lg mt-2">★★★★★</div>
                  </div>
                  <img
                    src={`${__IMAGE_BASE_PATH__}/${testimonial.logo}`}
                    alt={`${testimonial.name}'s company logo`}
                    className="h-12 object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center mt-8">
          {/* Navigation Arrows - Only show on mobile */}
          <div className="flex justify-center space-x-4 md:hidden">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition shadow-md"
            >
              &larr;
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition shadow-md"
            >
              &rarr;
            </button>
          </div>

          {/* Navigation Dots - Show on all screens */}
          <div className="flex space-x-2 mt-4 md:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition ${index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;