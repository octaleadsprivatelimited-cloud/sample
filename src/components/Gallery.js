import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Gallery = ({ images, title }) => {
  const [imageErrors, setImageErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const getImageSrc = (image, index) => {
    if (imageErrors[index]) {
      return `https://via.placeholder.com/600x400/333333/FFFFFF?text=${encodeURIComponent(image.alt)}`;
    }
    return image.src;
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="gallery-title">{title}</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openModal(index)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={getImageSrc(image, index)} 
                alt={image.alt}
                onError={() => handleImageError(index)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="gallery-overlay">
                <p>{image.description}</p>
                <div className="gallery-click-hint">
                  Click to view full size
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        currentIndex={currentImageIndex}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </section>
  );
};

export default Gallery;
