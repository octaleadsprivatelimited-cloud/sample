import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const mainPages = [
    {
      title: "Home",
      url: "/",
      description: "Pixel-i Creative Studio homepage - AI Films, VFX, Animation, and Student's Lifebook services"
    },
    {
      title: "About Us",
      url: "/about",
      description: "Learn about Pixel-i Creative Studio - our vision, mission, and expertise in AI Films, VFX, and Animation"
    },
    {
      title: "Our Services",
      url: "/services",
      description: "Comprehensive overview of our AI Films, VFX, Animation, and Student's Lifebook services"
    },
    {
      title: "Contact Us",
      url: "/contact",
      description: "Get in touch with Pixel-i Creative Studio for your AI Films, VFX, and Animation projects"
    }
  ];

  const workPages = [
    {
      title: "AI Film Making",
      url: "/work/ai-film-making",
      description: "Revolutionary AI-powered film production showcasing next-generation cinematic technology"
    },
    {
      title: "Animation",
      url: "/work/animation",
      description: "Creative 2D and 3D animation services with advanced visual effects and motion graphics"
    },
    {
      title: "Life Book",
      url: "/work/life-book",
      description: "Student's Lifebook projects - educational content creation and digital portfolio development"
    },
    {
      title: "VFX",
      url: "/work/vfx",
      description: "Advanced visual effects including CGI, motion capture, and post-production services"
    },
    {
      title: "Calendar Selfie",
      url: "/work/calendar-selfie",
      description: "AI-powered calendar generation with personalized selfie integration and smart design"
    },
    {
      title: "Financial Literacy Book",
      url: "/work/financial-literacy-book",
      description: "Interactive educational content for financial awareness and money management"
    },
    {
      title: "E-Learning",
      url: "/work/e-learning",
      description: "Next-generation learning solutions with AI-enhanced content and digital education platforms"
    }
  ];

  const legalPages = [
    {
      title: "Privacy Policy",
      url: "/privacy",
      description: "Privacy Policy for Pixel-i Creative Studio - data protection and privacy information"
    },
    {
      title: "Terms of Service",
      url: "/terms",
      description: "Terms of Service for Pixel-i Creative Studio - terms and conditions for using our services"
    },
    {
      title: "Cookie Policy",
      url: "/cookies",
      description: "Cookie Policy for Pixel-i Creative Studio - information about cookies and tracking technologies"
    },
    {
      title: "Sitemap",
      url: "/sitemap",
      description: "Complete sitemap of Pixel-i Creative Studio website structure and navigation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Pixel-i Creative Studio</title>
        <meta name="description" content="Complete sitemap of Pixel-i Creative Studio website. Find all pages including AI Films, VFX, Animation services, and company information." />
        <meta name="keywords" content="sitemap, website navigation, Pixel-i, creative studio, AI films, VFX, animation, student lifebook, site structure" />
        <meta property="og:title" content="Sitemap - Pixel-i Creative Studio" />
        <meta property="og:description" content="Complete sitemap of Pixel-i Creative Studio website. Find all pages and services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pixel-i.in/sitemap" />
        <link rel="canonical" href="https://www.pixel-i.in/sitemap" />
      </Helmet>

      <div className="sitemap-page">
        <section className="hero hero-with-image">
          <div className="hero-background">
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1>Sitemap</h1>
            <p>Navigate through all pages and services of Pixel-i Creative Studio</p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <div className="sitemap-content">
              <div className="sitemap-intro">
                <h2>Website Structure</h2>
                <p>
                  Welcome to the Pixel-i Creative Studio sitemap. This page provides a comprehensive overview of all pages and sections available on our website. Use this sitemap to easily navigate to any section or service you're interested in.
                </p>
                <p>
                  Our website is organized into main sections covering our core services: AI Films, VFX, Animation, and Student's Lifebook, along with essential company information and legal pages.
                </p>
              </div>

              <div className="sitemap-section">
                <h2>Main Pages</h2>
                <div className="sitemap-grid">
                  {mainPages.map((page, index) => (
                    <div key={index} className="sitemap-item">
                      <Link to={page.url} className="sitemap-link">
                        <h3>{page.title}</h3>
                        <p>{page.description}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sitemap-section">
                <h2>Our Work & Services</h2>
                <div className="sitemap-grid">
                  {workPages.map((page, index) => (
                    <div key={index} className="sitemap-item">
                      <Link to={page.url} className="sitemap-link">
                        <h3>{page.title}</h3>
                        <p>{page.description}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sitemap-section">
                <h2>Legal & Policy Pages</h2>
                <div className="sitemap-grid">
                  {legalPages.map((page, index) => (
                    <div key={index} className="sitemap-item">
                      <Link to={page.url} className="sitemap-link">
                        <h3>{page.title}</h3>
                        <p>{page.description}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sitemap-section">
                <h2>Service Categories</h2>
                <div className="service-categories">
                  <div className="category-group">
                    <h3>Creative Services</h3>
                    <ul>
                      <li><Link to="/work/ai-film-making">AI Film Making</Link></li>
                      <li><Link to="/work/animation">Animation</Link></li>
                      <li><Link to="/work/vfx">Visual Effects (VFX)</Link></li>
                    </ul>
                  </div>
                  <div className="category-group">
                    <h3>Educational Services</h3>
                    <ul>
                      <li><Link to="/work/life-book">Student's Lifebook</Link></li>
                      <li><Link to="/work/financial-literacy-book">Financial Literacy</Link></li>
                      <li><Link to="/work/e-learning">E-Learning Solutions</Link></li>
                    </ul>
                  </div>
                  <div className="category-group">
                    <h3>Digital Solutions</h3>
                    <ul>
                      <li><Link to="/work/calendar-selfie">Calendar Selfie</Link></li>
                      <li><Link to="/services">Custom Digital Solutions</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="sitemap-section">
                <h2>Company Information</h2>
                <div className="company-info">
                  <div className="info-block">
                    <h3>About Pixel-i</h3>
                    <p>Pixel-i (VISUALIZE YOUR IDEA) is a pioneering creative studio specializing in AI Films, VFX, Animation, and Student's Lifebook services.</p>
                    <Link to="/about" className="info-link">Learn More About Us</Link>
                  </div>
                  <div className="info-block">
                    <h3>Our Services</h3>
                    <p>We offer comprehensive creative and educational services using cutting-edge artificial intelligence and revolutionary technologies.</p>
                    <Link to="/services" className="info-link">View All Services</Link>
                  </div>
                </div>
              </div>

              <div className="sitemap-section">
                <h2>Quick Navigation</h2>
                <div className="quick-nav">
                  <div className="nav-group">
                    <h3>Popular Services</h3>
                    <div className="nav-links">
                      <Link to="/work/ai-film-making">AI Film Making</Link>
                      <Link to="/work/vfx">VFX Services</Link>
                      <Link to="/work/animation">Animation</Link>
                      <Link to="/work/life-book">Student's Lifebook</Link>
                    </div>
                  </div>
                  <div className="nav-group">
                    <h3>Company</h3>
                    <div className="nav-links">
                      <Link to="/about">About Us</Link>
                      <Link to="/services">Our Services</Link>
                      <Link to="/contact">Contact Us</Link>
                    </div>
                  </div>
                  <div className="nav-group">
                    <h3>Resources</h3>
                    <div className="nav-links">
                      <Link to="/privacy">Privacy Policy</Link>
                      <Link to="/terms">Terms of Service</Link>
                      <Link to="/cookies">Cookie Policy</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sitemap-footer">
                <h2>Need Help Finding Something?</h2>
                <p>
                  If you can't find what you're looking for, feel free to <Link to="/contact">contact us</Link> directly. 
                  Our team is always ready to help you navigate our services and find the right solution for your needs.
                </p>
                <div className="search-suggestion">
                  <p><strong>Looking for something specific?</strong></p>
                  <ul>
                    <li>Browse our <Link to="/services">services page</Link> for a complete overview</li>
                    <li>Check out our <Link to="/work/ai-film-making">AI Film Making portfolio</Link></li>
                    <li>Explore our <Link to="/work/vfx">VFX showcase</Link></li>
                    <li>Learn about our <Link to="/work/life-book">Student's Lifebook</Link> services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sitemap;
