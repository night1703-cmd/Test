import React, { useEffect, useMemo, useState, memo, useRef } from 'react';
import { ArrowRight, ShieldCheck, Zap, Cpu } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

/* ---------------- TACTICAL PARTICLES ---------------- */
const ParticleField = memo(({ mouse }: any) => {
    const shards = useMemo(() => Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        depth: Math.random() * 50 + 10,
        opacity: Math.random() * 0.4 + 0.2,
    })), []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {shards.map((s) => (
                <div key={s.id} className="absolute rounded-full bg-gradient-to-br from-red-500 to-orange-500 blur-[0.5px]"
                     style={{
                         width: s.size,
                         height: s.size,
                         left: `${s.x}%`,
                         top: `${s.y}%`,
                         opacity: s.opacity,
                         transform: `translate(${mouse.x * s.depth}px, ${mouse.y * s.depth}px)`,
                         transition: 'transform 0.2s ease-out'
                     }}
                />
            ))}
        </div>
    );
});

/* ---------------- MAIN HERO ---------------- */
const Hero: React.FC<{ isDark: boolean }> = ({ isDark }) => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e: MouseEvent | TouchEvent) => {
            const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
            setMouse({
                x: (x / window.innerWidth - 0.5),
                y: (y / window.innerHeight - 0.5),
            });
        };
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove);
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 bg-white dark:bg-[#050505] transition-colors duration-1000">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 z-0">
                <ParticleField mouse={mouse} />
                <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-red-600/10 dark:bg-red-600/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-orange-600/5 dark:bg-orange-600/10 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                    <ScrollRevealCopy />
                    <HeroVisual mouse={mouse} />
                </div>
            </div>
        </section>
    );
};

/* ---------------- SCROLL REVEAL TEXT ---------------- */
const ScrollRevealCopy = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const headline = 'ELITE FACILITIES & SECURITY';

    return (
        <div ref={ref} className="text-center lg:text-left">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-10"
            >
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 dark:text-zinc-400">
                    Status: Operational // 2026
                </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-8 leading-[0.98] md:leading-[0.88] tracking-tighter text-slate-900 dark:text-white uppercase">
                {headline.split(' ').map((word, i) => (
                    <span key={i} className="inline-block mr-[0.2em] last:mr-0">
                        {word.split('').map((char, j) => (
                            <motion.span
                                key={j}
                                initial={{ opacity: 0, y: 15 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: (i * 5 + j) * 0.03, duration: 0.4 }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                ))}
            </h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 mb-12 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed"
            >
                Deploying unified tactical intelligence to protect and manage premium Dubai environments.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
                <CTA primary label="Initialize Protocol" />
                <CTA label="System Inquiry" />
            </motion.div>
        </div>
    );
};

/* ---------------- HERO VISUAL ---------------- */
const HeroVisual = memo(({ mouse }: any) => {
    return (
        <div className="relative group perspective-1000">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10"
                style={{
                    transform: `perspective(1000px) rotateX(${mouse.y * -10}deg) rotateY(${mouse.x * 10}deg)`,
                    transition: 'transform 0.3s ease-out'
                }}
            >
                <div className="rounded-[3rem] lg:rounded-[4.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-3xl bg-slate-900 relative aspect-[4/5] md:aspect-auto md:h-[650px]">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                        className="w-full h-full object-cover grayscale-[0.3] brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                        alt="Modern Dubai Architecture"
                    />

                    {/* Animated Scanline Overlay */}
                    <div className="absolute inset-0 z-30 pointer-events-none opacity-20">
                        <div className="w-full h-[1px] bg-red-600 absolute animate-[scanline_4s_linear_infinite]" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20" />

                    {/* Floating HUD Card */}
                    <div
                        className="absolute bottom-8 left-8 right-8 p-6 md:p-8 bg-black/60 backdrop-blur-2xl rounded-[2rem] border border-white/10 z-40 transition-transform duration-300"
                        style={{ transform: `translate3d(${mouse.x * 30}px, ${mouse.y * 30}px, 50px)` }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/40">
                                <Cpu size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em]">Module_Alpha</p>
                                <p className="text-xs font-bold text-white uppercase tracking-tight">System Operational</p>
                            </div>
                        </div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 2, delay: 1 }}
                                className="h-full bg-red-600"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute -inset-4 bg-red-600/10 blur-3xl rounded-[5rem] -z-10 animate-pulse" />

            <style>{`
                @keyframes scanline { 0% { top: 0%; } 100% { top: 100%; } }
            `}</style>
        </div>
    );
});

const CTA = ({ primary, label }: any) => (
    <button className={`px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all active:scale-95 flex items-center justify-center gap-3 ${
        primary
            ? 'bg-red-600 text-white shadow-2xl shadow-red-600/20 hover:bg-red-700'
            : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10'
    }`}>
        {label}
        {primary && <ArrowRight size={14} />}
    </button>
);

export default Hero;