import React, { useState, useEffect, useRef } from 'react';
import walterImage from '../assets/leaders/walter.png';
import brianImage from '../assets/leaders/brian.png';
import electricTowers from '../assets/matthew-henry-yETqkLnhsUI-unsplash.jpg';
import windFarm from '../assets/jason-mavrommatis-nyL-rzwP-Mk-unsplash.jpg';

const WHY_ITEMS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Licensed Expertise',
    desc: 'EPRA Class A Auditors, Certified Energy Managers (CEM), and T3 Solar Specialists with decades of field experience.',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.1)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25V10.5m0 2.25v2.25m-16.5-6.75V10.5m0 2.25v2.25" />
      </svg>
    ),
    title: 'End-to-End EPC',
    desc: 'Full Procurement, Engineering, Construction, Commissioning and Maintenance under one integrated framework.',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.1)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Proven Track Record',
    desc: 'Successful delivery of 300+ energy audits and major infrastructure projects across East Africa since 2017.',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.1)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Regional Expertise',
    desc: 'Deep knowledge of East African regulatory frameworks, utility markets, and complex operational environments.',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.1)',
  },
];

const EXPERIENCE = [
  {
    title: 'Energy Audits & Efficiency',
    items: [
      '300+ Investment Grade & General Energy Audits',
      'Major malls: TRM, Garden City, Two Rivers, The Hub, The Oval',
      'Industrial clients in plastics, steel, tea, flowers & food processing',
      'Hospitals, hotels, government facilities & business parks',
    ],
    color: '#10B981',
  },
  {
    title: 'Key Projects Delivered',
    items: [
      'Electrical Safety Audits & Independent Commissioning',
      'Building Management & Automation Systems',
      'Solar PV & Renewable Energy Installations',
      'MV/LV Electrical Infrastructure Projects',
      'Power Factor Correction & Generator Systems',
    ],
    color: '#3B82F6',
  },
];

