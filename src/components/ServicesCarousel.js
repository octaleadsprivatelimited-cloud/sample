import React, { useState, useEffect } from 'react';
import './ServicesCarousel.css';

const ServicesCarousel = ({ services }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, services.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="zoom-carousel-container">
      <div 
        className="zoom-carousel-track"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="zoom-carousel-wrapper"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`
          }}
        >
          {services.map((service, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + services.length) % services.length;
            const isNext = index === (currentIndex + 1) % services.length;
            
            return (
              <div 
                key={index} 
                className={`zoom-card ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <div className="card-header">
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <div className="card-content">
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="card-footer">
                  <div className="service-tag">{service.title}</div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Navigation Dots */}
        <div className="carousel-indicators">
          {services.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
