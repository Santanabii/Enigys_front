import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import TechnicalHub from './pages/TechnicalHub';
import TrackRecord from './pages/TrackRecord';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={setCurrentPage} />;
      case 'technical': return <TechnicalHub />;
      case 'track-record': return <TrackRecord />;
      case 'contact': return <Contact />;
      default: return <Home navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-enigys-emerald/30">
      {/* Structural Header Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-enigys-navy border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <button onClick={() => setCurrentPage('home')} className="flex items-center focus:outline-none cursor-pointer">
            <span className="text-lg font-extrabold tracking-widest text-white">
              ENIGYS<span className="text-enigys-emerald">.</span>
            </span>
          </button>
          
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wide text-white/90">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`pb-1 transition-all cursor-pointer ${currentPage === 'home' ? 'text-enigys-emerald border-b-2 border-enigys-emerald' : 'hover:text-white opacity-80 hover:opacity-100'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('technical')} 
              className={`pb-1 transition-all cursor-pointer ${currentPage === 'technical' ? 'text-enigys-emerald border-b-2 border-enigys-emerald' : 'hover:text-white opacity-80 hover:opacity-100'}`}
            >
              Technical Hub
            </button>
            <button 
              onClick={() => setCurrentPage('track-record')} 
              className={`pb-1 transition-all cursor-pointer ${currentPage === 'track-record' ? 'text-enigys-emerald border-b-2 border-enigys-emerald' : 'hover:text-white opacity-80 hover:opacity-100'}`}
            >
              Track Record
            </button>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className={`pb-1 transition-all cursor-pointer ${currentPage === 'contact' ? 'text-enigys-emerald border-b-2 border-enigys-emerald' : 'hover:text-white opacity-80 hover:opacity-100'}`}
            >
              Contact & RFQ
            </button>
          </div>

          <button 
            onClick={() => setCurrentPage('contact')} 
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-white border border-white/20 rounded-full hover:bg-white hover:text-enigys-navy transition duration-300 backdrop-blur-sm cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </nav>

      {/* Main Core Viewport */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Global Corporate Footer */}
      <footer className="bg-enigys-navy text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16">
          <div className="space-y-4">
            <span className="text-xl font-extrabold tracking-wider">ENIGYS LIMITED</span>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              A multi-disciplinary EPC framework delivering asset management solutions to heavy industry, medical sectors, and utility operators nationwide.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-enigys-emerald mb-5">Compliance & Standards</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li>EPRA Licensed Class A Energy Auditors</li>
              <li>NCA Registered Contractors</li>
              <li>HSEQ Framework (ISO 9001/14001 Alignments)</li>
              <li>NITA Certified Training Professionals</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-enigys-blue mb-5">Regional Footprint</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li>Blessed House, Thika Road, Nairobi</li>
              <li>P.O. Box 24122-00100, Kenya</li>
              <li>Direct Line: +254 736 172 007</li>
              <li>Inbox: info@enigysltd.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono tracking-wider">
          <p>&copy; 2026 ENIGYS LIMITED. Technical Execution Engine.</p>
          <div className="flex space-x-6">
            <span>Kenya & East Africa Distribution</span>
          </div>
        </div>
      </footer>
    </div>
  );
}