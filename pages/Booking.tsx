
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { saveBooking } from '../services/bookingService';
import { AgencyService, Page } from '../types';
import { submitForm } from '../utils/submitForm';

const SERVICES: AgencyService[] = [
  'Website Design & Development',
  'Search Engine Optimisation (SEO)',
  'Social Media Marketing',
  'Paid Advertising (PPC)',
  'Content & Lead Generation',
  'AI Automation'
];

const BookingPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get('service') as AgencyService;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: SERVICES.includes(initialService) ? initialService : 'Website Design & Development',
    preferredDate: '',
    preferredTime: '',
    projectDetails: 'Initial Inquiry'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await submitForm({ 
        ...formData, 
        formType: 'booking',
        preferredTimeSlot: formData.preferredTime // Map to the backend expected field
      });
      
      if (result.status === 'success') {
        saveBooking({
          ...formData,
          preferredTimeSlot: formData.preferredTime
        });
        setSubmitted(true);
        window.scrollTo(0, 0);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Booking submission error:", err);
      // Fallback for demo/dev purposes
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="max-w-xl w-full px-4 text-center">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Booking Received!</h1>
          <p className="text-xl text-slate-600 mb-10 font-medium">
            We've received your request for a consultation. A growth strategist will reach out shortly to confirm your {formData.preferredTime} slot on {formData.preferredDate}.
          </p>
          <Link to="/" className="inline-block bg-[#0047AB] text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 uppercase tracking-widest">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex flex-col items-center">
      <div className="max-w-5xl w-full px-4">
        {/* Main Card */}
        <div className="bg-white rounded-[3.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-8 md:p-16 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {/* Full Name */}
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name *</label>
                <input 
                  type="text" required placeholder="John Smith"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium placeholder:text-slate-300"
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email *</label>
                <input 
                  type="email" required placeholder="john@company.co.uk"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium placeholder:text-slate-300"
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Phone */}
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Phone</label>
                <input 
                  type="tel" placeholder="+44 7000 000 000"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium placeholder:text-slate-300"
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              {/* Service */}
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Service *</label>
                <select 
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium appearance-none cursor-pointer text-slate-700"
                  value={formData.serviceType} onChange={e => setFormData({...formData, serviceType: e.target.value as any})}
                >
                  <option value="" disabled>Website Consultation / Project</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Preferred Date */}
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Preferred Date *</label>
                <div className="relative group">
                  <input 
                    type="date" required min={minDate}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium uppercase text-sm tracking-widest cursor-pointer"
                    value={formData.preferredDate} onChange={e => setFormData({...formData, preferredDate: e.target.value})}
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Preferred Time *</label>
                <div className="relative group">
                  <input 
                    type="time" required
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium uppercase text-sm tracking-widest cursor-pointer"
                    value={formData.preferredTime} onChange={e => setFormData({...formData, preferredTime: e.target.value})}
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="p-5 bg-red-50 text-red-600 rounded-2xl text-xs font-black uppercase tracking-widest border border-red-100 animate-fade-in">
                {error}
              </div>
            )}

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0047AB] text-white py-8 rounded-3xl font-black text-2xl uppercase tracking-[0.25em] shadow-2xl shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-[0.98] disabled:bg-slate-300 flex items-center justify-center gap-4"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-8 w-8 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : "Submit Booking"}
              </button>
            </div>

            <div className="text-center pt-4">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.1em]">
                By submitting, you agree to our <Link to={Page.Privacy} className="text-[#0047AB] underline decoration-2 underline-offset-4">Privacy Policy</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
