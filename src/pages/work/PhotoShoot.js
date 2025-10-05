import React from 'react';

const PhotoShoot = () => {
  return (
    <div className="photo-shoot-page">
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
            <div className="gallery-item">
              <div className="gallery-placeholder">Animation 1</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Animation 2</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Animation 3</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Animation 4</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Animation 5</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Animation 6</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Animation 7</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Animation 8</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoShoot;
