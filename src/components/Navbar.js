import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your photography services. Can you please provide more information?";
    const phoneNumber = "919704771222"; // Your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          Pixel-i
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
        
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
                  to="/work/abroad-shoots" 
                  className={location.pathname === '/work/abroad-shoots' ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                  Abroad Shoots
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
                  to="/work/product-shoot" 
                  className={location.pathname === '/work/product-shoot' ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                  Product Shoot
                </Link>
              </li>
              <li>
                <Link 
                  to="/work/tv-cs" 
                  className={location.pathname === '/work/tv-cs' ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                      T V C's
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
        
        <button 
          className="whatsapp-btn"
          onClick={handleWhatsAppClick}
          title="Contact us on WhatsApp"
        >
          <div className="whatsapp-icon"></div>
          WhatsApp
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
