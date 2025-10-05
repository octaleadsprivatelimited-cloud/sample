import React from 'react';
import Gallery from '../../components/Gallery';
import { animationImages } from '../../data/images';

const Animation = () => {
  return (
    <div className="animation-page">
      <section className="hero hero-with-image">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>AI Film Making</h1>
          <p>Next-Generation Animation & AI-Powered Creative Storytelling</p>
        </div>
      </section>
      
      <Gallery images={animationImages} title="AI Film Making Portfolio" />
    </div>
  );
};

export default Animation;
