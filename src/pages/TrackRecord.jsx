import React, { useState } from 'react';


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
    capabilities: ['Substation Automation', 'HV/MV Transmission lines', 'Commercial Solar PV Arrays', 'Battery Energy Storage Systems (BESS)']
  },
  {
    code: 'INFRA',
    title: 'Civil & Industrial Works',
    capabilities: ['Structural Frameworks', 'Industrial Plant Commissioning', 'Drainage & Hydrological Systems', 'Geotechnical Assessments']
  },
  {
    code: 'CONSULT',
    title: 'Technical Audits & Advisory',
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
    description: 'Full engineering, procurement, and construction (EPC) management for a grid-tied utility solar array, featuring an automated SCADA control suite and a 10MWh battery storage facility.'
  },
  {
    id: 2,
    title: 'Mombasa Port Industrial Substation Upgrade',
    category: 'INFRA',
    location: 'Mombasa, Kenya',
    year: '2024',
    metrics: { scope: '132/33kV Switchyard', impact: 'Zero port downtime during cutover' },
    description: 'Modernization of vintage switchgear assemblies and installation of digital protection relays. Delivered under tight timelines to prevent disruptions to primary maritime logistics pathways.'
  },
  {
    id: 3,
    title: 'Rift Valley Geothermal Plant Technical Audit',
    category: 'CONSULT',
    location: 'Naivasha, Kenya',
    year: '2025',
    metrics: { scope: '3-Month Deep Diagnostics', impact: 'Identified 12% efficiency leaks' },
    description: 'Comprehensive thermodynamic and mechanical system audit of a multi-unit steam turbine installation. Provided the foundational compliance framework for their subsequent capital expansion.'
  },
  {
    id: 4,
    title: 'Thika Highway Commercial Complex Power Infrastructure',
    category: 'ENERGY',
    location: 'Nairobi, Kenya',
    year: '2023',
    metrics: { scope: '1.2MW Roof-top Hybrid', impact: 'Reduces diesel dependence by 65%' },
    description: 'Design and deployment of a synchronized synchronization grid linking private solar generation, diesel generator backups, and Kenya Power utility mains for an expansive retail hub.'
  },
  {
    id: 5,
    title: 'Great Lakes Region Interconnector Feasibility Study',
    category: 'CONSULT',
    location: 'Cross-Border (Kenya-Uganda)',
    year: '2022',
    metrics: { scope: '400km Route Mapping', impact: 'Unlocked $110M funding pipeline' },
    description: 'Detailed geographical, economic, and political risk analysis for a high-voltage direct current (HVDC) cross-border transmission corridor.'
  }
];

const TIMELINE = [
  { year: '2026', title: 'Regional Expansion', body: 'Established permanent operational engineering hubs in Dar es Salaam and Kampala to handle cross-border infrastructural grids.' },
  { year: '2024', title: 'ISO 9001 & 14001 Accreditation', body: 'Formally certified for Integrated Quality Management and Environmental Stewardship across all heavy civil and electrical projects.' },
  { year: '2022', title: 'Utility-Scale Breakthrough', body: 'Secured and successfully executed our first multi-megawatt national grid supply contract, transforming our operational footprint.' },
  { year: '2020', title: 'Founding & Initial Infrastructure Launch', body: 'Enigys Ltd launched with a core team of six engineers focusing exclusively on industrial power quality assessments and localized automation.' }
];

export default function TrackRecord() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#F3F7FA] text-[#0A192F] antialiased min-h-screen font-sans">
      
      {/* Editorial Hero Header */}
      <header className="relative bg-[#0A192F] text-white pt-52 pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-widest uppercase text-[#10B981] bg-white/5 border border-white/10 rounded-full">
              Proven Performance
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] max-w-4xl">
              Engineering Milestones <br />Built On <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#2563EB]">Precision</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-gray-400 text-base md:text-lg font-light max-w-sm lg:ml-auto leading-relaxed border-l-2 lg:border-l-0 lg:border-r-2 border-[#10B981] pl-4 lg:pl-0 lg:pr-4">
              A comprehensive history of infrastructural assets delivered on-time, within budget compliance frameworks, and operating under optimal yield parameters.
            </p>
          </div>
        </div>
      </header>

      {/* Numerical Impact Dashboard Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-md transition-transform hover:-translate-y-1">
              <span className="text-4xl lg:text-5xl font-black text-[#2563EB] tracking-tight block">{stat.value}</span>
              <span className="text-sm font-bold text-[#0A192F] block mt-2">{stat.label}</span>
              <p className="text-xs text-[#475569] font-light mt-2 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capability Domain Matrix */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-4 mb-16 text-center lg:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block">[ Core Disciplines ]</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Sectors of Managed Operation</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SECTORS.map((sector, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest font-bold text-[#10B981] uppercase block">// {sector.code} NODE</span>
                <h3 className="text-xl font-bold tracking-tight text-[#0A192F]">{sector.title}</h3>
                <ul className="space-y-3 pt-2">
                  {sector.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#475569] font-light">
                      <svg className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-100 pt-6 mt-8">
                <span className="text-xs text-[#2563EB] font-semibold tracking-wider uppercase block">Fully Compliant & Insured</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Case Studies Registry */}
      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#10B981] block">[ Project Repositories ]</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Historical Deployments</h2>
            </div>
            
            {/* Filter Control Bar */}
            <div className="inline-flex flex-wrap gap-2 p-1.5 bg-[#F3F7FA] border border-slate-200 rounded-xl">
              {['ALL', 'ENERGY', 'INFRA', 'CONSULT'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                    activeFilter === category 
                      ? 'bg-[#0A192F] text-white shadow-sm' 
                      : 'text-[#475569] hover:text-[#0A192F]'
                  }`}
                >
                  {category === 'ALL' ? 'Show All' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Grid Mapping */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-[#F3F7FA] border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#2563EB]/40 transition-all duration-300">
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100 rounded-md">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{project.year}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#0A192F] group-hover:text-[#2563EB] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-[#475569] font-light leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div className="p-8 pt-0">
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-200/60 pt-6">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block">Metric Scope</span>
                      <span className="text-xs font-bold text-[#0A192F] block mt-0.5 truncate">{project.metrics.scope}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block">Net Impact</span>
                      <span className="text-xs font-bold text-[#10B981] block mt-0.5 truncate">{project.metrics.impact}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25A7.5 7.5 0 1119.5 10.5z"></path>
                    </svg>
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Chronological Corporate Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block">[ Corporate Roadmap ]</span>
          <h2 className="text-3xl font-extrabold tracking-tight">Evolutionary Milestones</h2>
        </div>

        <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-12">
          {TIMELINE.map((evt, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#2563EB] group-hover:bg-[#10B981] group-hover:border-[#10B981] transition-colors duration-200"></div>
              
              <div className="space-y-1">
                <span className="text-sm font-mono font-bold text-[#2563EB] block">{evt.year}</span>
                <h3 className="text-xl font-extrabold text-[#0A192F] tracking-tight">{evt.title}</h3>
                <p className="text-sm text-[#475569] font-light leading-relaxed max-w-2xl pt-1">
                  {evt.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}