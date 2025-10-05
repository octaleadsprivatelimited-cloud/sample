import React from 'react';
import Gallery from '../../components/Gallery';
import { financialLiteracyImages } from '../../data/images';

const FinancialLiteracyBook = () => {
  return (
    <div className="financial-literacy-page">
      <section className="hero hero-with-image">
        <div className="hero-background">
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
