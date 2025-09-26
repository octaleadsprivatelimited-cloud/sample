import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero hero-with-image">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>About Pixel-i</h1>
          <p>
            At Pixel-i, we are passionate about bringing creative visions to life. 
            Specializing in TV commercials, digital films, print campaigns, events, and catalogue shoots.
          </p>
        </div>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Bringing Creative Visions to Life</h2>
              <p>
                At Pixel-i, we are passionate about bringing creative visions to life. 
                Specializing in TV commercials, digital films, print campaigns, events, and catalogue shoots, 
                we pride ourselves on delivering high-quality content that captivates audiences and elevates brands.
              </p>
              <p>
                With a team of dedicated professionals and state-of-the-art technology, we combine innovation 
                and expertise to produce visually stunning and impactful media. Our commitment to excellence 
                and attention to detail ensures that every project we undertake meets the highest standards 
                of creativity and professionalism.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature-grid">
                <div className="feature-item">
                  <h3>🎬 TV Commercials</h3>
                  <p>Professional TV commercial production with creative storytelling</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Digital Films</h3>
                  <p>Engaging digital content for modern audiences</p>
                </div>
                <div className="feature-item">
                  <h3>📸 Print Campaigns</h3>
                  <p>Stunning print photography for advertising and marketing</p>
                </div>
                <div className="feature-item">
                  <h3>🎉 Events</h3>
                  <p>Complete event coverage and documentation</p>
                </div>
                <div className="feature-item">
                  <h3>📦 Catalogue Shoots</h3>
                  <p>Professional product photography for catalogues</p>
                </div>
                <div className="feature-item">
                  <h3>🌍 Abroad Shoots</h3>
                  <p>International photography and video production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
