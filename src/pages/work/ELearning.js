import React from 'react';
import Gallery from '../../components/Gallery';
import { digitalEducationImages } from '../../data/images';

const ELearning = () => {
  return (
    <div className="e-learning-page">
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
          <h1>E-Learning</h1>
          <p>Next-Generation Learning Solutions with AI-Enhanced Educational Content</p>
        </div>
      </section>
      
      <Gallery images={digitalEducationImages} title="E-Learning Portfolio" />
    </div>
  );
};

export default ELearning;
