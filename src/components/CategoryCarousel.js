import React, { useState, useEffect } from 'react';
import ImageModal from './ImageModal';
import './CategoryCarousel.css';

const CategoryCarousel = ({ title, images, category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

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
      setCurrentIndex((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
    setIsAutoPlaying(false); // Pause auto-play when user interacts
  };

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlaying(false); // Pause auto-play when user interacts
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
  };

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
    setIsAutoPlaying(false); // Pause auto-play when modal opens
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextModal = () => {
    setModalImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevModal = () => {
    setModalImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  return (
    <div className="category-carousel">
      <h3 className="category-title">{title}</h3>
      <div 
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          className="carousel-nav carousel-prev" 
          onClick={goToPrevious}
          aria-label="Previous images"
        >
          &#8249;
        </button>
        
        <div className="carousel-track">
          <div 
            className="carousel-slides"
            style={{ 
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)` 
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="carousel-image"
                  onClick={() => openModal(index)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="image-overlay">
                  <p className="image-description">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="carousel-nav carousel-next" 
          onClick={goToNext}
          aria-label="Next images"
        >
          &#8250;
        </button>
      </div>
      
      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        currentIndex={modalImageIndex}
        onNext={goToNextModal}
        onPrev={goToPrevModal}
      />
    </div>
  );
};

export default CategoryCarousel;
