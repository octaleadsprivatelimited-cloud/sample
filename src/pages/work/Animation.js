import React from 'react';
import Gallery from '../../components/Gallery';
import { pureAnimationImages } from '../../data/images';

const Animation = () => {
  return (
    <div className="animation-page">
      <section className="hero hero-with-video">
        <div className="hero-background">
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/images/Pixell-I-Logo-video-compressed.mp4" type="video/mp4" />
          </video>
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
