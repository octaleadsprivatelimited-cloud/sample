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
            <source src="/images/a.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Animation</h1>
          <p>Creative Animation & Motion Graphics Portfolio</p>
        </div>
      </section>
      
      <section className="ip-development-section">
        <div className="container">
          <div className="ip-development-content">
            <h2>IP DEVELOPMENT & PARTNERSHIPS</h2>
            <p>Developing, original IPs with strategic partners licensing, and co-producing</p>
          </div>
        </div>
      </section>
      
      <Gallery images={pureAnimationImages} />
    </div>
  );
};

export default Animation;
