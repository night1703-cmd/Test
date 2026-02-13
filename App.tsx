import React, { useState, useEffect, useRef } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import AIAssistant from './components/AIAssistant';
import Testimonials from "@/components/Testimonials.tsx";



const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') !== 'light';
    } catch {
      return true;
    }
  });

  const [scrollPercent, setScrollPercent] = useState(0);
  const rafRef = useRef<number | null>(null);

  /* ---------------- Theme handling ---------------- */
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  /* ---------------- Scroll handling (throttled) ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        setScrollPercent(height > 0 ? scrollTop / height : 0);
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(prev => !prev);

  /* ---------------- Visual tuning ---------------- */
  const bgHue = 12 + scrollPercent * 28;
  const opacity = isDark ? 0.08 : 0.04;

  return (
      <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-900 transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-white">

        {/* Atmospheric Background */}
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          {/* Top Blob */}
          <div
              className="
            absolute right-[-20%] top-[-30%]
            h-[420px] w-[420px]
            sm:h-[600px] sm:w-[600px]
            lg:h-[900px] lg:w-[900px]
            rounded-full blur-[140px]
            transition-transform duration-1000
            motion-reduce:transition-none
          "
              style={{
                backgroundColor: `hsla(${bgHue}, 80%, 55%, ${opacity})`,
                transform: `translateY(${scrollPercent * -120}px)`
              }}
          />

          {/* Bottom Blob */}
          <div
              className="
            absolute bottom-[-30%] left-[-20%]
            h-[360px] w-[360px]
            sm:h-[520px] sm:w-[520px]
            lg:h-[780px] lg:w-[780px]
            rounded-full blur-[140px]
            transition-transform duration-1000
            motion-reduce:transition-none
          "
              style={{
                backgroundColor: `hsla(${bgHue + 18}, 70%, 45%, ${opacity})`,
                transform: `translateY(${scrollPercent * 160}px)`
              }}
          />
        </div>

        {/* App Content */}
        <div className="relative z-10">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />

          <main className="overflow-hidden">
            <Hero isDark={isDark} />
            <About isDark={isDark} />
            <Services isDark={isDark} />
              <Gallery />
            <FAQ isDark={isDark} />
            <Contact isDark={isDark} />
          </main>

          <Footer isDark={isDark} />
          <AIAssistant isDark={isDark} />
        </div>
      </div>
  );
};

export default App;
