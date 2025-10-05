import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
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
    // Here you would typically send the form data to your backend
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: ''
    });
  };

  return (
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
      
      <section className="gallery-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="contact-item">
                <h3>📞 Mobile</h3>
                <p>+91 97047 71222</p>
              </div>
              <div className="contact-item">
                <h3>☎️ Landline</h3>
                <p>040-31516696</p>
              </div>
              <div className="contact-item">
                <h3>📧 Email</h3>
                <p>pixel.inc@gmail.com</p>
              </div>
              <div className="contact-item">
                <h3>🌐 Website</h3>
                <p>www.pixel-i.in</p>
              </div>
              <div className="contact-item">
                <h3>📍 Location</h3>
                <p>Hyderabad, Telangana, India</p>
              </div>
              <div className="contact-item">
                <h3>🕒 Hours</h3>
                <p>Mon - Sat: 9:00 AM - 7:00 PM<br />Sun: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Service Type</option>
                    <option value="ai-film-making">AI Film Making</option>
                    <option value="vfx">Visual Effects (VFX)</option>
                    <option value="animation">Animation</option>
                    <option value="life-book">Student's Lifebook</option>
                    <option value="calendar-selfie">Calendar Selfie</option>
                    <option value="financial-literacy">Financial Literacy Book</option>
                    <option value="e-learning">E-Learning Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your creative project needs..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
