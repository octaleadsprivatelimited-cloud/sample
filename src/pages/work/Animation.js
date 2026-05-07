import React from 'react';
import { Helmet } from 'react-helmet';
import Gallery from '../../components/Gallery';
import { pureAnimationImages } from '../../data/images';

const Animation = () => {
  return (
    <div className="animation-page">
      <Helmet>
        <title>2D & 3D Animation Services Hyderabad | Motion Graphics Portfolio | PIXEL-I Telangana</title>
        <meta name="description" content="Professional 2D and 3D Animation Services in Hyderabad. Specializing in character animation, motion graphics, explainer videos, and IP development. HITEC City, Gachibowli, Madhapur. Creative partnerships and licensing." />
        <meta name="keywords" content="animation services Hyderabad, 2D animation Hyderabad, 3D animation Hyderabad, motion graphics Hyderabad, character animation Hyderabad, animation studio Telangana, IP development animation, explainer videos Hyderabad" />
        <link rel="canonical" href="https://www.pixel-istudios.com/work/animation" />
        <meta property="og:title" content="2D & 3D Animation Services Hyderabad | PIXEL-I Telangana" />
        <meta property="og:description" content="Professional Animation & Motion Graphics in Hyderabad. Character animation, 2D/3D, and original IP development." />
        <meta property="og:url" content="https://www.pixel-istudios.com/work/animation" />
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
