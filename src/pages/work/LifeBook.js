import React from 'react';
import { Helmet } from 'react-helmet';
import Gallery from '../../components/Gallery';
import { lifeBookImages } from '../../data/images';

const LifeBook = () => {
  return (
    <div className="life-book-page">
      <Helmet>
        <title>Student's Lifebook Hyderabad | Academic Journey Documentation & Portfolio | PIXEL-I</title>
        <meta name="description" content="Student's Lifebook: A comprehensive academic journey documentation service in Hyderabad. Capturing milestones, personal growth, and creativity. Educational programs for schools and students." />
        <meta name="keywords" content="student lifebook Hyderabad, academic journey documentation, student portfolio Hyderabad, educational content creation, personal growth stories students, school memories digital portfolio" />
        <link rel="canonical" href="https://www.pixel-istudios.com/work/life-book" />
        <meta property="og:title" content="Student's Lifebook Hyderabad | Academic Journey Documentation | PIXEL-I" />
        <meta property="og:description" content="Capture your academic journey with Student's Lifebook. Professional documentation of milestones and personal growth." />
        <meta property="og:url" content="https://www.pixel-istudios.com/work/life-book" />
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
          <h1>Life Book</h1>
          <p>Student's Life Book - Capturing Memories, Milestones & Personal Growth</p>
        </div>
      </section>
      
      <Gallery images={lifeBookImages} title="Student's Life Book Portfolio" />
    </div>
  );
};

export default LifeBook;
