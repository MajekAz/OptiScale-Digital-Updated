
import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    { 
      id: "scaling-automation-case-study",
      title: "Scaling Through Automation: A Case Study in Operational Excellence", 
      excerpt: "How one UK logistics firm reclaimed 100+ hours monthly by integrating intelligent AI workflows and automated CRM systems.", 
      date: "Apr 2, 2024", 
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      cat: "AI Automation"
    },
    { 
      id: "color-psychology-design",
      title: "The Psychology of Color in High-Conversion Web Design", 
      excerpt: "Why your choice of palette does more than just look good—it drives emotional response and dictates user behavior.", 
      date: "Apr 10, 2024", 
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
      cat: "Web Design"
    },
    { 
      id: "marketing-trends-2025",
      title: "10 Digital Marketing Trends Dominating 2025", 
      excerpt: "Discover the latest trends shaping the digital marketing landscape and how to leverage them for business growth.", 
      date: "Mar 15, 2024", 
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
      cat: "Digital Marketing"
    },
    { 
      id: "b2b-social-strategy",
      title: "Transforming B2B Social Media into a Revenue Engine", 
      excerpt: "LinkedIn and Twitter are no longer just for brand awareness. Learn how to drive direct qualified leads through social strategy.", 
      date: "Jan 5, 2024", 
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
      cat: "Social Media"
    },
    { 
      id: "ppc-local-dominance",
      title: "Google Ads: Dominating Local Search in the UK", 
      excerpt: "A guide for UK SMEs on how to leverage hyper-local targeting in PPC to outperform national competitors.", 
      date: "Feb 10, 2024", 
      img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800",
      cat: "Paid Advertising"
    },
    { 
      id: "content-lead-gen",
      title: "Building a Content-First Lead Generation Funnel", 
      excerpt: "Stop chasing leads and start attracting them. How high-value content can automate your sales process.", 
      date: "Mar 2, 2024", 
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
      cat: "Lead Generation"
    },
    { 
      id: "ai-future-sme",
      title: "Why AI Automation is the Future of SMEs", 
      excerpt: "How small businesses in the UK are using AI to compete with giants by automating lead response and customer service.", 
      date: "Oct 12, 2023", 
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      cat: "AI Automation"
    },
    { 
      id: "seo-trends-2024",
      title: "10 SEO Trends to Watch in 2024", 
      excerpt: "The landscape of search is changing with SGE and AI-first queries. here is how to maintain your organic dominance.", 
      date: "Nov 5, 2023", 
      img: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=800",
      cat: "SEO Mastery"
    },
    { 
      id: "conversion-design",
      title: "Mastering Conversion-Focused Design", 
      excerpt: "Visuals are great, but results are better. Learn our framework for high conversion UI/UX that turns visitors into leads.", 
      date: "Dec 1, 2023", 
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      cat: "Web Design"
    }
  ];

  return (
    <div className="pt-16">
      {/* SECTION 1: HERO */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000" 
            alt="Writing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
            OptiScale Insights
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Insights & Growth</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Expert advice on scaling your business in the digital age through design, SEO, and AI.</p>
        </div>
      </section>

      {/* SECTION 2: FEATURED EDITORIAL */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 bg-slate-50 rounded-[3rem] overflow-hidden shadow-sm border border-slate-100">
            <div className="lg:w-3/5">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Featured Article" />
            </div>
            <div className="lg:w-2/5 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4 block">Editor's Choice</span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">The 2024 Blueprint for UK Digital Expansion</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">Our comprehensive guide on navigating the evolving UK digital landscape.</p>
              <Link to="/blog/2024-blueprint" className="text-slate-900 font-black border-b-4 border-blue-600 self-start hover:text-blue-600 transition-all text-lg pb-1">Read Editorial</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INSIGHTS GRID */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col border border-slate-100">
                <Link to={`/blog/${post.id}`} className="h-64 overflow-hidden block">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
                </Link>
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest">{post.cat}</span>
                    <p className="text-xs text-slate-400 font-bold uppercase">{post.date}</p>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h3>
                  </Link>
                  <p className="text-slate-600 mb-8 line-clamp-3 font-medium">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="font-black text-blue-600 flex items-center gap-2 group/link mt-auto">
                    Read More 
                    <svg className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: NEWSLETTER */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-10 rotate-12 shadow-2xl shadow-blue-500/20">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2v12a2 2 0 002 2z" /></svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Scale Smarter, Every Week</h2>
          <p className="text-xl text-slate-400 mb-10">Get the latest digital scaling strategies and UK market insights.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your work email" className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-5 focus:ring-2 focus:ring-blue-500 outline-none text-white font-medium" />
            <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">Subscribe</button>
          </form>
          <p className="mt-8 text-xs text-slate-500 uppercase font-black tracking-widest">No Spam. Just Strategic Value.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
