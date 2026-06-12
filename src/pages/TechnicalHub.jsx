import React from 'react';

export default function TechnicalHub() {
  return (
    <div className="bg-[#F3F7FA] text-[#0A192F] antialiased min-h-screen flex flex-col font-sans">
      
    
      <header className="relative bg-[#0A192F] text-white pt-52 pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity bg-cover bg-center" style={{ backgroundImage: "url('/images/industrial-hub-bg.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/85 to-[#0A192F] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-widest uppercase text-[#10B981] bg-white/5 border border-white/10 rounded-full">
              Operational Framework
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] max-w-4xl">
              Engineering <br />with Absolute <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#10B981]">Precision</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-gray-400 text-base md:text-lg font-light max-w-sm lg:ml-auto leading-relaxed border-l-2 lg:border-l-0 lg:border-r-2 border-[#10B981] pl-4 lg:pl-0 lg:pr-4">
              A comprehensive overview of our corporate core mandate, executive governance, and field instrumentation fleet.
            </p>
          </div>
        </div>
      </header>

      {/* VoltEra Grid Structural Blueprint Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-slate-300 pt-12">
          
          {/* Column 1: Core Meta Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block">[ Corporate Identity ]</span>
              <h2 className="text-3xl font-extrabold text-[#0A192F] tracking-tight leading-none">The Mandate</h2>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200/60 shadow-sm">
              <p className="text-5xl font-black text-[#2563EB] tracking-tighter">2017</p>
              <p className="text-[11px] uppercase tracking-widest font-mono font-bold text-[#475569] mt-1">Incorporation Benchmarks</p>
              <p className="text-sm text-[#475569] font-light mt-4 leading-relaxed">
                Established to deliver premium engineering integration, converting legacy operations into fully certified, modern energy systems.
              </p>
            </div>
          </div>
          
          {/* Column 2 & 3: Structural Content Grid Split */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#10B981] font-bold">// 01 . PHILOSOPHY</span>
                <h3 className="text-2xl font-extrabold text-[#0A192F] tracking-tight">Our Mission Statement</h3>
                <p className="text-sm text-[#475569] font-light leading-relaxed">
                  To transform traditional energy and electrical architectures across East Africa into streamlined, highly efficient, and regulatory-compliant power networks. We build systems optimized for absolute runtime fidelity.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#2563EB] font-bold">// 02 . ENGAGEMENT</span>
                <h3 className="text-2xl font-extrabold text-[#0A192F] tracking-tight">Technical Execution</h3>
                <p className="text-sm text-[#475569] font-light leading-relaxed">
                  We specialize in multi-scale Procurement, Engineering Construction (EPC), Investment-Grade energy auditing, commercial solar utility transitions, decentralized micro-grid design matrices, and medical asset life-cycle execution modules.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Engineering Calculation Integration Framework Section */}
      <section className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 w-full space-y-12">
          <div className="border-l-4 border-[#10B981] pl-6 space-y-2">
            <span className="text-xs font-mono tracking-widest text-[#475569] uppercase block">Diagnostics Suite</span>
            <h2 className="text-4xl font-extrabold text-[#0A192F] tracking-tight">Industrial Calculation Verification</h2>
          </div>
          <div className="bg-[#F3F7FA] p-8 rounded-2xl border border-slate-200/80 max-w-4xl space-y-6">
            <p className="text-sm font-light text-[#475569] leading-relaxed">
              During standard Class A investment-grade energy audits, total active execution thresholds are verified using continuous multi-variable power calculations across low, medium, and high voltage distribution loops:
            </p>
            <div className="bg-[#0A192F] text-white p-6 rounded-xl text-center shadow-inner">
              <span className="block text-xl md:text-2xl font-mono font-light tracking-wide py-2">
                P = √3 × V × I × cosθ
              </span>
            </div>
            <p className="text-sm font-light text-[#475569] leading-relaxed">
              Where <strong className="font-semibold text-[#0A192F]">P</strong> represents active real electrical power system output in watts, <strong className="font-semibold text-[#0A192F]">V</strong> reflects root-mean-square system operating line-to-line electrical voltage matrices, <strong className="font-semibold text-[#0A192F]">I</strong> denotes measured continuous load alternating current levels, and <strong className="font-semibold text-[#0A192F]">cosθ</strong> defines evaluated reactive power factor efficiencies.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Leadership Directory */}
      <section className="bg-[#F3F7FA] py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-16 border-l-4 border-[#2563EB] pl-6 space-y-2">
            <span className="text-xs font-mono tracking-widest text-[#475569] uppercase block">Executive Governance</span>
            <h2 className="text-4xl font-extrabold text-[#0A192F] tracking-tight">Technical Leadership Roster</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Leader 1 */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 flex flex-col justify-between group hover:border-[#2563EB] transition duration-300 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#0A192F] text-white rounded-xl flex items-center justify-center transition group-hover:bg-[#2563EB] duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono bg-[#F3F7FA] border border-slate-300 px-2 py-0.5 rounded text-[#475569]">LEAD AUDITOR</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-[#0A192F] tracking-tight">Walter Kiplangat Korir</h3>
                  <p className="text-xs text-[#2563EB] font-mono font-bold uppercase mt-1">Managing Director / Lead Engineer</p>
                </div>
                <p className="text-sm text-[#475569] font-light leading-relaxed">
                  Over 12 years of professional experience in energy management, electrical systems engineering, and infrastructure projects across East Africa. Holds a BSc in Electrical Engineering from the University of Nairobi. Licensed as an EPRA Class A Auditor and T3 Solar Specialist.
                </p>
              </div>
              <div className="flex gap-2 pt-6 border-t border-slate-200 mt-6 text-[10px] font-mono font-bold text-[#475569]">
                <span className="bg-[#F3F7FA] px-2 py-1 rounded border">EPRA CLASS A</span>
                <span className="bg-[#F3F7FA] px-2 py-1 rounded border">AEE CERTIFIED CEM</span>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 flex flex-col justify-between group hover:border-[#10B981] transition duration-300 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#0A192F] text-white rounded-xl flex items-center justify-center transition group-hover:bg-[#10B981] duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono bg-[#F3F7FA] border border-slate-300 px-2 py-0.5 rounded text-[#475569]">OPERATIONS RUNTIME</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-[#0A192F] tracking-tight">Brian Chebor Kiprop</h3>
                  <p className="text-xs text-[#10B981] font-mono font-bold uppercase mt-1">Technical Director / Operations Manager</p>
                </div>
                <p className="text-sm text-[#475569] font-light leading-relaxed">
                  An energy consultant with over 13 years of specialized experience across industrial power plants, mechanical processing lines, and international water systems in Israel and Norway. Spearheaded the prominent multi-stakeholder ADELE project in Ethiopia.
                </p>
              </div>
              <div className="flex gap-2 pt-6 border-t border-slate-200 mt-6 text-[10px] font-mono font-bold text-[#475569]">
                <span className="bg-[#F3F7FA] px-2 py-1 rounded border">AEE CMVP</span>
                <span className="bg-[#F3F7FA] px-2 py-1 rounded border">KERB REGISTERED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}