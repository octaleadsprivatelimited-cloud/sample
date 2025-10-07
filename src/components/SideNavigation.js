import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SideNavigation.css';

const SideNavigation = () => {

  const navItems = [
    {
      name: 'Life book',
      path: '/work/life-book',
      icon: '📚',
      image: '/images/toggle/Screenshot_20251006-155007_Gallery.jpg'
    },
    {
      name: 'Demos AI',
      path: '/work/ai-film-making',
      icon: '🤖',
      image: '/images/toggle/aitoggle.jpg'
    },
    {
      name: 'Animation',
      path: '/work/animation',
      icon: '🎬',
      image: '/images/toggle/animation.jpg'
    },
    {
      name: 'Promo',
      path: '/services',
      icon: '🎯',
      image: '/images/toggle/Screenshot_20251006-154750_Gallery.jpg'
    }
  ];

  return (
    <motion.div
      className="side-nav-panel always-open"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="side-nav-content">
        <nav className="side-nav-menu">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="side-nav-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={item.path}
                className="side-nav-link logo-only"
                title={item.name}
              >
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="side-nav-image"
                  />
                ) : (
                  <span className="side-nav-icon">{item.icon}</span>
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default SideNavigation;
