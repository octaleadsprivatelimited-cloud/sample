import React from 'react';
import Gallery from '../components/Gallery';
import { weddingImages, eventImages, birthdayImages, portraitImages, natureImages } from '../data/images';

const Portfolio = () => {
  // Combine all images for portfolio showcase
  const allImages = [
    ...weddingImages.slice(0, 2),
    ...eventImages.slice(0, 2),
    ...birthdayImages.slice(0, 2),
    ...portraitImages.slice(0, 2),
    ...natureImages.slice(0, 2)
  ];

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Portfolio</h1>
          <p>
            A curated collection of our finest work across all photography genres. 
            From intimate moments to grand celebrations, we capture life's most precious memories.
          </p>
        </div>
      </section>
      <Gallery images={allImages} title="Featured Work" />
      
      <section className="gallery-section">
        <div className="container">
          <h2 className="gallery-title">Our Specialties</h2>
          <div className="gallery-grid">
            <div className="gallery-item wedding-bg">
              <div style={{ 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}>
                Wedding Photography
              </div>
            </div>
            <div className="gallery-item event-bg">
              <div style={{ 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}>
                Event Photography
              </div>
            </div>
            <div className="gallery-item portrait-bg">
              <div style={{ 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}>
                Portrait Photography
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
