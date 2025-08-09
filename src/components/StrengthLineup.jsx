/* global __IMAGE_BASE_PATH__ */
import React, { useEffect, useRef, useState } from 'react';

const StrengthLineup = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Surya Concretec Cement",
      description: "Super Dhalai PPC cement engineered for superior slab casting and long-term durability. BIS Certified | 50 kg | Best for roofs and foundations",
      image: "left.png"
    },
    {
      id: 2,
      name: "Surya Gold PPC Cement",
      description: "High-performance Portland Pozzolana Cement ideal for all weather construction. Smooth finish | Water-resistant | BIS Compliant",
      image: "middle.png"
    },
    {
      id: 3,
      name: "Surya Gold OPC Cement",
      description: "Ordinary Portland Cement (Grade 53) for fast-setting and strong structures. Ideal for RCC work | High strength | Rapid development",
      image: "right.png"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    // Auto-slide functionality
    const startSlider = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % products.length);
      }, 3000);
    };

    startSlider();

    // Pause on hover
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('mouseenter', () => {
        clearInterval(intervalRef.current);
      });
      slider.addEventListener('mouseleave', startSlider);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalRef.current);
      if (slider) {
        slider.removeEventListener('mouseenter', () => {});
        slider.removeEventListener('mouseleave', startSlider);
      }
    };
  }, [products.length]);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    fontFamily: "'Arial', 'Helvetica', sans-serif",
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    maxWidth: '800px'
  };

  const titleStyle = {
    fontSize: isMobile ? '2rem' : '2.5rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '15px',
    position: 'relative',
    display: 'inline-block'
  };

  const underlineStyle = {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: '#e74c3c',
    borderRadius: '2px'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    color: '#7f8c8d',
    lineHeight: '1.6'
  };

  const sliderContainerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
    height: '500px',
    margin: '0 auto',
    overflow: 'hidden'
  };

  const sliderStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    height: '100%',
    width: `${products.length * 100}%`,
    transform: `translateX(-${currentSlide * (100 / products.length)}%)`
  };

  const slideStyle = {
    width: `${100 / products.length}%`,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 40px',
    boxSizing: 'border-box'
  };

  const imageContainerStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    maxHeight: '60%',
    marginBottom: '20px'
  };

  const imageStyle = {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
    transition: 'transform 0.3s ease',
    transform: 'scale(0.9)'
  };

  const activeImageStyle = {
    ...imageStyle,
    transform: 'scale(1)'
  };

  const infoStyle = {
    textAlign: 'center',
    maxWidth: '500px',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.5s ease',
    height: '40%'
  };

  const activeInfoStyle = {
    opacity: 1,
    transform: 'translateY(0)'
  };

  const productNameStyle = {
    fontSize: isMobile ? '1.3rem' : '1.6rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '15px'
  };

  const productDescStyle = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    color: '#7f8c8d',
    lineHeight: '1.6'
  };

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px'
  };

  const dotStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#bdc3c7',
    margin: '0 5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const activeDotStyle = {
    ...dotStyle,
    background: '#e74c3c',
    transform: 'scale(1.2)'
  };

  const navButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.8)',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    zIndex: 10,
    fontSize: '1.5rem',
    color: '#2c3e50',
    transition: 'all 0.3s ease'
  };

  const prevButtonStyle = {
    ...navButtonStyle,
    left: '20px'
  };

  const nextButtonStyle = {
    ...navButtonStyle,
    right: '20px'
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? products.length - 1 : prev - 1));
    resetInterval();
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % products.length);
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % products.length);
    }, 3000);
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>
          Our Strength
          <span style={underlineStyle}></span>
        </h2>
        <p style={subtitleStyle}>
          Versatile strength for every build you envision. Premium quality cement solutions for all construction needs.
        </p>
      </div>

      <div ref={sliderRef} style={sliderContainerStyle}>
        <button style={prevButtonStyle} onClick={handlePrev}>&#10094;</button>
        
        <div style={sliderStyle}>
          {products.map((product, index) => (
            <div key={product.id} style={slideStyle}>
              <div style={imageContainerStyle}>
                <img
                  src={`${__IMAGE_BASE_PATH__}/${product.image}`}
                  alt={product.name}
                  style={currentSlide === index ? activeImageStyle : imageStyle}
                  loading="lazy"
                />
              </div>
              <div style={currentSlide === index ? {...infoStyle, ...activeInfoStyle} : infoStyle}>
                <h3 style={productNameStyle}>{product.name}</h3>
                <p style={productDescStyle}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button style={nextButtonStyle} onClick={handleNext}>&#10095;</button>
      </div>

      <div style={dotsContainerStyle}>
        {products.map((_, index) => (
          <div
            key={index}
            style={currentSlide === index ? activeDotStyle : dotStyle}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default StrengthLineup;