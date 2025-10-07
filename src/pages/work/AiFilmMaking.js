import React from 'react';
import Gallery from '../../components/Gallery';
import { animationImages } from '../../data/images';

const AiFilmMaking = () => {
  return (
    <div className="ai-film-making-page">
      <section className="hero hero-with-video">
        <div className="hero-background">
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/images/Pixell-I-Logo-video-compressed.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>AI Film Making</h1>
          <p>Revolutionary AI-Powered Creative Storytelling & Film Production</p>
        </div>
      </section>
      
      <section className="ai-content-section">
        <div className="container">
          <h2 className="section-title">AI Film Making Portfolio</h2>
          
          <div className="ai-blocks-container">
            {/* Left Block - AI Films */}
            <div className="ai-info-block">
              <h3>AI Films</h3>
              <ul>
                <li>Socio Fantasy Films</li>
                <li>Social Films</li>
                <li>Cover Songs</li>
                <li>AD Films</li>
                <li>Web series</li>
                <li>Movie Previews</li>
                <li>Lyrical Videos</li>
              </ul>
            </div>

            {/* Right Block - AI Projects */}
            <div className="ai-info-block">
              <h3>AI Projects</h3>
              <ul>
                <li>Virat 2500 BC</li>
                <li>Mirror</li>
                <li>Vedanta@AI</li>
                <li>Promotional AI videos</li>
                <li>Corporate AI Videos</li>
                <li>AI Documentaries</li>
                <li>AI Political Promotions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Gallery images={animationImages} title="" />
    </div>
  );
};

export default AiFilmMaking;
