import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import TechnicalHub from './pages/TechnicalHub';
import TrackRecord from './pages/TrackRecord';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
  }, [currentPage]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Technical Hub', page: 'technical' },
    { label: 'Track Record', page: 'track-record' },
    { label: 'Contact & RFQ', page: 'contact' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={setCurrentPage} />;
      case 'technical': return <TechnicalHub navigate={setCurrentPage} />;
      case 'track-record': return <TrackRecord navigate={setCurrentPage} />;
      case 'contact': return <Contact />;
      default: return <Home navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#050F1E' }}>

      {/* ── Navbar ── */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050F1E]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => setCurrentPage('home')} className="focus:outline-none cursor-pointer group">
            <span className="font-display text-xl font-bold tracking-[0.15em] text-white group-hover:text-enigys-emerald transition-colors duration-300">
              ENIGYS<span className="text-enigys-emerald">.</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer relative pb-0.5 font-sans ${
                  currentPage === page
                    ? 'text-enigys-emerald'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
                {currentPage === page && (
                  <span className="absolute -bottom-0.5 left-0 w-full h-px bg-enigys-emerald" />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => setCurrentPage('contact')}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white rounded-full transition-all duration-300 cursor-pointer font-mono"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(37,99,235,0.15) 100%)',
              border: '1px solid rgba(16,185,129,0.4)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(16,185,129,0.3) 0%, rgba(37,99,235,0.3) 100%)';
              e.currentTarget.style.borderColor = 'rgba(16,185,129,0.8)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(37,99,235,0.15) 100%)';
              e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)';
            }}
          >
            Get In Touch
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 px-6 py-6 space-y-4" style={{ background: 'rgba(5,15,30,0.97)', backdropFilter: 'blur(24px)' }}>
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`block w-full text-left py-2 text-sm font-semibold uppercase tracking-widest cursor-pointer font-mono ${
                  currentPage === page ? 'text-enigys-emerald' : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage('contact')}
              className="mt-2 w-full py-3 text-xs font-bold uppercase tracking-widest text-white rounded-full cursor-pointer font-mono"
              style={{ background: 'linear-gradient(135deg, #10B981, #2563EB)' }}
            >
              Get In Touch
            </button>
          </div>
        )}
      </nav>

      {/* ── Main ── */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: '#030B17', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="space-y-5">
            <span className="font-display text-lg font-bold tracking-[0.15em] text-white">
              ENIGYS<span className="text-enigys-emerald">.</span>
            </span>
            <p className="text-white/50 text-sm font-light leading-relaxed font-sans">
              A multi-disciplinary EPC framework delivering asset management solutions to heavy industry, medical sectors, and utility operators nationwide.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://wa.me/254736172007" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,0.25)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(16,185,129,0.1)'}
              >
                <svg className="w-4 h-4 text-enigys-emerald" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-enigys-emerald mb-6 font-mono">Compliance & Standards</h4>
            <ul className="space-y-3 text-sm text-white/45 font-light font-sans">
              <li className="hover:text-white/70 transition-colors">EPRA Licensed Class A Energy Auditors</li>
              <li className="hover:text-white/70 transition-colors">NCA Registered Contractors</li>
              <li className="hover:text-white/70 transition-colors">HSEQ Framework (ISO 9001/14001)</li>
              <li className="hover:text-white/70 transition-colors">NITA Certified Training Professionals</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-enigys-blue mb-6 font-mono">Regional Footprint</h4>
            <ul className="space-y-3 text-sm text-white/45 font-light font-sans">
              <li className="hover:text-white/70 transition-colors">Blessed House, Thika Road, Nairobi</li>
              <li className="hover:text-white/70 transition-colors">P.O. Box 24122-00100, Kenya</li>
              <li><a href="tel:+254736172007" className="hover:text-enigys-emerald transition-colors">+254 736 172 007</a></li>
              <li><a href="mailto:info@enigysltd.com" className="hover:text-enigys-emerald transition-colors">info@enigysltd.com</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25 font-mono tracking-wider">&copy; 2026 ENIGYS LIMITED. Technical Execution Engine.</p>
          <p className="text-xs text-white/25 font-mono tracking-wider">Kenya & East Africa Distribution</p>
        </div>
      </footer>
    </div>
  );
}