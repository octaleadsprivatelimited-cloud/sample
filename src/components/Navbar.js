import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleWorkDropdown = () => {
    setIsWorkDropdownOpen(!isWorkDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
        
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img 
            src="/images/pixel_new8_V6.jpg" 
            alt="Pixel-i Photography" 
            className="logo-image"
          />
        </Link>
        
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
          <li className="dropdown">
            <button 
              className={`dropdown-toggle ${isWorkDropdownOpen ? 'active' : ''}`}
              onClick={toggleWorkDropdown}
            >
              Work
              <span className="dropdown-arrow">▼</span>
            </button>
            <ul className={`dropdown-menu ${isWorkDropdownOpen ? 'active' : ''}`}>
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
                  to="/work/photo-shoot" 
                  className={location.pathname === '/work/photo-shoot' ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                  Photo Shoot
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
                  to="/work/vfx" 
                  className={location.pathname === '/work/vfx' ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                  VFX
                </Link>
              </li>
            </ul>
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
