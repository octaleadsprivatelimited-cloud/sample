import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCarousel from '../components/CategoryCarousel';
import { 
  weddingImages, 
  eventImages, 
  birthdayImages, 
  portraitImages, 
  natureImages 
} from '../data/images';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Capturing Life's Beautiful Moments</h1>
          <p>
            Professional photography services for weddings, events, birthdays, portraits, and nature. 
            Let us help you preserve your precious memories with stunning imagery.
          </p>
        </div>
      </section>

      
      {/* Category Carousels Section */}
      <section className="categories-section">
        <div className="carousels-full-width">
          
          {/* Wedding Photography */}
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Wedding Photography"
                images={weddingImages}
                category="wedding"
              />
              <Link to="/wedding" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>

          {/* Event Photography */}
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Event Photography"
                images={eventImages}
                category="event"
              />
              <Link to="/event" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>

          {/* Birthday Photography */}
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Birthday Photography"
                images={birthdayImages}
                category="birthday"
              />
              <Link to="/birthday" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>

          {/* Portrait Photography */}
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Portrait Photography"
                images={portraitImages}
                category="portrait"
              />
              <Link to="/portrait" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>

          {/* Nature Photography */}
          <div className="category-section">
            <div className="category-section-header">
              <CategoryCarousel 
                title="Nature Photography"
                images={natureImages}
                category="nature"
              />
              <Link to="/nature" className="view-btn-top-right">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
