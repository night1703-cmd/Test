import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  MessageCircle,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const Contact: React.FC = () => {
  return (
      <section
          id="contact"
          className="relative py-24 md:py-32 bg-white dark:bg-[#050505] transition-colors duration-1000 overflow-hidden"
      >
        {/* THE "BLUEPRINT" BACKGROUND */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none"
             style={{ backgroundImage: `linear-gradient(#ff3131 1px, transparent 1px), linear-gradient(90deg, #ff3131 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

            {/* LEFT: MINIMALIST COPY */}
            <div className="lg:sticky lg:top-32">
              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-red-600 mb-8"
              >
                <div className="w-12 h-[1.5px] bg-red-600" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">Establishing Connection</span>
              </motion.div>

              {/* Typo Fix: Adjusted leading for responsive scales */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-[0.98] md:leading-[0.85] mb-8">
                Secure <br />
                <span className="text-red-600">The Asset.</span>
              </h2>

              <p className="text-slate-600 dark:text-zinc-400 text-lg md:text-xl max-w-sm leading-relaxed mb-12 font-medium">
                Ready to deploy premium facilities management and security solutions across your UAE portfolio.
              </p>

              {/* STATUS HUD */}
              <div className="inline-flex flex-col gap-4 p-8 border border-slate-200 dark:border-white/5 rounded-[2rem] bg-slate-50/50 dark:bg-white/[0.02] backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black dark:text-zinc-400 text-slate-500 uppercase tracking-[0.2em]">Network Status: Online</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-zinc-600 tracking-widest">
                  LATENCY: 12ms // ENCRYPTION: AES-256
                </div>
              </div>
            </div>

            {/* RIGHT: THE CRT GLASS PANEL */}
            <div className="relative group">
              {/* GLOW BEHIND PANEL */}
              <div className="absolute -inset-10 bg-red-600/5 blur-[120px] rounded-full group-hover:bg-red-600/10 transition-colors" />

              <div className="relative bg-white dark:bg-[#080808] border border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">

                {/* CRT OVERLAY */}
                <div className="absolute inset-0 pointer-events-none z-20 opacity-30">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,2px_100%]" />
                </div>

                {/* PANEL HEADER */}
                <div className="p-6 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-600/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-red-600/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Secure_Uplink.exe</div>
                </div>

                <div className="p-8 md:p-12 space-y-10">
                  {/* PRIMARY EMAIL */}
                  <a href="mailto:info@altrexprime.ae" className="group block">
                    <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em] mb-4">Direct Communication</p>
                    <div className="flex items-center justify-between border-b-2 border-slate-200 dark:border-zinc-800 group-hover:border-red-600 transition-colors pb-6">
                      <span className="text-xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase break-all md:break-normal leading-none">
                        info@altrexprime.ae
                      </span>
                      <ArrowUpRight className="text-slate-300 dark:text-zinc-700 group-hover:text-red-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-4" size={32} />
                    </div>
                  </a>

                  {/* SOCIAL GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: MessageCircle, label: "WhatsApp", href: "#", color: "hover:text-green-500" },
                      { icon: Phone, label: "Voice Call", href: "#", color: "hover:text-red-600" },
                      { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-500" },
                      { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            className={`flex items-center justify-between p-6 rounded-2xl border border-slate-100 dark:border-white/5 bg-slate-50/30 dark:bg-white/[0.02] transition-all hover:bg-white dark:hover:bg-white/5 hover:shadow-xl group ${social.color}`}
                        >
                          <div className="flex items-center gap-4">
                            <social.icon size={18} className="text-zinc-500 group-hover:inherit transition-colors" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-600 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white">
                              {social.label}
                            </span>
                          </div>
                          <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all text-current" />
                        </a>
                    ))}
                  </div>
                </div>

                {/* FOOTER */}
                <div className="px-8 py-6 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-100 dark:border-white/5 flex justify-between items-center">
                  <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-600 uppercase tracking-[0.3em] font-bold">© 2026 Altrex Prime // HQ: Dubai, UAE</span>
                  <div className="flex gap-4">
                    <div className="w-1 h-3 bg-red-600/20" />
                    <div className="w-1 h-3 bg-red-600/40" />
                    <div className="w-1 h-3 bg-red-600/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;