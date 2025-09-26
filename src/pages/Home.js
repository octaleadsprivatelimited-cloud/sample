import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCarousel from '../components/CategoryCarousel';
import { 
  weddingImages, 
  eventImages, 
  birthdayImages, 
  portraitImages, 
  natureImages 
} from '../data/images';

const Home = () => {
  return (
    <div>
      <section className="hero hero-with-image">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Pixel-i</h1>
          <h2>Bringing Creative Visions to Life</h2>
          <p>
            Professional photography and video production services specializing in TV commercials, 
            digital films, print campaigns, events, and catalogue shoots. We deliver high-quality 
            content that captivates audiences and elevates brands.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">Our Services</Link>
            <Link to="/about" className="btn-secondary">About Us</Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content-left">
              <div className="about-image">
                <div className="image-placeholder">
                  <span>Professional Photography Studio</span>
                </div>
              </div>
            </div>
            <div className="about-content-right">
              <h2>About Pixel-i</h2>
              <p>
                We are a professional photography and video production company specializing in 
                creative content that brings your vision to life. Our team combines technical 
                expertise with artistic creativity to deliver exceptional results.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <h3>🎬 Professional Production</h3>
                  <p>High-end equipment and experienced crew for all projects</p>
                </div>
                <div className="feature-item">
                  <h3>🎨 Creative Excellence</h3>
                  <p>Innovative approaches to storytelling and visual content</p>
                </div>
                <div className="feature-item">
                  <h3>⚡ Fast Turnaround</h3>
                  <p>Efficient workflow ensuring timely delivery</p>
                </div>
              </div>
              <div className="about-cta">
                <Link to="/about" className="btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Category Carousels Section */}
      <section className="categories-section">
        <div className="carousels-full-width">
          
          {/* Wedding Photography */}
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Wedding Photography"
                images={weddingImages}
                category="wedding"
              />
              <Link to="/wedding" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>

          {/* Event Photography */}
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Event Photography"
                images={eventImages}
                category="event"
              />
              <Link to="/event" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>

          {/* Birthday Photography */}
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Birthday Photography"
                images={birthdayImages}
                category="birthday"
              />
              <Link to="/birthday" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>

          {/* Portrait Photography */}
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Portrait Photography"
                images={portraitImages}
                category="portrait"
              />
              <Link to="/portrait" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>

          {/* Nature Photography */}
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Nature Photography"
                images={natureImages}
                category="nature"
              />
              <Link to="/nature" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <h2>Our Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-image">
                <div className="service-placeholder">
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-image">
                <div className="service-placeholder">
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-image">
                <div className="service-placeholder">
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-image">
                <div className="service-placeholder">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="clients-section">
        <div className="container">
          <div className="clients-header">
            <h2>Our Clients</h2>
          </div>
          <div className="clients-slider">
            <div className="clients-track">
              <div className="client-item">
                <div className="client-logo">
                  <span>Brand 1</span>
                </div>
              </div>
              <div className="client-item">
                <div className="client-logo">
                  <span>Brand 2</span>
                </div>
              </div>
              <div className="client-item">
                <div className="client-logo">
                  <span>Brand 3</span>
                </div>
              </div>
              <div className="client-item">
                <div className="client-logo">
                  <span>Brand 4</span>
                </div>
              </div>
              <div className="client-item">
                <div className="client-logo">
                  <span>Brand 5</span>
                </div>
              </div>
              <div className="client-item">
                <div className="client-logo">
                  <span>Brand 6</span>
                </div>
              </div>
              <div className="client-item">
                <div className="client-logo">
                  <span>Brand 7</span>
                </div>
              </div>
              <div className="client-item">
                <div className="client-logo">
                  <span>Brand 8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
