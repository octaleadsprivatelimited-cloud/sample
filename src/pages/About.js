import React from 'react';
import { Helmet } from 'react-helmet';
import { classicGraphicsData } from '../data/externalData';

const About = () => {
  const { aboutUs, companyInfo, services, values, vision, mission, whyChooseUs, studentLifebook } = classicGraphicsData;

  return (
    <div className="about-page">
      <Helmet>
        <title>About PIXEL-I - Leading AI Films, VFX & Animation Studio in Hyderabad</title>
        <meta name="description" content="Learn about PIXEL-I Creative Studio. We are pioneers in AI Films, VFX, Animation, and Student's Lifebook, combining cutting-edge technology with creative artistry." />
        <meta name="keywords" content="About PIXEL-I, Creative Studio Hyderabad, AI Film Studio, VFX Company, Animation Studio India, Student Lifebook" />
        <link rel="canonical" href="https://www.pixel-i.in/about" />
        
        <meta property="og:title" content="About PIXEL-I - AI Films, VFX & Animation Studio" />
        <meta property="og:description" content="Pioneers in AI Films, VFX, and Animation combining cutting-edge technology with creative artistry" />
        <meta property="og:url" content="https://www.pixel-i.in/about" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About PIXEL-I Creative Studio",
            "description": "Information about PIXEL-I, a leading creative studio specializing in AI Films, VFX, and Animation",
            "url": "https://www.pixel-i.in/about"
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
        <div className="hero-content about-hero-content">
          <p className="about-tagline">{companyInfo.tagline}</p>
        </div>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Pixel-i</h2>
              <p>{aboutUs.description}</p>
              
              <div className="vision-mission">
                <div className="vision">
                  <h3>Our Vision</h3>
                  <p>{aboutUs.vision}</p>
                </div>
                
                <div className="mission">
                  <h3>Our Mission</h3>
                  <ul>
                    {aboutUs.mission.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="founder-section">
              <h2>Meet Our Founder</h2>
              <div className="founder-content">
                <div className="founder-image">
                  <img src="/images/founder.webp" alt="Mr. Ramaiah Raju (B A Raju) - Founder of PIXEL-I" />
                </div>
                <div className="founder-text">
                  <h3>Mr. Ramaiah Raju (B A Raju)</h3>
                  <h4>Founder & Visionary Leader</h4>
                  <p>
                    Mr. Ramaiah Raju (B A Raju) holds a B.Sc. and specialized training in Marine Engineering from Hindustan Shipyard, Visakhapatnam. With over 23 years in education and entertainment, he excels in creative direction, operations, and digital filmmaking.
                  </p>
                  <p>
                    His expertise spans animation, VFX, e-learning, and multimedia, delivering innovative projects with strategic and creative excellence. Having worked with Pentafour Software and the Sri Sathya Sai Organisation, he gained strong experience in managing large-scale 2D/3D productions and global film markets.
                  </p>
                  <p>
                    As the Founder of PIXEL-I (Visualize Your Idea), Mr. Raju leads business strategy, marketing, and innovation with visionary leadership. A true blend of creativity and strategy, he continues to inspire transformation in the digital media space.
                  </p>
                  <div className="founder-strengths">
                    <h4>Key Strengths:</h4>
                    <ul>
                      <li>23+ years in education & entertainment</li>
                      <li>Expertise in animation, VFX & filmmaking</li>
                      <li>Strategic project & business management</li>
                      <li>International film market exposure</li>
                      <li>Strong leadership & team-building skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="services-section">
              <h2>What We Do</h2>
              <div className="services-grid">
                {services.map((service, index) => (
                  <div key={index} className="service-item">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="student-lifebook-section">
              <h2>Student's Lifebook</h2>
              <div className="lifebook-grid">
                <div className="lifebook-item">
                  <h4>Awareness</h4>
                  <p>{studentLifebook.awareness}</p>
                </div>
                <div className="lifebook-item">
                  <h4>Discovery</h4>
                  <p>{studentLifebook.discovery}</p>
                </div>
                <div className="lifebook-item">
                  <h4>Evolution</h4>
                  <p>{studentLifebook.evolution}</p>
                </div>
                <div className="lifebook-item">
                  <h4>Creativity</h4>
                  <p>{studentLifebook.creativity}</p>
                </div>
                <div className="lifebook-item">
                  <h4>Innovative Ideas</h4>
                  <p>{studentLifebook.innovativeIdeas}</p>
                </div>
                <div className="lifebook-item">
                  <h4>Aims</h4>
                  <p>{studentLifebook.aims}</p>
                </div>
              </div>
            </div>
            
            <div className="values-section">
              <h2>Our Values</h2>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-item">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-choose-us-section">
              <h2>Why Choose Pixel-i?</h2>
              <ul className="why-choose-list">
                {whyChooseUs.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;