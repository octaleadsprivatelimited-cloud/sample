import React from 'react';
import Gallery from '../../components/Gallery';
import { financialLiteracyImages } from '../../data/images';

const FinancialLiteracyBook = () => {
  return (
    <div className="financial-literacy-page">
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
          <h1>Financial Literacy Book</h1>
          <p>Interactive Educational Content for Financial Awareness & Money Management</p>
        </div>
      </section>
      
      <Gallery images={financialLiteracyImages} title="Financial Literacy Book Portfolio" />
    </div>
  );
};

export default FinancialLiteracyBook;
