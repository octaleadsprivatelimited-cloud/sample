import React from 'react';

const Services = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>
            Comprehensive creative production services to bring your vision to life
          </p>
        </div>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <div className="services-content">
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🎬</div>
                <h3>TV Commercials</h3>
                <p>Professional TV commercial production with creative storytelling, high-end cinematography, and compelling narratives that engage audiences and drive brand awareness.</p>
                <ul>
                  <li>Concept Development</li>
                  <li>Script Writing</li>
                  <li>Pre-production Planning</li>
                  <li>Professional Shooting</li>
                  <li>Post-production & Editing</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">📱</div>
                <h3>Digital Films</h3>
                <p>Engaging digital content for modern audiences across social media platforms, web, and digital marketing campaigns.</p>
                <ul>
                  <li>Social Media Content</li>
                  <li>Web Series</li>
                  <li>Digital Marketing Videos</li>
                  <li>Brand Storytelling</li>
                  <li>Interactive Content</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">📸</div>
                <h3>Print Campaigns</h3>
                <p>Stunning print photography for advertising, marketing materials, billboards, magazines, and promotional content.</p>
                <ul>
                  <li>Fashion Photography</li>
                  <li>Lifestyle Shoots</li>
                  <li>Product Photography</li>
                  <li>Editorial Work</li>
                  <li>Brand Campaigns</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">🎉</div>
                <h3>Events</h3>
                <p>Complete event coverage and documentation for corporate events, weddings, conferences, and special occasions.</p>
                <ul>
                  <li>Corporate Events</li>
                  <li>Wedding Photography</li>
                  <li>Conferences & Seminars</li>
                  <li>Product Launches</li>
                  <li>Live Streaming</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">📦</div>
                <h3>Catalogue Shoots</h3>
                <p>Professional product photography for e-commerce, catalogues, and retail marketing materials.</p>
                <ul>
                  <li>E-commerce Photography</li>
                  <li>Product Catalogues</li>
                  <li>Lifestyle Product Shoots</li>
                  <li>White Background Shoots</li>
                  <li>360° Product Views</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">🌍</div>
                <h3>Abroad Shoots</h3>
                <p>International photography and video production services for global brands and international projects.</p>
                <ul>
                  <li>International Travel</li>
                  <li>Global Brand Campaigns</li>
                  <li>Cultural Documentation</li>
                  <li>International Events</li>
                  <li>Worldwide Coverage</li>
                </ul>
              </div>
            </div>

            <div className="services-cta">
              <h2>Ready to Start Your Project?</h2>
              <p>Contact us today to discuss your creative vision and how we can bring it to life.</p>
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

export default Services;
