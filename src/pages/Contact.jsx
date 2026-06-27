import React, { useState } from 'react';
import electricTowers from '../assets/matthew-henry-yETqkLnhsUI-unsplash.jpg';
import windTurbinesDusk from '../assets/karsten-wurth-0w-uTa0Xz7w-unsplash.jpg';

const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Office Location',
    value: 'Blessed House, Thika Road',
    sub: 'P.O. Box 24122-00100, Nairobi',
    color: '#10B981',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Direct Line',
    value: '+254 736 172 007',
    sub: 'Mon–Fri, 8:00 AM – 5:00 PM EAT',
    color: '#3B82F6',
    href: 'tel:+254736172007',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Inbox',
    value: 'info@enigysltd.com',
    sub: 'General & Project Inquiries',
    color: '#8B5CF6',
    href: 'mailto:info@enigysltd.com',
  },
];

const inputBase = {
  width: '100%',
  padding: '14px 18px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  color: '#fff',
  fontSize: '14px',
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s ease, background 0.2s ease',
};

function FloatInput({ label, required, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{ display: 'block', fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
        {label}{required && ' *'}
      </label>
      {props.type === 'textarea' ? (
        <textarea
          {...props}
          type={undefined}
          rows={6}
          style={{
            ...inputBase,
            resize: 'none',
            borderColor: focused ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.1)',
            background: focused ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)',
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : props.type === 'select' ? (
        <select
          {...props}
          type={undefined}
          style={{
            ...inputBase,
            borderColor: focused ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.1)',
            background: focused ? 'rgba(20,35,60,0.9)' : 'rgba(15,25,50,0.8)',
            appearance: 'none',
            cursor: 'pointer',
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          {props.children}
        </select>
      ) : (
        <input
          {...props}
          style={{
            ...inputBase,
            borderColor: focused ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.1)',
            background: focused ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)',
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', inquiryType: '', message: '', consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const set = (key) => (e) => setFormData({ ...formData, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

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
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ background: '#050F1E' }}>

      {/* ── HERO ── */}
      <header className="relative overflow-hidden flex items-end" style={{ minHeight: '60vh', paddingTop: '80px' }}>
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${windTurbinesDusk})` }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(5,15,30,0.7) 0%, rgba(5,15,30,0.92) 70%, rgba(5,15,30,1) 100%)'
        }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        {/* Glow */}
        <div className="absolute right-1/4 top-1/3 w-[500px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase mb-6"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}>
            Connect With Us
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-bold tracking-tight text-white leading-[0.95]">
            Let's Build Something<br />
            <span style={{
              background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Powerful Together
            </span>
          </h1>
        </div>
      </header>

      {/* ── MAIN SECTION ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">

          {/* Left: Contact Info */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-3">Corporate Coordinates</h2>
              <p className="text-white/45 font-sans text-sm leading-relaxed">Reach out through any of our official channels.</p>
            </div>

            <div className="space-y-5">
              {CONTACT_INFO.map((info, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-5 rounded-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = `${info.color}25`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${info.color}12`, color: info.color, border: `1px solid ${info.color}20` }}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-semibold text-white block hover:text-enigys-emerald transition-colors font-sans">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-white font-sans">{info.value}</p>
                    )}
                    <p className="text-xs text-white/35 font-sans mt-0.5">{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254736172007"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl transition-all duration-300 group"
              style={{
                background: 'rgba(16,185,129,0.07)',
                border: '1px solid rgba(16,185,129,0.2)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(16,185,129,0.14)'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(16,185,129,0.07)'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.2)'; }}
            >
              <svg className="w-5 h-5 text-enigys-emerald shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div>
                <p className="text-sm font-semibold text-white font-sans">Chat on WhatsApp</p>
                <p className="text-xs text-white/35 font-sans">Fastest response channel</p>
              </div>
              <svg className="w-4 h-4 text-enigys-emerald ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            <div className="p-10 md:p-14 rounded-3xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(24px)',
              }}>
              <div className="mb-10">
                <h3 className="font-display text-3xl font-bold text-white mb-2">Send Us a Message</h3>
                <p className="text-white/40 font-sans text-sm">We'll respond within one business day.</p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-8 p-4 rounded-2xl text-sm font-sans"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#34D399' }}>
                  ✓ Message sent successfully. Our team will be in touch shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-8 p-4 rounded-2xl text-sm font-sans"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}>
                  Something went wrong. Please try again or reach out directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FloatInput label="Full Name" type="text" required placeholder="John Doe"
                    value={formData.name} onChange={set('name')} />
                  <FloatInput label="Company" type="text" placeholder="Optional"
                    value={formData.company} onChange={set('company')} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FloatInput label="Email Address" type="email" required placeholder="you@company.com"
                    value={formData.email} onChange={set('email')} />
                  <FloatInput label="Phone Number" type="tel" required placeholder="+254 700 000 000"
                    value={formData.phone} onChange={set('phone')} />
                </div>

                <FloatInput label="Nature of Inquiry" type="select" required
                  value={formData.inquiryType} onChange={set('inquiryType')}>
                  <option value="" style={{ background: '#0A192F' }}>Select Type</option>
                  <option value="rfq" style={{ background: '#0A192F' }}>Request for Quote / Project Bid</option>
                  <option value="general" style={{ background: '#0A192F' }}>General Consultation</option>
                </FloatInput>

                <FloatInput label="Your Message" type="textarea" required placeholder="Describe your project or inquiry..."
                  value={formData.message} onChange={set('message')} />

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={set('consent')}
                      className="sr-only"
                      id="consent"
                    />
                    <label
                      htmlFor="consent"
                      className="w-5 h-5 rounded-md flex items-center justify-center cursor-pointer transition-all duration-200"
                      style={{
                        background: formData.consent ? 'rgba(16,185,129,0.9)' : 'rgba(255,255,255,0.06)',
                        border: `1px solid ${formData.consent ? 'rgba(16,185,129,0.9)' : 'rgba(255,255,255,0.15)'}`,
                      }}
                    >
                      {formData.consent && (
                        <svg className="w-3 h-3 text-enigys-navy" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      )}
                    </label>
                  </div>
                  <label htmlFor="consent" className="text-xs text-white/40 font-sans leading-relaxed cursor-pointer hover:text-white/60 transition-colors">
                    I consent to Enigys storing my information to respond to this inquiry.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-sm font-bold uppercase tracking-widest text-white rounded-2xl transition-all duration-300 font-sans cursor-pointer disabled:opacity-60"
                  style={{
                    background: isSubmitting
                      ? 'rgba(255,255,255,0.08)'
                      : 'linear-gradient(135deg, #10B981 0%, #2563EB 100%)',
                    boxShadow: isSubmitting ? 'none' : '0 0 32px rgba(16,185,129,0.3)',
                  }}
                  onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.boxShadow = '0 0 48px rgba(16,185,129,0.5)'; }}
                  onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.boxShadow = '0 0 32px rgba(16,185,129,0.3)'; }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      Sending Message...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}