export default function TechnicalHub({ navigate }) {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const registerRef = (key) => (el) => {
    sectionRefs.current[key] = el;
    if (el) el.dataset.section = key;
  };

  return (
    <div style={{ background: '#050F1E' }}>

      {/* ── HERO ── */}
      <header className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${windFarm})` }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(120deg, rgba(5,15,30,0.97) 0%, rgba(5,15,30,0.88) 55%, rgba(5,15,30,0.6) 100%)'
        }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        {/* Glow */}
        <div className="absolute right-1/4 top-1/3 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase mb-8"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}>
            EST. 2017 • NAIROBI, KENYA
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight leading-[0.95] text-white max-w-4xl mb-6">
            Engineering with{' '}
            <span style={{
              background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Absolute Precision
            </span>
          </h1>

          <p className="text-white/55 text-xl max-w-2xl font-sans font-light leading-relaxed mb-10">
            Delivering world-class energy solutions across East Africa with technical excellence and integrity.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('contact')}
              className="px-8 py-4 text-sm font-semibold text-enigys-navy rounded-full transition-all duration-300 cursor-pointer font-sans"
              style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 0 40px rgba(16,185,129,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 60px rgba(16,185,129,0.6)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(16,185,129,0.4)'}
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('track-record')}
              className="px-8 py-4 text-sm font-semibold text-white rounded-full transition-all duration-300 cursor-pointer font-sans"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(12px)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
            >
              Our Track Record →
            </button>
          </div>
        </div>
      </header>

      {/* ── MANDATE ── */}
      <section
        ref={registerRef('mandate')}
        className="py-24 relative"
        style={{ background: '#080F1A', opacity: visibleSections.mandate ? 1 : 0, transform: visibleSections.mandate ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}
      >
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.25), transparent)' }} />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-enigys-blue block mb-3">OUR FOUNDATION</span>
              <h2 className="font-display text-5xl font-bold tracking-tight text-white">The Enigys Mandate</h2>
            </div>

            {/* Year card */}
            <div className="p-10 rounded-3xl relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)', filter: 'blur(20px)' }} />
              <p className="font-display text-7xl font-black text-enigys-blue mb-2">2017</p>
              <p className="text-xs font-mono uppercase tracking-widest text-white/35 mb-6">Incorporation Year</p>
              <p className="text-white/55 font-sans font-light leading-relaxed text-sm">
                Transforming legacy energy systems into modern, efficient, and regulatory-compliant power infrastructures across East Africa.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            {[
              {
                code: '// 01. PHILOSOPHY',
                title: 'Our Mission',
                desc: 'To deliver sustainable, high-performance energy solutions that power East Africa\'s industrial and commercial growth.',
                action: 'View Track Record →',
                color: '#10B981',
                onClick: () => navigate('track-record'),
              },
              {
                code: '// 02. EXPERTISE',
                title: 'Our Capabilities',
                desc: 'EPC • Investment-Grade Energy Audits • Solar Systems • Power Distribution • Regulatory Compliance.',
                action: 'View Services →',
                color: '#3B82F6',
                onClick: () => navigate('track-record'),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl transition-all duration-300 cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onClick={card.onClick}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = `${card.color}30`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                }}
              >
                <div className="text-xs font-mono mb-4" style={{ color: card.color }}>{card.code}</div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-4">{card.title}</h3>
                <p className="text-white/50 font-sans font-light text-sm leading-relaxed mb-6">{card.desc}</p>
                <span className="text-sm font-semibold font-sans transition-all duration-200 group-hover:translate-x-2 inline-block"
                  style={{ color: card.color }}>
                  {card.action}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section
        ref={registerRef('leadership')}
        className="py-24 relative overflow-hidden"
        style={{ opacity: visibleSections.leadership ? 1 : 0, transform: visibleSections.leadership ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease 0.2s' }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${electricTowers})` }} />
        <div className="absolute inset-0" style={{ background: 'rgba(5,15,30,0.93)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-enigys-emerald block mb-3">Executive Governance</span>
            <h2 className="font-display text-5xl font-bold tracking-tight text-white">Technical Leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                image: walterImage,
                name: 'Walter Kiplangat Korir',
                role: 'CEO / Lead Auditor',
                bio: 'BSc Electrical Engineering, MSc Energy Management, MBA. Fellow of EIK (FEI). 20+ years spanning heavy industrial power installations, grid-tie solar developments, and KPLC-interface MV procurement.',
                creds: ['FEI (Fellow)', 'EPRA Class A', 'CEM®'],
                color: '#3B82F6',
                onClick: () => navigate('contact'),
              },
              {
                image: brianImage,
                name: 'Brian Chebor Kiprop',
                role: 'Technical Director / Operations Manager',
                bio: 'BSc Mechanical & Power Plant Engineering, CEM®. 13+ years in industrial energy systems and renewable energy projects across East Africa.',
                creds: ['AEE CMVP', 'CEM®'],
                color: '#10B981',
                onClick: () => navigate('contact'),
              },
            ].map((leader, i) => (
              <div
                key={i}
                className="group rounded-3xl overflow-hidden transition-all duration-400"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  backdropFilter: 'blur(24px)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${leader.color}40`;
                  e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{
                    background: `linear-gradient(180deg, transparent 40%, rgba(5,15,30,0.9) 100%)`
                  }} />
                  {/* Role badge overlay */}
                  <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: `${leader.color}20`, border: `1px solid ${leader.color}40`, color: leader.color }}>
                      {leader.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-sm font-sans mb-5" style={{ color: leader.color }}>{leader.role}</p>
                  <p className="text-white/55 font-sans font-light text-sm leading-relaxed mb-6">{leader.bio}</p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    {leader.creds.map((c, j) => (
                      <span key={j} className="px-3 py-1 text-xs font-mono rounded-full text-white/60"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {c}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={leader.onClick}
                    className="text-sm font-semibold font-sans transition-all duration-200 group-hover:translate-x-1.5 inline-flex items-center gap-2 cursor-pointer"
                    style={{ color: leader.color }}
                  >
                    Connect → 
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ENIGYS ── */}
      <section
        ref={registerRef('why')}
        className="py-24 relative"
        style={{ background: '#080F1A', opacity: visibleSections.why ? 1 : 0, transform: visibleSections.why ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease 0.1s' }}
      >
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-enigys-emerald block mb-3">Our Edge</span>
            <h2 className="font-display text-5xl font-bold tracking-tight text-white">Why Choose Enigys</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = `${item.color}35`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.bg, color: item.color, border: `1px solid ${item.color}20` }}>
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 font-sans font-light text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-400 rounded-full" style={{ background: item.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT EXPERIENCE ── */}
      <section
        ref={registerRef('experience')}
        className="py-24 relative"
        style={{ background: '#050F1E', opacity: visibleSections.experience ? 1 : 0, transform: visibleSections.experience ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease 0.1s' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-enigys-emerald block mb-3">Delivered Results</span>
            <h2 className="font-display text-5xl font-bold tracking-tight text-white">Project Experience & Impact</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {EXPERIENCE.map((block, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 rounded-full" style={{ background: block.color }} />
                  <h3 className="font-display text-xl font-bold text-white">{block.title}</h3>
                </div>
                <ul className="space-y-4">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/55 font-sans text-sm font-light leading-relaxed">
                      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: block.color }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-28 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${windFarm})` }} />
        <div className="absolute inset-0" style={{ background: 'rgba(5,15,30,0.9)' }} />

        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-enigys-emerald block mb-4">Let's Work Together</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform Your Energy Infrastructure?
          </h2>
          <p className="text-white/50 text-lg mb-12 font-sans font-light leading-relaxed">
            Contact our team of certified experts today for a consultation on your energy needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('contact')}
              className="px-8 py-4 text-sm font-semibold text-enigys-navy rounded-full transition-all duration-300 cursor-pointer font-sans"
              style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 0 40px rgba(16,185,129,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 60px rgba(16,185,129,0.6)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(16,185,129,0.4)'}
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('track-record')}
              className="px-8 py-4 text-sm font-semibold text-white rounded-full transition-all duration-300 cursor-pointer font-sans"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(12px)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
            >
              View Our Projects
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}