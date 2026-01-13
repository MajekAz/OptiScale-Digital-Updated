
import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';

const BLOG_POSTS = [
  { 
    id: "scaling-automation-case-study",
    title: "Scaling Through Automation: A Case Study in Operational Excellence", 
    content: `
      <p>Operational inefficiency is the silent killer of growth for UK SMEs. As a business scales, manual processes that once worked become bottlenecks. At OptiScale Digital, we recently partnered with a mid-sized logistics firm to overhaul their internal workflows using intelligent AI automation.</p>
      
      <h3>The Challenge: Manual Data Entry & Delayed Responses</h3>
      <p>The client was losing approximately 120 hours per month to manual CRM entry and initial lead screening. This delay meant that by the time a human reached out, the prospect had often already engaged with a competitor.</p>
      
      <h3>The Solution: AI-First Workflows</h3>
      <p>We implemented a multi-layered automation system:</p>
      <ul>
        <li><strong>Automated Lead Routing:</strong> Using natural language processing (NLP) to categorize and route inquiries to the correct department instantly.</li>
        <li><strong>AI Appointment Setting:</strong> A custom chatbot that handles 90% of the initial screening and books qualified leads directly into the sales team’s calendar.</li>
        <li><strong>Synchronized CRM:</strong> Real-time data synchronization between their web assets and internal systems, eliminating duplicate entry.</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200" alt="Robotic automation arm" />

      <h3>The Result: 110 Hours Reclaimed</h3>
      <p>Within the first 90 days, the client saw a total reclamation of 110 manual hours monthly. This allowed their senior staff to focus on high-ticket negotiation rather than administrative data entry, resulting in a 22% increase in monthly revenue.</p>
    `,
    date: "Apr 2, 2024", 
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    cat: "AI Automation",
    author: "James Watson",
    authorRole: "Founder & Lead Strategist"
  },
  { 
    id: "color-psychology-design",
    title: "The Psychology of Color in High-Conversion Web Design", 
    content: `
      <p>Visual aesthetics are more than just "looking good." In the world of performance-driven web design, color is a tool for psychological persuasion. Every hue on your website sends a subconscious message to your visitors, influencing whether they trust your brand or click that "Buy Now" button.</p>

      <h3>Trust and Professionalism: The Power of Blue</h3>
      <p>It’s no accident that many of the world’s leading financial and tech institutions (and OptiScale Digital!) use blue as their primary brand color. Blue evokes feelings of stability, trust, and intelligence. For B2B service providers, it is the safest bet for establishing immediate credibility.</p>

      <h3>Urgency and Action: When to Use Red and Orange</h3>
      <p>Red is a powerful color that demands attention. It creates a sense of urgency but can also trigger anxiety if overused. We typically reserve red or vibrant orange for "Call to Action" buttons. A high-contrast orange button on a clean white or dark blue background acts as a beacon, guiding the user toward conversion.</p>
      
      <img src="https://images.unsplash.com/photo-1550684847-75bdda21cc95?auto=format&fit=crop&q=80&w=1200" alt="Modern color swatches" />

      <h3>The Rule of 60-30-10</h3>
      <p>To maintain visual balance while driving conversions, we follow the 60-30-10 rule:</p>
      <ul>
        <li><strong>60% Primary Color:</strong> Usually a neutral tone (white, light grey, or deep slate) to provide breathing room.</li>
        <li><strong>30% Secondary Color:</strong> Your main brand color, used to establish identity.</li>
        <li><strong>10% Accent Color:</strong> A high-contrast "pop" color used exclusively for buttons and critical notifications.</li>
      </ul>
      
      <p>Conclusion: Don't choose colors based on personal preference. Choose them based on the emotional response you want to trigger in your customers.</p>
    `,
    date: "Apr 10, 2024", 
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1600",
    cat: "Web Design",
    author: "Sarah Jenkins",
    authorRole: "Lead Product Designer"
  },
  { 
    id: "marketing-trends-2025",
    title: "10 Digital Marketing Trends Dominating 2025", 
    content: `
      <p>As we look toward 2025, the digital marketing world is moving at a breakneck pace. The integration of AI, shifting privacy regulations, and changing consumer behaviors are forcing brands to rethink their strategies from the ground up.</p>
      
      <h3>1. Hyper-Personalization via Generative AI</h3>
      <p>Generic marketing is dead. In 2025, brands are using GenAI to create unique content experiences for every single user. Whether it's a personalized video greeting or a dynamic website that changes its layout based on a visitor's history, hyper-personalization is the new standard.</p>
      
      <h3>2. The Era of Zero-Party Data</h3>
      <p>With third-party cookies effectively retired, the focus has shifted to zero-party data—data that customers intentionally and proactively share with you. Transparency and trust-building are now the primary drivers of data collection.</p>
      
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Digital Marketing Trends" />

      <h3>3. Social Commerce Becomes the Primary Shopfront</h3>
      <p>TikTok Shop, Instagram Shopping, and even LinkedIn are evolving. Consumers no longer want to leave their favorite social apps to make a purchase. Integrating your inventory directly into social platforms is essential for 2025 growth.</p>

      <h3>4. Voice and Visual Search Optimization</h3>
      <p>Search is no longer just about text. With the rise of smart glasses and advanced AI assistants, optimizing for "What does this object do?" or "Find me a local plumber" via voice is critical for local UK businesses.</p>

      <h3>5. The Rise of "Quiet Marketing"</h3>
      <p>Consumers are exhausted by constant ads. Quiet marketing focuses on subtle placements, high-value community building, and organic influence rather than shouting for attention with intrusive pop-ups.</p>
      
      <p>Conclusion: To win in 2025, you must be agile. Leverage technology to enhance human connection, not replace it. Focusing on these trends now will ensure your business remains a dominant force in the coming year.</p>
    `,
    date: "Mar 15, 2024", 
    img: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1600",
    cat: "Digital Marketing",
    author: "James Watson",
    authorRole: "Founder & Lead Strategist"
  },
  { 
    id: "b2b-social-strategy",
    title: "Transforming B2B Social Media into a Revenue Engine", 
    content: `
      <p>In the world of B2B, social media is often misunderstood as a platform merely for branding or "sharing updates." However, at OptiScale Digital, we've refined a framework that turns LinkedIn and Twitter into powerful revenue engines.</p>
      
      <h3>1. Personal Branding for Executives</h3>
      <p>People buy from people, not companies. In B2B, the social presence of your leadership team is often more influential than the company page itself. We help executives build authoritative profiles that attract high-ticket decision-makers.</p>
      
      <h3>2. Content that Educates, Doesn't Just Sell</h3>
      <p>Traditional sales pitches are ignored on social media. Successful B2B social strategy relies on providing genuine value through education, industry insights, and solving common pain points. This builds trust before a sales conversation even begins.</p>
      
      <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" alt="B2B Networking" />

      <h3>3. Strategic Direct Outreach</h3>
      <p>Social media provides a direct line to almost any stakeholder. We use data-led targeting to ensure your message reaches the right person at the right time, avoiding the "noise" of traditional cold outreach.</p>
    `,
    date: "Jan 5, 2024", 
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1600",
    cat: "Social Media",
    author: "Elena Rossi",
    authorRole: "Head of Marketing"
  },
  { 
    id: "ppc-local-dominance",
    title: "Google Ads: Dominating Local Search in the UK", 
    content: `
      <p>For UK SMEs, competing on a national level with massive PPC budgets is a losing game. The secret to high-ROI paid advertising is hyper-local dominance. By narrowing your focus, you can achieve better visibility and lower costs per lead.</p>
      
      <h3>The Power of Radius Targeting</h3>
      <p>Google Ads allows for incredibly precise location targeting. Instead of targeting "UK," we focus on specific postcodes or a tight radius around your service areas. This ensures your budget is only spent on users you can actually serve.</p>
      
      <h3>Local Service Ads (LSAs)</h3>
      <p>For service-based businesses like solicitors or contractors, Google's Local Service Ads are a game-changer. These ads appear at the very top of search results and operate on a "pay-per-lead" basis rather than pay-per-click, offering significant protection for your marketing spend.</p>
      
      <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200" alt="Local Advertising Strategy" />

      <h3>Ad Copy that Speaks Local</h3>
      <p>Generic ad copy falls flat. Mentioning specific towns, landmarks, or local needs in your headlines significantly increases Click-Through Rates (CTR) by making your business appear more relevant and trustworthy to the local searcher.</p>
    `,
    date: "Feb 10, 2024", 
    img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1600",
    cat: "Paid Advertising",
    author: "James Watson",
    authorRole: "Founder & Lead Strategist"
  },
  { 
    id: "content-lead-gen",
    title: "Building a Content-First Lead Generation Funnel", 
    content: `
      <p>The "hard sell" is dead. Modern consumers, especially in the high-ticket service sectors, require multiple touchpoints and a significant amount of trust before committing. A content-first funnel automates this nurturing process.</p>
      
      <h3>1. The Lead Magnet: High-Value Entry Points</h3>
      <p>Every funnel starts with an exchange of value. Whether it's a whitepaper on UK market trends, a custom AI calculator, or an exclusive video series, your "lead magnet" must solve a specific, immediate problem for your audience.</p>
      
      <h3>2. Email Nurturing: The Invisible Salesperson</h3>
      <p>Once a lead is captured, automated email sequences provide ongoing value, address objections, and demonstrate your expertise. This keeps your brand top-of-mind until the lead is ready to have a direct consultation.</p>
      
      <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200" alt="Lead Generation Content" />

      <h3>3. Conversion: The Low-Friction CTA</h3>
      <p>The end goal is a meeting or a sale. By the time a lead reaches this stage, your content has already done the heavy lifting of "pre-selling." The CTA should be a natural next step, such as a "Free Strategy Session" or a "Project Audit."</p>
    `,
    date: "Mar 2, 2024", 
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1600",
    cat: "Lead Generation",
    author: "Sarah Jenkins",
    authorRole: "Lead Product Designer"
  },
  { 
    id: "2024-blueprint",
    title: "The 2024 Blueprint for UK Digital Expansion", 
    content: `
      <p>As we navigate through 2024, the UK digital landscape is more competitive than ever. For businesses looking to scale, simply having a presence isn't enough. You need a blueprint that integrates technical excellence with strategic market positioning.</p>
      
      <h3>1. Navigating the Regulatory Landscape</h3>
      <p>With evolving data privacy standards and the UK's unique position post-Brexit, businesses must ensure their digital infrastructure is both compliant and performant. GDPR remains a cornerstone, but the way we handle "first-party data" is becoming the primary differentiator for successful marketing campaigns.</p>
      
      <h3>2. The AI-First Approach</h3>
      <p>UK startups are leading the way in AI adoption. At OptiScale Digital, we've observed that firms integrating AI into their core operations—from customer service to predictive analytics—are seeing a 30% reduction in operational costs within the first six months.</p>
      
      <h3>3. Hyper-Local SEO Strategies</h3>
      <p>While global reach is tempting, dominating your local UK territory provides the foundation for sustainable growth. Google's local search algorithms have become more sophisticated, rewarding businesses that provide genuine, high-quality local value and possess localized authority signals.</p>

      <p>Conclusion: The blueprint for success this year is clear—prioritize user experience, leverage automation, and maintain a relentless focus on data-driven decision making.</p>
    `,
    date: "Jan 15, 2024", 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    cat: "Editorial",
    author: "James Watson",
    authorRole: "Founder & Lead Strategist"
  },
  { 
    id: "ai-future-sme",
    title: "Why AI Automation is the Future of SMEs", 
    content: `
      <p>The UK digital landscape is undergoing a massive shift. For years, only large enterprises could afford the power of custom automation and intelligence. However, in 2024, the playing field is leveling. Small and Medium Enterprises (SMEs) that adopt AI-driven strategies are not just surviving; they are outperforming competitors with ten times their budget.</p>
      
      <h3>The End of Manual Lead Management</h3>
      <p>One of the most immediate impacts we've seen at OptiScale Digital is the automation of the lead-to-booking pipeline. Statistically, leads responded to within 5 minutes are 10x more likely to convert. For a small business owner, being glued to their phone is impossible. AI chatbots and automated scheduling are now handling these initial touches with human-like precision, 24/7.</p>
      
      <ul>
        <li><strong>Instant Response:</strong> Never miss a query again, even at 3 AM.</li>
        <li><strong>Data-Led Decisions:</strong> AI doesn't just act; it analyzes which leads are most likely to close.</li>
        <li><strong>Operational Freedom:</strong> Reclaim 15-20 hours of manual admin per week.</li>
      </ul>

      <h3>Scaling Without Increasing Headcount</h3>
      <p>The beauty of AI automation lies in its ability to scale your operations without the immediate need for expensive hiring. It acts as a force multiplier for your existing team, allowing them to focus on high-value creative and strategic work while the "machine" handles the repetition.</p>
    `,
    date: "Oct 12, 2023", 
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
    cat: "AI Automation",
    author: "James Watson",
    authorRole: "Founder & Lead Strategist"
  },
  { 
    id: "seo-trends-2024",
    title: "10 SEO Trends to Watch in 2024", 
    content: `
      <p>Search Engine Optimisation isn't what it used to be. As Google integrates Gemini and SGE (Search Generative Experience) into the main results, the traditional 'blue link' is becoming less dominant. To win in 2024, UK businesses need to shift from 'Keyword Ranking' to 'Authority Dominance'.</p>

      <h3>1. The Rise of Zero-Click Searches</h3>
      <p>Google is increasingly answering queries directly on the search results page. Your content must now be optimized for 'featured snippets' and AI overviews to maintain visibility, even if it doesn't always lead to a click. This builds brand authority that pays off in high-intent searches.</p>

      <h3>2. Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T)</h3>
      <p>Google's recent updates place a heavy premium on content that demonstrates real-world experience. AI-generated fluff is being penalized. At OptiScale Digital, we focus on producing expert-led content that solves actual user problems rather than just filling pages with keywords.</p>
      
      <p>Stay ahead by focusing on technical performance (Core Web Vitals) and genuinely helpful content that keeps users on the page longer.</p>
    `,
    date: "Nov 5, 2023", 
    img: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=1600",
    cat: "SEO Mastery",
    author: "Elena Rossi",
    authorRole: "Head of Marketing"
  },
  { 
    id: "conversion-design",
    title: "Mastering Conversion-Focused Design", 
    content: `
      <p>A website that looks beautiful but doesn't sell is just an expensive digital business card. At OptiScale Digital, we believe design should be a direct driver of revenue. Mastering conversion-focused design requires a blend of psychology, data, and visual precision.</p>

      <h3>The 3-Second Rule</h3>
      <p>A visitor decides whether to stay on your site within 3 seconds. Your value proposition must be clear, your 'Call to Action' (CTA) must be obvious, and your load speed must be lightning fast. We build on frameworks like Next.js to ensure that performance never compromises aesthetics.</p>

      <img src="https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=1200" alt="Data-driven design analytics" />

      <h3>Visual Hierarchy and Trust Signals</h3>
      <p>Where does the eye go first? By using strategic color contrast and white space, we guide the user's journey from curiosity to commitment. Integrating trust signals—like UK registration badges, case study results, and testimonials—directly into the conversion path is non-negotiable for high-ticket services.</p>
    `,
    date: "Dec 1, 2023", 
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1600",
    cat: "Web Design",
    author: "Sarah Jenkins",
    authorRole: "Lead Product Designer"
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61585965703940', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    { 
      name: 'X', 
      url: 'https://x.com/optiscaledigital',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/optiscaledigital',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/optiscaledigital',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.163.422.358 1.057.412 2.227.059 1.265.07 1.646.07 4.85s-.011 3.585-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.265.059-1.646.07-4.85.07s-3.585-.011-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227-.059-1.265-.07-1.646-.07-4.85s.011-3.585.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.265-.059 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.384 1.078 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.384 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.384-1.078-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* SECTION 1: HEADER & BREADCRUMBS */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-8 group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            BACK TO INSIGHTS
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              {post.cat}
            </span>
            <span className="text-slate-400 text-sm font-bold">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
              <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=0047AB&color=fff`} alt={post.author} />
            </div>
            <div>
              <p className="font-black text-slate-900">{post.author}</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED IMAGE */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
            <img src={post.img} className="w-full h-auto object-cover max-h-[600px]" alt={post.title} />
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTENT */}
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-lg prose-slate max-w-none">
            {/* Using dangerouslySetInnerHTML to simulate rich text from a CMS */}
            <div 
              className="blog-content font-medium text-slate-700 leading-relaxed space-y-8"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>

          {/* Social Share & Tags */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex gap-2">
              {['#Growth', '#UKBusiness', '#Strategy'].map(tag => (
                <span key={tag} className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm font-black text-slate-900">
              FOLLOW US:
              <div className="flex gap-3">
                {shareLinks.map(sm => (
                  <a 
                    key={sm.name} 
                    href={sm.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title={`Follow us on ${sm.name}`} 
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400"
                  >
                    {sm.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: POST CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to apply these insights?</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Don't just read about growth—start achieving it. Book a free consultation with our strategies team today.
            </p>
            <Link to="/book" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
              Book Your Free Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: RELATED POSTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-12">More from OptiScale</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3).map(p => (
              <Link key={p.id} to={`/blog/${p.id}`} className="group block">
                <div className="h-48 rounded-2xl overflow-hidden mb-6 shadow-md">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={p.title} />
                </div>
                <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Add custom styles for the dangerouslySetInnerHTML content */}
      <style>{`
        .blog-content h3 {
          font-weight: 900;
          font-size: 1.875rem;
          color: #0f172a;
          margin-top: 2.5rem;
          line-height: 1.25;
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        .blog-content img {
          width: 100%;
          height: auto;
          border-radius: 2rem;
          margin: 3rem 0;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
        }
        .blog-content ul {
          list-style: none;
          padding-left: 0;
          margin: 2rem 0;
        }
        .blog-content li {
          margin-bottom: 1rem;
          padding-left: 2rem;
          position: relative;
        }
        .blog-content li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: 900;
        }
        .blog-content strong {
          color: #0f172a;
          font-weight: 800;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
