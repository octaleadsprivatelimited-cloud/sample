import React from 'react';
import Gallery from '../components/Gallery';
import { natureImages } from '../data/images';

const Nature = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Nature Photography</h1>
          <p>
            Exploring the beauty of the natural world through stunning landscape and wildlife photography. 
            From majestic mountains to delicate flowers, nature's wonders captured in perfect detail.
          </p>
        </div>
      </section>
      <Gallery images={natureImages} title="Nature Gallery" />
    </div>
  );
};

export default Nature;
