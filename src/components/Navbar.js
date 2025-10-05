import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img 
            src="/images/pixel_new8_V6.jpg" 
            alt="PIXEL-I Creative Studio" 
            className="logo-image"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        
        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={location.pathname === '/services' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link 
              to="/work/ai-film-making" 
              className={location.pathname === '/work/ai-film-making' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              AI Film Making
            </Link>
          </li>
          <li>
            <Link 
              to="/work/vfx" 
              className={location.pathname === '/work/vfx' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              VFX
            </Link>
          </li>
          <li>
            <Link 
              to="/work/animation" 
              className={location.pathname === '/work/animation' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Animation
            </Link>
          </li>
          <li>
            <Link 
              to="/work/life-book" 
              className={location.pathname === '/work/life-book' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Life Book
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;