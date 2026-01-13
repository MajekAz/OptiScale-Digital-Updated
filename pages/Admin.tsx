
import React, { useState, useEffect } from 'react';
import { getBookings } from '../services/bookingService';
import { Booking } from '../types';

const AdminPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filters, setFilters] = useState({
    date: '',
    service: '',
    slot: ''
  });

  useEffect(() => {
    setBookings(getBookings().sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
  }, []);

  const filteredBookings = bookings.filter(b => {
    return (!filters.date || b.preferredDate === filters.date) &&
           (!filters.service || b.serviceType === filters.service) &&
           (!filters.slot || b.preferredTimeSlot === filters.slot);
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl auto px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <h1 className="text-4xl font-black text-slate-900">Internal Booking Admin</h1>
          <div className="flex flex-wrap gap-4">
            <input 
              type="date" 
              className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium outline-none"
              value={filters.date} onChange={e => setFilters({...filters, date: e.target.value})}
            />
            <select 
              className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium outline-none"
              value={filters.service} onChange={e => setFilters({...filters, service: e.target.value})}
            >
              <option value="">All Services</option>
              <option value="Website Design">Website Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="AI Automation">AI Automation</option>
            </select>
            <button 
              onClick={() => setFilters({ date: '', service: '', slot: '' })}
              className="text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Client</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Service</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Appointment</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Project Details</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBookings.length > 0 ? (
                  filteredBookings.map(b => (
                    <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-6">
                        <div className="font-bold text-slate-900">{b.name}</div>
                        <div className="text-sm text-slate-500">{b.email}</div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-black rounded-full border border-blue-100">
                          {b.serviceType}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="font-bold text-slate-900">{b.preferredDate}</div>
                        <div className="text-sm text-slate-500">{b.preferredTimeSlot}</div>
                      </td>
                      <td className="px-6 py-6 max-w-md">
                        <p className="text-sm text-slate-600 line-clamp-2">{b.projectDetails}</p>
                      </td>
                      <td className="px-6 py-6">
                        <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded border border-green-100">
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center text-slate-400 font-bold">
                      No bookings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
