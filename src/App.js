import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AbroadShoots from './pages/work/AbroadShoots';
import PhotoShoot from './pages/work/PhotoShoot';
import ProductShoot from './pages/work/ProductShoot';
import TvCs from './pages/work/TvCs';
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
          <Route path="/work/abroad-shoots" element={<AbroadShoots />} />
          <Route path="/work/photo-shoot" element={<PhotoShoot />} />
          <Route path="/work/product-shoot" element={<ProductShoot />} />
          <Route path="/work/tv-cs" element={<TvCs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
