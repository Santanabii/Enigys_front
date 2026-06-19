import React, { useState, useEffect } from 'react';

// Leader Images
import walterImage from '../assets/leaders/walter.png';
import brianImage from '../assets/leaders/brian.png';
import bgImage from '../assets/leaders/industrial-hub-bg.jpg'; 

export default function TechnicalHub() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#F3F7FA] text-[#0A192F] antialiased min-h-screen font-sans">
      
      {/* Hero Header - Enhanced */}
      <header className="relative bg-[#0A192F] text-white min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/70 to-[#0A192F]/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/60 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono tracking-widest uppercase bg-[#10B981]/20 border border-[#10B981]/30 rounded-full mb-8 animate-pulse">
              <span className="w-2 h-2 bg-[#10B981] rounded-full"></span>
              EST. 2017 • NAIROBI, KENYA
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6">
              Engineering with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#2563EB]">
                Absolute Precision
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-10">
              Delivering world-class energy solutions across East Africa with technical excellence and integrity.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-[#10B981]/30">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all hover:bg-white/10 backdrop-blur-sm">
                Learn More →
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-[#10B981]">12+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#10B981]">300+</div>
                <div className="text-sm text-gray-400">Audits Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#10B981]">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#10B981]">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#10B981] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Mandate Section - Enhanced */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="animate-on-scroll" id="mandate">
              <span className="font-mono text-xs tracking-[2px] text-[#2563EB] uppercase font-semibold">OUR FOUNDATION</span>
              <h2 className="text-5xl font-bold tracking-tighter mt-3">The Enigys Mandate</h2>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#10B981]/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-6xl font-black text-[#2563EB]">2017</p>
                  <p className="text-sm uppercase tracking-widest text-[#475569]">Incorporation Year</p>
                </div>
              </div>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Transforming legacy energy systems into modern, efficient, and regulatory-compliant power infrastructures across East Africa.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-[#10B981] transition-all group hover:shadow-xl transform hover:-translate-y-1">
              <div className="text-[#10B981] font-mono text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#10B981] rounded-full"></span>
                // 01. PHILOSOPHY
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Our Mission</h3>
              <p className="mt-6 text-[#475569] leading-relaxed">
                To deliver sustainable, high-performance energy solutions that power East Africa's industrial and commercial growth.
              </p>
              <div className="mt-6 text-[#10B981] opacity-0 group-hover:opacity-100 transition-all">→ Read More</div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-[#2563EB] transition-all group hover:shadow-xl transform hover:-translate-y-1">
              <div className="text-[#2563EB] font-mono text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span>
                // 02. EXPERTISE
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Our Capabilities</h3>
              <p className="mt-6 text-[#475569] leading-relaxed">
                EPC • Investment-Grade Energy Audits • Solar Systems • Power Distribution • Regulatory Compliance.
              </p>
              <div className="mt-6 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-all">→ View Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Enhanced */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase font-mono tracking-widest text-sm text-[#10B981] bg-[#10B981]/10 px-4 py-2 rounded-full inline-block">
              EXECUTIVE GOVERNANCE
            </span>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Meet Our Technical Leadership</h2>
            <p className="text-[#475569] max-w-2xl mx-auto mt-4">
              Industry experts with decades of combined experience in energy engineering and management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Walter Kiplangat Korir */}
            <div className="group bg-[#F3F7FA] rounded-3xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={walterImage} 
                  alt="Walter Kiplangat Korir" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 text-xs font-mono bg-[#10B981]/80 backdrop-blur-sm rounded-full">LEAD ENGINEER</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold">Walter Kiplangat Korir</h3>
                <p className="text-[#2563EB] font-medium mt-1">Managing Director &amp; Lead Engineer</p>
                <p className="mt-6 text-[#475569] leading-relaxed">
                  BSc Electrical &amp; Electronic Engineering, CEM®, EPRA Class A Energy Auditor. 
                  Over 12 years delivering energy audits and renewable energy projects.
                </p>
                <div className="flex gap-3 mt-8 flex-wrap">
                  <span className="px-4 py-2 text-xs font-mono bg-white border border-slate-200 rounded-full">EPRA CLASS A</span>
                  <span className="px-4 py-2 text-xs font-mono bg-white border border-slate-200 rounded-full">AEE CEM</span>
                </div>
                <button className="mt-6 text-[#10B981] font-medium hover:text-[#059669] transition-all group-hover:translate-x-2 inline-block">
                  Connect with Walter →
                </button>
              </div>
            </div>

            {/* Brian Chebor Kiprop */}
            <div className="group bg-[#F3F7FA] rounded-3xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={brianImage} 
                  alt="Brian Chebor Kiprop" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 text-xs font-mono bg-[#10B981]/80 backdrop-blur-sm rounded-full">TECHNICAL DIRECTOR</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold">Brian Chebor Kiprop</h3>
                <p className="text-[#10B981] font-medium mt-1">Technical Director / Operations Manager</p>
                <p className="mt-6 text-[#475569] leading-relaxed">
                  BSc Mechanical &amp; Power Plant Engineering, CEM®. 
                  13+ years in industrial energy systems and renewable energy projects.
                </p>
                <div className="flex gap-3 mt-8 flex-wrap">
                  <span className="px-4 py-2 text-xs font-mono bg-white border border-slate-200 rounded-full">AEE CMVP</span>
                  <span className="px-4 py-2 text-xs font-mono bg-white border border-slate-200 rounded-full">CEM®</span>
                </div>
                <button className="mt-6 text-[#10B981] font-medium hover:text-[#059669] transition-all group-hover:translate-x-2 inline-block">
                  Connect with Brian →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="bg-[#F3F7FA] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#0A192F" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="uppercase font-mono tracking-widest text-sm text-[#10B981] bg-white px-4 py-2 rounded-full inline-block shadow-sm">
              OUR EDGE
            </span>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Why Choose Enigys</h2>
            <p className="text-[#475569] max-w-2xl mx-auto mt-4">
              We combine technical excellence with local expertise to deliver unmatched value
            </p>
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
                desc: "EPRA Class A Auditors, Certified Energy Managers (CEM), and T3 Solar Specialists.",
                color: "#10B981"
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2" />
                  </svg>
                ),
                title: "End-to-End EPC",
                desc: "Full Procurement, Engineering, Construction, Commissioning and Maintenance.",
                color: "#2563EB"
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-9 9-4-4-6 6" />
                  </svg>
                ),
                title: "Proven Track Record",
                desc: "Successful delivery of 300+ energy audits and major projects across East Africa.",
                color: "#10B981"
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314-11.314z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Regional Expertise",
                desc: "Deep understanding of East African regulations, markets, and operational challenges.",
                color: "#10B981"
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl hover:shadow-xl border border-slate-100 hover:border-[#10B981] transition-all duration-300 transform hover:-translate-y-2">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" 
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#475569] leading-relaxed">{item.desc}</p>
                <div className="mt-4 h-0.5 w-0 bg-[#10B981] group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Experience & Impact */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase font-mono tracking-widest text-sm text-[#10B981] bg-[#10B981]/10 px-4 py-2 rounded-full inline-block">
              DELIVERED RESULTS
            </span>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Project Experience & Impact</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#F3F7FA] p-8 rounded-3xl hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Energy Audits & Efficiency</h3>
              </div>
              <ul className="space-y-4 text-[#475569]">
                <li className="flex gap-3 items-start">
                  <span className="text-[#10B981] font-bold mt-1">✓</span>
                  <span>300+ Investment Grade & General Energy Audits completed</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#10B981] font-bold mt-1">✓</span>
                  <span>Major malls: TRM, Garden City, Two Rivers, The Hub, The Oval</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#10B981] font-bold mt-1">✓</span>
                  <span>Industrial clients in plastics, steel, tea, flowers & food processing</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#10B981] font-bold mt-1">✓</span>
                  <span>Hospitals, hotels, government facilities & business parks</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F3F7FA] p-8 rounded-3xl hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Key Projects Delivered</h3>
              </div>
              <ul className="space-y-4 text-[#475569]">
                <li className="flex gap-3 items-start">
                  <span className="text-[#10B981] font-bold mt-1">✓</span>
                  <span>Electrical Safety Audits & Independent Commissioning</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#10B981] font-bold mt-1">✓</span>
                  <span>Building Management & Automation Systems</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#10B981] font-bold mt-1">✓</span>
                  <span>Solar PV & Renewable Energy Installations</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#10B981] font-bold mt-1">✓</span>
                  <span>MV/LV Electrical Infrastructure Projects</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#10B981] font-bold mt-1">✓</span>
                  <span>Power Factor Correction & Generator Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* New CTA Section */}
      <section className="bg-[#0A192F] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="uppercase font-mono tracking-widest text-sm text-[#10B981]">Let's Work Together</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Ready to Transform Your Energy Infrastructure?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Contact our team of experts today for a consultation on your energy needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-[#10B981]/30">
              Contact Us
            </button>
            <button className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all hover:bg-white/10">
              View Our Projects
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A192F] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Enigys. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-[#10B981] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#10B981] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#10B981] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}