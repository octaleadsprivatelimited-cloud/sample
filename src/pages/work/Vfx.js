import React from 'react';
import { Helmet } from 'react-helmet';
import Gallery from '../../components/Gallery';
import { vfxImages } from '../../data/images';

const Vfx = () => {
  return (
    <div className="vfx-page">
      <Helmet>
        <title>VFX Services - Rotoscoping, Compositing, Matte Painting | PIXEL-I</title>
        <meta name="description" content="Professional VFX services including Rotoscoping, Paint & Cleanup, Matchmove/Camera Tracking, Matte Painting, and Compositing. View our portfolio of visual effects projects." />
        <meta name="keywords" content="VFX Services, Rotoscoping, Paint Cleanup, Matchmove, Camera Tracking, Matte Painting, Compositing, Visual Effects, Post Production" />
        <link rel="canonical" href="https://www.pixel-i.in/work/vfx" />
        
        <meta property="og:title" content="VFX Services Portfolio | PIXEL-I" />
        <meta property="og:description" content="Professional VFX services: Rotoscoping, Compositing, Matte Painting, and more" />
        <meta property="og:url" content="https://www.pixel-i.in/work/vfx" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "VFX Services",
            "provider": {
              "@type": "Organization",
              "name": "PIXEL-I Creative Studio"
            },
            "offers": [
              "Rotoscoping",
              "Paint & Cleanup",
              "Matchmove / Camera Tracking",
              "Matte Painting / Environment",
              "Compositing"
            ]
          })}
        </script>
      </Helmet>
      <section className="hero hero-with-video">
        <div className="hero-background">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            playsInline
          >
            <source src="/images/a.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>VFX</h1>
          <p>Advanced Visual Effects & AI-Powered Cinematic Excellence</p>
        </div>
      </section>
      
      <section className="vfx-content-section">
        <div className="container">
          <h2 className="section-title">VFX Portfolio</h2>
          <div className="vfx-blocks-container">
            <div className="vfx-info-block">
              <h3>VFX Compositing & Finishing Departments</h3>
              <ul>
                <li><strong>Rotoscoping</strong><br/>Manually isolates elements (like actors) from backgrounds for compositing.</li>
                <li><strong>Paint & Cleanup</strong><br/>Removes unwanted elements from live footage (e.g., wires, rigs, markers).</li>
                <li><strong>Matchmove / Camera Tracking</strong><br/>Tracks the real camera's movement so CG can match perfectly with live footage.</li>
                <li><strong>Matte Painting / Environment</strong><br/>Creates 2D or 2.5D digital backgrounds or set extensions.</li>
              </ul>
            </div>
            <div className="vfx-info-block">
              <h3>We are Expertise<br/>Lighting & Rendering Departments</h3>
              <ul>
                <li><strong>Lighting</strong><br/>Places lights and matches the lighting of CGI elements to live-action footage.<br/>Artists: Lighting TD, Lighter.</li>
                <li><strong>Rendering</strong><br/>Converts 3D scenes into final 2D images with lighting, textures, and effects.</li>
                <li><strong>Compositing</strong><br/>Combines rendered CG elements with live-action footage into seamless shots.<br/>Tasks: Keying, Rotoscoping, Color correction, Integration.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Gallery images={vfxImages} title="" />
    </div>
  );
};

export default Vfx;
