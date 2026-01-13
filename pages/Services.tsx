
import React from 'react';
import { Link } from 'react-router-dom';
import { AgencyService } from '../types';

const Services: React.FC = () => {
  const services: {title: AgencyService; description: string; features: string[]; outcome: string; img: string}[] = [
    {
      title: "Website Design & Development",
      description: "Create stunning, high-converting websites that captivate users and drive measurable business results.",
      features: ["Custom responsive web design", "E-commerce development", "Landing page optimisation", "Website maintenance & support", "Performance and speed optimisation", "CMS integration"],
      outcome: "Outcome: Better user experience, higher conversions, and stronger brand credibility.",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Search Engine Optimisation (SEO)",
      description: "Help businesses dominate search results and attract qualified organic traffic through data-driven SEO strategies.",
      features: ["Technical SEO audits", "Keyword research & strategy", "On-page optimisation", "Link-building campaigns", "Local SEO optimisation", "SEO content creation"],
      outcome: "Outcome: Long-term traffic growth, visibility, and lead generation.",
      img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Social Media Marketing",
      description: "Build engaged communities and amplify brand presence across major social platforms.",
      features: ["Social media strategy", "Content creation & scheduling", "Community management", "Influencer partnerships", "Paid social advertising", "Analytics & performance reporting"],
      outcome: "Outcome: Brand awareness, engagement, and lead nurturing.",
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Paid Advertising (PPC)",
      description: "Maximise ROI through highly targeted paid campaigns across key platforms.",
      features: ["Google Ads management", "Facebook & Instagram ads", "LinkedIn advertising", "Display advertising", "Retargeting campaigns", "Conversion optimisation"],
      outcome: "Outcome: Measurable ROI, scalable growth, and cost efficiency.",
      img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Content & Lead Generation",
      description: "Attract, engage, and convert prospects with compelling content and strategic funnels.",
      features: ["Content marketing strategy", "Blog writing & management", "Lead magnet creation", "Email marketing campaigns", "Marketing automation", "Conversion funnel optimisation"],
      outcome: "Outcome: Authority-building and predictable lead flow.",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI Automation",
      description: "Streamline operations and enhance efficiency with intelligent, AI-powered solutions.",
      features: ["AI chatbot development", "CRM automation", "Workflow and process optimisation", "AI-powered analytics", "Custom AI integrations"],
      outcome: "Outcome: Time savings, scalability, and smarter decision-making.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const faqs = [
    {
      q: "1. What services does OptiScale Digital provide?",
      a: "We offer end-to-end digital solutions, including website design and development, search engine optimisation (SEO), social media marketing, paid advertising (PPC), content and lead generation, and AI-powered automation solutions tailored for UK businesses."
    },
    {
      q: "2. Who are your typical clients?",
      a: "We work with startups, SMEs, scale-ups, and enterprise businesses across the UK. Our clients are growth-focused organisations looking to increase leads, revenue, and operational efficiency through smart digital strategies."
    },
    {
      q: "3. How does OptiScale Digital approach website design?",
      a: "Our web design process is strategic and results-driven. We build responsive, SEO-optimised websites that combine user experience, performance, and conversion optimisation. Every design is custom-built to align with your brand and business goals."
    },
    {
      q: "4. Can you improve our search engine rankings?",
      a: "Yes. Our SEO services include technical audits, keyword research, on-page and off-page optimisation, local SEO, and content creation. We focus on sustainable, data-driven strategies that improve visibility and attract qualified leads."
    },
    {
      q: "5. What makes your digital marketing different?",
      a: "We integrate creativity, strategy, and analytics. Every campaign is backed by data, optimised for ROI, and aligned with long-term business objectives. Our approach focuses on measurable results rather than vanity metrics."
    },
    {
      q: "6. Do you provide AI automation solutions?",
      a: "Absolutely. We develop AI chatbots, CRM automations, workflow optimisation systems, AI-powered analytics, and custom integrations. Our automation solutions are designed to save time, reduce errors, and scale your operations efficiently."
    },
    {
      q: "7. How do you measure results and ROI?",
      a: "We use a combination of analytics, tracking, and reporting dashboards to measure performance across all channels. Metrics include lead generation, conversion rates, engagement, traffic growth, and revenue impact, tailored to your business objectives."
    },
    {
      q: "8. Will we have a dedicated account manager?",
      a: "Yes. Every client is assigned a dedicated account manager to ensure seamless communication, strategic alignment, and timely updates throughout the project lifecycle."
    },
    {
      q: "9. What industries do you specialise in?",
      a: "We have experience across multiple sectors, including tech startups, professional services, e-commerce, retail, and B2B enterprises. Our strategies are customised for each industry’s unique challenges and goals."
    },
    {
      q: "10. How do I get started with OptiScale Digital?",
      a: "Getting started is simple. Contact us to schedule a free strategy consultation. We’ll review your business goals, assess your current digital presence, and outline a clear roadmap for growth."
    }
  ];

  const scrollToCore = () => {
    const element = document.getElementById('core-pillars');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16">
      {/* SECTION 1: HERO */}
      <section className="relative py-24 lg:py-40 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" 
            alt="Business Strategy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/85"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-500/30">
            Expert Digital Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            Services That Deliver <br /> 
            <span className="text-blue-500">Measurable Results</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium mb-12 leading-relaxed">
            From high-impact websites to AI-powered automation, we provide end-to-end digital solutions built to scale your business, improve efficiency, and maximize return on investment. Every service is strategically designed to drive growth, performance, and long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              to="/book" 
              className="bg-blue-600 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/20"
            >
              Get a Free Consultation
            </Link>
            <button 
              onClick={scrollToCore}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE PILLARS */}
      <section id="core-pillars" className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {services.map((s, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="lg:w-1/2">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Service Pillar {idx + 1}</span>
                <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{s.title}</h2>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">{s.description}</p>
                <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl mb-8">
                  <p className="text-sm font-bold text-blue-900 italic">{s.outcome}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-10">
                  {s.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link 
                  to={`/book?service=${encodeURIComponent(s.title)}`} 
                  className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-200"
                >
                  Book Free Consultation
                </Link>
              </div>
              <div className="lg:w-1/2">
                <img src={s.img} className="rounded-[2.5rem] shadow-2xl w-full h-[400px] object-cover" alt={s.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: WHY CHOOSE OUR SERVICES? */}
      <section className="py-16 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                  alt="Why OptiScale" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
            </div>
            
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-widest mb-6">
                The Competitive Edge
              </span>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tight leading-tight">
                Why Choose Our <br />
                <span className="text-blue-500">Services?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
                We blend strategic insight, creative innovation, and technical expertise to deliver high-impact solutions that don’t just look good—but produce measurable business growth.
              </p>
              
              <div className="space-y-8">
                <h3 className="text-xl font-black text-blue-400 uppercase tracking-wider">What sets us apart:</h3>
                <div className="grid gap-6">
                  {[
                    "Tailored strategies designed specifically around your business goals",
                    "Clear, transparent reporting backed by actionable analytics",
                    "Dedicated account management for consistent support",
                    "Proven results across multiple industries",
                    "Continuous optimisation to improve performance over time"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-slate-900 relative overflow-hidden text-white border-t border-white/5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full opacity-50"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-tight">
            Stop Guessing. <br />
            <span className="text-blue-500">Start Scaling.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 font-medium max-w-2xl mx-auto">
            Your competitors are already leveraging these digital tools. Get a bespoke growth roadmap tailored for your business today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book" className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20 active:scale-95">
              Claim Your Free Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-slate-50 text-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-4">
              Comprehensive Support
            </span>
            <h2 className="text-4xl font-black text-center mb-6">Frequently Asked Questions</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 shadow-sm">
                <h3 className="text-xl font-black text-blue-600 mb-4 leading-tight group-hover:translate-x-1 transition-transform">
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium pl-4 border-l-4 border-blue-50 group-hover:border-blue-600 transition-colors">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden text-white shadow-2xl shadow-slate-200">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl opacity-50"></div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tight">Ready to Choose Your Path?</h2>
            <p className="text-xl text-slate-400 mb-12 font-medium">Join 50+ UK businesses that have scaled with OptiScale Digital. Book your diagnostic call today.</p>
            <Link to="/book" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
              Book Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
