import React from 'react';
import Gallery from '../../components/Gallery';
import { lifeBookImages } from '../../data/images';

const LifeBook = () => {
  return (
    <div className="life-book-page">
      <section className="hero hero-with-video">
        <div className="hero-background">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            playsInline
          >
            <source src="/images/a.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Life Book</h1>
          <p>Student's Life Book - Capturing Memories, Milestones & Personal Growth</p>
        </div>
      </section>
      
      <Gallery images={lifeBookImages} title="Student's Life Book Portfolio" />
    </div>
  );
};

export default LifeBook;
