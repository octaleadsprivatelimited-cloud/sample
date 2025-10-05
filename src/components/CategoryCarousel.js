import React, { useState, useEffect } from 'react';
import './CategoryCarousel.css';

const CategoryCarousel = ({ title, images, category, className }) => {
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
        // For mobile, show 2 images at a time, so max index is different
        const maxIndex = isMobile ? Math.max(0, images.length - 2) : images.length;
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
    return Math.max(1, images.length - 1); // Show dots only on mobile
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };




  return (
    <div className={`category-carousel ${className || ''}`}>
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
              transform: `translateX(-${currentIndex * (isMobile ? 50 : 25)}%)`,
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
