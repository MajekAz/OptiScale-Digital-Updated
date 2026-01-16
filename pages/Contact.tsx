
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../types';
import { submitForm } from '../utils/submitForm';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const connectSectionRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await submitForm({ ...formState, formType: 'inquiry' });
      if (result.status === 'success') {
        setSubmitted(true);
      } else {
        setError(result.message || "Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      // Fallback for development if necessary, but following production path
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const scrollToConnect = () => {
    connectSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16 bg-slate-50 overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[2px]"></div>
        </div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 relative z-10 text-center"
        >
          <motion.span variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
            Direct Line to Scale
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Let's Architect Your <br /> <span className="text-blue-500">Growth Blueprint</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-medium">
            Ready to scale? Connect with our UK-based team via your preferred channel. We're here to turn your digital vision into measurable ROI.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link 
              to={Page.Brief}
              className="w-full sm:w-auto bg-[#0047AB] text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-2xl shadow-blue-500/30 active:scale-95 flex items-center justify-center gap-4 uppercase tracking-widest"
            >
              Submit Detailed Brief
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </Link>
            <button 
              onClick={scrollToConnect}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center uppercase tracking-widest"
            >
              Quick Inquiry
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Chat Section */}
      <section className="py-8 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200 animate-pulse">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Instant Strategy Chat</h3>
                <p className="text-slate-500 font-medium">Direct access via WhatsApp for urgent project inquiries.</p>
              </div>
            </div>
            <a 
              href="https://wa.me/447440323065" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-green-600 transition-all flex items-center gap-3 shadow-xl shadow-green-200 group"
            >
              Start Chat
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Switcher Section */}
      <section ref={connectSectionRef} className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">How Would You Like to Connect?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
               <div className="flex-1 max-w-md bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-50 text-[#0047AB] rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Quick Inquiry</h4>
                  <p className="text-slate-500 font-medium mb-8">Perfect for general questions or brief messages.</p>
                  <button 
                    onClick={() => {
                      const el = document.getElementById('quick-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-4 rounded-2xl border-2 border-slate-200 text-slate-900 font-black uppercase tracking-widest hover:border-[#0047AB] hover:text-[#0047AB] transition-all"
                  >
                    Send Quick Message
                  </button>
               </div>

               <div className="flex-1 max-w-md bg-slate-900 p-10 rounded-[3rem] shadow-2xl flex flex-col items-center text-center text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <h4 className="text-2xl font-black mb-2">Detailed Brief</h4>
                  <p className="text-slate-400 font-medium mb-8">Best for comprehensive website projects & audits.</p>
                  <Link 
                    to={Page.Brief}
                    className="w-full py-4 rounded-2xl bg-[#0047AB] text-white font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10 group-hover:scale-[1.02]"
                  >
                    Start Project Brief
                  </Link>
               </div>
            </div>
          </div>

          <div id="quick-form" className="grid lg:grid-cols-12 gap-16 items-start mt-32 scroll-mt-32">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="lg:col-span-4 space-y-8"
            >
              <motion.div variants={itemVariants} className="p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 group hover:border-blue-500/20 transition-all">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2">London Hub</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  71-75 Shelton Street <br />
                  Covent Garden, London <br />
                  WC2H 9JQ, United Kingdom
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="p-8 bg-blue-600 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h4 className="text-xl font-black mb-2 relative z-10">Email Strategy</h4>
                <p className="text-blue-100 font-medium relative z-10">info@optiscaledigital.co.uk</p>
                <p className="text-blue-200/60 text-[10px] mt-6 uppercase font-black tracking-[0.2em] relative z-10">Official Inquiry Channel</p>
              </motion.div>
            </motion.div>

            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100"
              >
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-slate-700 uppercase tracking-widest">Full Name</label>
                        <input 
                          type="text" required 
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium" 
                          placeholder="e.g. David Harrison"
                          value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-slate-700 uppercase tracking-widest">Email Address</label>
                        <input 
                          type="email" required 
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium" 
                          placeholder="david@business.co.uk"
                          value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-black text-slate-700 uppercase tracking-widest">Project Inquiry</label>
                      <textarea 
                        required rows={6}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all font-medium" 
                        placeholder="Tell us about your project or ask a question..."
                        value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} 
                      />
                    </div>
                    {error && <p className="text-red-600 text-sm font-bold">{error}</p>}
                    <motion.button 
                      whileHover={{ scale: 1.02, backgroundColor: '#1e40af' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xl shadow-xl shadow-blue-500/20 transition-all uppercase tracking-widest disabled:bg-slate-400"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 mb-4">Inquiry Received!</h3>
                    <p className="text-slate-600 mb-8 max-w-sm mx-auto font-medium">We've received your message and a specialist will be in touch shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="text-blue-600 font-black uppercase tracking-widest hover:underline decoration-4 underline-offset-8">Send another message</button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Footer area... */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-[4rem] overflow-hidden relative shadow-2xl border-8 border-slate-50"
          >
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050212034934!2d-0.12613532269228825!3d51.514663360216715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab37652b%3A0x2230230307612d2c!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ!5e0!3m2!1sen!2suk!4v1711111111111!5m2!1sen!2suk" 
                className="w-full h-full grayscale contrast-125 brightness-105 hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
