import React, { useState } from 'react';


const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', inquiryType: '', message: '', consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${BACKEND_URL}/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          inquiry_type: formData.inquiryType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', inquiryType: '', message: '', consent: false });
        setTimeout(() => setSubmitStatus(null), 6000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F3F7FA] text-[#0A192F] antialiased min-h-screen font-sans">
      
      {/* Premium Header */}
      <header className="relative bg-[#0A192F] text-white pt-52 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest uppercase bg-white/10 border border-white/20 rounded-full mb-6">
            CONNECT WITH US
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none">Let's Build Something<br />Powerful Together</h1>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-20">
        
        {/* Contact Info - Left Side */}
        <div className="lg:col-span-5 space-y-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Corporate Coordinates</h2>
            <p className="mt-4 text-[#475569]">Reach out through any of our official channels.</p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#F3F7FA] rounded-2xl flex items-center justify-center text-2xl">📍</div>
              <div>
                <p className="font-semibold">Blessed House, Thika Road</p>
                <p className="text-[#475569]">Nairobi, Kenya</p>
                <p className="text-sm mt-1">P.O. Box 24122-00100</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#F3F7FA] rounded-2xl flex items-center justify-center text-2xl">📞</div>
              <div>
                <p className="font-semibold">+254 736 172 007</p>
                <p className="text-sm text-[#475569]">Mon - Fri, 8:00 AM - 5:00 PM EAT</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#F3F7FA] rounded-2xl flex items-center justify-center text-2xl">✉️</div>
              <div>
                <p className="font-semibold">info@enigysltd.com</p>
                <p className="text-sm text-[#475569]">General &amp; Project Inquiries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - Right Side (Inspired by Dribbble) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-10 md:p-16 shadow-xl">
          <div className="mb-10">
            <h3 className="text-3xl font-bold">Send Us a Message</h3>
            <p className="text-[#475569] mt-2">We'll respond within one business day.</p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-800">Message sent successfully. Thank you!</div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800">Something went wrong. Please try again.</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#475569] mb-2">Full Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 bg-[#F3F7FA] border border-transparent focus:border-[#2563EB] rounded-2xl outline-none transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#475569] mb-2">Company</label>
                <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-6 py-4 bg-[#F3F7FA] border border-transparent focus:border-[#2563EB] rounded-2xl outline-none transition" placeholder="Optional" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#475569] mb-2">Email Address *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 bg-[#F3F7FA] border border-transparent focus:border-[#2563EB] rounded-2xl outline-none transition" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#475569] mb-2">Phone Number *</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-6 py-4 bg-[#F3F7FA] border border-transparent focus:border-[#2563EB] rounded-2xl outline-none transition" placeholder="+254 700 000 000" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[#475569] mb-2">Nature of Inquiry *</label>
              <select required value={formData.inquiryType} onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                className="w-full px-6 py-4 bg-[#F3F7FA] border border-transparent focus:border-[#2563EB] rounded-2xl outline-none transition">
                <option value="">Select Type</option>
                <option value="rfq">Request for Quote / Project Bid</option>
                <option value="general">General Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[#475569] mb-2">Your Message *</label>
              <textarea required rows={6} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 bg-[#F3F7FA] border border-transparent focus:border-[#2563EB] rounded-3xl outline-none resize-none transition" 
                placeholder="Describe your project or inquiry..."></textarea>
            </div>

            <div className="flex items-start gap-4">
              <input type="checkbox" required checked={formData.consent} onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                className="mt-1 w-5 h-5 accent-[#2563EB]" />
              <label className="text-sm text-[#475569] leading-relaxed cursor-pointer">
                I consent to Enigys storing my information to respond to this inquiry.
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-5 bg-[#0A192F] hover:bg-[#2563EB] text-white font-semibold rounded-2xl transition-all duration-300 disabled:opacity-70">
              {isSubmitting ? 'Sending Message...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}