/* global __IMAGE_BASE_PATH__ */
import React, { useRef, useEffect, useState } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);

  // Slides data - only images, no text
  const slides = [
    {
      id: 1,
      image: `${__IMAGE_BASE_PATH__}/hero1.jpg`
    },
    {
      id: 2,
      image: `${__IMAGE_BASE_PATH__}/hero2.jpg` // Replace with actual image
    },
    {
      id: 3,
      image: `${__IMAGE_BASE_PATH__}/hero3.jpg` // Replace with actual image
    },
    {
      id: 4,
      image: `${__IMAGE_BASE_PATH__}/hero4.jpg` // Replace with actual image
    },
    {
      id: 5,
      image: `${__IMAGE_BASE_PATH__}/hero5.jpg` // Replace with actual image
    }
  ];

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const video = videoRef.current;
    if (!video) return;

    video.loop = false; // Don't loop, we want to show slider after

    const handleVideoEnd = () => {
      setVideoEnded(true);
    };

    video.addEventListener('ended', handleVideoEnd);
    video.play().catch(() => { });

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [isMobile]);

  // Auto slide functionality
  useEffect(() => {
    if (!videoEnded || isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [videoEnded, isMobile, slides.length]);

  // Handle manual slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Dark gradient overlay from top to 40% of screen */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10"
        style={{ height: '40%' }}></div>

      {/* Background - Image for mobile, Video/Slider for desktop */}
      <div className="absolute inset-0">
        {isMobile ? (
          // Mobile: Static image
          <img
            src={`${__IMAGE_BASE_PATH__}/hero1-bg.png`}
            alt="Hero background"
            className="w-full h-full object-cover"
            loading="eager"
          />
        ) : videoEnded ? (
          // Desktop after video ends: Slider with only images
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          // Desktop: Initial video
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            poster={`${__IMAGE_BASE_PATH__}/hero1-poster.jpg`}
            className="w-full h-full object-cover"
          >
            <source src={`${__IMAGE_BASE_PATH__}/surya_hero_video.mp4`} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        )}

        {/* Uniform overlay for both video and slider */}
        <div className="absolute inset-0 bg-black/25 z-10"></div>
      </div>

      {/* Tagline - only show on initial video/mobile, not on slider */}
      {(!videoEnded || isMobile) && (
        <div className="absolute z-20 flex items-center bottom-30 right-0 justify-end px-6 sm:pr-12 md:pr-36">
          <div className="max-w-7xl w-full text-right">
            <h1 className="text-3xl sm:text-3xl font-bold text-orange-700 mb-1 drop-shadow-lg">
              More Value
            </h1>
            <h1 className="text-6xl sm:text-6xl font-bold text-white mb-1 drop-shadow-lg">
              Building a Stronger Tomorrow. The Surya Way.
            </h1>
            <h2 className="text-3xl sm:text-3xl font-semibold italic text-white drop-shadow-lg">
              The trusted legacy of Maithan, rebranded for a new era of excellence.
            </h2>
          </div>
        </div>
      )}

      {/* Slider Indicators (only show after video ends on desktop) */}
      {!isMobile && videoEnded && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar for Current Slide */}
      {!isMobile && videoEnded && (
        <div className="absolute bottom-0 left-0 right-0 h-1 z-20">
          <div
            className="h-full bg-orange-600 transition-all duration-5000 ease-linear"
            style={{
              width: '100%',
              animation: `progress 5s linear`,
              animationPlayState: 'running'
            }}
            key={currentSlide} // Reset animation on slide change
          />
          <style jsx>{`
            @keyframes progress {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>
        </div>
      )}
    </section>
  );
};

export default HeroSection;