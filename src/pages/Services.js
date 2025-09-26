import React from 'react';

const Services = () => {
  return (
    <div className="services-page">
      <section className="hero hero-with-image">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
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
            {/* Row 1: Image left, text right */}
            <div className="service-row">
              <div className="service-media left">
                <div className="service-photo tvc"></div>
              </div>
              <div className="service-info right">
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
            </div>

            {/* Row 2: Text left, image right */}
            <div className="service-row reverse">
              <div className="service-media right">
                <div className="service-photo digital"></div>
              </div>
              <div className="service-info left">
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
            </div>

            {/* Row 3: Image left, text right */}
            <div className="service-row">
              <div className="service-media left">
                <div className="service-photo print"></div>
              </div>
              <div className="service-info right">
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
            </div>

            {/* Row 4: Text left, image right */}
            <div className="service-row reverse">
              <div className="service-media right">
                <div className="service-photo events"></div>
              </div>
              <div className="service-info left">
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
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
