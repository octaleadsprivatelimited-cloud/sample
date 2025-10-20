import React from 'react';
import Gallery from '../../components/Gallery';
import { calendarSelfieImages } from '../../data/images';

const CalendarSelfie = () => {
  return (
    <div className="calendar-selfie-page">
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
          <h1>Calendar Selfie</h1>
          <p>AI-Powered Personal Calendar Creation with Smart Selfie Integration</p>
        </div>
      </section>
      
      <Gallery images={calendarSelfieImages} title="Calendar Selfie Portfolio" />
    </div>
  );
};

export default CalendarSelfie;
