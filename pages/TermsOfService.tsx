
import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-16 bg-slate-50">
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Terms of Service</h1>
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
            <h2 className="text-2xl font-black text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By using the services of OptiScale Digital Ltd, you agree to these Terms of Service.
            </p>

            <h2 className="text-2xl font-black text-slate-900 mt-12">2. Services Provided</h2>
            <p>
              We provide digital services including Web Design, SEO, PPC, and AI Automation as defined in individual agreements.
            </p>

            <h2 className="text-2xl font-black text-slate-900 mt-12">3. Payment</h2>
            <p>
              Unless otherwise stated, payment is due within 14 days of the invoice date.
            </p>

            <h2 className="text-2xl font-black text-slate-900 mt-12">4. Intellectual Property</h2>
            <p>
              Upon full payment, the Client owns the final creative assets and code developed specifically for them.
            </p>

            <h2 className="text-2xl font-black text-slate-900 mt-12">5. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of England and Wales.
            </p>

            <div className="mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-200 font-medium">
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

export default TermsOfService;
