
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import { Page } from '../types';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const AIChatbot: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initial greeting based on page context
  useEffect(() => {
    let greeting = "Hi there! 👋 How can I help you today?";
    
    if (location.pathname === Page.Home) {
      greeting = "Hi 👋 How can I help you today?";
    } else if (location.pathname === Page.Contact) {
      greeting = "Hello! Would you like to send us a message or need help with the contact form?";
    } else if (location.pathname === Page.Services) {
      greeting = "Hi there! Want details on our services or a custom quote?";
    }

    setMessages([{ role: 'assistant', text: greeting }]);
  }, [location.pathname]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (overrideInput?: string) => {
    const messageToSend = overrideInput || input;
    if (!messageToSend.trim() || isTyping) return;

    // Handle UI-specific suggestion buttons
    if (messageToSend === "Book Strategy Call") {
      setIsOpen(false);
      navigate(Page.Booking);
      return;
    }

    const userMessage: Message = { role: 'user', text: messageToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model' as const,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        history: history,
        config: {
          systemInstruction: `You are OptiScale Digital’s AI Assistant, built to help website visitors and intelligently route inquiries into our CRM or email endpoint via API.

Primary responsibilities:
- Answer visitor questions clearly and helpfully.
- Collect visitor details for CRM entry.
- Structure message data in clean JSON format.
- Trigger CRM/email API requests when needed.
- Provide human-quality support, sales guidance, and navigation.

1. LEAD CAPTURE WORKFLOW:
If a user wants to send a message, contact us, book a consultation, or has a support query, follow this workflow:
Step A — Ask for 3 items (one at a time):
1. Full Name
2. Email Address
3. Their message / inquiry
Always confirm each field before moving to the next.

2. DATA VALIDATION:
- Name: Not empty.
- Email: Must contain "@" and a domain.
- Message: At least 5 characters.
If invalid, politely ask to correct it.

3. CRM / API PAYLOAD (MANDATORY ON COMPLETION):
Once validated and collected, output data in this JSON format:
\`\`\`json
{
  "action": "send_to_crm",
  "lead": {
    "name": "<NAME>",
    "email": "<EMAIL>",
    "message": "<USER_MESSAGE>",
    "source": "OptiScaleDigital.co.uk Chatbot",
    "timestamp": "${new Date().toISOString()}"
  }
}
\`\`\`
Then say: “Your message has been submitted to the OptiScale Digital team. We’ll contact you shortly.”

4. TONE & QUALITY:
- Friendly, concise, human-like.
- No robotic or overly-formal phrases.
- No hallucinations in pricing.
- CTA Suggestions: "Would you like a quote?", "Shall I send your message to our team?", "Want me to help you book a consultation?".

5. NAVIGATION:
If users ask to book, provide the string "/book" to trigger the UI button.`,
          temperature: 0.7,
        },
      });

      const result = await chat.sendMessage({ message: messageToSend });
      const responseText = result.text || "I'm sorry, I'm having trouble connecting to the strategy engine. Can I take your details for a call-back instead?";

      // Detect JSON in response to simulate "System Signal"
      if (responseText.includes('"action": "send_to_crm"')) {
        console.log("%c[CRM SIGNAL DETECTED]", "color: #0047AB; font-weight: bold;", responseText);
      }

      const assistantMessage: Message = { 
        role: 'assistant', 
        text: responseText
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "I'm having a small technical hiccup. I'm not 100% sure, but I can have a team member confirm. Would you like to leave your name and email?" }]);
    } finally {
      setIsTyping(false);
    }
  };

  const suggestions = [
    "Book Strategy Call",
    "What services do you offer?",
    "How much is a website?",
    "I want to send a message"
  ];

  const renderMessageText = (text: string) => {
    // Hide the raw JSON from the chat bubble for cleaner UI if preferred, 
    // but the prompt says "output data in this JSON format", so we show it 
    // unless we decide to parse it out.
    const parts = text.split(/(\/book)/gi);
    return parts.map((part, i) => {
      if (part.toLowerCase() === '/book') {
        return (
          <Link 
            key={i} 
            to={Page.Booking}
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md my-2 mx-1 active:scale-95 whitespace-nowrap border-2 border-white/20 cursor-pointer relative z-30"
          >
            <span>Book Strategy Call</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] md:w-[420px] h-[650px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col glass"
          >
            {/* Header */}
            <div className="bg-[#0047AB] p-6 text-white flex items-center justify-between shadow-lg relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center animate-pulse border border-white/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-widest leading-none mb-1">OptiScale Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <p className="text-[10px] text-blue-200 font-bold uppercase tracking-tighter">AI Growth Strategist • Online</p>
                  </div>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-5 bg-slate-50/50 scroll-smooth">
              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[90%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                    m.role === 'user' 
                      ? 'bg-[#0047AB] text-white rounded-tr-none font-medium' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none font-medium'
                  }`}>
                    {renderMessageText(m.text)}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none flex gap-1.5 shadow-sm">
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-5 bg-white border-t border-slate-100">
              <div className="flex flex-wrap gap-2 mb-4 max-h-24 overflow-y-auto">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSend(s)}
                    className="text-[9px] font-black uppercase tracking-[0.15em] px-3.5 py-2 bg-slate-100 hover:bg-[#0047AB] hover:text-white rounded-full transition-all border border-slate-200 active:scale-95 cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message here..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4.5 text-sm focus:ring-4 focus:ring-blue-500/10 outline-none pr-16 transition-all placeholder-slate-400 font-medium"
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 top-2 w-11 h-11 bg-[#0047AB] text-white rounded-xl flex items-center justify-center hover:bg-blue-700 disabled:bg-slate-300 transition-all shadow-lg shadow-blue-200 active:scale-95 cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9-7-9-7v14z" />
                  </svg>
                </button>
              </div>
              <p className="mt-3 text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                Always helpful • Always responsive
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Toggle */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#0047AB] text-white rounded-full flex items-center justify-center shadow-2xl relative group overflow-hidden border-4 border-white cursor-pointer"
      >
        <div className="absolute inset-0 bg-blue-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {isOpen ? (
          <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <div className="relative z-10 flex flex-col items-center">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default AIChatbot;
