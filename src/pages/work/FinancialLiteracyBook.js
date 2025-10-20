import React from 'react';
import { Helmet } from 'react-helmet';

const FinancialLiteracyBook = () => {
  const flipbooks = [
    {
      url: 'https://online.flippingbook.com/view/66098519/',
      title: 'Financial Literacy Book - Volume 1'
    },
    {
      url: 'https://online.flippingbook.com/view/518037643/',
      title: 'Financial Literacy Book - Volume 2'
    },
    {
      url: 'https://online.flippingbook.com/view/599801726/',
      title: 'Financial Literacy Book - Volume 3'
    }
  ];

  return (
    <div className="financial-literacy-page">
      <Helmet>
        <title>Financial Literacy Book - Interactive Educational Content | PIXEL-I</title>
        <meta name="description" content="Explore PIXEL-I's Financial Literacy Books. Interactive educational content for financial awareness and money management through engaging flipbooks." />
        <meta name="keywords" content="Financial Literacy, Financial Education, Money Management, Financial Awareness, Interactive Books, Educational Content, E-Learning" />
        <link rel="canonical" href="https://www.pixel-i.in/work/financial-literacy-book" />
        
        <meta property="og:title" content="Financial Literacy Book | PIXEL-I" />
        <meta property="og:description" content="Interactive educational content for financial awareness and money management" />
        <meta property="og:url" content="https://www.pixel-i.in/work/financial-literacy-book" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Financial Literacy Book",
            "description": "Interactive educational content for financial awareness and money management",
            "provider": {
              "@type": "Organization",
              "name": "PIXEL-I Creative Studio"
            },
            "educationalLevel": "All Levels",
            "teaches": "Financial Literacy and Money Management"
          })}
        </script>
      </Helmet>
      <section className="hero hero-with-video">
        <div className="hero-background">
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
              >
            <source src="/images/a.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Financial Literacy Book</h1>
          <p>Interactive Educational Content for Financial Awareness & Money Management</p>
        </div>
      </section>

      {/* FlippingBook Section */}
      <section className="flipbook-section">
        <div className="container">
          <h2>Interactive Financial Literacy Books</h2>
          <p className="section-description">Explore our comprehensive financial literacy content through interactive flipbooks</p>
          
          <div className="flipbook-grid">
            {flipbooks.map((book, index) => (
              <div key={index} className="flipbook-card">
                <h3>{book.title}</h3>
                <div className="flipbook-container">
                  <iframe 
                    src={book.url}
                    width="100%"
                    height="250"
                    frameBorder="0"
                    allowFullScreen
                    title={book.title}
                  ></iframe>
                </div>
                <a 
                  href={book.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary view-fullscreen"
                >
                  View Fullscreen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialLiteracyBook;
