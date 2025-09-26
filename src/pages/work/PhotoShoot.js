import React from 'react';

const PhotoShoot = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Photo Shoot</h1>
          <p>
            Professional photography services for portraits, fashion, lifestyle, and creative projects
          </p>
        </div>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <div className="work-content">
            <div className="work-description">
              <h2>Professional Photography Services</h2>
              <p>
                Our photo shoot services encompass a wide range of professional photography needs. 
                From intimate portrait sessions to high-fashion editorials, we bring creativity, 
                technical expertise, and artistic vision to every project. With state-of-the-art 
                equipment and professional lighting setups, we ensure every shot is perfect.
              </p>
            </div>

            <div className="work-features">
              <div className="feature-grid">
                <div className="feature-item">
                  <h3>👤 Portrait Photography</h3>
                  <p>Professional headshots, corporate portraits, and personal portraits</p>
                </div>
                <div className="feature-item">
                  <h3>👗 Fashion Photography</h3>
                  <p>Editorial fashion shoots, runway photography, and style campaigns</p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Lifestyle Photography</h3>
                  <p>Natural, candid moments and lifestyle brand photography</p>
                </div>
                <div className="feature-item">
                  <h3>💼 Corporate Photography</h3>
                  <p>Professional business photography and team portraits</p>
                </div>
                <div className="feature-item">
                  <h3>🎨 Creative Photography</h3>
                  <p>Artistic and conceptual photography projects</p>
                </div>
                <div className="feature-item">
                  <h3>📸 Studio Photography</h3>
                  <p>Professional studio setups with controlled lighting</p>
                </div>
              </div>
            </div>

            <div className="work-portfolio">
              <h2>Our Photo Shoot Work</h2>
              <div className="portfolio-grid">
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>Portrait Photography</span>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>Fashion Editorial</span>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>Lifestyle Shoots</span>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>Corporate Portraits</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-cta">
              <h2>Book Your Photo Shoot</h2>
              <p>Ready to capture your perfect moments? Let's create stunning photographs together.</p>
              <div className="cta-buttons">
                <a href="tel:+919704771222" className="btn-primary">Call Us</a>
                <a href="mailto:info@pixel-i.com" className="btn-secondary">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoShoot;
