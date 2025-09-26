import React from 'react';

const TvCs = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>TV Commercials</h1>
          <p>
            Professional TV commercial production with creative storytelling and compelling narratives
          </p>
        </div>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <div className="work-content">
            <div className="work-description">
              <h2>Professional TV Commercial Production</h2>
              <p>
                Our TV commercial production services combine creative storytelling with technical excellence. 
                From concept development to final broadcast, we create compelling commercials that engage audiences 
                and drive brand awareness. With professional equipment, experienced crew, and creative direction, 
                we bring your brand story to life on screen.
              </p>
            </div>

            <div className="work-features">
              <div className="feature-grid">
                <div className="feature-item">
                  <h3>💡 Concept Development</h3>
                  <p>Creative ideation and concept development for TV commercials</p>
                </div>
                <div className="feature-item">
                  <h3>📝 Script Writing</h3>
                  <p>Professional script writing and storyboarding</p>
                </div>
                <div className="feature-item">
                  <h3>🎬 Pre-production Planning</h3>
                  <p>Comprehensive planning and coordination for smooth production</p>
                </div>
                <div className="feature-item">
                  <h3>🎥 Professional Shooting</h3>
                  <p>High-end cinematography with professional equipment and crew</p>
                </div>
                <div className="feature-item">
                  <h3>✂️ Post-production & Editing</h3>
                  <p>Professional editing, color grading, and final delivery</p>
                </div>
                <div className="feature-item">
                  <h3>📺 Broadcast Ready</h3>
                  <p>Final delivery in all required formats for TV broadcast</p>
                </div>
              </div>
            </div>

            <div className="work-portfolio">
              <h2>Our TV Commercial Work</h2>
              <div className="portfolio-grid">
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>Brand Commercials</span>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>Product Launches</span>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>Service Campaigns</span>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>Corporate Videos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-cta">
              <h2>Create Your TV Commercial</h2>
              <p>Ready to bring your brand story to life on television? Let's create something memorable.</p>
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

export default TvCs;
