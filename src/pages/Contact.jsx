import React, { useState } from 'react';
const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    consent: false
  });

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null);
 
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);                        

  try {
    const response = await fetch(`${BACKEND_URL}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          inquiry_type: formData.inquiryType, // Map to backend field name
          message: formData.message,
        }),
      });
    
    // Replace '/api/contact' with your actual server endpoint URL
    // const response = await fetch(`${BACKEND_URL}/api/contact/`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
       
    //   },
    //   body: JSON.stringify(formData),
    // });

    if (response.ok) {
      setSubmitStatus('success');
      // Reset the form values on successful submission
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
        consent: false
      });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    console.error('Network dispatch failure:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="bg-[#F3F7FA] text-[#0A192F] antialiased min-h-screen flex flex-col font-sans">
      
      {/* Premium Dark Editorial Header */}
      <header className="relative bg-[#0A192F] text-white pt-52 pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-widest uppercase text-[#10B981] bg-white/5 border border-white/10 rounded-full">
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] max-w-4xl">
              Connect With Our <br />Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#2563EB]">Offices</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-gray-400 text-base md:text-lg font-light max-w-sm lg:ml-auto leading-relaxed border-l-2 lg:border-l-0 lg:border-r-2 border-[#10B981] pl-4 lg:pl-0 lg:pr-4">
              Have a technical inquiry, operational challenge, or partnership proposal? Reach out to our regional leadership teams.
            </p>
          </div>
        </div>
      </header>

      {/* Structured Split Grid Layout */}
      <section className="max-w-7xl mx-auto px-6 py-24 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Communications & Directories */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block">[ Communication Nodes ]</span>
              <h2 className="text-3xl font-extrabold text-[#0A192F] tracking-tight">Corporate Coordinates</h2>
              <p className="text-base text-[#475569] font-light leading-relaxed">
                For official correspondence, tender documents, or immediate consultation, connect via our registered corporate channels.
              </p>
            </div>

            {/* Verification Coordinates Box */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-6">
              {/* HQ Address Card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F3F7FA] flex items-center justify-center text-[#2563EB] shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25A7.5 7.5 0 1119.5 10.5z"></path>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#475569] tracking-wider block">Physical Headquarters</span>
                  <p className="text-base font-bold text-[#0A192F] mt-1">Blessed House, Thika Road</p>
                  <p className="text-sm text-[#475569] font-light">Nairobi, Kenya</p>
                </div>
              </div>

              {/* Postal Address Card */}
              <div className="flex items-start gap-4 border-t border-slate-100 pt-6">
                <div className="w-10 h-10 rounded-lg bg-[#F3F7FA] flex items-center justify-center text-[#10B981] shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#475569] tracking-wider block">Postal Registry</span>
                  <p className="text-base font-bold text-[#0A192F] mt-1">P.O. Box 24122-00100</p>
                  <p className="text-sm text-[#475569] font-light">Nairobi Central Office, Kenya</p>
                </div>
              </div>

              {/* Hotlines Card */}
              <div className="flex items-start gap-4 border-t border-slate-100 pt-6">
                <div className="w-10 h-10 rounded-lg bg-[#F3F7FA] flex items-center justify-center text-purple-600 shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.806-5.165-4.147-6.973-6.973l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#475569] tracking-wider block">Direct Telephone</span>
                  <p className="text-base font-bold text-[#0A192F] mt-1">+254 736 172 007</p>
                  <p className="text-sm text-[#475569] font-light">Mon - Fri, 08:00 AM - 05:00 PM EAT</p>
                </div>
              </div>

              {/* Inboxes Card */}
              <div className="flex items-start gap-4 border-t border-slate-100 pt-6">
                <div className="w-10 h-10 rounded-lg bg-[#F3F7FA] flex items-center justify-center text-orange-600 shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#475569] tracking-wider block">Digital Communications</span>
                  <p className="text-base font-bold text-[#0A192F] mt-1">info@enigysltd.com</p>
                  <p className="text-sm text-[#475569] font-light">General Operations & Project Tenders</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Unified Communication Intake Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-md">
            <div className="mb-8 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#10B981] block">// Communications Gateway</span>
              <h3 className="text-2xl font-black text-[#0A192F] tracking-tight">Send A Message</h3>
              <p className="text-xs text-[#475569] font-light leading-relaxed">
                Fill out the secure correspondence form below. Your data will be immediately routed to the appropriate department desk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] block">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#F3F7FA] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] transition" 
                    placeholder="First & Last Name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] block">Company / Organization</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-[#F3F7FA] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] transition" 
                    placeholder="Optional" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] block">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#F3F7FA] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] transition" 
                    placeholder="name@domain.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] block">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#F3F7FA] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] transition" 
                    placeholder="e.g. +254 700 000 000" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] block">Nature of Inquiry *</label>
                <div className="relative">
                  <select 
                    required 
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                    className="w-full bg-[#F3F7FA] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] focus:outline-none focus:border-[#2563EB] transition appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Department Destination</option>
                    <option value="general">General Corporate Consultation</option>
                    <option value="rfq">Request For Quote (RFQ) / Project Bids</option>
                    <option value="technical">Technical Support & Asset Management</option>
                    <option value="partnerships">Strategic Partnerships & Vendors</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] block">Your Message *</label>
                <textarea 
                  required 
                  rows="4" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#F3F7FA] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] transition resize-none" 
                  placeholder="Provide explicit details regarding your operational inquiry..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input 
                  type="checkbox" 
                  required 
                  id="data_consent" 
                  checked={formData.consent}
                  onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                  className="mt-1 w-4 h-4 text-[#2563EB] bg-[#F3F7FA] border-slate-200 rounded focus:ring-[#2563EB] cursor-pointer" 
                />
                <label htmlFor="data_consent" className="text-xs text-[#475569] font-light leading-normal cursor-pointer select-none">
                  I consent to having this platform store my submitted details so the technical management desk can process and respond to my direct inquiry.
                </label>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#0A192F] rounded-xl hover:bg-[#2563EB] transition duration-300 shadow-md">
                  Transmit Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}