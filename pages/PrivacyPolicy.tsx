
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-16 bg-slate-50">
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Privacy Policy</h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest">Last Updated: October 2024</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg prose-slate max-w-none bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-100"
          >
            <h2 className="text-2xl font-black text-slate-900">1. Introduction</h2>
            <p>
              OptiScale Digital Ltd ("we", "us", or "our") is committed to protecting your privacy and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>

            <h2 className="text-2xl font-black text-slate-900 mt-12">2. Information We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number provided via forms.</li>
              <li><strong>Project Data:</strong> Information provided for strategy recommendations.</li>
              <li><strong>Technical Data:</strong> IP address and usage data collected via cookies.</li>
            </ul>

            <h2 className="text-2xl font-black text-slate-900 mt-12">3. How We Use Your Data</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide our digital agency services.</li>
              <li>To provide personalised recommendations.</li>
              <li>To communicate with you regarding projects.</li>
              <li>To improve our website performance.</li>
            </ul>

            <h2 className="text-2xl font-black text-slate-900 mt-12">4. Data Retention</h2>
            <p>
              We only retain your personal data for as long as necessary to fulfil the purposes we collected it for.
            </p>

            <h2 className="text-2xl font-black text-slate-900 mt-12">5. Your Legal Rights</h2>
            <p>Under UK GDPR, you have the right to request access, correction, or erasure of your personal data.</p>

            <h2 className="text-2xl font-black text-slate-900 mt-12">6. Contact Us</h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-medium">
              <p className="font-black text-slate-900 mb-1">OptiScale Digital Ltd</p>
              <p>71-75 Shelton Street, London, WC2H 9JQ</p>
              <p className="text-blue-600 font-bold mt-2">Email: info@optiscaledigital.co.uk</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
