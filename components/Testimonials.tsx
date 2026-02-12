import React, { useRef } from 'react';
import { motion, useSpring, useInView } from 'framer-motion';
import { Quote, Activity, Terminal, ShieldCheck, Zap } from 'lucide-react';

interface TestimonialsProps {
    isDark: boolean;
}

const testimonials = [
    {
        name: "Ahmed Al-Farsi",
        role: "Property Manager, Dubai Marina",
        content: "Altrex Prime transformed our operations. Their integrated approach to FM means one point of contact for everything.",
        id: "LOG_001_DXB",
        status: "Verified"
    },
    {
        name: "Sarah Jenkins",
        role: "Ops Director, Retail Group UAE",
        content: "The security team is top-notch. Their guards offer a level of vigilance that has significantly reduced risk.",
        id: "LOG_042_SHJ",
        status: "Encrypted"
    },
    {
        name: "Marcus Thorne",
        role: "CEO, NexGen Logistics",
        content: "Professional and reliable. Having a single license handle both security and facilities is a massive operational win.",
        id: "LOG_089_DIFC",
        status: "Strategic"
    }
];

const TestimonialCard: React.FC<{ t: typeof testimonials[0] }> = ({ t }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useSpring(0, { stiffness: 100, damping: 30 });
    const y = useSpring(0, { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const xVal = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
        const yVal = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
        x.set(xVal);
        y.set(yVal);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateX: y, rotateY: x, transformStyle: "preserve-3d" }}
            className="w-[300px] md:w-[450px] flex-shrink-0 mx-4 md:mx-6 group cursor-default"
        >
            <div className="h-full bg-zinc-900/80 backdrop-blur-2xl border border-white/5 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden transition-all duration-500 group-hover:border-red-600/40">

                {/* Visual Laser Scan Effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-red-600/50 -translate-y-full group-hover:animate-[scan_4s_linear_infinite]" />

                <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="flex items-center gap-2">
                        <Terminal size={12} className="text-red-600" />
                        <span className="text-[10px] font-mono font-black text-zinc-500 uppercase tracking-widest">{t.id}</span>
                    </div>
                    <div className="bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-red-600 animate-pulse" />
                        <span className="text-[8px] font-black text-red-500 uppercase tracking-widest">{t.status}</span>
                    </div>
                </div>

                <div className="relative mb-10 z-10">
                    <Quote className="absolute -top-4 -left-2 w-10 h-10 text-red-600/10" />
                    <p className="text-lg md:text-xl text-zinc-100 font-black leading-[1.3] tracking-tight italic">
                        "{t.content}"
                    </p>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-red-600/30 transform group-hover:rotate-6 transition-transform">
                        {t.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="text-white font-black uppercase tracking-tight text-sm md:text-base">{t.name}</h4>
                        <p className="text-[9px] text-red-600 font-black uppercase tracking-[0.2em]">{t.role}</p>
                    </div>
                </div>

                {/* Secure Verification HUD */}
                <div className="mt-8 pt-6 border-t border-white/5">
                    <div className="flex justify-between text-[8px] font-black uppercase text-zinc-600 mb-2 tracking-[0.25em]">
                        <span>Integrity Check</span>
                        <span className="text-red-600">PASS_OK</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-red-600"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Testimonials: React.FC<TestimonialsProps> = ({ isDark }) => {
    // Triple the data for a smoother infinite scroll feel
    const marqueeData = [...testimonials, ...testimonials, ...testimonials];

    return (

        <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-[#080808]">
            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                 style={{
                     backgroundImage: `linear-gradient(#ff3131 1px, transparent 1px), linear-gradient(90deg, #ff3131 1px, transparent 1px)`,
                     backgroundSize: '60px 60px'
                 }} />

            {/* Top Fade for Integration */}
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white dark:from-[#050505] to-transparent z-10" />

            <div className="container mx-auto px-6 mb-20 relative z-20">
                <div className="grid lg:grid-cols-2 gap-10 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Zap size={14} className="text-red-600" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">Operations Feed</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                            Proven <br /> <span className="text-red-600">Authority.</span>
                        </h2>
                    </motion.div>
                    <div className="lg:border-l border-red-600/50 lg:pl-10 lg:pb-2">
                        <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-sm leading-relaxed">
                            Encrypted feedback and validation from strategic partners across the UAE infrastructure.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scrolling Marquee Container */}
            <div className="relative z-20 overflow-hidden py-10">
                <motion.div
                    className="flex"
                    animate={{ x: [0, -1350] }}
                    transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" }}}
                >
                    {marqueeData.map((t, i) => (
                        <TestimonialCard key={i} t={t} />
                    ))}
                </motion.div>

                {/* Depth Masks */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#080808] to-transparent z-30 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#080808] to-transparent z-30 pointer-events-none" />
            </div>

            {/* Global Trust Bar */}
            <div className="mt-20 py-8 bg-black/50 border-y border-white/5 relative z-20">
                <motion.div
                    animate={{ x: [0, -800] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-16 md:gap-32"
                >
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex gap-16 md:gap-32 items-center">
                            <span className="flex items-center gap-3 text-[10px] font-black text-zinc-500 tracking-[0.4em]">
                                <ShieldCheck size={14} className="text-red-600" /> SIRA_CERTIFIED_OPERATIONS
                            </span>
                            <span className="flex items-center gap-3 text-[10px] font-black text-zinc-500 tracking-[0.4em]">
                                <Activity size={14} className="text-red-600" /> UPLINK_SECURE_ENCRYPTION
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(800%); }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;