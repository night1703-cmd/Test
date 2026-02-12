import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants';
import { Check, X, ArrowRight, Activity, Crosshair, Zap, Layers } from 'lucide-react';

interface ServicesProps {
  isDark: boolean;
}

const CometCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
      <div className={`relative group/comet ${className} p-[2px] rounded-[3rem] lg:rounded-[5rem] overflow-hidden bg-slate-300 dark:bg-white/10 transition-all duration-1000 shadow-3xl`}>
        <div className="absolute inset-[-100%] z-0 pointer-events-none group-hover/comet:opacity-100 opacity-0 transition-opacity duration-1000">
          <div className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#dc2626_320deg,#f97316_360deg)] blur-[2px]" />
        </div>
        <div className="relative z-10 w-full h-full bg-white dark:bg-[#050505] rounded-[2.9rem] lg:rounded-[4.9rem] overflow-hidden">
          {children}
        </div>
      </div>
  );
};

const Services: React.FC<ServicesProps> = ({ isDark }) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const handleInteraction = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = ((clientX - rect.left) / rect.width - 0.5) * 35;
    const y = ((clientY - rect.top) / rect.height - 0.5) * -35;

    card.style.setProperty('--rt-x', `${y}deg`);
    card.style.setProperty('--rt-y', `${x}deg`);
    card.style.setProperty('--mx', `${(clientX - rect.left)}px`);
    card.style.setProperty('--my', `${(clientY - rect.top)}px`);
  };

  const resetInteraction = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--rt-x', '0deg');
    e.currentTarget.style.setProperty('--rt-y', '0deg');
  };

  const currentService = expandedIdx !== null ? SERVICES[expandedIdx] : null;

  return (
      <section id="services" className="py-24 lg:py-32 bg-white dark:bg-[#050505] transition-colors duration-700 overflow-hidden">
        <div className="container mx-auto px-6">

          {/* --- HEADER --- */}
          <div className={`transition-all duration-1000 ${expandedIdx !== null ? 'opacity-0 -translate-y-10 pointer-events-none h-0 mb-0' : 'opacity-100 mb-16 lg:mb-20'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1.5px] bg-red-600"></div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-red-600">Operational Modules</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase dark:text-white text-slate-900 leading-[0.98] md:leading-[0.85]">
              CORE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">CAPABILITIES</span>
            </h2>
          </div>

          <div className="relative min-h-[700px]">
            <AnimatePresence mode="wait">
              {expandedIdx === null ? (
                  <motion.div
                      key="grid-view"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.3 } }}
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {SERVICES.map((service, idx) => (
                        <div
                            key={idx}
                            onClick={() => setExpandedIdx(idx)}
                            onMouseMove={handleInteraction}
                            onMouseLeave={resetInteraction}
                            onTouchMove={handleInteraction}
                            onTouchEnd={resetInteraction}
                            className="group relative h-[500px] lg:h-[550px] rounded-[3.5rem] p-8 lg:p-12 cursor-pointer transition-all duration-200 ease-out bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-red-500/40 shadow-xl"
                            style={{
                              transform: 'perspective(700px) rotateX(var(--rt-x, 0deg)) rotateY(var(--rt-y, 0deg))',
                              transformStyle: 'preserve-3d'
                            }}
                        >
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                               style={{ backgroundImage: `radial-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                               style={{ background: `radial-gradient(600px circle at var(--mx) var(--my), rgba(220,38,38,0.15), transparent 80%)` }} />

                          <div className="relative z-10 flex flex-col h-full" style={{ transform: 'translateZ(60px)' }}>
                            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl bg-white dark:bg-white/5 shadow-xl flex items-center justify-center mb-8 lg:mb-10 transition-all duration-700 group-hover:bg-red-600 group-hover:text-white">
                              {service.icon}
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-black dark:text-white text-slate-900 uppercase tracking-tighter mb-4 leading-tight">
                              {service.title}
                            </h3>

                            <p className="text-slate-600 dark:text-zinc-400 font-medium leading-relaxed mb-8 text-sm lg:text-base">
                              {service.description}
                            </p>

                            <div className="mt-auto pt-8 border-t border-slate-200 dark:border-white/10 flex justify-between items-center" style={{ transform: 'translateZ(40px)' }}>
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">View Mission</span>
                              <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all">
                                <ArrowRight className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </motion.div>
              ) : (
                  <motion.div
                      key="expanded-view"
                      initial={{ opacity: 0, scale: 0.9, y: 50 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.3 } }}
                      transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.8 }}
                  >
                    <CometCard>
                      <div className="relative p-8 md:p-12 lg:p-20 bg-white dark:bg-[#050505]">

                        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 border-b border-slate-200 dark:border-white/10 pb-8">
                          <div className="flex gap-2">
                            {SERVICES.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setExpandedIdx(i)}
                                    className={`w-8 h-1.5 md:w-10 md:h-2 rounded-full transition-all duration-500 ${
                                        expandedIdx === i ? 'bg-red-600 w-12 md:w-16' : 'bg-slate-200 dark:bg-white/10 hover:bg-red-600/50'
                                    }`}
                                    title={`Switch to Module 0${i + 1}`}
                                />
                            ))}
                          </div>

                          <div className="flex gap-3">
                            <button
                                onClick={() => setExpandedIdx(expandedIdx! > 0 ? expandedIdx! - 1 : SERVICES.length - 1)}
                                className="p-2.5 md:p-3 rounded-xl border border-slate-300 dark:border-white/10 hover:bg-red-600 hover:text-white transition-all"
                            >
                              <ArrowRight className="w-5 h-5 rotate-180" />
                            </button>
                            <button
                                onClick={() => setExpandedIdx(expandedIdx! < SERVICES.length - 1 ? expandedIdx! + 1 : 0)}
                                className="p-2.5 md:p-3 rounded-xl border border-slate-300 dark:border-white/10 hover:bg-red-600 hover:text-white transition-all"
                            >
                              <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setExpandedIdx(null)}
                                className="p-2.5 md:p-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col gap-12 lg:gap-16">
                          <div className="w-full space-y-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                              <div className="w-16 h-16 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] bg-red-600 text-white flex items-center justify-center shadow-2xl shrink-0">
                                {currentService!.icon}
                              </div>
                              <div>
                                <div className="text-[10px] md:text-xs font-black text-red-600 uppercase tracking-[0.5em] mb-3 flex items-center gap-2">
                                  <Zap size={14} className="fill-current" /> ACTIVE MODULE // PROTOCOL_0{expandedIdx! + 1}
                                </div>
                                <h3 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black dark:text-white text-slate-900 uppercase tracking-tighter leading-[0.98] md:leading-[0.9]">
                                  {currentService!.title}
                                </h3>
                              </div>
                            </div>

                            <p className="text-lg md:text-2xl lg:text-3xl text-slate-700 dark:text-zinc-300 font-medium leading-snug max-w-4xl">
                              {currentService!.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {currentService!.details.map((detail, i) => (
                                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                                    <Check className="w-5 h-5 text-red-600 shrink-0" />
                                    <span className="text-[11px] font-bold dark:text-white text-slate-900 uppercase tracking-widest">{detail}</span>
                                  </div>
                              ))}
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-slate-950 border border-white/5 shadow-3xl overflow-hidden group/hud">
                              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

                              <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                                <div className="flex flex-col justify-center">
                                  <div className="flex items-center gap-3 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Live Telemetry</span>
                                  </div>
                                  <p className="text-zinc-400 text-[10px] uppercase font-mono tracking-widest leading-loose">
                                    Health: Optimal <br/>
                                    Signal: Encrypted
                                  </p>
                                </div>

                                {currentService!.metrics.map((m, i) => (
                                    <div key={i} className="space-y-4">
                                      <div className="flex justify-between items-end">
                                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">{m.label}</span>
                                        <span className="text-3xl font-black text-white tracking-tighter">{m.value}</span>
                                      </div>
                                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "90%" }}
                                            transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                                            className="h-full bg-gradient-to-r from-red-600 to-orange-500 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                                        />
                                      </div>
                                    </div>
                                ))}
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </CometCard>
                  </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
  );
};

export default Services;