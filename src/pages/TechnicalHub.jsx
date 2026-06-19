import React from 'react';

// Leader Images
import walterImage from '../assets/leaders/walter.jpg';
import brianImage from '../assets/leaders/brian.jpg';

export default function TechnicalHub() {
  return (
    <div className="bg-[#F3F7FA] text-[#0A192F] antialiased min-h-screen font-sans">
      
      {/* Hero - Enhanced with Stronger CTA */}
      <header className="relative bg-[#0A192F] text-white pt-52 pb-40 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/industrial-hub-bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0A192F]/95 to-[#0A192F]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 text-xs font-mono tracking-widest uppercase bg-white/10 border border-white/20 rounded-full mb-6">
            EST. 2017 • NAIROBI, KENYA
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[1.05] max-w-5xl mx-auto">
            Engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#2563EB]">Absolute Precision</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Trusted technical partner delivering energy efficiency, renewable solutions, and world-class engineering across East Africa.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="/contact" 
               className="px-10 py-4 bg-[#10B981] hover:bg-[#34D399] text-white font-semibold rounded-2xl transition-all text-lg inline-flex items-center justify-center gap-3">
              Start a Project →
            </a>
            <a href="/contact" 
               className="px-10 py-4 border-2 border-white/70 hover:border-white font-semibold rounded-2xl text-lg transition-all">
              Schedule Energy Audit
            </a>
          </div>
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

      {/* Leadership */}
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
                <img src={walterImage} alt="Walter Kiplangat Korir" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all">
                  <p className="font-mono text-xs tracking-widest">LEAD ENGINEER</p>
                </div>
              </div>
              <h3 className="text-3xl font-bold">Walter Kiplangat Korir</h3>
              <p className="text-[#2563EB] font-medium mt-1">Managing Director &amp; Lead Engineer</p>
              <p className="mt-6 text-[#475569] leading-relaxed">
                BSc Electrical &amp; Electronic Engineering, CEM®, EPRA Class A Energy Auditor.
              </p>
              <div className="flex gap-3 mt-8">
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">EPRA CLASS A</span>
                <span className="px-4 py-2 text-xs font-mono bg-[#F3F7FA] rounded-full">AEE CEM</span>
              </div>
            </div>

            {/* Brian */}
            <div className="group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative shadow-xl">
                <img src={brianImage} alt="Brian Chebor Kiprop" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all">
                  <p className="font-mono text-xs tracking-widest">TECHNICAL DIRECTOR</p>
                </div>
              </div>
              <h3 className="text-3xl font-bold">Brian Chebor Kiprop</h3>
              <p className="text-[#10B981] font-medium mt-1">Technical Director</p>
              <p className="mt-6 text-[#475569] leading-relaxed">
                BSc Mechanical &amp; Power Plant Engineering, CEM®.
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
              { icon: "🔒", title: "Licensed Expertise", desc: "EPRA Class A Auditors, Certified Energy Managers (CEM), and T3 Solar Specialists." },
              { icon: "🏗️", title: "End-to-End EPC", desc: "Full Procurement, Engineering, Construction, Commissioning and Maintenance." },
              { icon: "📊", title: "Proven Track Record", desc: "Successful delivery of 300+ energy audits and major projects across East Africa." },
              { icon: "🌍", title: "Regional Expertise", desc: "Deep understanding of East African regulations, markets, and operational challenges." }
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

      {/* Project Experience & Impact */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase font-mono tracking-widest text-sm text-[#10B981]">DELIVERED RESULTS</span>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Project Experience & Impact</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#F3F7FA] p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Energy Audits & Efficiency</h3>
              <ul className="space-y-4 text-[#475569]">
                <li>• 300+ Investment Grade & General Energy Audits</li>
                <li>• Major malls: TRM, Garden City, Two Rivers, The Hub</li>
                <li>• Industrial, Healthcare, Hospitality & Agricultural sectors</li>
              </ul>
            </div>

            <div className="bg-[#F3F7FA] p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Key Projects Delivered</h3>
              <ul className="space-y-4 text-[#475569]">
                <li>• Electrical Safety Audits & Independent Commissioning</li>
                <li>• Building Management & Automation Systems</li>
                <li>• Solar PV & Renewable Energy Installations</li>
                <li>• MV/LV Electrical Infrastructure</li>
              </ul>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <a href="/contact" 
               className="inline-block px-12 py-5 bg-[#0A192F] hover:bg-[#2563EB] text-white font-semibold rounded-2xl text-lg transition-all">
              Discuss Your Project With Our Team →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}