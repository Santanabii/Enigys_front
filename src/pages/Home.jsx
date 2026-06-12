import React from 'react';

export default function Home({ navigate }) {
  return (
    <>
     
      <section 
        className="relative min-h-screen flex items-center bg-enigys-navy text-white pt-24 overflow-hidden bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `linear-gradient(to right, rgba(10, 25, 47, 0.96) 35%, rgba(10, 25, 47, 0.4) 100%), url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/5 border border-white/10 text-enigys-emerald backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-enigys-emerald animate-pulse"></span>
              Engineering Reliability. Powering Africa's Future.
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15] max-w-3xl">
              Reliable, Sustainable <br />& Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-enigys-emerald">Solutions</span>
            </h1>
            
            <p className="text-gray-300 text-base md:text-lg max-w-xl font-light leading-relaxed">
              Enigys Limited delivers end-to-end engineering, procurement, and asset lifecycle support across the East African energy landscape.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button onClick={() => navigate('technical')} className="px-8 py-4 text-xs uppercase tracking-widest font-bold bg-enigys-emerald text-enigys-navy rounded-full shadow-md hover:bg-emerald-400 transition duration-300 text-center cursor-pointer">
                Explore Technical Hub
              </button>
              <a href="https://wa.me/254736172007" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-xs uppercase tracking-widest font-bold border border-white/20 rounded-full hover:bg-white/10 transition duration-300 flex items-center gap-2 backdrop-blur-sm justify-center">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-3xl font-extrabold text-enigys-emerald mb-1">2017</p>
              <p className="text-xs uppercase tracking-widest font-medium text-gray-400">Established</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-3xl font-extrabold text-blue-400 mb-1">Class A</p>
              <p className="text-xs uppercase tracking-widest font-medium text-gray-400">EPRA Licensed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Statement Block */}
      <section className="py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-enigys-blue block">Corporate Message</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-enigys-navy leading-snug">
              Powering utilities, industries, and critical public infrastructure.
            </h2>
            <p className="text-enigys-steel text-base leading-relaxed font-light">
              We provide full-spectrum engineering integration, transforming traditional energy frameworks into streamlined, regulatory-compliant execution.
            </p>
          </div>
          <div className="lg:col-span-6 bg-enigys-slate p-10 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-28 h-24 bg-enigys-blue/5 rounded-full blur-2xl"></div>
            <p className="text-base italic text-enigys-navy font-medium mb-6 leading-relaxed">
              "Africa's infrastructure future depends on reliable, sustainable and technology-driven engineering. ENIGYS is committed to supporting partners through innovative engineering solutions and long-term asset lifecycle support."
            </p>
            <div className="flex items-center space-x-3">
              <div className="h-px w-6 bg-enigys-emerald"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-enigys-blue">Executive Leadership Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Capabilities Grid with Grid-Substation Background Image */}
      <section 
        id="services" 
        className="relative py-28 text-white bg-cover bg-center bg-no-repeat bg-fixed" 
        style={{ backgroundImage: `linear-gradient(180deg, #0A192F 0%, rgba(10, 25, 47, 0.88) 50%, #0A192F 100%), url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-enigys-emerald block">Capabilities Hub</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Business Subdivisions</h2>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Comprehensive operational scale delivering engineering design through to field operations across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-white/5 border border-white/15 p-8 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="w-11 h-11 rounded-xl bg-enigys-blue/20 flex items-center justify-center text-enigys-blue font-bold text-sm mb-5">01</div>
                <h3 class="text-xl font-bold mb-3 group-hover:text-enigys-emerald transition">Energy Services</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Investment Grade Energy Audits, structural optimization, utility performance assessments, and real-time energy management frameworks aligned with ISO 50001 metrics.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-enigys-emerald inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Efficiency Systems &rarr;</span>
              </div>
            </div>

            <div className="group bg-white/5 border border-white/15 p-8 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="w-11 h-11 rounded-xl bg-enigys-emerald/20 flex items-center justify-center text-enigys-emerald font-bold text-sm mb-5">02</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-enigys-emerald transition">Renewable Energy</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Turnkey Solar PV EPC projects, battery storage architectures (BESS), decentralized utility micro-grids, and sustainable electric vehicle commercial charging frameworks.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-enigys-emerald inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Decarbonization &rarr;</span>
              </div>
            </div>

            <div className="group bg-white/5 border border-white/15 p-8 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-sm mb-5">03</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-enigys-emerald transition">Electrical Infrastructure</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Comprehensive grid design, substations implementation, transformer refurbishments, and protective switchgear logic deployments across complex LV, MV, and HV environments.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-enigys-emerald inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Grid Reliability &rarr;</span>
              </div>
            </div>

            <div className="group bg-white/5 border border-white/15 p-8 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="w-11 h-11 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-sm mb-5">04</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-enigys-emerald transition">Healthcare Engineering</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Critical diagnostic system configurations, biomedical assets lifecycle optimization, and specialized clean room continuous backup installations for uninterrupted surgical functionality.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-enigys-emerald inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Biomedical Asset Support &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}