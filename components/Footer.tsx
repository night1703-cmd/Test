import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="relative w-full py-20 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">

        {/* SUBTLE BACKGROUND GRID */}
        <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
             style={{ backgroundImage: `linear-gradient(#ff3131 1px, transparent 1px), linear-gradient(90deg, #ff3131 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          {/* Top Section: Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

            {/* Column 1: Brand & Bio */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center font-black text-white shadow-2xl shadow-red-600/30 transform -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                  AP
                </div>
                <span className="text-2xl font-black tracking-tighter dark:text-white text-slate-900 uppercase">
                  Altrex <span className="text-red-600">Prime</span>
                </span>
              </div>
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed max-w-xs font-medium">
                Premier integrated facilities management and technical services. Ensuring operational excellence across the UAE's modern infrastructure.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={<Linkedin size={18} />} href="#" />
                <SocialIcon icon={<Instagram size={18} />} href="#" />
                <SocialIcon icon={<Twitter size={18} />} href="#" />
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-red-600">Operations</h4>
              <ul className="space-y-5 text-[13px] font-bold text-slate-600 dark:text-zinc-400">
                <li><FooterLink label="Our Mission" /></li>
                <li><FooterLink label="Project Portfolio" /></li>
                <li><FooterLink label="Health & Safety" /></li>
                <li><FooterLink label="Global Standards" /></li>
              </ul>
            </div>

            {/* Column 3: Solutions */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-red-600">Solutions</h4>
              <ul className="space-y-5 text-[13px] font-bold text-slate-600 dark:text-zinc-400">
                <li><FooterLink label="Hard FM Services" /></li>
                <li><FooterLink label="Security Protocols" /></li>
                <li><FooterLink label="System Engineering" /></li>
                <li><FooterLink label="Asset Lifecycle" /></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-red-600">HQ Uplink</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center shrink-0 border border-slate-100 dark:border-white/10 group-hover:border-red-600 transition-colors">
                    <MapPin size={16} className="text-red-600" />
                  </div>
                  <span className="text-[11px] leading-relaxed uppercase font-black tracking-tight text-slate-600 dark:text-zinc-400 mt-1">
                    Business Bay, Dubai, <br/>United Arab Emirates
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center shrink-0 border border-slate-100 dark:border-white/10 group-hover:border-red-600 transition-colors">
                    <Phone size={16} className="text-red-600" />
                  </div>
                  <span className="text-xs font-black dark:text-zinc-300 text-slate-700">+971 4 123 4567</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center shrink-0 border border-slate-100 dark:border-white/10 group-hover:border-red-600 transition-colors">
                    <Mail size={16} className="text-red-600" />
                  </div>
                  <span className="text-xs font-black dark:text-zinc-300 text-slate-700">info@altrexprime.ae</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Copyright & Legal */}
          <div className="pt-10 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <p className="text-[10px] font-black text-slate-500 dark:text-zinc-500 uppercase tracking-[0.2em]">
                © {currentYear} Altrex Prime Technical Services LLC
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <p className="text-[9px] font-mono text-zinc-500 dark:text-zinc-600 uppercase tracking-widest font-bold">
                  License: UAE-SIRA-772910-FM
                </p>
              </div>
            </div>

            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-zinc-500">
              <a href="#" className="hover:text-red-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-red-600 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
  );
};

// Helper Components
const FooterLink = ({ label }: { label: string }) => (
    <a href="#" className="flex items-center gap-2 group hover:text-red-600 dark:hover:text-white transition-all duration-300 uppercase tracking-wide">
      <span className="w-0 group-hover:w-4 h-[2px] bg-red-600 transition-all duration-300" />
      {label}
    </a>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
    <a
        href={href}
        className="w-11 h-11 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-600 flex items-center justify-center transition-all duration-500 hover:-translate-y-1 shadow-sm"
    >
      {icon}
    </a>
);

export default Footer;