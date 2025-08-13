import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const CSRSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      alt: "Community education program"
    },
    {
      image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1405&q=80",
      alt: "Tree plantation initiative"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Medical camp for community"
    },
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      alt: "Clean water initiative"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 lg:gap-12">
        {/* Carousel */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg h-[400px]">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`
                }}
              >
                <img 
                  src={slide.image}
                  className="w-full h-full object-cover rounded-lg"
                  alt={slide.alt}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-medium text-lg">{slide.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-orange-500 w-6' : 'bg-gray-300 hover:bg-orange-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Text content aligned vertically */}
        <div className="w-full md:w-1/2 text-gray-800 flex items-center h-full">
          <div 
            className="space-y-6 w-full"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h2 className="text-orange-500 font-semibold text-xl mb-2 animate-pulse">
              → CSR Activities
            </h2>
            <h3 className="text-3xl font-bold text-gray-800">
              Building Communities, <span className="text-orange-500">Beyond Cement</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Purbanchal Cement, we believe our responsibility extends beyond building
strong structures. Through initiatives in education, health, and environmental
sustainability, we aim to create lasting positive impact in the communities we
serve."
            </p>
            <div className="pl-4 border-l-4 border-orange-500 transform hover:scale-[1.01] transition-transform duration-300">
              <p className="text-gray-600 italic">
                "Empowering people and protecting the planet isn’t just a duty—it’s our promise for
a better tomorrow"
              </p>
            </div>
            <button
              onClick={() => navigate("/pages/maintenance")}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
            >
              Explore Our CSR Initiatives
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CSRSection;
