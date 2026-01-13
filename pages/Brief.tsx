
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const WEBSITE_TYPES = [
  'Business Website', 'eCommerce Store', 'Portfolio', 'Landing Page', 
  'Membership Platform', 'Booking Website', 'Web App', 'Other'
];

const PAGES_NEEDED = [
  'Home', 'About', 'Services', 'Product Pages', 'Blog', 'Contact', 'FAQ', 'Portfolio', 'Custom Dashboard'
];

const DESIGN_PREFS = [
  'Clean, Minimal', 'Bold, Creative', 'Corporate, Professional', 'Dark Theme', 'Light Theme'
];

const BUDGET_RANGES = [
  '£500 – £1,000', '£1,000 – £3,000', '£3,000 – £5,000', '£5,000+'
];

const Brief: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    email: '',
    phone: '',
    currentWebsite: '',
    websiteTypes: [] as string[],
    businessDescription: '',
    goals: '',
    pages: [] as string[],
    customPages: '',
    designPrefs: [] as string[],
    likedWebsites: '',
    hasBranding: [] as string[],
    needsContent: 'no',
    needsMaintenance: 'no',
    budget: BUDGET_RANGES[1],
    timeline: '',
    additionalNotes: ''
  });

  const toggleSelection = (list: string[], item: string) => {
    return list.includes(item) 
      ? list.filter(i => i !== item) 
      : [...list, item];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/send-brief.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitted(true);
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback for development/offline
      setIsSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full px-4 text-center"
        >
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Brief Received!</h1>
          <p className="text-xl text-slate-600 mb-10 font-medium">
            Our solution architects will review your details and prepare a tailored strategy for our first call. Check your email for a confirmation.
          </p>
          <Link to={Page.Home} className="inline-block bg-[#0047AB] text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 uppercase tracking-widest">
            Return Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0047AB] text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-200"
          >
            Project Discovery
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none"
          >
            Website Project <span className="text-[#0047AB]">Brief</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Please provide as much detail as possible. This helps our solution architects prepare a tailored strategy before our first call.
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Section 1: Contact & Brand */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-[#0047AB] rounded-lg flex items-center justify-center text-sm">01</span>
              Company & Contact
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
                <input 
                  type="text" required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium"
                  placeholder="e.g. Michael Thorne"
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Name</label>
                <input 
                  type="text"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium"
                  placeholder="e.g. Thorne Global"
                  value={formData.brandName} onChange={e => setFormData({...formData, brandName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address *</label>
                <input 
                  type="email" required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium"
                  placeholder="michael@thorne.co.uk"
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <input 
                  type="tel"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium"
                  placeholder="+44 7000 000 000"
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Project Nature */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-[#0047AB] rounded-lg flex items-center justify-center text-sm">02</span>
              Project Scope
            </h3>
            
            <div className="mb-10">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-4 block">What type of website do you need?</label>
              <div className="flex flex-wrap gap-3">
                {WEBSITE_TYPES.map(type => (
                  <button
                    key={type} type="button"
                    onClick={() => setFormData({...formData, websiteTypes: toggleSelection(formData.websiteTypes, type)})}
                    className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all border-2 ${
                      formData.websiteTypes.includes(type) 
                        ? 'bg-[#0047AB] border-[#0047AB] text-white' 
                        : 'bg-white border-slate-100 text-slate-400 hover:border-blue-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Current Website (if any)</label>
                <input 
                  type="url"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium"
                  placeholder="https://www.example.co.uk"
                  value={formData.currentWebsite} onChange={e => setFormData({...formData, currentWebsite: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Describe your business & audience</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium resize-none"
                  placeholder="What do you do? Who are your ideal customers?"
                  value={formData.businessDescription} onChange={e => setFormData({...formData, businessDescription: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Primary Goals</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium resize-none"
                  placeholder="e.g. More online sales, high-end lead gen, automate bookings..."
                  value={formData.goals} onChange={e => setFormData({...formData, goals: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Section 3: Architecture & Design */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-[#0047AB] rounded-lg flex items-center justify-center text-sm">03</span>
              Architecture & Design
            </h3>

            <div className="mb-10">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-4 block">Pages you need</label>
              <div className="flex flex-wrap gap-3">
                {PAGES_NEEDED.map(page => (
                  <button
                    key={page} type="button"
                    onClick={() => setFormData({...formData, pages: toggleSelection(formData.pages, page)})}
                    className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                      formData.pages.includes(page) 
                        ? 'bg-[#0047AB] border-[#0047AB] text-white' 
                        : 'bg-white border-slate-100 text-slate-400 hover:border-blue-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <input 
                type="text"
                className="w-full mt-4 bg-slate-50 border border-slate-100 rounded-xl px-6 py-3 text-xs focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-bold"
                placeholder="Any other specific pages?"
                value={formData.customPages} onChange={e => setFormData({...formData, customPages: e.target.value})}
              />
            </div>

            <div className="mb-10">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-4 block">Design Preferences</label>
              <div className="flex flex-wrap gap-3">
                {DESIGN_PREFS.map(pref => (
                  <button
                    key={pref} type="button"
                    onClick={() => setFormData({...formData, designPrefs: toggleSelection(formData.designPrefs, pref)})}
                    className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                      formData.designPrefs.includes(pref) 
                        ? 'bg-slate-900 border-slate-900 text-white' 
                        : 'bg-white border-slate-100 text-slate-400 hover:border-blue-200'
                    }`}
                  >
                    {pref}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Websites you like (with reasons)</label>
                <textarea 
                  rows={3}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium resize-none"
                  placeholder="URL 1 (love the menu), URL 2 (great colors)..."
                  value={formData.likedWebsites} onChange={e => setFormData({...formData, likedWebsites: e.target.value})}
                />
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 block">Branding Assets Available</label>
                <div className="flex flex-wrap gap-6">
                  {['Logo', 'Brand Colors', 'Brand Guidelines'].map(asset => (
                    <label key={asset} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded border-slate-300 text-[#0047AB] focus:ring-[#0047AB]"
                        onChange={() => setFormData({...formData, hasBranding: toggleSelection(formData.hasBranding, asset)})}
                      />
                      <span className="text-sm font-bold text-slate-600 group-hover:text-[#0047AB] transition-colors">{asset}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Logistics & Budget */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-[#0047AB] rounded-lg flex items-center justify-center text-sm">04</span>
              Logistics & Budget
            </h3>

            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div>
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-4 block">Do you need content written?</label>
                <div className="flex gap-4">
                  {['yes', 'no'].map(opt => (
                    <button
                      key={opt} type="button"
                      onClick={() => setFormData({...formData, needsContent: opt})}
                      className={`flex-1 py-3 rounded-xl font-black text-xs uppercase tracking-widest border-2 transition-all ${
                        formData.needsContent === opt 
                          ? 'bg-blue-50 border-[#0047AB] text-[#0047AB]' 
                          : 'bg-white border-slate-100 text-slate-400'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-4 block">Ongoing Maintenance?</label>
                <div className="flex gap-4">
                  {['yes', 'no'].map(opt => (
                    <button
                      key={opt} type="button"
                      onClick={() => setFormData({...formData, needsMaintenance: opt})}
                      className={`flex-1 py-3 rounded-xl font-black text-xs uppercase tracking-widest border-2 transition-all ${
                        formData.needsMaintenance === opt 
                          ? 'bg-blue-50 border-[#0047AB] text-[#0047AB]' 
                          : 'bg-white border-slate-100 text-slate-400'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Budget Range</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-black uppercase text-xs tracking-widest appearance-none cursor-pointer"
                  value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}
                >
                  {BUDGET_RANGES.map(range => <option key={range} value={range}>{range}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Deadline / Timeline</label>
                <input 
                  type="text"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium"
                  placeholder="e.g. 4 weeks, ASAP, by October..."
                  value={formData.timeline} onChange={e => setFormData({...formData, timeline: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Additional Notes</label>
              <textarea 
                rows={3}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium resize-none"
                placeholder="Any integrations, special features, or technical requirements?"
                value={formData.additionalNotes} onChange={e => setFormData({...formData, additionalNotes: e.target.value})}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0047AB] text-white py-8 rounded-[2rem] font-black text-2xl uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-[0.98] disabled:bg-slate-300 flex items-center justify-center gap-4"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-8 w-8 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Architecting...
                </>
              ) : "Submit Project Brief"}
            </button>
            <p className="mt-6 text-[10px] text-slate-400 font-black uppercase tracking-widest">
              By submitting, you agree to our <Link to={Page.Privacy} className="underline">Privacy Policy</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Brief;
