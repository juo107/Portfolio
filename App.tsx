
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BackgroundShapes } from './components/BackgroundShapes';
import { GalaxyBackground } from './components/GalaxyBackground';
import { CustomCursor } from './components/CustomCursor';

// Pages
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-sky-500/30 font-inter cursor-none">
        <CustomCursor />
        <GalaxyBackground />
        <BackgroundShapes />
        <Navbar />
        <ScrollToTop />
        
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Vẫn hỗ trợ điều hướng nếu cần mở rộng sau này */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
