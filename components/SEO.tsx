
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO_DATA: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'OptiScale Digital | UK Web Design, Marketing & AI Agency',
    description: 'Premier UK digital agency specializing in high-performance web design, strategic SEO, and AI automation. Scale your business with data-led precision.'
  },
  '/about': {
    title: 'About Us | OptiScale Digital UK Agency',
    description: 'Learn about the mission, values, and expert team behind OptiScale Digital. We empower UK SMEs to dominate their markets digitally.'
  },
  '/services': {
    title: 'Digital Services | Web Design, SEO & AI Automation UK',
    description: 'Explore our core scaling pillars including conversion-focused web design, search engine optimisation, and intelligent AI automation.'
  },
  '/blog': {
    title: 'Digital Insights & Growth Blog | OptiScale Digital',
    description: 'Expert advice on web design, SEO trends, and AI automation for UK businesses looking to scale in the digital age.'
  },
  '/contact': {
    title: 'Contact OptiScale Digital | London Web Design Agency',
    description: 'Ready to scale? Contact our London-based team today for a free strategy consultation and bespoke digital roadmap.'
  },
  '/book': {
    title: 'Book a Strategy Call | OptiScale Digital',
    description: 'Secure your slot for a free digital strategy deep-dive. Let our experts analyze your business and build a blueprint for scaling.'
  },
  '/privacy': {
    title: 'Privacy Policy | OptiScale Digital',
    description: 'OptiScale Digital Privacy Policy. How we handle and protect your personal data in accordance with UK GDPR.'
  },
  '/data-protection': {
    title: 'Data Protection | UK GDPR Compliance OptiScale',
    description: 'Details on our security standards, UK GDPR compliance, and data processing agreements.'
  },
  '/terms': {
    title: 'Terms of Service | OptiScale Digital',
    description: 'Standard terms and conditions for partnering with OptiScale Digital Ltd.'
  }
};

const SEO: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const data = SEO_DATA[path] || (path.startsWith('/blog/') 
      ? { title: 'Blog Post | OptiScale Digital', description: 'Read our latest insights on digital growth.' }
      : SEO_DATA['/']);

    const fullUrl = `https://optiscaledigital.co.uk${path}`;

    // Update document title
    document.title = data.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', data.description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', data.title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', data.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', data.title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', data.description);

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', fullUrl);

    // Update Canonical link
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    }
  }, [location]);

  return null;
};

export default SEO;
