import React from 'react';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>Our Services - AI Film Making, VFX, Animation, Life Book | PIXEL-I</title>
        <meta name="description" content="PIXEL-I offers AI Film Making, VFX, Animation, Student's Life Book, and E-Learning services. Revolutionary AI-powered production with cutting-edge technology." />
        <meta name="keywords" content="AI Film Making Services, VFX Services, Animation Services, Life Book, E-Learning, Rotoscoping, Paint Cleanup, Matchmove, Matte Painting, Compositing" />
        <link rel="canonical" href="https://www.pixel-i.in/services" />
        
        <meta property="og:title" content="Our Services - AI Films, VFX, Animation | PIXEL-I" />
        <meta property="og:description" content="Professional AI Film Making, VFX, Animation, and Educational Content Services" />
        <meta property="og:url" content="https://www.pixel-i.in/services" />
        <meta property="og:type" content="website" />
        
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
            loop 
            playsInline
          >
            <source src="/images/a.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
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
