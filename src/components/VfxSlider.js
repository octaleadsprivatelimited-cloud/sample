import React, { useState, useEffect } from 'react';
import './PhotographySlider.css'; // Reuse the same styles
import { vfxImages } from '../data/images';

const VfxSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vfxImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + vfxImages.length) % vfxImages.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % vfxImages.length);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="photography-slider">
      <div className="slider-container">
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {vfxImages.map((image, index) => (
            <div key={index} className="slider-slide">
              <div className="slide-image">
                <img src={image.src} alt={image.alt} />
                <div className="slide-overlay">
                  <div className="slide-content">
                    <h3 className="slide-title">{image.alt}</h3>
                    <p className="slide-description">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button 
          className="slider-nav slider-prev" 
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button 
          className="slider-nav slider-next" 
          onClick={goToNext}
          aria-label="Next slide"
        >
          &#8250;
        </button>

        {/* Slide indicators */}
        <div className="slider-indicators">
          {vfxImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play toggle */}
        <button 
          className="auto-play-toggle"
          onClick={toggleAutoPlay}
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? '⏸️' : '▶️'}
        </button>
      </div>
    </div>
  );
};

export default VfxSlider;
