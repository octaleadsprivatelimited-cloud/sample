import React from 'react';
import Gallery from '../../components/Gallery';
import { vfxImages } from '../../data/images';

const Vfx = () => {
  return (
    <div className="vfx-page">
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
          <h1>VFX</h1>
          <p>Advanced Visual Effects & AI-Powered Cinematic Excellence</p>
        </div>
      </section>
      
      <Gallery images={vfxImages} title="VFX Portfolio" />
    </div>
  );
};

export default Vfx;
