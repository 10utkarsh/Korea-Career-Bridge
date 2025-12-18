
import React, { useState } from 'react';
import { useApp } from '../App';

const Contact: React.FC = () => {
  const { t, addInquiry } = useApp();
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry(form);
    setSubmitted(true);
    setForm({ name: '', company: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          {t.contact.title}
        </h1>
        <p className="text-xl text-gray-500 mb-10 leading-relaxed">
          {t.contact.desc}
        </p>

        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-orange-primary flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Email us</h4>
              <p className="text-gray-500">partnerships@careerbridge.org</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-orange-primary flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Our Office</h4>
              <p className="text-gray-500">123 Tehran-ro, Gangnam-gu, Seoul, Republic of Korea</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-orange-50 relative overflow-hidden">
        {submitted && (
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-500">We'll get back to you within 24-48 hours.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.name}</label>
              <input 
                required
                type="text" 
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                placeholder="John Doe"
                className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-primary focus:bg-white transition-all outline-none" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.company}</label>
              <input 
                required
                type="text" 
                value={form.company}
                onChange={e => setForm({...form, company: e.target.value})}
                placeholder="Company Inc."
                className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-primary focus:bg-white transition-all outline-none" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.email}</label>
            <input 
              required
              type="email" 
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
              placeholder="john@company.com"
              className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-primary focus:bg-white transition-all outline-none" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.message}</label>
            <textarea 
              required
              rows={4}
              value={form.message}
              onChange={e => setForm({...form, message: e.target.value})}
              placeholder="How can we help?"
              className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-primary focus:bg-white transition-all outline-none resize-none"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-orange-primary text-white rounded-2xl font-bold shadow-lg shadow-orange-100 hover:scale-[1.02] transition-transform"
          >
            {t.contact.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
