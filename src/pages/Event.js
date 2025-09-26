import React from 'react';
import Gallery from '../components/Gallery';
import { eventImages } from '../data/images';

const Event = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Event Photography</h1>
          <p>
            Professional event photography for corporate gatherings, conferences, galas, and special occasions. 
            Documenting your important moments with precision and style.
          </p>
        </div>
      </section>
      <Gallery images={eventImages} title="Event Gallery" />
    </div>
  );
};

export default Event;
