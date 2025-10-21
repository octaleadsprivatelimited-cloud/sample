import React from 'react';
import { Helmet } from 'react-helmet';
import Gallery from '../../components/Gallery';
import { animationImages } from '../../data/images';

const AiFilmMaking = () => {
  return (
    <div className="ai-film-making-page">
      <Helmet>
        <title>AI Film Making Services Hyderabad | AI Movie Production, Script Generation | PIXEL-I Telangana</title>
        <meta name="description" content="Revolutionary AI Film Making Services in Hyderabad: AI Script Generation, Automated Storyboarding, AI-Powered Editing, Socio Fantasy Films, Cover Songs, Web Series. HITEC City, Gachibowli, Madhapur. Portfolio: Virat 2500 BC, Mirror, Vedanta@AI. 📞 9704771222" />
        <meta name="keywords" content="AI film making Hyderabad, AI movie production Hyderabad, AI script generation Hyderabad, AI video editing Hyderabad, AI storyboarding Hyderabad, AI films Telangana, AI cinematography Hyderabad, AI post production Hyderabad, HITEC City AI films, Gachibowli AI production, artificial intelligence films Hyderabad" />
        <link rel="canonical" href="https://www.pixel-i.in/work/ai-film-making" />
        
        <meta property="og:title" content="AI Film Making Services Hyderabad | PIXEL-I Telangana" />
        <meta property="og:description" content="Revolutionary AI Film Making in Hyderabad: AI Script Generation, Editing, Storyboarding. Portfolio: Virat 2500 BC, Mirror, Vedanta@AI." />
        <meta property="og:url" content="https://www.pixel-i.in/work/ai-film-making" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.pixel-i.in/images/wp 03 (5).png" />
        <meta property="og:locality" content="Hyderabad" />
        <meta property="og:region" content="Telangana" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "AI Film Making Portfolio",
            "description": "Portfolio of AI-powered film production projects",
            "creator": {
              "@type": "Organization",
              "name": "PIXEL-I Creative Studio"
            },
            "genre": "AI Films"
          })}
        </script>
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
