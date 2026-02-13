import React, { useState, useEffect } from "react";
import { GALLERY_IMAGES } from "../constants";
import { Camera, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (active === null) return;

      if (e.key === "Escape") setActive(null);
      else if (e.key === "ArrowRight")
        setActive((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0));
      else if (e.key === "ArrowLeft")
        setActive((prev) =>
            prev !== null
                ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
                : 0
        );
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active]);

  const goNext = () =>
      setActive((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0));

  const goPrev = () =>
      setActive((prev) =>
          prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0
      );

  return (
      <section id="gallery" className="relative py-16 md:py-28 bg-black overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-5">
                <Camera className="w-4 h-4 text-red-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">
                Operational Visuals
              </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
                COMMAND <br />
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
                GALLERY
              </span>
              </h2>
            </div>

            <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-md border-l-2 border-red-600 pl-5">
              A visual briefing of our on-site performance and technical
              infrastructure across the UAE.
            </p>
          </div>

          {/* Featured + stacked + grid layout */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
            {/* Featured Card */}
            {GALLERY_IMAGES[0] && (
                <button
                    type="button"
                    onClick={() => setActive(0)}
                    className="group relative xl:col-span-2 aspect-[16/10] rounded-3xl overflow-hidden
                 bg-neutral-900 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                 transition-all duration-500 active:scale-[0.98]"
                >
                  <img
                      src={GALLERY_IMAGES[0].url}
                      alt={GALLERY_IMAGES[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.7)] rounded-xl p-4 md:p-6">
                      <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-400">
                      {GALLERY_IMAGES[0].tag}
                    </span>
                        <div className="flex items-center gap-1 text-[10px] text-white/50 uppercase tracking-wider">
                          <MapPin className="w-3 h-3" />
                          {GALLERY_IMAGES[0].location}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                        {GALLERY_IMAGES[0].title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-red-500/40 transition duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none
                          bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]
                          translate-x-[-100%] group-hover:translate-x-[100%] duration-[1200ms]" />
                </button>
            )}

            {/* Side stacked cards */}
            <div className="flex flex-col gap-6">
              {GALLERY_IMAGES.slice(1, 3).map((img, i) => (
                  <button
                      key={i + 1}
                      type="button"
                      onClick={() => setActive(i + 1)}
                      className="group relative aspect-[16/9] rounded-2xl overflow-hidden
                     bg-neutral-900 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                     transition-all duration-500 active:scale-[0.98]"
                  >
                    <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_6px_25px_rgba(0,0,0,0.6)] rounded-xl p-3">
                        <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-red-400">
                        {img.tag}
                      </span>
                          <div className="flex items-center gap-1 text-[9px] text-white/50 uppercase tracking-wider">
                            <MapPin className="w-3 h-3" />
                            {img.location}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-white mt-1">{img.title}</h4>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-red-500/40 transition duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none
                            bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]
                            translate-x-[-100%] group-hover:translate-x-[100%] duration-[1200ms]" />
                  </button>
              ))}
            </div>
          </div>

          {/* Remaining Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-8">
            {GALLERY_IMAGES.slice(3).map((img, idx) => (
                <button
                    key={idx + 3}
                    type="button"
                    onClick={() => setActive(idx + 3)}
                    className="group relative aspect-[4/5] rounded-2xl overflow-hidden
                   bg-neutral-900 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                   transition-all duration-500 active:scale-[0.98]"
                >
                  <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_6px_25px_rgba(0,0,0,0.6)] rounded-xl p-3">
                      <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-red-400">
                      {img.tag}
                    </span>
                        <div className="flex items-center gap-1 text-[9px] text-white/50 uppercase tracking-wider">
                          <MapPin className="w-3 h-3" />
                          {img.location}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mt-1">{img.title}</h4>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-red-500/40 transition duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none
                          bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]
                          translate-x-[-100%] group-hover:translate-x-[100%] duration-[1200ms]" />
                </button>
            ))}
          </div>
        </div>

        {/* Fullscreen Modal Viewer */}
        {active !== null && (
            <div
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 md:p-8"
                onClick={() => setActive(null)}
            >
              <div
                  className="max-w-full w-full md:max-w-6xl rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black relative flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="absolute top-2 md:top-4 right-2 md:right-4 z-50 text-white/70 hover:text-white transition pointer-events-auto p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/50"
                >
                  <X className="w-6 md:w-7 h-6 md:h-7" />
                </button>

                {/* Prev Button */}
                <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-0 md:left-2 z-50 text-white/50 hover:text-white transition p-4 md:p-6 rounded-r-xl bg-gradient-to-r from-black/50 to-transparent"
                >
                  <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                </button>

                {/* Next Button */}
                <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-0 md:right-2 z-50 text-white/50 hover:text-white transition p-4 md:p-6 rounded-l-xl bg-gradient-to-l from-black/50 to-transparent"
                >
                  <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                </button>

                <img
                    src={GALLERY_IMAGES[active].url}
                    alt={GALLERY_IMAGES[active].title}
                    className="w-full max-h-[70vh] md:max-h-[80vh] object-contain"
                />

                <div className="p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md text-center">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white uppercase mb-1">
                    {GALLERY_IMAGES[active].title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm uppercase tracking-widest">
                    {GALLERY_IMAGES[active].location}
                  </p>
                </div>
              </div>
            </div>
        )}
      </section>
  );
};

export default Gallery;
