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
            <h4>Work</h4>
            <ul>
              <li><Link to="/work/abroad-shoots">Abroad Shoots</Link></li>
              <li><Link to="/work/photo-shoot">Photo Shoot</Link></li>
              <li><Link to="/work/product-shoot">Product Shoot</Link></li>
                  <li><Link to="/work/tv-cs">T V C's</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
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
