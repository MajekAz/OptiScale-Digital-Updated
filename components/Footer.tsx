
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61585965703940', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    { 
      name: 'X (Twitter)', 
      url: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.163.422.358 1.057.412 2.227.059 1.265.07 1.646.07 4.85s-.011 3.585-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.265.059-1.646.07-4.85.07s-3.585-.011-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227-.059-1.265-.07-1.646-.07-4.85s.011-3.585.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.265-.059 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.384 1.078 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.384 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.384-1.078-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-11 h-11 bg-[#0047AB] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-black text-xl leading-none tracking-tighter select-none">OS</span>
              </div>
              <span className="text-2xl font-black tracking-tight">OptiScale <span className="text-blue-500">Digital</span></span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 font-medium">
              UK's leading agency for modern web design, strategic digital marketing, and AI automation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target={social.url !== '#' ? "_blank" : undefined}
                  rel={social.url !== '#' ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all border border-white/10 group text-slate-400 hover:text-white"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><Link to={Page.Home} className="hover:text-white transition-colors">HOME</Link></li>
              <li><Link to={Page.About} className="hover:text-white transition-colors">ABOUT US</Link></li>
              <li><Link to={Page.Services} className="hover:text-white transition-colors">SERVICES</Link></li>
              <li><Link to={Page.Blog} className="hover:text-white transition-colors">BLOG</Link></li>
              <li><Link to={Page.Booking} className="hover:text-blue-400 transition-colors text-blue-500">BOOK ONLINE</Link></li>
              <li><Link to={Page.Contact} className="hover:text-white transition-colors">CONTACT</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-6">Expertise</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link to="/services" className="hover:text-white transition-colors">Web Design & Dev</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">SEO Mastery</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Social Marketing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Paid Ads (PPC)</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Lead Generation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AI Automation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-6">Legal & Contact</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex flex-col mb-4">
                <span className="text-white text-xs uppercase font-black mb-1">HQ Address</span>
                <span>71-75 Shelton Street</span>
                <span>Covent Garden, London</span>
                <span>WC2H 9JQ</span>
              </li>
              <li><Link to={Page.Privacy} className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to={Page.DataProtection} className="hover:text-white transition-colors">Data Protection</Link></li>
              <li><Link to={Page.TermsOfService} className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
               <p className="text-xs text-slate-500 font-black uppercase mb-2">Registration No.</p>
               <p className="text-slate-400 text-sm font-medium">Registered in England & Wales: 16937899</p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">© 2024 OPTISCALE DIGITAL LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
            <span>Made in the UK</span>
            <Link to={Page.DataProtection} className="text-blue-500 hover:text-blue-400 transition-colors">UK GDPR Compliant</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
