import React from 'react';
import Gallery from '../components/Gallery';
import { portraitImages } from '../data/images';

const Portrait = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Portrait Photography</h1>
          <p>
            Professional portrait sessions that reveal the true essence of your personality. 
            From headshots to family portraits, we create images that tell your story.
          </p>
        </div>
      </section>
      <Gallery images={portraitImages} title="Portrait Gallery" />
    </div>
  );
};

export default Portrait;
