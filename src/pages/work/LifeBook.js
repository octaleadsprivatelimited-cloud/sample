import React from 'react';
import Gallery from '../../components/Gallery';
import { lifeBookImages } from '../../data/images';

const LifeBook = () => {
  return (
    <div className="life-book-page">
      <section className="hero hero-with-image">
        <div className="hero-background">
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
