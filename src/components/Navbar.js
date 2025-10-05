import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsWorkDropdownOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
        setIsWorkDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsWorkDropdownOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsWorkDropdownOpen(false);
  };

  const toggleWorkDropdown = (e) => {
    e.stopPropagation();
    setIsWorkDropdownOpen(!isWorkDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img 
            src="/images/pixel_new8_V6.jpg" 
            alt="PIXEL-I Creative Studio" 
            className="logo-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="logo-fallback" style={{display: 'none'}}>
            PIXEL-I
          </div>
        </Link>
        
        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Our Services
            </Link>
          </li>
          
          {/* Work Dropdown */}
          <li className="dropdown">
            <button 
              className={`dropdown-toggle ${isWorkDropdownOpen ? 'active' : ''}`}
              onClick={toggleWorkDropdown}
              aria-expanded={isWorkDropdownOpen}
              aria-haspopup="true"
            >
              Work
              <span className="dropdown-arrow">▼</span>
            </button>
            <ul className={`dropdown-menu ${isWorkDropdownOpen ? 'active' : ''}`}>
              <li>
                <Link 
                  to="/work/ai-film-making" 
                  className={`dropdown-link ${location.pathname === '/work/ai-film-making' ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  AI Film Making
                </Link>
              </li>
              <li>
                <Link 
                  to="/work/vfx" 
                  className={`dropdown-link ${location.pathname === '/work/vfx' ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  VFX
                </Link>
              </li>
              <li>
                <Link 
                  to="/work/life-book" 
                  className={`dropdown-link ${location.pathname === '/work/life-book' ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Life Book
                </Link>
              </li>
              <li>
                <Link 
                  to="/work/animation" 
                  className={`dropdown-link ${location.pathname === '/work/animation' ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Animation
                </Link>
              </li>
              <li>
                <Link 
                  to="/work/calendar-selfie" 
                  className={`dropdown-link ${location.pathname === '/work/calendar-selfie' ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Calendar Selfie
                </Link>
              </li>
              <li>
                <Link 
                  to="/work/financial-literacy-book" 
                  className={`dropdown-link ${location.pathname === '/work/financial-literacy-book' ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Financial Literacy Book
                </Link>
              </li>
              <li>
                <Link 
                  to="/work/e-learning" 
                  className={`dropdown-link ${location.pathname === '/work/e-learning' ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  E-Learning
                </Link>
              </li>
            </ul>
          </li>
          
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
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