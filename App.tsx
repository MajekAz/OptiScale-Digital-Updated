
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import CookieConsent from './components/CookieConsent';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Brief from './pages/Brief';
import BookingPage from './pages/Booking';
import AdminPage from './pages/Admin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataProtection from './pages/DataProtection';
import TermsOfService from './pages/TermsOfService';

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col text-slate-900">
      <SEO />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brief" element={<Brief />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>
      <AIChatbot />
      <CookieConsent />
      <Footer />
    </div>
  );
};

export default App;
