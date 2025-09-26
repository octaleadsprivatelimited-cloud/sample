import React from 'react';
import Gallery from '../components/Gallery';
import { weddingImages } from '../data/images';

const Wedding = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Wedding Photography</h1>
          <p>
            Capturing the magic of your special day with timeless elegance and emotion. 
            Every moment, every detail, every tear of joy preserved forever.
          </p>
        </div>
      </section>
      <Gallery images={weddingImages} title="Wedding Gallery" />
    </div>
  );
};

export default Wedding;
