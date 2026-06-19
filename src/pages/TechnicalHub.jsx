import React from 'react';

// Leader Images
import walterImage from '../assets/leaders/walter.png';
import brianImage from '../assets/leaders/brian.png';

export default function TechnicalHub() {
  return (
    <div className="bg-[#F3F7FA] text-[#0A192F] antialiased min-h-screen font-sans">
      
      {/* Hero Header */}
      <header className="relative bg-[#0A192F] text-white pt-52 pb-36 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/industrial-hub-bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0A192F]/90 to-[#0A192F]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono tracking-widest uppercase bg-white/10 border border-white/20 rounded-full mb-6">
            EST. 2017 • NAIROBI, KENYA
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[1.05] max-w-4xl">
            Engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#2563EB]">Absolute Precision</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Delivering world-class energy solutions across East Africa with technical excellence and integrity.
          </p>
        </div>
      </header>

      {/* Mandate Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs tracking-[2px] text-[#2563EB] uppercase font-semibold">OUR FOUNDATION</span>
              <h2 className="text-5xl font-bold tracking-tighter mt-3">The Enigys Mandate</h2>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-6xl font-black text-[#2563EB]">2017</p>
              <p className="text-sm uppercase tracking-widest text-[#475569] mt-2">Incorporation Year</p>
              <p className="mt-8 text-[#475569] leading-relaxed">
                Transforming legacy energy systems into modern, efficient, and regulatory-compliant power infrastructures across East Africa.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-[#10B981] transition-all group">
              <div className="text-[#10B981] font-mono text-sm mb-4">// 01. PHILOSOPHY</div>
              <h3 className="text-3xl font-bold tracking-tight">Our Mission</h3>
              <p className="mt-6 text-[#475569] leading-relaxed">
                To deliver sustainable, high-performance energy solutions that power East Africa's industrial and commercial growth.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-[#2563EB] transition-all group">
              <div className="text-[#2563EB] font-mono text-sm mb-4">// 02. EXPERTISE</div>
              <h3 className="text-3xl font-bold tracking-tight">Our Capabilities</h3>
              <p className="mt-6 text-[#475569] leading-relaxed">
                EPC • Investment-Grade Energy Audits • Solar Systems • Power Distribution • Regulatory Compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase font-mono tracking-widest text-sm text-[#10B981]">EXECUTIVE GOVERNANCE</span>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Meet Our Technical Leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Walter Kiplangat Korir */}
            <div className="group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative shadow-xl">
                <img 
                  src={walterImage} 
                  alt="Walter Kiplangat Korir" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all">
                  <p className="font-mono text-xs tracking-widest">LEAD ENGINEER</p>
                </div>
              </div>
              <h3 className="text-3xl font-bold">Walter Kiplangat Korir</h3>
              <p className="text-[#2563EB] font-medium mt-1">Managing Director &amp; Lead Engineer</p>
              <p className="mt-6 text-[#475569] leading-relaxed">
                BSc Electrical &amp; Electronic Engineering, CEM®, EPRA Class A Energy Auditor. 
                Over 12 years delivering energy audits and renewable energy projects.
              </p>
              <div className="flex gap-3 mt-8">
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">EPRA CLASS A</span>
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">AEE CEM</span>
              </div>
            </div>

            {/* Brian Chebor Kiprop */}
            <div className="group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative shadow-xl">
                <img 
                  src={brianImage} 
                  alt="Brian Chebor Kiprop" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all">
                  <p className="font-mono text-xs tracking-widest">TECHNICAL DIRECTOR</p>
                </div>
              </div>
              <h3 className="text-3xl font-bold">Brian Chebor Kiprop</h3>
              <p className="text-[#10B981] font-medium mt-1">Technical Director / Operations Manager</p>
              <p className="mt-6 text-[#475569] leading-relaxed">
                BSc Mechanical &amp; Power Plant Engineering, CEM®. 
                13+ years in industrial energy systems and renewable energy projects.
              </p>
              <div className="flex gap-3 mt-8">
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">AEE CMVP</span>
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">CEM®</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F3F7FA] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase font-mono tracking-widest text-sm text-[#10B981]">OUR EDGE</span>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Why Choose Enigys</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 8.944 11.922.42.095.858.143 1.295.143a3 3 0 01.435-.008" />
                  </svg>
                ),
                title: "Licensed Expertise",
                desc: "EPRA Class A Auditors, Certified Energy Managers (CEM), and T3 Solar Specialists."
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2" />
                  </svg>
                ),
                title: "End-to-End EPC",
                desc: "Full Procurement, Engineering, Construction, Commissioning and Maintenance."
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-9 9-4-4-6 6" />
                  </svg>
                ),
                title: "Proven Track Record",
                desc: "Successful delivery of 300+ energy audits and major projects across East Africa."
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314-11.314z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Regional Expertise",
                desc: "Deep understanding of East African regulations, markets, and operational challenges."
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl hover:shadow-xl border border-slate-100 hover:border-[#10B981] transition-all duration-300">
                <div className="text-[#10B981] mb-6 transition-transform group-hover:scale-110">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Experience & Impact - New Replacement Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase font-mono tracking-widest text-sm text-[#10B981]">DELIVERED RESULTS</span>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Project Experience & Impact</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#F3F7FA] p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Energy Audits & Efficiency</h3>
              <ul className="space-y-4 text-[#475569]">
                <li className="flex gap-3"><span className="text-[#10B981] font-bold">•</span> 300+ Investment Grade & General Energy Audits completed</li>
                <li className="flex gap-3"><span className="text-[#10B981] font-bold">•</span> Major malls: TRM, Garden City, Two Rivers, The Hub, The Oval</li>
                <li className="flex gap-3"><span className="text-[#10B981] font-bold">•</span> Industrial clients in plastics, steel, tea, flowers & food processing</li>
                <li className="flex gap-3"><span className="text-[#10B981] font-bold">•</span> Hospitals, hotels, government facilities & business parks</li>
              </ul>
            </div>

            <div className="bg-[#F3F7FA] p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Key Projects Delivered</h3>
              <ul className="space-y-4 text-[#475569]">
                <li className="flex gap-3"><span className="text-[#10B981] font-bold">•</span> Electrical Safety Audits & Independent Commissioning</li>
                <li className="flex gap-3"><span className="text-[#10B981] font-bold">•</span> Building Management & Automation Systems (JCI Metasys, Honeywell, Tridium)</li>
                <li className="flex gap-3"><span className="text-[#10B981] font-bold">•</span> Solar PV & Renewable Energy Installations</li>
                <li className="flex gap-3"><span className="text-[#10B981] font-bold">•</span> MV/LV Electrical Infrastructure Projects</li>
                <li className="flex gap-3"><span className="text-[#10B981] font-bold">•</span> Power Factor Correction & Generator Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}