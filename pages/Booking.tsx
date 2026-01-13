
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { saveBooking, isSlotAvailable, getSlotAvailability } from '../services/bookingService';
import { AgencyService } from '../types';

const TIME_SLOTS = [
  "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00",
  "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"
];

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
    serviceType: SERVICES.includes(initialService) ? initialService : SERVICES[0],
    preferredDate: '',
    preferredTimeSlot: '',
    projectDetails: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    const day = date.getDay();
    if (day === 0 || day === 6) {
      setError("Please select a weekday (Monday - Friday). We are closed on weekends.");
      setFormData({ ...formData, preferredDate: '' });
    } else {
      setError("");
      setFormData({ ...formData, preferredDate: e.target.value, preferredTimeSlot: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.preferredTimeSlot) {
      setError("Please select an available time slot.");
      return;
    }

    try {
      saveBooking(formData);
      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-16 max-w-2xl mx-auto px-4 text-center">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-4xl font-black mb-4">Booking Received!</h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Hi {formData.name}, we’ve received your request for <strong>{formData.serviceType}</strong> on <strong>{formData.preferredDate}</strong> at <strong>{formData.preferredTimeSlot}</strong>.
        </p>
        <Link to="/" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            Consultation Booking
          </span>
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Secure Your Slot</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Discuss your scaling strategy with our UK-based experts.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <input 
                type="text" required placeholder="John Smith"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input 
                type="email" required placeholder="john@company.co.uk"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
              <input 
                type="tel" placeholder="+44 7000 000000"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
                value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Service Interest</label>
              <select 
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm appearance-none"
                value={formData.serviceType} onChange={e => setFormData({...formData, serviceType: e.target.value as any})}
              >
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
            <input 
              type="date" required min={minDate}
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
              value={formData.preferredDate} onChange={handleDateChange}
            />
          </div>

          {formData.preferredDate && (
            <div className="mb-8 animate-fade-in">
              <label className="block text-sm font-bold text-slate-700 mb-4 flex justify-between">
                Available Hourly Slots <span>Capacity: 5 per hour</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {TIME_SLOTS.map(slot => {
                  const available = isSlotAvailable(formData.preferredDate, slot);
                  const remaining = getSlotAvailability(formData.preferredDate, slot);
                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={!available}
                      onClick={() => setFormData({...formData, preferredTimeSlot: slot})}
                      className={`p-4 rounded-xl border text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 shadow-sm ${
                        formData.preferredTimeSlot === slot 
                          ? 'bg-blue-600 text-white border-blue-600 ring-4 ring-blue-100' 
                          : available 
                            ? 'bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-slate-50' 
                            : 'bg-slate-100 border-slate-100 text-slate-300 cursor-not-allowed opacity-50'
                      }`}
                    >
                      {slot.split(' - ')[0]}
                      {available && <span className={`text-[10px] uppercase font-black ${formData.preferredTimeSlot === slot ? 'text-blue-100' : 'text-blue-500'}`}>{remaining} Open</span>}
                      {!available && <span className="text-[10px] uppercase font-black text-red-400">Full</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mb-10">
            <label className="block text-sm font-bold text-slate-700 mb-2">Brief Project Overview</label>
            <textarea 
              required placeholder="Tell us about your project goals..."
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 h-32 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
              value={formData.projectDetails} onChange={e => setFormData({...formData, projectDetails: e.target.value})}
            />
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold border border-red-100">
              {error}
            </div>
          )}

          <button type="submit" className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3">
            Request Strategy Call
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </form>
      </section>
    </div>
  );
};

export default BookingPage;
