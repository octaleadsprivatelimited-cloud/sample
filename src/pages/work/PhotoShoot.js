import React from 'react';

const PhotoShoot = () => {
  return (
    <div className="photo-shoot-page">
      <section className="hero hero-with-image">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Photo Shoot</h1>
        </div>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">Photo Shoot 1</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Photo Shoot 2</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Photo Shoot 3</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Photo Shoot 4</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Photo Shoot 5</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Photo Shoot 6</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Photo Shoot 7</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Photo Shoot 8</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoShoot;
