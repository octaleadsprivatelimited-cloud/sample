import React, { useState } from 'react';
import { classicGraphicsData } from '../data/externalData';
import './ExternalDataDisplay.css';

const ExternalDataDisplay = () => {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="external-data-container">
      <div className="external-data-header">
        <h2>Live Streaming Services</h2>
        <p>Data sourced from <a href="https://pixel-i.com/" target="_blank" rel="noopener noreferrer">Pixel-i Photography</a></p>
      </div>

      <div className="tabs">
        <button 
          className={activeTab === 'services' ? 'active' : ''}
          onClick={() => setActiveTab('services')}
        >
          Services
        </button>
        <button 
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button 
          className={activeTab === 'faqs' ? 'active' : ''}
          onClick={() => setActiveTab('faqs')}
        >
          FAQs
        </button>
        <button 
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'services' && (
          <div className="services-section">
            <h3>Featured Services</h3>
            <div className="services-grid">
              {classicGraphicsData.services.map((service, index) => (
                <div key={index} className="service-card">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <div className="service-contact">
                    <strong>Book Now: {service.phone}</strong>
                  </div>
                </div>
              ))}
            </div>
            
            <h3>All Live Streaming Services</h3>
            <div className="services-list">
              {classicGraphicsData.liveStreamingServices.map((service, index) => (
                <div key={index} className="service-item">
                  <span className="service-icon">📹</span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="about-section">
            <h3>{classicGraphicsData.aboutUs.title}</h3>
            <p>{classicGraphicsData.aboutUs.description}</p>
            
            <div className="tagline-section">
              <h4>{classicGraphicsData.aboutUs.tagline}</h4>
              <p>{classicGraphicsData.aboutUs.subtitle}</p>
            </div>

            <div className="featured-services">
              <h4>Featured Services</h4>
              <div className="featured-grid">
                {classicGraphicsData.featuredServices.map((service, index) => (
                  <div key={index} className="featured-item">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'faqs' && (
          <div className="faqs-section">
            <h3>Frequently Asked Questions</h3>
            <div className="faqs-list">
              {classicGraphicsData.faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h4 className="faq-question">{faq.question}</h4>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="contact-section">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Phone:</strong> {classicGraphicsData.companyInfo.phone}
              </div>
              <div className="contact-item">
                <strong>Email:</strong> {classicGraphicsData.companyInfo.email}
              </div>
              <div className="contact-item">
                <strong>Address:</strong> {classicGraphicsData.companyInfo.address}
              </div>
              <div className="contact-item">
                <strong>Website:</strong> 
                <a href={classicGraphicsData.companyInfo.website} target="_blank" rel="noopener noreferrer">
                  {classicGraphicsData.companyInfo.website}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExternalDataDisplay;
