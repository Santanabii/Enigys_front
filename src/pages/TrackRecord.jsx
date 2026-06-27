import React, { useState, useRef, useEffect } from 'react';
import windTurbinesSunset from '../assets/karsten-wurth-ZKWgoRUYuMk-unsplash.jpg';
import electricTowers from '../assets/matthew-henry-yETqkLnhsUI-unsplash.jpg';

const STATS = [
  { value: '140+', label: 'Completed Projects', description: 'Utility-scale energy and infrastructure deployments across East Africa.' },
  { value: '450MW+', label: 'Managed Capacity', description: 'Total integrated grid-connected and hybrid thermal-solar power installations.' },
  { value: '99.8%', label: 'Operational Uptime', description: 'Maintained across all managed heavy infrastructure and power substations.' },
  { value: '12+', label: 'Regional Awards', description: 'Recognized for engineering excellence, environmental compliance, and safety.' },
];

const SECTORS = [
  {
    code: 'ENERGY',
    title: 'Grid & Renewable Energy',
    color: '#10B981',
    capabilities: ['Substation Automation', 'HV/MV Transmission lines', 'Commercial Solar PV Arrays', 'Battery Energy Storage Systems (BESS)']
  },
  {
    code: 'INFRA',
    title: 'Civil & Industrial Works',
    color: '#3B82F6',
    capabilities: ['Structural Frameworks', 'Industrial Plant Commissioning', 'Drainage & Hydrological Systems', 'Geotechnical Assessments']
  },
  {
    code: 'CONSULT',
    title: 'Technical Audits & Advisory',
    color: '#8B5CF6',
    capabilities: ['Feasibility Studies', 'Energy Efficiency Audits', 'Environmental Impact Assessments (EIA)', 'Regulatory Compliance Mapping']
  }
];

const PROJECTS = [
  {
    id: 1,
    title: 'Kajiado 40MW Solar PV Grid Integration',
    category: 'ENERGY',
    location: 'Kajiado County, Kenya',
    year: '2025',
    metrics: { scope: '40MW Peak Capacity', impact: 'Powers 15,000+ homes' },
    description: 'Full EPC management for a grid-tied utility solar array, featuring an automated SCADA control suite and a 10MWh battery storage facility.',
    accent: '#10B981',
  },
  {
    id: 2,
    title: 'Mombasa Port Industrial Substation Upgrade',
    category: 'INFRA',
    location: 'Mombasa, Kenya',
    year: '2024',
    metrics: { scope: '132/33kV Switchyard', impact: 'Zero port downtime during cutover' },
    description: 'Modernization of vintage switchgear assemblies and installation of digital protection relays. Delivered under tight timelines to prevent disruptions to maritime logistics.',
    accent: '#3B82F6',
  },
  {
    id: 3,
    title: 'Rift Valley Geothermal Plant Technical Audit',
    category: 'CONSULT',
    location: 'Naivasha, Kenya',
    year: '2025',
    metrics: { scope: '3-Month Deep Diagnostics', impact: 'Identified 12% efficiency leaks' },
    description: 'Comprehensive thermodynamic and mechanical system audit of a multi-unit steam turbine installation. Provided the foundational compliance framework for capital expansion.',
    accent: '#8B5CF6',
  },
  {
    id: 4,
    title: 'Thika Highway Commercial Complex Power Infrastructure',
    category: 'ENERGY',
    location: 'Nairobi, Kenya',
    year: '2023',
    metrics: { scope: '1.2MW Roof-top Hybrid', impact: 'Reduces diesel dependence by 65%' },
    description: 'Design and deployment of a synchronized grid linking private solar generation, diesel generator backups, and Kenya Power utility mains for an expansive retail hub.',
    accent: '#10B981',
  },
  {
    id: 5,
    title: 'Great Lakes Region Interconnector Feasibility Study',
    category: 'CONSULT',
    location: 'Cross-Border (Kenya-Uganda)',
    year: '2022',
    metrics: { scope: '400km Route Mapping', impact: 'Unlocked $110M funding pipeline' },
    description: 'Detailed geographical, economic, and political risk analysis for a high-voltage direct current (HVDC) cross-border transmission corridor.',
    accent: '#8B5CF6',
  }
];

const TIMELINE = [
  { year: '2026', title: 'Regional Expansion', body: 'Established permanent operational engineering hubs in Dar es Salaam and Kampala to handle cross-border infrastructural grids.' },
  { year: '2024', title: 'ISO 9001 & 14001 Accreditation', body: 'Formally certified for Integrated Quality Management and Environmental Stewardship across all heavy civil and electrical projects.' },
  { year: '2022', title: 'Utility-Scale Breakthrough', body: 'Secured and successfully executed our first multi-megawatt national grid supply contract, transforming our operational footprint.' },
  { year: '2020', title: 'Founding & Infrastructure Launch', body: 'Enigys Ltd launched with a core team of engineers focusing exclusively on industrial power quality assessments and localized automation.' }
];

