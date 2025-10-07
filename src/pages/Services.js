import React from 'react';

const Services = () => {
  return (
    <div className="services-page">
      <section className="hero hero-with-video">
        <div className="hero-background">
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/images/Pixell-I-Logo-video-compressed.mp4" type="video/mp4" />
          </video>
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
                <div 
                  className="service-photo" 
                  style={{
                    backgroundImage: "url('/images/aifilmposters/aifilm.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              <div className="service-info right">
                <h3>AI Film Making</h3>
                <p>Revolutionary AI-powered film production that combines cutting-edge artificial intelligence with creative storytelling to produce next-generation cinematic content.</p>
                <ul>
                  <li>AI Script Generation</li>
                  <li>Automated Storyboarding</li>
                  <li>Smart Character Creation</li>
                  <li>AI-Powered Editing</li>
                  <li>Intelligent Post-Production</li>
                </ul>
              </div>
            </div>

            {/* Row 2: Text left, video right */}
            <div className="service-row reverse">
              <div className="service-media right">
                <div className="service-photo">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  >
                    <source src="/images/vfx/Mystical_Cave_VFX_Video_Generation.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="service-info left">
                <h3>VFX</h3>
                <p>Advanced visual effects and post-production services that bring impossible worlds to life with state-of-the-art VFX technology and creative expertise.</p>
                <ul>
                  <li>3D Modeling & Animation</li>
                  <li>Compositing & Green Screen</li>
                  <li>Motion Graphics</li>
                  <li>Special Effects</li>
                  <li>Color Grading</li>
                </ul>
              </div>
            </div>

            {/* Row 3: Image left, text right */}
            <div className="service-row">
              <div className="service-media left">
                <div 
                  className="service-photo" 
                  style={{
                    backgroundImage: "url('/images/ourservises/03..jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              <div className="service-info right">
                <h3>Life Book</h3>
                <p>Comprehensive student life documentation and educational content creation that captures academic journeys, achievements, and personal growth stories.</p>
                <ul>
                  <li>Student Portfolio Creation</li>
                  <li>Academic Journey Documentation</li>
                  <li>Personal Growth Stories</li>
                  <li>Educational Content</li>
                  <li>Memory Preservation</li>
                </ul>
              </div>
            </div>

            {/* Row 4: Text left, image right */}
            <div className="service-row reverse">
              <div className="service-media right">
                <div 
                  className="service-photo" 
                  style={{
                    backgroundImage: "url('/images/ourservises/04..jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              <div className="service-info left">
                <h3>Animation</h3>
                <p>Creative animation services spanning 2D, 3D, and motion graphics to bring characters, stories, and concepts to life with artistic excellence.</p>
                <ul>
                  <li>2D Animation</li>
                  <li>3D Character Animation</li>
                  <li>Motion Graphics</li>
                  <li>Explainer Videos</li>
                  <li>Interactive Animations</li>
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
