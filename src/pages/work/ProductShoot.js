import React from 'react';

const ProductShoot = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Product Shoot</h1>
          <p>
            Professional product photography for e-commerce, catalogues, and retail marketing
          </p>
        </div>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <div className="work-content">
            <div className="work-description">
              <h2>Professional Product Photography</h2>
              <p>
                Our product photography services are designed to showcase your products in the best possible light. 
                From simple white background shots to complex lifestyle photography, we create compelling visuals 
                that drive sales and enhance your brand presence. Perfect for e-commerce, catalogues, 
                and retail marketing materials.
              </p>
            </div>

            <div className="work-features">
              <div className="feature-grid">
                <div className="feature-item">
                  <h3>🛒 E-commerce Photography</h3>
                  <p>High-quality product images for online stores and marketplaces</p>
                </div>
                <div className="feature-item">
                  <h3>📦 Product Catalogues</h3>
                  <p>Professional catalogue photography for retail and wholesale</p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Lifestyle Product Shoots</h3>
                  <p>Products in real-life contexts and environments</p>
                </div>
                <div className="feature-item">
                  <h3>⚪ White Background Shoots</h3>
                  <p>Clean, professional product shots on white backgrounds</p>
                </div>
                <div className="feature-item">
                  <h3>🔄 360° Product Views</h3>
                  <p>Interactive 360-degree product photography</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Social Media Content</h3>
                  <p>Product images optimized for social media platforms</p>
                </div>
              </div>
            </div>

            <div className="work-portfolio">
              <h2>Our Product Photography</h2>
              <div className="portfolio-grid">
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>E-commerce Products</span>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>Lifestyle Shoots</span>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>White Background</span>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-placeholder">
                    <span>360° Views</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-cta">
              <h2>Showcase Your Products</h2>
              <p>Let's create stunning product photography that drives sales and enhances your brand.</p>
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

export default ProductShoot;
