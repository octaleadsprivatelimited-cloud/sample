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
  servicesImages 
} from '../data/images';
import { abroadShootsImages } from '../data/abroadShootsImages';

const Home = () => {
  return (
    <div>
      <section className="hero hero-with-image">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>PIXEL- i</h1>
          <h2>VISUALIZE YOUR IDEA</h2>
          <p>
            AI FILMS | VFX | ANIMATION | STUDENT'S LIFEBOOK
          </p>
          <p>
            A pioneering creative studio at the forefront of AI Films, advanced visual effects (VFX), 
            and next-generation animation. We craft immersive, world-class content for cinema, television, advertising, 
            gaming, and digital platforms.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">Our Services</Link>
            <Link to="/about" className="btn-secondary">About Us</Link>
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
            <svg className="social-instagram" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 1.297c-1.297 0-2.448.49-3.323 1.297-.807.875-1.297 2.026-1.297 3.323s.49 2.448 1.297 3.323c.875.807 2.026 1.297 3.323 1.297s2.448-.49 3.323-1.297c.807-.875 1.297-2.026 1.297-3.323s-.49-2.448-1.297-3.323c-.875-.807-2.026-1.297-3.323-1.297z"/>
            </svg>
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
                  <div className="about-image">
                    <div className="image-placeholder">
                    </div>
                  </div>
            </div>
                <div className="about-content-right">
                  <h2>About PIXEL- i</h2>
                  <p>
                    We are a pioneering creative studio at the forefront of AI Films, 
                    advanced visual effects (VFX), and next-generation animation. Our team combines 
                    cutting-edge technology with creative artistry to deliver exceptional results.
                  </p>
                  <div className="about-features">
                    <div className="feature-item">
                      <h3>🤖 AI Integration</h3>
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
                    <Link to="/about" className="btn-primary">Learn More</Link>
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
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Animation"
                images={animationImages}
                category="animation"
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
