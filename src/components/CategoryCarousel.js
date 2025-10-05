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
        // Reset to 0 when we reach the end of the first set of images
        if (nextIndex >= images.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, images.length]);




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
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 25)}%)`,
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
        
      </div>
      
    </div>
  );
};

export default CategoryCarousel;
