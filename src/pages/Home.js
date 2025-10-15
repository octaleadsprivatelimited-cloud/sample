import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCarousel from '../components/CategoryCarousel';
import {
  weddingImages,
  eventImages,
  birthdayImages,
  portraitImages,
  natureImages,
  vfxImages,
  lifeBookImages,
  animationImages,
  pureAnimationImages,
  servicesImages
} from '../data/images';
import { abroadShootsImages } from '../data/abroadShootsImages';

const Home = () => {
  return (
    <div>
      <section className="hero hero-with-video">
        <div className="hero-background">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            playsInline
          >
            <source src="/images/a.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-buttons">
            <Link to="/services" className="btn-primary hero-btn">Our Services</Link>
            <Link to="/about" className="btn-primary hero-btn">About Us</Link>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="hero-social-icons">
          <a href="https://twitter.com/pixeli" target="_blank" rel="noopener noreferrer" className="social-icon" title="Follow us on Twitter">
            <svg className="social-twitter" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://facebook.com/pixeli" target="_blank" rel="noopener noreferrer" className="social-icon" title="Follow us on Facebook">
            <svg className="social-facebook" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://instagram.com/pixeli" target="_blank" rel="noopener noreferrer" className="social-icon" title="Follow us on Instagram">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968776.png" alt="Instagram" className="social-instagram-img" />
          </a>
          <a href="https://youtube.com/pixeli" target="_blank" rel="noopener noreferrer" className="social-icon" title="Subscribe to our YouTube">
            <svg className="social-youtube" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content-left">
                  <div className="about-image" style={{ marginTop: '20px' }}>
                    <img src="/images/home_about.jpg" alt="About Pixel-i" />
                  </div>
            </div>
                <div className="about-content-right">
                  <h2>About Pixel-i</h2>
                  <p>
                    We are a pioneering creative studio at the forefront of AI Films, 
                    advanced visual effects (VFX), and next-generation animation. Our team combines 
                    cutting-edge technology with creative artistry to deliver exceptional results.
                  </p>
                  <div className="about-features">
                    <div className="feature-item">
                      <h3>🤖 Ai Film integration</h3>
                      <p>State-of-the-art AI technologies for streamlined workflows</p>
                    </div>
                    <div className="feature-item">
                      <h3>🎬 VFX Excellence</h3>
                      <p>Advanced visual effects and hyper-realistic visuals</p>
                    </div>
                    <div className="feature-item">
                      <h3>🎓 Student's Lifebook</h3>
                      <p>Educational programs fostering creativity and innovation</p>
                    </div>
                  </div>
                  <div className="about-cta">
                    <Link to="/about" className="btn-primary">View More</Link>
                  </div>
                </div>
          </div>
        </div>
      </section>

      
      {/* Category Carousels Section */}
      <section className="categories-section">
        <div className="carousels-full-width">
          
              {/* AI Film Making */}
              <div className="category-section">
                <div className="category-section-header">
                  <CategoryCarousel 
                    title="AI Film Making"
                    images={animationImages}
                    category="animation"
                  />
                  <Link to="/work/ai-film-making" className="view-btn-top-right">
                    View All
                  </Link>
                </div>
              </div>

          {/* VFX */}
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="VFX"
                images={vfxImages}
                category="vfx"
                className="vfx-carousel"
                mobileSlides={1}
              />
              <Link to="/work/vfx" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>

              {/* Life Book */}
              <div className="category-section" data-category="life-book">
                <div className="category-section-header">
                  <CategoryCarousel 
                    title="Life Book"
                    images={lifeBookImages}
                    category="life-book"
                  />
                  <Link to="/work/life-book" className="view-btn-top-right">
                    View All
                  </Link>
                </div>
              </div>

          {/* Animation */}
          <div className="category-section" data-category="animation">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Animation"
                images={pureAnimationImages}
                category="animation"
                mobileSlides={1}
              />
              <Link to="/work/animation" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Our Services Section */}
      <section className="clients-section">
        <div className="container">
          <div className="clients-header">
            <h2>Our Services</h2>
          </div>
          <CategoryCarousel 
            title=""
            images={servicesImages}
            category="services"
            className="services-carousel"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
