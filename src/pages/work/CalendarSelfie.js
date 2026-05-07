import React from 'react';
import { Helmet } from 'react-helmet';
import Gallery from '../../components/Gallery';
import { calendarSelfieImages } from '../../data/images';

const CalendarSelfie = () => {
  return (
    <div className="calendar-selfie-page">
      <Helmet>
        <title>AI Calendar Selfie Hyderabad | Personalized AI Calendars | PIXEL-I Telangana</title>
        <meta name="description" content="AI Calendar Selfie: Create personalized calendars with smart AI selfie integration in Hyderabad. Perfect for students, families, and corporate gifts. Innovative digital solutions by PIXEL-I." />
        <meta name="keywords" content="calendar selfie Hyderabad, AI calendar Hyderabad, personalized calendar Hyderabad, smart calendar selfie, digital calendar solutions Telangana" />
        <link rel="canonical" href="https://www.pixel-istudios.com/work/calendar-selfie" />
        <meta property="og:title" content="AI Calendar Selfie Hyderabad | PIXEL-I Telangana" />
        <meta property="og:description" content="Create personalized AI calendars with smart selfie integration. Innovative digital gifts and solutions." />
        <meta property="og:url" content="https://www.pixel-istudios.com/work/calendar-selfie" />
        <meta property="og:type" content="website" />
      </Helmet>
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
