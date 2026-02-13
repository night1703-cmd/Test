import React, { useState } from 'react'
import { VALUES, STRATEGIC_PRINCIPLES } from '../constants'
import {
    Target,
    Eye,
    ShieldCheck,
    ArrowUpRight,
    Terminal,
    Globe,
    Lock
} from 'lucide-react'
import Testimonials from './Testimonials.tsx'

interface AboutProps {
    isDark: boolean
}

const About: React.FC<AboutProps> = ({ isDark }) => {
    const [activeModule, setActiveModule] = useState<number | null>(null)
    const [spinningIcons, setSpinningIcons] = useState<Record<string, boolean>>({})

    const triggerIconSpin = (id: string) => {
        if (spinningIcons[id]) return;
        setSpinningIcons(prev => ({ ...prev, [id]: true }))
        setTimeout(() => {
            setSpinningIcons(prev => ({ ...prev, [id]: false }))
        }, 700)
    }

    return (
        <section
            id="about"
            className="py-24 sm:py-32 transition-colors duration-500 bg-white dark:bg-[#080808] relative overflow-hidden"
        >
            {/* Optimized Animations */}
            <style>{`
                @keyframes icon-360 {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-360 {
                    animation: icon-360 0.7s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                @keyframes independent-fall {
                    0% { transform: translateY(-300px); }
                    100% { transform: translateY(1200px); }
                }

                .kinetic-line {
                    will-change: transform;
                    animation: independent-fall var(--duration) linear infinite;
                }
            `}</style>

            {/* ===================== MESMERIZING BACKGROUND ===================== */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

                {/* 1. Very Faint Tech Grid */}
                <div
                    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(${isDark ? '#dc2626' : '#94a3b8'} 1px, transparent 1px),
                                          linear-gradient(90deg, ${isDark ? '#dc2626' : '#94a3b8'} 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                    }}
                />

                {/* 2. Independent Kinetic Streams */}
                <div className="absolute inset-0 flex justify-around">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="kinetic-line w-[1.5px] bg-gradient-to-b from-transparent via-red-500/50 to-transparent"
                            style={{
                                height: '200px',
                                '--duration': `${5 + (i % 3)}s`,
                                animationDelay: `${i * 0.8}s`,
                            } as React.CSSProperties}
                        />
                    ))}
                </div>

                {/* 3. Static Ambient Glows */}
                <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-red-600/5 dark:bg-red-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-orange-600/5 dark:bg-orange-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
                {/* Vision & Mission Section */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40">
                    <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 dark:text-red-500">
                                Global Directive
                            </span>
                        </div>

                        <h2 className="font-black mb-10 dark:text-white text-slate-900 uppercase tracking-tighter leading-[1] md:leading-[0.9]
                            text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
                            OUR <span className="gradient-text">VISION</span><br />
                            & MISSION
                        </h2>

                        <p className="text-slate-600 dark:text-zinc-400 text-lg sm:text-xl mb-14 leading-relaxed font-medium max-w-xl">
                            Constructing a safer future for the UAE through an unbreakable bond
                            between technology, protocol, and human vigilance.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-10">
                            {/* Vision */}
                            <div className="group space-y-4 cursor-pointer" onClick={() => triggerIconSpin('vision')}>
                                <div className={`w-16 h-16 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[1.5rem] flex items-center justify-center
                                    group-hover:bg-orange-600 transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]
                                    ${spinningIcons['vision'] ? 'animate-spin-360' : ''}`}>
                                    <Eye className="text-orange-500 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-2xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                                    Vision
                                </h4>
                                <p className="text-slate-600 dark:text-zinc-500 leading-relaxed font-medium">
                                    Safe, efficient, and tech-driven sustainable environments for every client.
                                </p>
                            </div>

                            {/* Mission */}
                            <div className="group space-y-4 cursor-pointer" onClick={() => triggerIconSpin('mission')}>
                                <div className={`w-16 h-16 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[1.5rem] flex items-center justify-center
                                    group-hover:bg-red-600 transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]
                                    ${spinningIcons['mission'] ? 'animate-spin-360' : ''}`}>
                                    <Target className="text-red-500 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-2xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                                    Mission
                                </h4>
                                <p className="text-slate-600 dark:text-zinc-500 leading-relaxed font-medium">
                                    Protecting people and assets through unified elite management strategies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* VALUES GRID */}
                    <div className="relative animate-in fade-in zoom-in duration-1000 delay-500">
                        <div className="absolute -inset-10 bg-gradient-to-tr from-red-600/10 to-orange-500/10 blur-[80px] rounded-full opacity-50"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                            {VALUES.map((value, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => triggerIconSpin(`val-${idx}`)}
                                    className="p-8 lg:p-10 rounded-[2.5rem]
                                        bg-white dark:bg-white/[0.03]
                                        border border-slate-200 dark:border-white/10
                                        hover:border-orange-500 transition-all duration-700
                                        group backdrop-blur-xl shadow-2xl hover:-translate-y-2 cursor-pointer"
                                >
                                    <div className={`mb-6 group-hover:scale-110 transition-all duration-700 text-orange-600 dark:text-orange-500
                                        ${spinningIcons[`val-${idx}`] ? 'animate-spin-360' : ''}`}>
                                        {value.icon}
                                    </div>
                                    <h4 className="text-lg font-black mb-2 dark:text-white text-slate-900 uppercase tracking-tight">
                                        {value.title}
                                    </h4>
                                    <p className="text-[10px] text-slate-500 dark:text-zinc-500 leading-relaxed font-bold uppercase tracking-[0.2em]">
                                        {value.description}
                                    </p>
                                </div>
                            ))}

                            {/* Dual License Card */}
                            <div
                                onClick={() => triggerIconSpin('license')}
                                className="p-8 lg:p-10 rounded-[2.5rem]
                                bg-gradient-primary flex flex-col justify-end min-h-[240px]
                                transition-all duration-700 hover:-translate-y-2 shadow-2xl shadow-red-900/40 relative overflow-hidden group cursor-pointer">
                                <div className={`absolute top-0 right-0 p-8 opacity-20 group-hover:scale-150 transition-all duration-700
                                    ${spinningIcons['license'] ? 'animate-spin-360' : ''}`}>
                                    <ShieldCheck className="w-20 h-20 text-white" />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                                        Dual Licensed
                                    </h4>
                                    <p className="text-xs text-white/80 font-bold uppercase tracking-[0.15em]">
                                        Total Facility & Security
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* STRATEGIC DNA Section */}
                <div id="principles" className="mt-20">
                    <div className="mb-24">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 text-white border border-white/10 mb-8">
                            <Terminal className="w-4 h-4 text-orange-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                                SYSTEM PROTOCOLS v2.5
                            </span>
                        </div>

                        <h3 className="font-black mb-8 uppercase tracking-tighter dark:text-white text-slate-900 leading-[0.95]
                            text-4xl sm:text-6xl lg:text-7xl">
                            STRATEGIC <span className="gradient-text">DNA</span>
                        </h3>

                        <p className="text-slate-600 dark:text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                            Non-linear, synchronized intelligence layers powering the UAE’s infrastructure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {STRATEGIC_PRINCIPLES.map((principle, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => setActiveModule(idx)}
                                onMouseLeave={() => setActiveModule(null)}
                                onClick={() => {
                                    setActiveModule(activeModule === idx ? null : idx);
                                    triggerIconSpin(`principle-${idx}`);
                                }}
                                className={`relative group min-h-[420px] rounded-[3rem] lg:rounded-[3.5rem]
                                    p-8 lg:p-12 transition-all duration-700 border cursor-pointer
                                    ${activeModule !== null && activeModule !== idx ? 'opacity-30 blur-[4px] scale-[0.98]' : 'opacity-100 scale-100'}
                                    ${isDark ? 'bg-[#0a0a0a] border-white/[0.05] hover:border-orange-500/40 shadow-none' : 'bg-white border-slate-200 hover:border-orange-500/20 shadow-xl hover:shadow-2xl'}
                                `}
                            >
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="space-y-8">
                                        <div className="flex justify-between items-start">
                                            <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center bg-orange-600/10 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-700
                                                ${spinningIcons[`principle-${idx}`] ? 'animate-spin-360' : ''}`}>
                                                {principle.icon}
                                            </div>
                                            <div className="text-xs font-black font-mono dark:text-zinc-500 text-slate-400 tracking-widest">
                                                {principle.id}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-2xl lg:text-3xl font-black dark:text-white text-slate-900 mb-6 uppercase tracking-tight">
                                                {principle.label}
                                            </h4>
                                            <p className="text-slate-600 dark:text-zinc-400 text-base lg:text-lg leading-relaxed font-medium">
                                                {principle.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-10 flex items-center justify-between border-t border-slate-100 dark:border-white/5">
                                        <div className="flex items-center gap-3">
                                            <Lock className="w-4 h-4 text-orange-500" />
                                            <Globe className="w-4 h-4 text-red-500" />
                                        </div>
                                        <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Testimonials isDark={isDark} />
            </div>
        </section>
    )
}

export default About;