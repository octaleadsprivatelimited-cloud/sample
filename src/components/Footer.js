import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleWork = () => setIsWorkOpen(!isWorkOpen);
  const toggleCompany = () => setIsCompanyOpen(!isCompanyOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  return (
    <footer className="footer mega-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section footer-company">
            <div className="footer-logo">
              <img src="/images/pixel_new8_V6.jpg" alt="PIXEL-I Logo" className="footer-logo-img" />
            </div>
            <h3>PIXEL-I (VISUALIZE YOUR IDEA)</h3>
            <p className="footer-tagline">AI FILMS | VFX | ANIMATION | STUDENT'S LIFEBOOK</p>
            <p className="footer-description">
              Pioneering creative studio at the forefront of AI Films, VFX, and Animation. 
              We craft immersive, world-class content using cutting-edge artificial intelligence 
              and revolutionary technologies.
            </p>
            
            {/* Social Media Links */}
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://twitter.com/pixeli" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </a>
                <a href="https://facebook.com/pixeli" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <button className="footer-toggle" onClick={toggleServices}>
              <h4>Our Services</h4>
              <span className="footer-arrow">{isServicesOpen ? '▲' : '▼'}</span>
            </button>
            <ul className={`footer-links ${isServicesOpen ? 'open' : ''}`}>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/work/ai-film-making">AI Film Making</Link></li>
              <li><Link to="/work/vfx">Visual Effects (VFX)</Link></li>
              <li><Link to="/work/animation">Animation</Link></li>
              <li><Link to="/work/life-book">Student's Lifebook</Link></li>
              <li><Link to="/work/calendar-selfie">Calendar Selfie</Link></li>
              <li><Link to="/work/financial-literacy-book">Financial Literacy</Link></li>
              <li><Link to="/work/e-learning">E-Learning Solutions</Link></li>
            </ul>
          </div>

          {/* Work Portfolio Section */}
          <div className="footer-section">
            <button className="footer-toggle" onClick={toggleWork}>
              <h4>Our Work</h4>
              <span className="footer-arrow">{isWorkOpen ? '▲' : '▼'}</span>
            </button>
            <ul className={`footer-links ${isWorkOpen ? 'open' : ''}`}>
              <li><Link to="/work/ai-film-making">AI Film Making Portfolio</Link></li>
              <li><Link to="/work/animation">Animation Gallery</Link></li>
              <li><Link to="/work/life-book">Life Book Projects</Link></li>
              <li><Link to="/work/vfx">VFX Showcase</Link></li>
              <li><Link to="/work/calendar-selfie">Calendar Selfie Gallery</Link></li>
              <li><Link to="/work/financial-literacy-book">Financial Education</Link></li>
              <li><Link to="/work/e-learning">E-Learning Platform</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <button className="footer-toggle" onClick={toggleCompany}>
              <h4>Company</h4>
              <span className="footer-arrow">{isCompanyOpen ? '▲' : '▼'}</span>
            </button>
            <ul className={`footer-links ${isCompanyOpen ? 'open' : ''}`}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#testimonials">Client Testimonials</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section">
            <button className="footer-toggle" onClick={toggleResources}>
              <h4>Resources</h4>
              <span className="footer-arrow">{isResourcesOpen ? '▲' : '▼'}</span>
            </button>
            <ul className={`footer-links ${isResourcesOpen ? 'open' : ''}`}>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#tutorials">Tutorials</a></li>
              <li><a href="#downloads">Downloads</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#documentation">Documentation</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section contact-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>pixel.inc@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>Mobile</strong>
                  <p>+91 97047 71222</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">☎️</span>
                <div>
                  <strong>Landline</strong>
                  <p>040-31516696</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <div>
                  <strong>Website</strong>
                  <p>www.pixel-i.in</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Hyderabad, Telangana<br />India</p>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="business-hours">
              <h5>Business Hours</h5>
              <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              <p>Sun: 10:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 PIXEL-I Creative Studio. All rights reserved.</p>
            </div>
            <div className="footer-links-bottom">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
