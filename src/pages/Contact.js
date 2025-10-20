import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mdkwlgog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        alert('Thank you for contacting us! Our team will reach out to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          service: '',
          message: ''
        });
      } else {
        setStatus('error');
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      alert('Oops! There was a problem submitting your form. Please try again.');
    }

    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Pixel-i Creative Studio | Global AI Films & VFX</title>
        <meta name="description" content="Contact Pixel-i for world-class AI Films, VFX, and Animation services. Serving clients globally from Hyderabad, India." />
        <meta name="keywords" content="contact Pixel-i, AI films, VFX services, animation studio, global creative services" />
      </Helmet>

      <div className="modern-contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Let's Create Something Amazing Together</h1>
            <p>Connect with our global team of creative experts</p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="contact-main-section">
          <div className="container">
            <div className="contact-layout">
              {/* Left Side - Contact Form */}
              <div className="contact-form-container">
                <div className="form-header">
                  <h2>Start Your Project</h2>
                  <p>Tell us about your vision and let's bring it to life</p>
                </div>

                <form onSubmit={handleSubmit} className="modern-contact-form">
                  <div className="form-grid">
                    <div className="form-field">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="form-field">
                      <label>Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div className="form-field">
                      <label>Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your country</option>
                        <option value="IN">India</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="SG">Singapore</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="JP">Japan</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label>Service Required *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="ai-films">AI Film Making</option>
                        <option value="vfx">Visual Effects (VFX)</option>
                        <option value="animation">Animation</option>
                        <option value="lifebook">Student's Lifebook</option>
                        <option value="e-learning">E-Learning Solutions</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="modern-submit-btn" disabled={status === 'sending'}>
                    <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>

              {/* Right Side - Contact Info */}
              <div className="contact-info-container">
                <div className="info-block">
                  <h3>Get in Touch</h3>
                  <p>We're here to help and answer any question you might have</p>
                </div>

                <div className="contact-cards">
                  <div className="contact-card">
                    <div className="card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h4>Global Headquarters</h4>
                    <p>Hyderabad, Telangana<br/>India</p>
                  </div>

                  <div className="contact-card">
                    <div className="card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h4>Phone</h4>
                    <p>Office: 040-31516696<br/>Mobile: +91 9704771222<br/>Mon-Fri, 9AM-6PM IST</p>
                  </div>

                  <div className="contact-card">
                    <div className="card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h4>Email</h4>
                    <p>info@pixel-i.in<br/>hello@pixel-i.in</p>
                  </div>

                  <div className="contact-card">
                    <div className="card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h4>Business Hours</h4>
                    <p>Mon-Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="social-links-section">
                  <h4>Follow Us</h4>
                  <div className="social-icons-grid">
                    <a href="https://x.com/RamaiahRaj86813" target="_blank" rel="noopener noreferrer" className="social-link-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100064957750976" target="_blank" rel="noopener noreferrer" className="social-link-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/pixell.inc/" target="_blank" rel="noopener noreferrer" className="social-link-btn">
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968776.png" alt="Instagram" style={{width: '20px', height: '20px', objectFit: 'contain'}} />
                    </a>
                    <a href="https://www.youtube.com/@pixel-i3252" target="_blank" rel="noopener noreferrer" className="social-link-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="contact-map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2587294382347!2d78.48667131535333!3d17.385044987979832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pixel-i Location"
          ></iframe>
        </section>
      </div>
    </>
  );
};

export default Contact;
