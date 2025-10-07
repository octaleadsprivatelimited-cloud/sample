import React from 'react';
import { classicGraphicsData } from '../data/externalData';

const About = () => {
  const { aboutUs, companyInfo, services, values, vision, mission, whyChooseUs, studentLifebook } = classicGraphicsData;

  return (
    <div className="about-page">
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