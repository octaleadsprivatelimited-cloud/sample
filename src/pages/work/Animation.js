import React from 'react';
import { abroadShootsImages } from '../../data/abroadShootsImages';

const Animation = () => {
  return (
    <div className="animation-page">
      <section className="hero hero-with-image">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Animation</h1>
        </div>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {abroadShootsImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <h3>{image.alt}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Animation;
