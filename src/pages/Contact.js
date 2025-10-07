import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Pixel-i Creative Studio</title>
        <meta name="description" content="Get in touch with Pixel-i Creative Studio for AI Films, VFX, Animation, and Student's Lifebook services. Located in Hyderabad, Telangana." />
        <meta name="keywords" content="contact, Pixel-i, AI films, VFX, animation, Hyderabad, creative studio" />
        <meta property="og:title" content="Contact Us - Pixel-i Creative Studio" />
        <meta property="og:description" content="Get in touch with Pixel-i Creative Studio for your creative projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pixel-i.in/contact" />
        <link rel="canonical" href="https://www.pixel-i.in/contact" />
      </Helmet>

      <div className="contact-page">
        <section className="hero hero-with-image">
          <div className="hero-background">
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p>
              Ready to visualize your ideas? Get in touch with us to discuss your AI Films, VFX, Animation, and Student's Lifebook needs. 
              We're here to help bring your creative vision to life with cutting-edge technology.
            </p>
          </div>
        </section>

        <section className="contact-content">
          <div className="contact-container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form-section">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Interested In *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="ai-film-making">AI Film Making</option>
                        <option value="vfx">Visual Effects (VFX)</option>
                        <option value="animation">Animation</option>
                        <option value="life-book">Student's Lifebook</option>
                        <option value="calendar-selfie">Calendar Selfie</option>
                        <option value="financial-literacy">Financial Literacy</option>
                        <option value="e-learning">E-Learning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="contact-info-section">
                <h2>Get in Touch</h2>
                <p>We're here to help! Reach out to us through any of these channels.</p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-text">
                      <h3>Our Location</h3>
                      <p>Hyderabad, Telangana, India</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-text">
                      <h3>Phone</h3>
                      <p>+91 9704771222</p>
                      <p>+91 1234567890</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-text">
                      <h3>Email</h3>
                      <p>info@pixel-i.in</p>
                      <p>hello@pixel-i.in</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-globe"></i>
                    </div>
                    <div className="contact-text">
                      <h3>Website</h3>
                      <p>www.pixel-i.in</p>
                    </div>
                  </div>
                </div>

                <div className="map-section">
                  <h3>Find Us on Map</h3>
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2587294382347!2d78.48667131535333!3d17.385044987979832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: '10px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Pixel-i Location Map"
                    ></iframe>
                  </div>
                </div>

                <div className="business-hours">
                  <h3>Business Hours</h3>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
