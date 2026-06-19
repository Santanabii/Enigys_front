import React from 'react';
import walterImage from '../assets/leaders/walter.png';     
import brianImage from '../assets/leaders/brian.png';

export default function TechnicalHub() {
  return (
    <div className="bg-[#F3F7FA] text-[#0A192F] antialiased min-h-screen font-sans">
      
      {/* Hero Header */}
      <header className="relative bg-[#0A192F] text-white pt-52 pb-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30 mix-blend-luminosity bg-cover bg-center" 
             style={{ backgroundImage: "url('/images/industrial-hub-bg.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0A192F]/90 to-[#0A192F]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono tracking-widest uppercase bg-white/10 border border-white/20 rounded-full mb-6">
            ESTABLISHED 2017
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[1.05] max-w-4xl">
            Engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#2563EB]">Human Precision</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Meet the leadership driving technical excellence and sustainable infrastructure across East Africa.
          </p>
        </div>
      </header>

      {/* Mandate / Company Overview */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs tracking-[2px] text-[#2563EB] uppercase font-semibold">ENIGYS LIMITED</span>
              <h2 className="text-5xl font-bold tracking-tighter mt-3">Our Core Mandate</h2>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100">
              <p className="text-6xl font-black text-[#2563EB]">2017</p>
              <p className="text-sm uppercase tracking-widest text-[#475569] mt-2">Incorporation Year</p>
              <p className="mt-8 text-[#475569] leading-relaxed">
                A multidisciplinary Engineering, Procurement, Construction, Energy Services and Healthcare Engineering company serving Kenya and East Africa.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-[#10B981] transition-all group">
              <div className="text-[#10B981] font-mono text-sm mb-4">// VISION</div>
              <h3 className="text-3xl font-bold tracking-tight">To be Africa's leading engineering and infrastructure solutions partner.</h3>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-[#2563EB] transition-all group">
              <div className="text-[#2563EB] font-mono text-sm mb-4">// MISSION</div>
              <h3 className="text-3xl font-bold tracking-tight">Deliver world-class engineering solutions through excellence, innovation and sustainability.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase font-mono tracking-widest text-sm text-[#10B981]">Leadership</span>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Meet Our Technical Minds</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Walter */}
            <div className="group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative shadow-lg">
                <img 
                  src={walterImage} 
                  alt="Walter Kiplangat Korir"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all">
                  <p className="font-mono text-xs tracking-widest">MANAGING DIRECTOR</p>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold tracking-tight">Walter Kiplangat Korir</h3>
              <p className="text-[#2563EB] font-medium mt-1">Managing Director &amp; Lead Engineer</p>
              
              <p className="mt-6 text-[#475569] leading-relaxed">
                Registered graduate Electrical &amp; Electronic Engineer with extensive experience in energy audits, renewable energy integration, and healthcare technology. Certified Energy Manager (CEM) and EPRA Class A Energy Auditor.
              </p>

              <div className="flex gap-3 mt-8">
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">EPRA CLASS A</span>
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">AEE CEM</span>
              </div>
            </div>

            {/* Brian */}
            <div className="group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative shadow-lg">
                <img 
                  src={brianImage} 
                  alt="Brian Chebor Kiprop"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all">
                  <p className="font-mono text-xs tracking-widest">TECHNICAL DIRECTOR</p>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold tracking-tight">Brian Chebor Kiprop</h3>
              <p className="text-[#10B981] font-medium mt-1">Technical Director</p>
              
              <p className="mt-6 text-[#475569] leading-relaxed">
                Specialist in climate finance, infrastructure, and energy access with experience on AfDB, World Bank, GIZ, and UNDP projects. Certified Energy Manager (CEM) with strong background in power plant and renewable energy technologies.
              </p>

              <div className="flex gap-3 mt-8">
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">AEE CMVP</span>
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">REGIONAL EXPERT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Divisions / Capabilities (New Section from Document) */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-[#F3F7FA]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tighter">Our Core Capabilities</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 text-[#2563EB]">Energy Services</h3>
            <p className="text-[#475569] leading-relaxed">
              Investment Grade Energy Audits, Measurement &amp; Verification, ISO 50001 support, Power Quality Assessments, and Utility Optimization.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 text-[#10B981]">Renewable Energy</h3>
            <p className="text-[#475569] leading-relaxed">
              Solar PV EPC, Battery Storage, Hybrid Systems, Mini-Grids, Solar Water Pumping, and EV Charging Infrastructure.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}