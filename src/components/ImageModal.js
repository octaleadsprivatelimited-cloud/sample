import React, { useEffect } from 'react';

const ImageModal = ({ isOpen, onClose, images, currentIndex, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>
        
        <button className="modal-nav-btn modal-prev-btn" onClick={onPrev}>
          ‹
        </button>
        
        <div className="modal-image-container">
          <img 
            src={currentImage.src} 
            alt={currentImage.alt}
            className="modal-image"
          />
          <div className="modal-image-info">
            <h3>{currentImage.alt}</h3>
            <p>{currentImage.description}</p>
          </div>
        </div>
        
        <button className="modal-nav-btn modal-next-btn" onClick={onNext}>
          ›
        </button>
        
        <div className="modal-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
