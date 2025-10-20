import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNavigation from './components/SideNavigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Sitemap from './pages/Sitemap';
import Animation from './pages/work/Animation';
import AiFilmMaking from './pages/work/AiFilmMaking';
import PhotoShoot from './pages/work/PhotoShoot';
import LifeBook from './pages/work/LifeBook';
import Vfx from './pages/work/Vfx';
import CalendarSelfie from './pages/work/CalendarSelfie';
import FinancialLiteracyBook from './pages/work/FinancialLiteracyBook';
import ELearning from './pages/work/ELearning';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SideNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/work/ai-film-making" element={<AiFilmMaking />} />
          <Route path="/work/animation" element={<Animation />} />
          <Route path="/work/life-book" element={<LifeBook />} />
          <Route path="/work/vfx" element={<Vfx />} />
          <Route path="/work/calendar-selfie" element={<CalendarSelfie />} />
          <Route path="/work/financial-literacy-book" element={<FinancialLiteracyBook />} />
          <Route path="/work/e-learning" element={<ELearning />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
