import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Shield, ArrowUpRight, Zap } from 'lucide-react';

interface NavbarProps {
    isDark: boolean;
    toggleTheme: () => void;
}

/* ---------------- HOOKS ---------------- */

const useSmoothScroll = () =>
    useCallback((e: React.MouseEvent, href: string) => {
        e.preventDefault();
        const el = document.getElementById(href.replace('#', ''));
        if (!el) return;

        window.scrollTo({
            top: el.offsetTop - 110,
            behavior: 'smooth',
        });
    }, []);

const useActiveSection = (ids: string[]) => {
    const [active, setActive] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: '-30% 0px -60% 0px', threshold: 0.1 }
        );

        ids.forEach(id => {
            const el = document.getElementById(id.replace('#', ''));
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [ids]);

    return active;
};

const useScrolled = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return scrolled;
};

/* ---------------- NAVBAR ---------------- */

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
    const isScrolled = useScrolled();
    const scrollTo = useSmoothScroll();
    const [open, setOpen] = useState(false);

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Principles', href: '#principles' },
        { label: 'Testimonials', href: '#testimonials-anchor' },
        { label: 'Services', href: '#services' },
        { label: "FAQ's", href: '#faq' },
        { label: 'Contact', href: '#contact' },
    ];

    const active = useActiveSection(navLinks.map(l => l.href));

    return (
        <header className={`fixed top-0 inset-x-0 z-[100] ${isScrolled ? 'pt-2' : 'pt-6'}`}>
            <div className="container mx-auto px-4 flex justify-center">
                <nav
                    className={`flex items-center justify-between gap-4 px-4 py-2 rounded-full border transition-all
          ${isScrolled
                        ? 'bg-white/90 dark:bg-[#050505]/90 backdrop-blur-xl border-slate-200 dark:border-white/10 shadow-2xl w-full lg:w-[92%]'
                        : 'bg-transparent border-transparent w-full'
                    }`}
                >
                    <Brand />

                    {/* Desktop */}
                    <div className="hidden lg:flex gap-1 bg-slate-200/40 dark:bg-white/5 p-1 rounded-full">
                        {navLinks.map(l => (
                            <NavLink
                                key={l.label}
                                {...l}
                                isActive={active === l.href}
                                onClick={e => scrollTo(e, l.href)}
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

                        <button
                            onClick={() => setOpen(!open)}
                            className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-white/5"
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {/* Mobile */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 right-0 mt-3 p-4 bg-white dark:bg-[#0a0a0a] rounded-2xl"
                            >
                                {navLinks.map(l => (
                                    <button
                                        key={l.label}
                                        onClick={e => {
                                            scrollTo(e, l.href);
                                            setOpen(false);
                                        }}
                                        className={`w-full text-left p-4 rounded-xl ${
                                            active === l.href
                                                ? 'bg-red-600 text-white'
                                                : 'text-slate-600 dark:text-zinc-400'
                                        }`}
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </header>
    );
};

/* ---------------- SUB COMPONENTS ---------------- */

const Brand = memo(() => (
    <div className="flex items-center gap-3 font-black uppercase">
        <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center text-white">
            <Shield size={18} />
        </div>
        ALTREX <span className="text-red-600">PRIME</span>
    </div>
));

const NavLink = ({ label, href, isActive, onClick }: any) => (
    <a
        href={href}
        onClick={onClick}
        className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest relative
    ${isActive ? 'text-white' : 'text-slate-600 dark:text-zinc-400'}`}
    >
        {isActive && (
            <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 bg-red-600 rounded-full -z-10"
            />
        )}
        {label}
    </a>
);

const ThemeToggle = ({ isDark, toggleTheme }: any) => (
    <button onClick={toggleTheme} className="p-2.5 rounded-xl">
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
);

export default Navbar;
