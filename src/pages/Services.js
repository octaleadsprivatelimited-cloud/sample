import React from 'react';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>VFX, AI Film & Animation Services in Hyderabad | Rotoscoping, Compositing, Matte Painting | PIXEL-I</title>
        <meta name="description" content="Professional VFX Services in Hyderabad: Rotoscoping, Paint & Cleanup, Matchmove, Matte Painting, Compositing. AI Film Making, 2D/3D Animation, Student's Lifebook. HITEC City, Gachibowli, Madhapur. ⭐4.8 Rating. 📞 9704771222" />
        <meta name="keywords" content="VFX services Hyderabad, rotoscoping Hyderabad, compositing services Hyderabad, matte painting Hyderabad, matchmove Hyderabad, paint cleanup Hyderabad, AI film making services Hyderabad, animation services Hyderabad, 2D animation Hyderabad, 3D animation Hyderabad, student lifebook Hyderabad, e-learning Hyderabad, post production Hyderabad, visual effects Telangana, HITEC City VFX, Gachibowli animation services" />
        <link rel="canonical" href="https://www.pixel-i.in/services" />
        
        <meta property="og:title" content="VFX, AI Film & Animation Services Hyderabad | PIXEL-I Telangana" />
        <meta property="og:description" content="Expert VFX Services: Rotoscoping, Compositing, Matte Painting, Matchmove. AI Films, 2D/3D Animation. Serving Hyderabad, HITEC City, Gachibowli." />
        <meta property="og:url" content="https://www.pixel-i.in/services" />
        <meta property="og:type" content="website" />
        <meta property="og:locality" content="Hyderabad" />
        <meta property="og:region" content="Telangana" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Creative Services",
            "provider": {
              "@type": "Organization",
              "name": "PIXEL-I Creative Studio"
            },
            "areaServed": "IN",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Creative Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Film Making"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "VFX Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Animation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Life Book"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <section className="hero hero-with-video">
        <div className="hero-background">
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
              >
            <source src="/images/a.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>AI Films | VFX | Animation | Student's Lifebook</p>
        </div>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
          </div>
          <div className="services-content">
            {/* Row 1: Image left, text right */}
            <div className="service-row">
              <div className="service-media left">
                <div 
                  className="service-photo" 
                  style={{
                    backgroundImage: "url('/images/wp 03 (5).png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              <div className="service-info right">
                <div className="service-info-box">
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
                <div className="service-info-box">
                  <h3>VFX</h3>
                  <p>Advanced visual effects and post-production services that bring impossible worlds to life with state-of-the-art VFX technology and creative expertise.</p>
                  <ul>
                    <li>Rotoscoping</li>
                    <li>Paint & Cleanup</li>
                    <li>Matchmove / Camera Tracking</li>
                    <li>Matte Painting / Environment</li>
                    <li>Compositing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Row 3: Image left, text right */}
            <div className="service-row">
              <div className="service-media left">
                <div 
                  className="service-photo" 
                  style={{
                    backgroundImage: "url('/images/lifebook.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              <div className="service-info right">
                <div className="service-info-box">
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
            </div>

            {/* Row 4: Text left, image right */}
            <div className="service-row reverse">
              <div className="service-media right">
                <div 
                  className="service-photo" 
                  style={{
                    backgroundImage: "url('/images/Animation/Animation_service.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              <div className="service-info left">
                <div className="service-info-box">
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
        </div>
      </section>
    </div>
  );
};

export default Services;
