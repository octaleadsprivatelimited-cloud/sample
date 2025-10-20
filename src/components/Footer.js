import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mega-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section footer-company">
            <div className="footer-logo-block">
              <div className="footer-logo">
                <img src="/images/footer_logo.png" alt="Pixel-i Logo" className="footer-logo-img" />
              </div>
              <h3>Pixel-i (Visualize Your Idea)</h3>
              <p className="footer-tagline">AI FILMS | VFX | ANIMATION | STUDENT'S LIFEBOOK</p>
              <p className="footer-description">
                Pioneering creative studio at the forefront of AI Films, VFX, and Animation. 
                We craft immersive, world-class content using cutting-edge artificial intelligence 
                and revolutionary technologies.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://x.com/RamaiahRaj86813" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X
                </a>
                <a href="https://www.facebook.com/profile.php?id=100064957750976" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a href="https://www.instagram.com/pixell.inc/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a href="https://www.youtube.com/@pixel-i3252" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section footer-links-section">
            <div className="footer-links-block">
              <h4 className="footer-links-title">Quick Links</h4>
              <div className="footer-links-grid">
                <Link to="/" className="footer-grid-link">Home</Link>
                <Link to="/about" className="footer-grid-link">About Us</Link>
                <Link to="/services" className="footer-grid-link">Our Services</Link>
                <Link to="/contact" className="footer-grid-link">Contact Us</Link>
                <Link to="/work/ai-film-making" className="footer-grid-link">AI Film Making</Link>
                <Link to="/work/vfx" className="footer-grid-link">Visual Effects (VFX)</Link>
                <Link to="/work/animation" className="footer-grid-link">Animation</Link>
                <Link to="/work/life-book" className="footer-grid-link">Student's Lifebook</Link>
                <Link to="/work/calendar-selfie" className="footer-grid-link">Calendar Selfie</Link>
                <Link to="/work/financial-literacy-book" className="footer-grid-link">Financial Literacy</Link>
                <Link to="/work/e-learning" className="footer-grid-link">E-Learning</Link>
                <Link to="/portfolio" className="footer-grid-link">Portfolio</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2014-25 Pixel-i Creative Studio. All rights reserved.</p>
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
