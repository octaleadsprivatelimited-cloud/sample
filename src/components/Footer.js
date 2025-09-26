import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Pixel-i Photography</h3>
            <p>Capturing life's beautiful moments with professional photography services.</p>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/wedding">Wedding Photography</Link></li>
              <li><Link to="/event">Event Photography</Link></li>
              <li><Link to="/birthday">Birthday Photography</Link></li>
              <li><Link to="/portrait">Portrait Photography</Link></li>
              <li><Link to="/nature">Nature Photography</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 info@pixel-i.com</p>
            <p>📱 +91 97047 71222</p>
            <p>📍 Hyderabad, Telangana, India</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Pixel-i Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
