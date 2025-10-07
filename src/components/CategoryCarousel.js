import React, { useState, useEffect } from 'react';
import './CategoryCarousel.css';

const CategoryCarousel = ({ title, images, category, className, slidesToShow = 4, mobileSlides = 2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // For mobile, adjust max index based on mobileSlides prop
        const maxIndex = isMobile ? Math.max(0, images.length - mobileSlides) : images.length;
        if (nextIndex >= maxIndex) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, images.length, isMobile]);

  // Calculate number of dots needed for mobile
  const getDotsCount = () => {
    if (!isMobile) return 0;
    // For sliders showing 1 image on mobile, show all images as dots
    if (mobileSlides === 1) return images.length;
    return Math.max(1, images.length - 1); // Show dots only on mobile for others
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };




  return (
    <div className={`category-carousel ${className || ''}`} data-mobile-slides={mobileSlides}>
      <h3 className="category-title">{title}</h3>
      <div 
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <div className="carousel-track">
          <div 
            className="carousel-slides"
            style={{ 
              transform: `translateX(-${currentIndex * (isMobile ? (100 / mobileSlides) : 25)}%)`,
              transition: isAutoPlaying ? 'transform 0.5s linear' : 'none'
            }}
          >
            {/* Duplicate images for continuous loop */}
            {[...images, ...images].map((image, index) => (
              <div key={index} className="carousel-slide">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="carousel-image"
                />
                <div className="image-overlay">
                  <p className="image-description">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots navigation for mobile */}
        {isMobile && (
          <div className="carousel-dots">
            {Array.from({ length: getDotsCount() }, (_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
        
      </div>
      
    </div>
  );
};

export default CategoryCarousel;
