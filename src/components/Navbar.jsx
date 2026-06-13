import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeStyle = "text-enigys-emerald border-b-2 border-enigys-emerald pb-1 transition font-medium text-base";
  const inactiveStyle = "hover:text-white pb-1 transition opacity-80 hover:opacity-100 font-medium text-base text-white/90";

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-enigys-navy border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-enigys-emerald font-sans select-none">
          Enigys
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Home</NavLink>
          <NavLink to="/technical-hub" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Technical Hub</NavLink>
          <NavLink to="/track-record" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Track Record</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Contact & RFQ</NavLink>
        </div>

        {/* Desktop CTA Button */}
        <Link to="/contact" className="hidden md:inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-white/30 rounded-full hover:bg-white hover:text-enigys-navy transition duration-300 backdrop-blur-sm">
          Get In Touch
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-enigys-navy border-t border-white/10 px-6 py-4 space-y-4">
          <NavLink 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block py-2 text-sm font-semibold uppercase tracking-wider ${isActive ? 'text-enigys-emerald' : 'text-white/90 hover:text-white'}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/technical-hub" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block py-2 text-sm font-semibold uppercase tracking-wider ${isActive ? 'text-enigys-emerald' : 'text-white/90 hover:text-white'}`}
          >
            Technical Hub
          </NavLink>
          <NavLink 
            to="/track-record" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block py-2 text-sm font-semibold uppercase tracking-wider ${isActive ? 'text-enigys-emerald' : 'text-white/90 hover:text-white'}`}
          >
            Track Record
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block py-2 text-sm font-semibold uppercase tracking-wider ${isActive ? 'text-enigys-emerald' : 'text-white/90 hover:text-white'}`}
          >
            Contact & RFQ
          </NavLink>
          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-white/30 rounded-full hover:bg-white hover:text-enigys-navy transition duration-300 backdrop-blur-sm mt-2"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </nav>
  );
}