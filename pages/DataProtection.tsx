
import React from 'react';
import { motion } from 'framer-motion';

const DataProtection: React.FC = () => {
  return (
    <div className="pt-16 bg-slate-50">
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Data Protection</h1>
          <p className="text-blue-100 font-bold uppercase tracking-widest">Security & Compliance Standards</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">UK GDPR Compliance</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                We are fully registered with the Information Commissioner's Office (ICO). We operate under a "Privacy by Design" framework.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">Technical Security</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                We employ AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted within high-security EEA/UK centres.
              </p>
            </motion.div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-100 prose prose-lg prose-slate max-w-none">
            <h2 className="text-2xl font-black text-slate-900">How We Protect Your Clients</h2>
            <p>
              As a Data Processor, we take our responsibility seriously:
            </p>
            <ul>
              <li><strong>Data Processing Agreements:</strong> Comprehensive DPAs defining roles.</li>
              <li><strong>Vulnerability Scanning:</strong> Regular security audits.</li>
              <li><strong>Access Control:</strong> Principle of least privilege.</li>
            </ul>

            <div className="mt-12 p-8 bg-slate-900 rounded-[2rem] text-white">
              <h4 className="text-lg font-black mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Security Concern?
              </h4>
              <p className="text-slate-400 mb-0">
                Contact our security team at <span className="text-blue-400 font-bold">info@optiscaledigital.co.uk</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataProtection;
