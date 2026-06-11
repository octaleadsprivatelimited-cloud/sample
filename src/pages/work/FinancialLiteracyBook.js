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

  const archvizProjects = [
    {
      title: 'Architectural Visualization 1',
      image: '/images/archviz/archviz-1.jpeg',
      alt: 'Photorealistic 3D architectural render by Pixel-i Studios'
    },
    {
      title: 'Architectural Visualization 2',
      image: '/images/archviz/archviz-2.jpeg',
      alt: 'Immersive architectural environment visualization by Pixel-i Studios'
    },
    {
      title: 'Architectural Visualization 3',
      image: '/images/archviz/archviz-3.jpeg',
      alt: 'Cinematic architectural walkthrough still by Pixel-i Studios'
    }
  ];

  return (
    <div className="financial-literacy-page">
      <Helmet>
        <title>Financial Literacy Book - Interactive Educational Content | PIXEL-I STUDIOS</title>
        <meta name="description" content="Explore PIXEL-I STUDIOS's Financial Literacy Books. Interactive educational content for financial awareness and money management through engaging flipbooks." />
        <meta name="keywords" content="Financial Literacy, Financial Education, Money Management, Financial Awareness, Interactive Books, Educational Content, E-Learning" />
        <link rel="canonical" href="https://www.pixel-istudios.com/work/financial-literacy-book" />
        
        <meta property="og:title" content="Financial Literacy Book | PIXEL-I STUDIOS" />
        <meta property="og:description" content="Interactive educational content for financial awareness and money management" />
        <meta property="og:url" content="https://www.pixel-istudios.com/work/financial-literacy-book" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Financial Literacy Book",
            "description": "Interactive educational content for financial awareness and money management",
            "provider": {
              "@type": "Organization",
              "name": "PIXEL-I STUDIOS"
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

          <div className="archviz-section">
            <h2>Architectural Visualization (ArchViz)</h2>
            <p className="section-description">
              Pixel-i Studios specializes in high-end Architectural Visualization (ArchViz), delivering photorealistic 3D renders, immersive environments, and cinematic walkthroughs for modern architectural and real estate projects.
            </p>

            <div className="archviz-grid">
              {archvizProjects.map((project, index) => (
                <div key={index} className="archviz-card">
                  <div className="archviz-image-wrap">
                    <img src={project.image} alt={project.alt} loading="lazy" />
                  </div>
                  <h3>{project.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialLiteracyBook;
