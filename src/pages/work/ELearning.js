import React from 'react';
import { Helmet } from 'react-helmet';
import Gallery from '../../components/Gallery';
import { digitalEducationImages } from '../../data/images';

const ELearning = () => {
  return (
    <div className="e-learning-page">
      <Helmet>
        <title>E-Learning Solutions Hyderabad | AI-Enhanced Educational Content | PIXEL-I</title>
        <meta name="description" content="Next-generation E-Learning solutions in Hyderabad. AI-enhanced educational content, interactive digital learning platforms for schools and corporate training. Edutainment by PIXEL-I." />
        <meta name="keywords" content="e-learning solutions Hyderabad, digital learning Hyderabad, educational content Hyderabad, AI in education Telangana, interactive learning Hyderabad, corporate training e-learning" />
        <link rel="canonical" href="https://www.pixel-istudios.com/work/e-learning" />
        <meta property="og:title" content="E-Learning Solutions Hyderabad | PIXEL-I Telangana" />
        <meta property="og:description" content="Next-generation digital learning with AI-enhanced content. Edutainment solutions for schools and training." />
        <meta property="og:url" content="https://www.pixel-istudios.com/work/e-learning" />
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
          <h1>E-Learning</h1>
          <p>Next-Generation Learning Solutions with AI-Enhanced Educational Content</p>
        </div>
      </section>
      
      <section className="ip-development-section">
        <div className="container">
          <div className="ip-development-content">
            <h2>EDUTAINMENT & DIGITAL LEARNING</h2>
            <p>Developing interactive learning content for children, schools, and corporate training.</p>
          </div>
        </div>
      </section>
      
      <Gallery images={digitalEducationImages} />
    </div>
  );
};

export default ELearning;
