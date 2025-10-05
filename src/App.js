import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Animation from './pages/work/Animation';
import PhotoShoot from './pages/work/PhotoShoot';
import LifeBook from './pages/work/LifeBook';
import Vfx from './pages/work/Vfx';
import CalendarSelfie from './pages/work/CalendarSelfie';
import FinancialLiteracyBook from './pages/work/FinancialLiteracyBook';
import ELearning from './pages/work/ELearning';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
              <Route path="/work/ai-film-making" element={<Animation />} />
              <Route path="/work/photo-shoot" element={<PhotoShoot />} />
              <Route path="/work/life-book" element={<LifeBook />} />
              <Route path="/work/vfx" element={<Vfx />} />
              <Route path="/work/calendar-selfie" element={<CalendarSelfie />} />
              <Route path="/work/financial-literacy-book" element={<FinancialLiteracyBook />} />
              <Route path="/work/e-learning" element={<ELearning />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
