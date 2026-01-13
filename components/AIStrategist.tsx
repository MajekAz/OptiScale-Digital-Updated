
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDigitalStrategy } from '../services/geminiService';

const AIStrategist: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [goals, setGoals] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await getDigitalStrategy(industry, goals, status);
      setStrategy(result || "Unable to generate strategy at this time.");
    } catch (error) {
      console.error(error);
      setStrategy("Error generating strategy. Please check your connection or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-600/20 blur-[100px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            AI Powered Consultation
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get Your Personalised <br />
            <span className="text-blue-400">Scaling Strategy</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Input your business details and let our AI engine generate a high-level roadmap for your digital transformation.
          </p>
        </div>

        {!strategy ? (
          <form onSubmit={handleSubmit} className="glass bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">Industry / Sector</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. E-commerce, Real Estate"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">Business Goals</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. More leads, Faster site"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-2 text-slate-300">Current Status / Website</label>
              <textarea
                required
                placeholder="Briefly describe your current setup..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500 h-32"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analysing...
                </>
              ) : "Generate Strategy"}
            </button>
          </form>
        ) : (
          <div className="glass bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-blue-400">Your Scaling Roadmap</h3>
              <button 
                onClick={() => setStrategy(null)}
                className="text-sm text-slate-400 hover:text-white underline"
              >
                Reset
              </button>
            </div>
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-slate-300 leading-relaxed">
                {strategy}
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-slate-400 text-sm">Want to implement this plan? Let's talk.</p>
              <Link to="/book" className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-all">
                Book My Free Deep-Dive
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIStrategist;
