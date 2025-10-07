import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleCompany = () => setIsCompanyOpen(!isCompanyOpen);

  return (
    <footer className="footer mega-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section footer-company">
            <div className="footer-logo">
              <img src="/images/pixel_new8_V6.jpg" alt="Pixel-i Logo" className="footer-logo-img" />
            </div>
            <h3>Pixel-i (VISUALIZE YOUR IDEA)</h3>
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
              <li><Link to="/work/e-learning">E-Learning</Link></li>
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
            </ul>
          </div>


        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2025 Pixel-i Creative Studio. All rights reserved.</p>
            </div>
            <div className="footer-links-bottom">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
              <Link to="/sitemap">Sitemap</Link>
              <a href="https://octaleads.com" target="_blank" rel="noopener noreferrer" className="developed-by">Developed By Octaleads</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
