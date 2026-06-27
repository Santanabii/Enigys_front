import React, { useEffect, useRef, useState } from 'react';
import windTurbinesSunset from '../assets/karsten-wurth-ZKWgoRUYuMk-unsplash.jpg';
import windTurbinesDusk from '../assets/karsten-wurth-0w-uTa0Xz7w-unsplash.jpg';
import electricTowers from '../assets/matthew-henry-yETqkLnhsUI-unsplash.jpg';
import windFarm from '../assets/jason-mavrommatis-nyL-rzwP-Mk-unsplash.jpg';

const SERVICES = [
  {
    num: '01',
    code: 'ENERGY',
    title: 'Energy Services',
    desc: 'Investment Grade Energy Audits, structural optimization, utility performance assessments, and real-time energy management frameworks aligned with ISO 50001 metrics.',
    tag: 'Efficiency Systems',
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.12)',
  },
  {
    num: '02',
    code: 'RENEW',
    title: 'Renewable Energy',
    desc: 'Turnkey Solar PV EPC projects, battery storage architectures (BESS), decentralized utility micro-grids, and sustainable electric vehicle commercial charging frameworks.',
    tag: 'Decarbonization',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.12)',
  },
  {
    num: '03',
    code: 'GRID',
    title: 'Electrical Infrastructure',
    desc: 'Comprehensive grid design, substations implementation, transformer refurbishments, and protective switchgear logic deployments across complex LV, MV, and HV environments.',
    tag: 'Grid Reliability',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.12)',
  },
  {
    num: '04',
    code: 'HEALTH',
    title: 'Healthcare Engineering',
    desc: 'Critical diagnostic system configurations, biomedical assets lifecycle optimization, and specialized clean room continuous backup installations for uninterrupted surgical functionality.',
    tag: 'Biomedical Asset Support',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.12)',
  },
];

const STATS = [
  { value: '2017', label: 'Established' },
  { value: 'Class A', label: 'EPRA Licensed' },
  { value: '140+', label: 'Projects Delivered' },
  { value: '99.8%', label: 'Uptime Record' },
];

