import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Terminal, ShieldCheck, Activity } from 'lucide-react';

interface FAQProps {
  isDark: boolean;
}

const faqs = [
  {
    id: "PROT_01",
    question: "What areas of Dubai do you cover?",
    answer: "Our operational radius encompasses all primary Dubai sectors, from the high-density commercial hubs of Downtown and DIFC to the industrial zones of Al Quoz and the residential precincts of Jumeirah and Dubai Marina."
  },
  {
    id: "PROT_02",
    question: "Are your security guards certified?",
    answer: "Deployment is restricted to SIRA-certified personnel only. Each unit undergoes a 4-week advanced tactical integration course covering executive protection, crowd control, and emergency response protocols."
  },
  {
    id: "PROT_03",
    question: "Do you offer emergency 24/7 maintenance?",
    answer: "Affirmative. Our Rapid Response Team (RRT) is on 24/7 standby. Contract clients benefit from a 60-minute response time for critical electrical, plumbing, or HVAC failures."
  },
  {
    id: "PROT_04",
    question: "How does 'Integrated' management benefit my business?",
    answer: "Consolidation eliminates fragmented communication. By unifying Security, FM, and Cleaning under the Altrex Command, you achieve a 15-22% reduction in operational friction and administrative overhead."
  },
  {
    id: "PROT_05",
    question: "What is your health and safety protocol?",
    answer: "We operate under a zero-incident mandate. Protocols are strictly aligned with UAE Federal Law and ISO 45001 standards, featuring bi-weekly site audits and predictive risk mitigation."
  }
];

const FAQ: React.FC<FAQProps> = ({ isDark }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
      <section id="faq" className="py-24 lg:py-32 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-1000">

        {/* BACKGROUND DECOR */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
             style={{ backgroundImage: `radial-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">

          {/* HEADER SECTION */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6"
              >
                <Terminal className="w-4 h-4 text-red-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] dark:text-zinc-400 text-slate-500">System_Knowledge_Base</span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black dark:text-white text-slate-900 uppercase tracking-tighter leading-[0.95]">
                Operational <span className="text-red-600">Intel</span>
              </h2>
            </div>

            {/* SYSTEM STATUS HUD */}
            <div className="hidden lg:flex items-center gap-8 p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm">
              <div className="space-y-1.5">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Support Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold dark:text-white text-slate-900 uppercase tracking-tight">24/7 Command Active</span>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-slate-200 dark:bg-white/10" />
              <div className="space-y-1.5">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Avg Response</p>
                <p className="text-xs font-bold dark:text-white text-slate-900 uppercase tracking-tight">0.4s Query Time</p>
              </div>
            </div>
          </div>

          {/* FAQ GRID */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left Column: The Questions */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, idx) => (
                  <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                  >
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className={`w-full group relative flex items-center justify-between p-6 md:p-8 transition-all duration-500 rounded-[1.5rem] border ${
                            openIndex === idx
                                ? 'bg-red-600 border-red-600 shadow-2xl shadow-red-600/20'
                                : 'bg-transparent border-slate-200 dark:border-white/10 hover:border-red-600/50'
                        }`}
                    >
                      <div className="flex items-center gap-4 md:gap-8 text-left">
                        <span className={`text-[10px] font-mono font-black tracking-widest transition-colors shrink-0 ${openIndex === idx ? 'text-white/60' : 'text-red-600'}`}>
                          {faq.id}
                        </span>
                        <span className={`text-base md:text-lg font-black uppercase tracking-tight transition-colors ${openIndex === idx ? 'text-white' : 'dark:text-white text-slate-900'}`}>
                          {faq.question}
                        </span>
                      </div>
                      <div className={`transition-transform duration-500 shrink-0 ml-4 ${openIndex === idx ? 'rotate-180' : ''}`}>
                        {openIndex === idx ? <Minus className="text-white w-5 h-5" /> : <Plus className="text-slate-400 group-hover:text-red-600 w-5 h-5" />}
                      </div>
                    </button>

                    {/* Mobile Answer (Only visible on small screens) */}
                    <AnimatePresence>
                      {openIndex === idx && (
                          <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="lg:hidden overflow-hidden"
                          >
                            <div className="p-8 text-slate-600 dark:text-zinc-400 font-medium leading-relaxed text-base">
                              {faq.answer}
                            </div>
                          </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
              ))}
            </div>

            {/* Right Column: The "Display Monitor" (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-32 h-fit">
              <div className="relative p-10 lg:p-12 rounded-[3.5rem] bg-slate-950 border border-white/5 overflow-hidden shadow-3xl">
                {/* CRT Scanline Effect */}
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-10 pb-10 border-b border-white/10">
                    <Activity size={18} className="text-red-600 animate-pulse" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.5em]">Decrypted_Intel</span>
                  </div>

                  <AnimatePresence mode="wait">
                    {openIndex !== null ? (
                        <motion.div
                            key={openIndex}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            className="space-y-8"
                        >
                          <h4 className="text-2xl xl:text-3xl font-black text-white uppercase tracking-tighter leading-tight">
                            {faqs[openIndex].question}
                          </h4>
                          <div className="h-1 w-12 bg-red-600" />
                          <p className="text-lg xl:text-xl text-zinc-400 leading-relaxed font-medium">
                            {faqs[openIndex].answer}
                          </p>
                        </motion.div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                          <HelpCircle className="w-12 h-12 text-zinc-800 mb-6" />
                          <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Select a protocol to view details</p>
                        </div>
                    )}
                  </AnimatePresence>

                  <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="text-red-600/50 w-4 h-4" />
                      <span className="text-[9px] font-mono text-zinc-600 tracking-widest">ENCRYPTION: AES-256_ACTIVE</span>
                    </div>
                    <div className="w-8 h-1 bg-red-600/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default FAQ;