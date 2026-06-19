import React from 'react';

// Import leader images (adjust path based on your folder structure)
import walterImage from '../assets/leaders/walter.jpg';
import brianImage from '../assets/leaders/brian.jpg';

export default function TechnicalHub() {
  return (
    <div className="bg-[#F3F7FA] text-[#0A192F] antialiased min-h-screen font-sans">
      
      {/* Enhanced Hero */}
      <header className="relative bg-[#0A192F] text-white pt-52 pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity bg-cover bg-center" 
             style={{ backgroundImage: "url('/images/industrial-hub-bg.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0A192F]/90 to-[#0A192F]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono tracking-widest uppercase bg-white/10 border border-white/20 rounded-full mb-6">
            EST. 2017 • NAIROBI
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
            
            {/* Walter */}
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
                12+ years in energy systems engineering. EPRA Class A Auditor and T3 Solar Specialist.
              </p>
              <div className="flex gap-3 mt-8">
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">EPRA CLASS A</span>
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">AEE CEM</span>
              </div>
            </div>

            {/* Brian */}
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
              <p className="text-[#10B981] font-medium mt-1">Technical Director</p>
              <p className="mt-6 text-[#475569] leading-relaxed">
                13+ years across industrial power, mechanical systems, and international energy projects.
              </p>
              <div className="flex gap-3 mt-8">
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">AEE CMVP</span>
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">KERB REGISTERED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Now after Leadership */}
      <section className="bg-[#F3F7FA] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase font-mono tracking-widest text-sm text-[#10B981]">OUR EDGE</span>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Why Choose Enigys</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏆",
                title: "Licensed Expertise",
                desc: "EPRA Class A Auditors and T3 Solar Specialists with full regulatory compliance."
              },
              {
                icon: "🔧",
                title: "End-to-End EPC",
                desc: "Complete Procurement, Engineering, and Construction services under one roof."
              },
              {
                icon: "📈",
                title: "Proven Results",
                desc: "Measurable energy savings and reliable infrastructure delivered on time."
              },
              {
                icon: "🌍",
                title: "Regional Knowledge",
                desc: "Deep understanding of East African markets, regulations, and operational realities."
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl hover:shadow-xl border border-slate-100 hover:border-[#10B981] transition-all duration-300">
                <div className="text-5xl mb-6 transition-transform group-hover:scale-110">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners - Realistic Selection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase font-mono tracking-widest text-sm text-[#2563EB]">TRUSTED BY INDUSTRY LEADERS</span>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Our Valued Partners</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Kenya Power",
              "Safaricom PLC",
              "East African Breweries",
              "Bidco Africa",
              "Equity Bank",
              "Kilimanjaro Premium Ltd",
              "Brookside Dairy",
              "Ministry of Energy"
            ].map((partner, i) => (
              <div key={i} className="bg-[#F3F7FA] h-28 flex items-center justify-center rounded-2xl border border-slate-200 hover:border-[#10B981] hover:-translate-y-1 transition-all text-center font-semibold text-lg shadow-sm">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}