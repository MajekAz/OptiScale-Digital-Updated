
import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const projects = [
    { title: "Luxe Realty", cat: "Web Design", res: "+120% Leads", img: "https://picsum.photos/600/400?random=40" },
    { title: "TechFlow SaaS", cat: "Marketing", res: "3.5x ROI", img: "https://picsum.photos/600/400?random=41" },
    { title: "EcoGlobal", cat: "Automation", res: "40 hrs/mo Saved", img: "https://picsum.photos/600/400?random=42" },
    { title: "FitUK App", cat: "Web Design", res: "99.9% Uptime", img: "https://picsum.photos/600/400?random=43" },
    { title: "City Bistro", cat: "Marketing", res: "+80% Bookings", img: "https://picsum.photos/600/400?random=44" },
    { title: "SupplyChain AI", cat: "Automation", res: "90% Faster Responses", img: "https://picsum.photos/600/400?random=45" }
  ];

  return (
    <div className="pt-16">
      {/* SECTION 1: HERO */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2000" 
            alt="Data Analysis" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[2px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-black text-white mb-6">Proven Results</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">Discover the impact we've made for startups and SMEs across the United Kingdom.</p>
        </div>
      </section>

      {/* SECTION 2: SPOTLIGHT CASE STUDY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 text-white">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4 block">Project Spotlight</span>
              <h2 className="text-4xl font-black mb-8 leading-tight">Revamping the Digital Experience for Prime Finance</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We transformed a traditional financial services firm into a digital-first lead generation machine.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10 mb-8">
                <div>
                  <p className="text-3xl font-black text-white">+250%</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">Conversion Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">14 Days</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">Launch Timeline</p>
                </div>
              </div>
              <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-all">
                Full Case Study
              </button>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img src="https://picsum.photos/1000/1000?random=55" className="absolute inset-0 w-full h-full object-cover" alt="Finance Project" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECT GRID */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Our Diverse Portfolio</h2>
            <p className="text-slate-600">Explore our recent work across various industries.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg aspect-square">
                <img src={p.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={p.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90 p-8 flex flex-col justify-end">
                  <span className="text-blue-400 font-bold text-sm uppercase mb-2">{p.cat}</span>
                  <h3 className="text-2xl font-black text-white mb-4">{p.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold border border-green-500/30">
                      {p.res}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: INDUSTRY SEGMENTS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12">Sectors We Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Real Estate", "SaaS & Tech", "Healthcare", "Hospitality", "Ecommerce", "Fintech", "Manufacturing", "Professional Services"].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 font-bold text-slate-800 text-lg hover:text-blue-600 hover:bg-slate-100 transition-all cursor-default">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CLIENT TESTIMONIALS */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-16">Voices of Success</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            {[
              { q: "OptiScale didn't just build a site; they built a growth engine. Our bookings doubled in three months.", author: "James Watson, CEO of EcoFlow" },
              { q: "The AI automation they implemented saves our sales team 10 hours of manual work every week.", author: "Elena Rossi, Marketing Director" }
            ].map((t, i) => (
              <div key={i} className="p-10 bg-white/5 rounded-3xl border border-white/10 italic">
                <p className="text-xl mb-6">"{t.q}"</p>
                <p className="font-bold text-blue-400 not-italic">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: INQUIRY CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Be Our Next Case Study?</h2>
          <p className="text-xl mb-12 text-blue-100">Let's discuss how we can apply our proven scaling framework to your business.</p>
          <Link to="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