export default function Home({ navigate }) {
  const heroRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY * 0.35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ background: '#050F1E' }}>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        {/* Background image with parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${electricTowers})`,
            transform: `translateY(${parallaxY}px)`,
            willChange: 'transform',
          }}
        />

        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(110deg, rgba(5,15,30,0.97) 0%, rgba(5,15,30,0.88) 45%, rgba(5,15,30,0.55) 75%, rgba(5,15,30,0.35) 100%)'
        }} />

        {/* Ambient glow */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[300px] rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.5) 0%, transparent 70%)', filter: 'blur(80px)' }} />

        {/* Grid dot pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: Copy */}
            <div className="lg:col-span-7 space-y-8">
              {/* Pill label */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', color: '#10B981' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-enigys-emerald animate-pulse" />
                Engineering Reliability. Powering Africa's Future.
              </div>

              {/* Headline */}
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
                Reliable,<br />Sustainable<br />
                <span style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 60%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>&amp; Innovative</span>
              </h1>

              <p className="text-white/60 text-lg max-w-xl font-light leading-relaxed font-sans">
                Enigys Limited delivers end-to-end engineering, procurement, and asset lifecycle support across the East African energy landscape.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('technical')}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-enigys-navy rounded-full transition-all duration-300 cursor-pointer font-sans"
                  style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 0 32px rgba(16,185,129,0.35)' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 48px rgba(16,185,129,0.55)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 32px rgba(16,185,129,0.35)'}
                >
                  Explore Technical Hub
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <a
                  href="https://wa.me/254736172007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full transition-all duration-300 font-sans"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                >
                  <svg className="w-4 h-4 text-enigys-emerald" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Stats glass cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(20px)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <p className="font-display text-3xl font-bold mb-1"
                    style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, #10B981, #34D399)' : 'linear-gradient(135deg, #3B82F6, #6366F1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs font-mono uppercase tracking-widest text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC STATEMENT ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: '#080F1A' }}>
        {/* Subtle border lines */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }} />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-enigys-blue block">Corporate Message</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-snug">
              Powering utilities, industries, and critical public infrastructure.
            </h2>
            <p className="text-white/50 text-base leading-relaxed font-sans font-light">
              We provide full-spectrum engineering integration, transforming traditional energy frameworks into streamlined, regulatory-compliant execution.
            </p>
            <button
              onClick={() => navigate('track-record')}
              className="inline-flex items-center gap-2 text-enigys-emerald text-sm font-semibold hover:gap-4 transition-all duration-300 font-sans cursor-pointer"
            >
              View Our Track Record
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-10 rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
              }}>
              {/* Glow accent */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.6) 0%, transparent 70%)', filter: 'blur(40px)' }} />

              <div className="relative">
                {/* Quote mark */}
                <div className="text-6xl font-display font-black text-enigys-emerald opacity-30 leading-none mb-4">"</div>
                <p className="text-white/80 text-base italic leading-relaxed font-sans font-light">
                  Africa's infrastructure future depends on reliable, sustainable and technology-driven engineering. ENIGYS is committed to supporting partners through innovative engineering solutions and long-term asset lifecycle support.
                </p>
                <div className="flex items-center gap-3 mt-8">
                  <div className="h-px w-8 bg-enigys-emerald" />
                  <p className="text-xs font-mono uppercase tracking-widest text-enigys-blue">Executive Leadership Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID with BACKGROUND IMAGE ── */}
      <section className="relative py-28 overflow-hidden">
        {/* Background: wind farm at sunset */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${windTurbinesDusk})` }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(5,15,30,0.97) 0%, rgba(5,15,30,0.87) 50%, rgba(5,15,30,0.97) 100%)'
        }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-enigys-emerald block">Capabilities Hub</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">Our Business Subdivisions</h2>
            <p className="text-white/45 font-sans font-light text-sm leading-relaxed">
              Comprehensive operational scale delivering engineering design through to field operations across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc) => (
              <div
                key={svc.num}
                className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-400 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(24px)',
                  minHeight: '260px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.borderColor = `${svc.color}50`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                {/* Corner glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${svc.color}25 0%, transparent 70%)`, filter: 'blur(20px)' }} />

                <div className="flex flex-col h-full justify-between relative">
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-mono font-bold"
                        style={{ background: svc.bg, color: svc.color, border: `1px solid ${svc.color}30` }}
                      >
                        {svc.num}
                      </div>
                      <span className="text-[10px] font-mono font-semibold tracking-widest uppercase"
                        style={{ color: svc.color, background: svc.bg, border: `1px solid ${svc.color}20`, padding: '4px 10px', borderRadius: '20px' }}>
                        {svc.code}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 text-white group-hover:text-white transition-colors"
                      style={{ fontFamily: 'Syne, sans-serif' }}>
                      {svc.title}
                    </h3>
                    <p className="text-white/50 text-sm font-sans font-light leading-relaxed">{svc.desc}</p>
                  </div>
                  <div className="pt-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-1.5 transition-all duration-300 group-hover:gap-3"
                      style={{ color: svc.color }}>
                      {svc.tag} →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#030B17' }}>
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.25), transparent)' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-white/30">Trusted Credentials</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { code: 'EPRA', label: 'Class A Energy Auditors' },
              { code: 'NCA', label: 'Registered Contractors' },
              { code: 'ISO', label: '9001 / 14001 Aligned' },
              { code: 'NITA', label: 'Certified Professionals' },
            ].map((cred, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
              >
                <span className="font-display text-2xl font-bold text-enigys-emerald">{cred.code}</span>
                <span className="text-xs font-sans text-white/40 text-center tracking-wide">{cred.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}