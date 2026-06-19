import React from 'react';
import { Helmet } from 'react-helmet';

const FinancialLiteracyBook = () => {
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
        <title>Architectural Visualization (ArchViz) - 3D Renders & Walkthroughs | PIXEL-I STUDIOS</title>
        <meta name="description" content="Explore PIXEL-I STUDIOS's Architectural Visualization (ArchViz). Photorealistic 3D renders, immersive environments, and cinematic walkthroughs for architectural projects." />
        <meta name="keywords" content="Architectural Visualization, ArchViz, 3D Rendering, Architectural walkthrough, 3D interior design, photorealistic render" />
        <link rel="canonical" href="https://www.pixel-istudios.com/work/financial-literacy-book" />
        
        <meta property="og:title" content="Architectural Visualization (ArchViz) | PIXEL-I STUDIOS" />
        <meta property="og:description" content="Photorealistic 3D renders, immersive environments, and cinematic walkthroughs" />
        <meta property="og:url" content="https://www.pixel-istudios.com/work/financial-literacy-book" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Architectural Visualization (ArchViz)",
            "description": "Photorealistic 3D renders, immersive environments, and cinematic walkthroughs for modern architectural and real estate projects.",
            "provider": {
              "@type": "Organization",
              "name": "PIXEL-I STUDIOS"
            }
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
          <h1>Architectural Visualization (ArchViz)</h1>
          <p>High-end 3D Renders, Immersive Environments & Cinematic Walkthroughs</p>
        </div>
      </section>

      {/* ArchViz Section */}
      <section className="flipbook-section">
        <div className="container">
          <div className="archviz-section" style={{ borderTop: 'none', marginTop: 0, paddingTop: 0 }}>
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
