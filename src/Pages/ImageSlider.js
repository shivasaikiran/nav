import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const slideCount = slides.length;

  useEffect(() => {
    const slider = sliderRef.current;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000); // Auto slide interval: 3000ms (3 seconds)

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [slideCount]); // Re-run effect if slideCount changes (e.g., when slides change)

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider-container" ref={sliderRef}>
      <div className="image-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="image-slide" key={index}>
            <img src={slide.image} alt={`Slide ${index}`} />
            <div className="slide-content">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
