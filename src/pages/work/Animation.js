import React from 'react';
import Gallery from '../../components/Gallery';
import { pureAnimationImages } from '../../data/images';

const Animation = () => {
  return (
    <div className="animation-page">
      <section className="hero hero-with-image">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Animation</h1>
          <p>Creative Animation & Motion Graphics Portfolio</p>
        </div>
      </section>
      
      <Gallery images={pureAnimationImages} title="Animation Portfolio" />
    </div>
  );
};

export default Animation;
