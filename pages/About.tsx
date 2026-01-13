
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const About: React.FC = () => {
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

  return (
    <div className="pt-12">
      {/* SECTION 1: HERO STORY */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-152207182399e-b89e72339a17?auto=format&fit=crop&q=80&w=2000" 
            alt="Team Working" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4 block">About Us</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Empowering UK Businesses <br />
                <span className="text-blue-400">To Thrive Digitally</span>
              </h1>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Founded with a mission to bring blue-chip digital expertise to UK startups and SMEs. OptiScale Digital was born out of the need for an agency that speaks the language of growth.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10">
                <div>
                  <p className="text-4xl font-black text-white mb-2">50+</p>
                  <p className="text-sm font-bold text-slate-400 uppercase">Clients Scaled</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white mb-2">£5M+</p>
                  <p className="text-sm font-bold text-slate-400 uppercase">Revenue Generated</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 translate-x-4 border-8 border-white/10">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" alt="Office Life" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                From Vision to <br />
                <span className="text-[#0047AB]">Impact</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  OptiScale Digital was founded to close the gap between enterprise-level digital capability and growing businesses across the UK.
                </p>
                <p>
                  From our early beginnings, we have evolved into a strategic digital agency supporting over 150 clients, delivering measurable outcomes through technology-driven marketing and operational optimisation—resulting in average revenue growth of 250%.
                </p>
                <p>
                  Today, we serve as trusted advisors to organisations focused on long-term growth, leveraging advanced digital platforms, AI automation, and data-led strategies to drive consistent performance.
                </p>
              </div>

              <div className="mt-12">
                <Link 
                  to={Page.Contact} 
                  className="inline-flex items-center gap-3 bg-[#0047AB] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 group"
                >
                  Partner With Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="OptiScale Team Collaboration" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-slate-50 rounded-3xl -z-10 rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Column: High-Quality Image */}
            <div className="relative order-1">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                  alt="UK Cityscape Architecture" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-50 z-0"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-slate-200 rounded-full blur-xl opacity-30 z-0"></div>
            </div>

            {/* Column: Mission & Vision Text */}
            <div className="space-y-12 order-2">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#0047AB] rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our Mission</h2>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  To partner with UK organisations to deliver data-driven digital strategies that accelerate growth, optimise customer journeys, and strengthen market position through technology and innovation.
                </p>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our Vision</h2>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  To lead digital transformation in the UK by setting the benchmark for performance, trust, and innovation while building enduring partnerships that drive long-term business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VALUES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Values That Drive Us</h2>
            <p className="text-slate-600 font-medium">Our culture is built on transparency, innovation, and client success.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Radical Transparency", d: "No hidden fees, no jargon. Just clear communication at every stage." },
              { t: "Relentless Innovation", d: "We stay ahead of the curve, testing new AI tools and marketing techniques." },
              { t: "Deep Partnership", d: "We work with you as an extension of your own team, sharing your goals." }
            ].map((v, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <span className="text-2xl font-black">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{v.t}</h3>
                <p className="text-slate-600 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: THE PROCESS */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-16 text-center">Our Scaling Framework</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", name: "Audit & Strategy", desc: "We analyze your current digital footprint and market potential." },
              { step: "02", name: "Blueprint Design", desc: "We design conversion-focused UI/UX and marketing funnels." },
              { step: "03", name: "Implementation", desc: "Development and launch of high-performance digital assets." },
              { step: "04", name: "Optimization", desc: "Constant data-led refinement to squeeze out more growth." }
            ].map((p, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-blue-600/20 mb-4">{p.step}</div>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-4">
              Clear Answers
            </span>
            <h2 className="text-4xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="h-1.5 w-20 bg-[#0047AB] mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <h3 className="text-xl font-black text-[#0047AB] mb-4 leading-tight group-hover:translate-x-1 transition-transform">
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium pl-2 border-l-2 border-blue-100 group-hover:border-blue-400 transition-colors">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CAREERS CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-8">Join Our Scaling Journey</h2>
          <p className="text-xl text-blue-100 mb-12">We are always looking for passionate talent to help UK businesses dominate their industries.</p>
          <div className="flex justify-center gap-6">
            <Link to={Page.Contact} className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all">
              View Openings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