export default function TrackRecord({ navigate }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
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
      { threshold: 0.08 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const registerRef = (key) => (el) => {
    sectionRefs.current[key] = el;
    if (el) el.dataset.section = key;
  };

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  const getCategoryColor = (cat) => {
    const map = { ENERGY: '#10B981', INFRA: '#3B82F6', CONSULT: '#8B5CF6' };
    return map[cat] || '#64748B';
  };

  return (
    <div style={{ background: '#050F1E' }}>

      {/* ── HERO ── */}
      <header className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${windTurbinesSunset})` }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(5,15,30,0.55) 0%, rgba(5,15,30,0.85) 60%, rgba(5,15,30,0.99) 100%)'
        }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        {/* Top glow */}
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-24" style={{ paddingTop: '120px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase text-enigys-emerald"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
                Proven Performance
              </div>
              <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-white leading-[0.92]">
                Engineering<br />Milestones Built<br />On{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Precision</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-white/50 text-base font-sans font-light max-w-sm lg:ml-auto leading-relaxed"
                style={{ borderLeft: '2px solid rgba(16,185,129,0.4)', paddingLeft: '16px' }}>
                A comprehensive history of infrastructural assets delivered on-time, within budget, and operating under optimal yield parameters.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── STATS DASHBOARD ── */}
      <section className="relative z-20 -mt-12 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  backdropFilter: 'blur(20px)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.09)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <span className="font-display text-4xl lg:text-5xl font-black block mb-2"
                  style={{ background: 'linear-gradient(135deg, #10B981, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {stat.value}
                </span>
                <span className="text-white text-sm font-semibold block mb-1 font-sans">{stat.label}</span>
                <p className="text-white/35 text-xs font-sans font-light leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTOR MATRIX ── */}
      <section
        ref={registerRef('sectors')}
        className="py-24"
        style={{ background: '#080F1A', opacity: visibleSections.sectors ? 1 : 0, transform: visibleSections.sectors ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}
      >
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.25), transparent)' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-enigys-blue block mb-3">[ Core Disciplines ]</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white">Sectors of Managed Operation</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {SECTORS.map((sector, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl flex flex-col justify-between transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = `${sector.color}30`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                }}
              >
                <div className="space-y-5">
                  <span className="text-[10px] font-mono tracking-widest font-bold block" style={{ color: sector.color }}>
                    // {sector.code} NODE
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">{sector.title}</h3>
                  <ul className="space-y-3 pt-1">
                    {sector.capabilities.map((cap, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-white/50 font-sans font-light">
                        <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: sector.color }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="text-xs font-mono uppercase tracking-widest font-semibold" style={{ color: sector.color }}>
                    Fully Compliant & Insured
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        ref={registerRef('projects')}
        className="py-24"
        style={{ background: '#050F1E', opacity: visibleSections.projects ? 1 : 0, transform: visibleSections.projects ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease 0.1s' }}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-enigys-emerald block mb-3">[ Project Repositories ]</span>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white">Historical Deployments</h2>
            </div>

            {/* Filter bar */}
            <div className="inline-flex flex-wrap gap-2 p-1.5 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {['ALL', 'ENERGY', 'INFRA', 'CONSULT'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer"
                  style={activeFilter === cat ? {
                    background: 'rgba(255,255,255,0.12)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                  } : {
                    color: 'rgba(255,255,255,0.4)',
                    border: '1px solid transparent',
                  }}
                  onMouseEnter={e => { if (activeFilter !== cat) e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
                  onMouseLeave={e => { if (activeFilter !== cat) e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  {cat === 'ALL' ? 'Show All' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = `${project.accent}35`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {/* Top accent line */}
                <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: project.accent }} />

                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider rounded-full"
                      style={{
                        color: getCategoryColor(project.category),
                        background: `${getCategoryColor(project.category)}12`,
                        border: `1px solid ${getCategoryColor(project.category)}25`,
                      }}>
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-white/30">{project.year}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug group-hover:text-white transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-white/45 text-xs font-sans font-light leading-relaxed line-clamp-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-white/25 block mb-1">Metric Scope</span>
                      <span className="text-xs font-bold text-white font-sans truncate block">{project.metrics.scope}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-white/25 block mb-1">Net Impact</span>
                      <span className="text-xs font-bold truncate block" style={{ color: project.accent }}>{project.metrics.impact}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-5 text-xs font-mono text-white/30">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section
        ref={registerRef('timeline')}
        className="py-24 relative"
        style={{ background: '#080F1A', opacity: visibleSections.timeline ? 1 : 0, transform: visibleSections.timeline ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}
      >
        {/* bg image subtle */}
        <div className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${electricTowers})` }} />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.25), transparent)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-enigys-blue block mb-3">[ Corporate Roadmap ]</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white">Evolutionary Milestones</h2>
          </div>

          <div className="relative space-y-10" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '32px', marginLeft: '16px' }}>
            {TIMELINE.map((evt, i) => (
              <div key={i} className="relative group">
                {/* Node */}
                <div
                  className="absolute -left-[41px] top-1 w-5 h-5 rounded-full transition-all duration-200"
                  style={{
                    background: '#050F1E',
                    border: '2px solid #3B82F6',
                    boxShadow: '0 0 0 4px rgba(37,99,235,0.1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#10B981';
                    e.currentTarget.style.borderColor = '#10B981';
                    e.currentTarget.style.boxShadow = '0 0 0 6px rgba(16,185,129,0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#050F1E';
                    e.currentTarget.style.borderColor = '#3B82F6';
                    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(37,99,235,0.1)';
                  }}
                />

                <div className="p-7 rounded-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
                >
                  <span className="text-sm font-mono font-bold text-enigys-blue block mb-2">{evt.year}</span>
                  <h3 className="font-display text-xl font-bold text-white tracking-tight mb-2">{evt.title}</h3>
                  <p className="text-white/45 text-sm font-sans font-light leading-relaxed">{evt.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}