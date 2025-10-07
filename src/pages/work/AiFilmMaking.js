import React from 'react';
import Gallery from '../../components/Gallery';
import { animationImages } from '../../data/images';

const AiFilmMaking = () => {
  return (
    <div className="ai-film-making-page">
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
          <h1>AI Film Making</h1>
          <p>Revolutionary AI-Powered Creative Storytelling & Film Production</p>
        </div>
      </section>
      
      <Gallery images={animationImages} title="AI Film Making Portfolio" />
    </div>
  );
};

export default AiFilmMaking;
