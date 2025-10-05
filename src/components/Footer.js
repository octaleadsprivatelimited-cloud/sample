import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  const toggleWork = () => {
    setIsWorkOpen(!isWorkOpen);
  };

  const toggleQuickLinks = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-logo-section">
            <div className="footer-logo">
              <img src="/images/pixel_new8_V6.jpg" alt="PIXEL- i Logo" className="footer-logo-img" />
            </div>
            <h3>PIXEL- i (VISUALIZE YOUR IDEA)</h3>
            <p>AI FILMS | VFX | ANIMATION | STUDENT'S LIFEBOOK</p>
          </div>
          
          <div className="footer-section">
            <button className="footer-toggle" onClick={toggleWork}>
              <h4>Work</h4>
              <span className="footer-arrow">{isWorkOpen ? '▲' : '▼'}</span>
            </button>
            <ul className={`footer-links ${isWorkOpen ? 'open' : ''}`}>
              <li><Link to="/work/animation">Animation</Link></li>
              <li><Link to="/work/photo-shoot">Photo Shoot</Link></li>
              <li><Link to="/work/life-book">Life Book</Link></li>
              <li><Link to="/work/vfx">VFX</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <button className="footer-toggle" onClick={toggleQuickLinks}>
              <h4>Quick Links</h4>
              <span className="footer-arrow">{isQuickLinksOpen ? '▲' : '▼'}</span>
            </button>
            <ul className={`footer-links ${isQuickLinksOpen ? 'open' : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section contact-section">
            <h4>Contact Info</h4>
            <p>📧 pixel.inc@gmail.com</p>
            <p>📱 +91 97047 71222</p>
            <p>☎️ 040-31516696</p>
            <p>🌐 www.pixel-i.in</p>
            <p>📍 Hyderabad, India</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 PIXEL- i Creative Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
