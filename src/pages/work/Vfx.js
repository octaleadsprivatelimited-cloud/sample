import React from 'react';
import Gallery from '../../components/Gallery';
import { vfxImages } from '../../data/images';

const Vfx = () => {
  return (
    <div className="vfx-page">
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
                <li><strong>Compositing</strong><br/>Combines rendered CG elements with live-action footage into seamless shots.<br/>Tasks: Keying, Rotoscoping, Color correction, Integration.</li>
              </ul>
            </div>
            <div className="vfx-info-block">
              <h3>We are Expertise<br/>Lighting & Rendering Departments</h3>
              <ul>
                <li><strong>Lighting</strong><br/>Places lights and matches the lighting of CGI elements to live-action footage.<br/>Artists: Lighting TD, Lighter.</li>
                <li><strong>Rendering</strong><br/>Converts 3D scenes into final 2D images with lighting, textures, and effects.</li>
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
