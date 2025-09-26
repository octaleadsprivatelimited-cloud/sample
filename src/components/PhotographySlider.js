import React, { useState, useEffect } from 'react';
import './PhotographySlider.css';

const PhotographySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Featured photography images for the slider
  const sliderImages = [
    {
      src: 'https://picsum.photos/1200/600?random=201',
      alt: 'Stunning wedding moment',
      title: 'Wedding Photography',
      description: 'Capturing your special day with elegance and beauty'
    },
    {
      src: 'https://picsum.photos/1200/600?random=202',
      alt: 'Professional portrait session',
      title: 'Portrait Photography',
      description: 'Professional headshots and personal portraits'
    },
    {
      src: 'https://picsum.photos/1200/600?random=203',
      alt: 'Nature landscape',
      title: 'Nature Photography',
      description: 'Breathtaking landscapes and natural beauty'
    },
    {
      src: 'https://picsum.photos/1200/600?random=204',
      alt: 'Event celebration',
      title: 'Event Photography',
      description: 'Corporate events, parties, and celebrations'
    },
    {
      src: 'https://picsum.photos/1200/600?random=205',
      alt: 'Birthday party',
      title: 'Birthday Photography',
      description: 'Making memories at your special celebrations'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, sliderImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
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
          {sliderImages.map((image, index) => (
            <div key={index} className="slider-slide">
              <div className="slide-image">
                <img src={image.src} alt={image.alt} />
                <div className="slide-overlay">
                  <div className="slide-content">
                    <h3 className="slide-title">{image.title}</h3>
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
          {sliderImages.map((_, index) => (
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

export default PhotographySlider;
