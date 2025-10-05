import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsWorkDropdownOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsWorkDropdownOpen(false);
  };

  const toggleWorkDropdown = () => {
    setIsWorkDropdownOpen(!isWorkDropdownOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: null, hasDropdown: true },
    { name: 'Contact', path: '/contact' }
  ];

  const workItems = [
    { name: 'AI Film Making', path: '/work/ai-film-making' },
    { name: 'Visual Effects (VFX)', path: '/work/vfx' },
    { name: 'Animation', path: '/work/animation' },
    { name: 'Student\'s Lifebook', path: '/work/life-book' },
    { name: 'Calendar Selfie', path: '/work/calendar-selfie' },
    { name: 'Financial Literacy', path: '/work/financial-literacy-book' },
    { name: 'E-Learning', path: '/work/e-learning' }
  ];

  return (
    <>
      {/* Apple-style Navigation */}
      <motion.nav 
        className={`apple-navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="apple-nav-container">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="apple-logo" onClick={closeMobileMenu}>
              <img 
                src="/images/pixel_new8_V6.jpg" 
                alt="PIXEL-I" 
                className="apple-logo-img"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="apple-nav-links">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="apple-nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.hasDropdown ? (
                  <div 
                    className="apple-dropdown-container"
                    onMouseEnter={() => setIsWorkDropdownOpen(true)}
                    onMouseLeave={() => setIsWorkDropdownOpen(false)}
                  >
                    <motion.button 
                      className="apple-nav-link work-dropdown-trigger"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                      <motion.span 
                        className="work-dropdown-arrow"
                        animate={{ rotate: isWorkDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ▼
                      </motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {isWorkDropdownOpen && (
                        <motion.div
                          className="apple-dropdown-menu"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {workItems.map((workItem, workIndex) => (
                            <motion.div
                              key={workItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: workIndex * 0.05 }}
                            >
                              <Link 
                                to={workItem.path}
                                className={`apple-dropdown-link ${location.pathname === workItem.path ? 'active' : ''}`}
                              >
                                {workItem.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to={item.path}
                      className={`apple-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button 
            className="apple-mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <motion.span 
              className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <motion.span 
              className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              className="apple-mobile-overlay" 
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.div 
              className="apple-mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="apple-mobile-content">
                {navItems.map((item, index) => (
                  <motion.div 
                    key={item.name} 
                    className="apple-mobile-item"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.hasDropdown ? (
                      <div className="apple-mobile-dropdown">
                        <motion.button 
                          className="apple-mobile-nav-link"
                          onClick={toggleWorkDropdown}
                          whileHover={{ x: 10 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.name}
                          <motion.span 
                            className={`dropdown-arrow ${isWorkDropdownOpen ? 'open' : ''}`}
                            animate={isWorkDropdownOpen ? { rotate: 90 } : { rotate: 0 }}
                            transition={{ duration: 0.2 }}
                          >›</motion.span>
                        </motion.button>
                        <AnimatePresence>
                          {isWorkDropdownOpen && (
                            <motion.div 
                              className="apple-mobile-work-items"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {workItems.map((workItem, workIndex) => (
                                <motion.div
                                  key={workItem.name}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: workIndex * 0.05 + 0.1 }}
                                >
                                  <Link 
                                    to={workItem.path}
                                    className={`apple-mobile-work-link ${location.pathname === workItem.path ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                  >
                                    {workItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.div
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link 
                          to={item.path}
                          className={`apple-mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
