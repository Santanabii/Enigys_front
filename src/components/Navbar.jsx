import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const activeStyle = "text-enigys-emerald border-b-2 border-enigys-emerald pb-1 transition font-medium text-base";
  const inactiveStyle = "hover:text-white pb-1 transition opacity-80 hover:opacity-100 font-medium text-base text-white/90";

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-enigys-navy border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-enigys-emerald font-sans select-none">
            Enigys
          </Link>
        </div>
        
        {/* Dynamic Navigation Coordinates */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Home</NavLink>
          <NavLink to="/technical-hub" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Technical Hub</NavLink>
          <NavLink to="/track-record" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Track Record</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Contact & RFQ</NavLink>
        </div>

        <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-white/30 rounded-full hover:bg-white hover:text-enigys-navy transition duration-300 backdrop-blur-sm">
          Get In Touch
        </Link>
      </div>
    </nav>
  );
}