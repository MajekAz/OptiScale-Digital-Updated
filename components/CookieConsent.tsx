
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Immediate check on mount with robust error handling
    try {
      const consent = localStorage.getItem('optiscale_cookie_consent');
      if (!consent) {
        // Reduced delay for better UX and verification
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.warn("CookieConsent: localStorage access failed. Defaulting to show banner.", error);
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('optiscale_cookie_consent', 'accepted');
    } catch (e) {
      console.error("Failed to save cookie consent preference.");
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('optiscale_cookie_consent', 'declined');
    } catch (e) {
      console.error("Failed to save cookie consent preference.");
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-24 md:max-w-md z-[120]"
        >
          <div className="bg-slate-900 border border-white/10 p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/10 blur-3xl rounded-full"></div>
            
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-1">Privacy & Cookies</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  We use cookies to optimise our growth strategies and ensure a high-performance experience. By accepting, you agree to our 
                  <Link to={Page.Privacy} className="text-blue-400 hover:text-blue-300 transition-colors mx-1 font-bold underline decoration-2 underline-offset-4">Privacy Policy</Link>.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 relative z-10">
              <button
                onClick={handleAccept}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-900/20"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white text-[10px] font-black uppercase tracking-widest py-4 rounded-2xl transition-all border border-white/10 active:scale-95"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
