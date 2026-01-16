
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AIStrategist from '../components/AIStrategist';
import { Page } from '../types';

const Home: React.FC = () => {
  const impactStats = [
    { 
      value: "12+ Years", 
      label: "Industry Experience", 
      desc: "Deep expertise across web architecture, performance marketing, and AI automation for growth-driven organisations." 
    },
    { 
      value: "£1M+", 
      label: "Revenue Influenced", 
      desc: "Digital strategies that have directly supported measurable revenue growth across client portfolios." 
    },
    { 
      value: "3.2×", 
      label: "Average Conversion Lift", 
      desc: "Optimised websites, funnels, and campaigns delivering significant improvements in lead-to-customer conversion rates." 
    },
    { 
      value: "65%", 
      label: "Operational Efficiency Gain", 
      desc: "AI-driven automation reducing manual workload, improving speed, and increasing team productivity." 
    }
  ];

  const pillars = [
    {
      title: "Web Design & Development",
      desc: "Conversion-focused, lightning-fast websites designed to turn visitors into loyal customers.",
      icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    },
    {
      title: "Search Engine Optimisation (SEO)",
      desc: "Dominate search results and attract qualified organic traffic through data-driven strategies.",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    },
    {
      title: "Social Media Marketing",
      desc: "Build engaged communities and amplify brand presence across major social platforms.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Paid Advertising (PPC)",
      desc: "Maximise ROI through highly targeted paid campaigns across key platforms like Google and Meta.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: "Content & Lead Generation",
      desc: "Attract and convert prospects with compelling content and strategic conversion funnels.",
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    },
    {
      title: "AI Automation",
      desc: "Streamline operations and enhance efficiency with intelligent, AI-powered solutions.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      desc: "We begin with a detailed exploration of your business, goals, challenges, and target audience to understand what truly drives your success."
    },
    {
      number: "02",
      title: "Strategy",
      desc: "We develop a customised, data-driven roadmap aligned with your objectives, brand vision, and long-term growth potential."
    },
    {
      number: "03",
      title: "Execution",
      desc: "Our experts bring the strategy to life with precision, creativity, and technical excellence—ensuring every action moves you closer to measurable success."
    },
    {
      number: "04",
      title: "Optimization",
      desc: "We continuously analyse, refine, and scale your campaigns for sustained growth, improved performance, and maximum ROI."
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-slate-50/50 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div className="animate-fade-in order-2 lg:order-1">
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1] mb-8 tracking-tighter">
                Scale Your <br />
                <span className="text-[#2563eb]">Business Fast</span> <br />
                With Precision.
              </h1>

              <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl font-medium leading-relaxed">
                OptiScale Digital helps startups and SMEs dominate their market through conversion-focused websites, strategic marketing, and smart AI automation.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <Link 
                  to={Page.Booking} 
                  className="w-full sm:w-auto bg-[#2563eb] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center justify-center whitespace-nowrap"
                >
                  Book a Free Consultation
                </Link>
                <Link 
                  to={Page.Services} 
                  className="w-full sm:w-auto bg-[#f1f5f9] text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all active:scale-95 flex items-center justify-center"
                >
                  Our Services
                </Link>
              </div>

              {/* Social Proof Avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm bg-slate-200">
                      <img 
                        src={`https://ui-avatars.com/api/?name=C+${i}&background=random&color=fff`} 
                        alt="Satisfied OptiScale Client" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
                  Satisfied OptiScale Clients
                </p>
              </div>
            </div>

            {/* Right Column: Image & Floating Card */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[550px]">
                {/* Main Dashboard Image */}
                <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 bg-white p-2 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Analytics Dashboard on Laptop" 
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-[2.5rem]"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Results Card */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -bottom-8 -left-6 md:-left-12 bg-white/95 backdrop-blur-md p-6 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.15)] z-20 w-64 md:w-72 border border-white"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 shadow-sm border border-green-100">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1 leading-none">CONVERSION RATE</p>
                      <p className="text-4xl font-black text-slate-900 tracking-tighter leading-none">+340%</p>
                    </div>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-green-500 rounded-full"
                    />
                  </div>
                </motion.div>
                
                {/* Visual Accent Glows */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-400/5 blur-[80px] rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MEASURED IMPACT SECTION */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Proven Performance</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Measured Impact</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {impactStats.map((stat, i) => (
              <div key={i} className="group text-center">
                <p className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </p>
                <p className="text-sm font-black text-blue-500 uppercase tracking-widest mb-4">
                  {stat.label}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-[280px] mx-auto">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CORE SCALING PILLARS */}
      <section className="py-32 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Our Core Scaling Pillars</h2>
            <p className="text-slate-500 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
              We combine world-class design with data-driven marketing and cutting-edge AI to deliver measurable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-200/50 shadow-xl shadow-slate-200/30 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/20">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={p.icon} /></svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{p.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed font-medium mb-8 flex-grow">{p.desc}</p>
                <Link to={Page.Services} className="inline-flex items-center gap-3 text-[#0047AB] font-black text-[11px] uppercase tracking-[0.2em] hover:text-blue-700 transition-colors group/link">
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">How We Work</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
                Our Proven <br />
                <span className="text-[#0047AB]">UK Process</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                A strategic, end-to-end framework built to maximize your ROI and drive predictable, high-impact results for UK SMEs.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-y-16 gap-x-12">
              {processSteps.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="text-7xl font-black text-slate-100 group-hover:text-blue-50 transition-colors absolute -top-10 -left-4 -z-10 select-none">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">{step.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE PARTNERSHIP ADVANTAGE */}
      <section className="py-32 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image Left */}
            <div className="relative">
              <div className="rounded-[3.5rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                  alt="OptiScale Partnership Advantage" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
            </div>

            {/* Text Right */}
            <div>
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Partnership Advantage</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                Why Partner with <br />
                <span className="text-[#0047AB]">OptiScale Digital</span>
              </h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                We unite strategic insight, creative precision, and advanced technology to deliver measurable outcomes that drive sustainable business growth across the UK.
              </p>

              <div className="grid gap-6 mb-12">
                {[
                  "Data-led growth strategies",
                  "Clear, transparent performance reporting",
                  "Dedicated senior account management",
                  "ROI-driven execution at every stage",
                  "Advanced, future-ready technology stack",
                  "Consistent, proven delivery across UK industries"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:scale-110">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-lg font-black text-slate-900 uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                to={Page.Services} 
                className="inline-flex items-center gap-3 bg-[#0047AB] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10 active:scale-95"
              >
                Discover Our Approach
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI STRATEGIST */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AIStrategist />
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-40 bg-[#0047AB] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none">Ready to Lead?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-16 font-medium max-w-2xl mx-auto">
            Secure your bespoke digital growth roadmap and join the ranks of the UK's fastest-scaling SMEs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to={Page.Booking} 
              className="bg-white text-[#0047AB] px-16 py-8 rounded-full font-black text-2xl hover:bg-blue-50 hover:scale-[1.05] transition-all shadow-2xl active:scale-95 flex items-center justify-center"
            >
              Book Strategy Call
            </Link>
            <a 
              href="https://wa.me/447440323065" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-16 py-8 rounded-full font-black text-2xl hover:bg-[#128C7E] transition-all active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-green-900/20"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
