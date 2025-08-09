/* global __IMAGE_BASE_PATH__ */
import React, { useRef, useEffect, useState } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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
    
    video.loop = true;
    video.play().catch(() => {});
  }, [isMobile]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10 h-1/3"></div>
      
      {/* Background - Image for mobile, Video for desktop */}
      <div className="absolute inset-0">
        {isMobile ? (
          <img
            src={`${__IMAGE_BASE_PATH__}/hero1-bg.png`}
            alt="Hero background"
            className="w-full h-full object-cover"
            loading="eager"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            poster={`${__IMAGE_BASE_PATH__}/hero1-poster.jpg`}
            className="w-full h-full object-cover"
          >
            <source src={`${__IMAGE_BASE_PATH__}/hero1-bg.mp4`} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        )}
        {/* Blackish light overlay */}
        <div className="absolute inset-0 bg-black/35 z-10"></div>
      </div>

      {/* Tagline */}
      <div className="absolute z-20 flex items-center bottom-30 right-0 justify-end px-6 sm:pr-12 md:pr-36">
        <div className="text-right">
          <h1 className="text-3xl sm:text-3xl font-bold text-orange-700 mb-1 drop-shadow-lg">
            More Value
          </h1>
          <h1 className="text-6xl sm:text-6xl font-bold text-white mb-1 drop-shadow-lg">
            Less Waste
          </h1>
          <h2 className="text-3xl sm:text-3xl font-semibold italic text-white drop-shadow-lg">
            The Maithan Way
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;