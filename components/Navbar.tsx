
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: Page.Home },
    { name: 'About', path: Page.About },
    { name: 'Services', path: Page.Services },
    { name: 'Blog', path: Page.Blog },
    { name: 'Contact', path: Page.Contact },
  ];

  const checkActive = (path: string) => {
    if (path === Page.Home) return location.pathname === Page.Home;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] glass shadow-sm border-b border-slate-200/50 h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to={Page.Home} className="flex-shrink-0 flex items-center gap-4 group relative z-10">
              <div className="w-14 h-14 bg-[#0047AB] rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg shadow-blue-500/10">
                <span className="text-white font-black text-3xl leading-none tracking-tighter select-none">OS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-slate-900 leading-none">
                  OptiScale <span className="text-[#0047AB]">Digital</span>
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[14px] font-extrabold tracking-[0.05em] transition-all hover:text-blue-600 relative py-2 z-10 uppercase ${
                  checkActive(link.path) ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
                {checkActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to={Page.Booking}
              className="bg-[#0047AB] text-white px-10 py-4 rounded-full text-[14px] font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 uppercase tracking-widest relative z-10"
            >
              Book Now
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none relative z-10"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden glass border-t border-slate-200 absolute w-full top-24 left-0 shadow-2xl overflow-hidden"
          >
            <div className="px-6 pt-6 pb-10 space-y-4 bg-white/95 backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-4 rounded-2xl text-lg font-black uppercase tracking-widest transition-all active:scale-[0.98] ${
                    checkActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={Page.Booking}
                onClick={() => setIsOpen(false)}
                className="block px-5 py-6 mt-8 rounded-2xl text-lg font-black text-white bg-[#0047AB] text-center uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/30 active:scale-[0.98]"
              >
                Request Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
