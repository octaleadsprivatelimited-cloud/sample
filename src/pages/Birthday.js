import React from 'react';
import Gallery from '../components/Gallery';
import { birthdayImages } from '../data/images';

const Birthday = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Birthday Photography</h1>
          <p>
            Making birthdays unforgettable with vibrant, joyful photography. 
            From kids' parties to milestone celebrations, we capture the happiness and excitement.
          </p>
        </div>
      </section>
      <Gallery images={birthdayImages} title="Birthday Gallery" />
    </div>
  );
};

export default Birthday;
