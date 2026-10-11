import React, { useRef, useState } from 'react';
import AmbientFabricCanvas from './AmbientFabricCanvas';

export default function Hero() {
  const imageCardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!imageCardRef.current) return;
    const rect = imageCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden bg-[#0B0204]">
      {/* Three.js Silk/Fabric Ambient Motion in Background */}
      <AmbientFabricCanvas />

      {/* Subtle radial ambient vignette */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0204]/40 to-[#0B0204] pointer-events-none z-[1]" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Monumental Editorial Typography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Main Editorial Headline */}
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-normal tracking-tight text-[#FBF9F5] leading-[0.92] mb-8">
              APATIS <br />
              <span className="italic font-light text-[#DFA3AB]">
                BLUES.
              </span>
            </h1>

            {/* Creative Narrative */}
            <div className="max-w-xl mb-10 space-y-4">
              <p className="font-serif italic text-xl sm:text-2xl text-[#E8DCD4] leading-relaxed">
                The Anatomy of Blues: Raw Indigo, Tailored Cut, and Subcultural Balance.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#B5ADA4] leading-relaxed">
                Kurasi visual independen oleh Dimas Rezza. Menghubungkan disiplin selvedge denim berbobot berat, siluet jas terstruktur, dan keberanian eksplorasi gaya hidup pria melalui seri <span className="text-[#FBF9F5] font-medium">#nyentrikwithblues</span>.
              </p>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#inquiry"
                className="pressable inline-flex items-center justify-center bg-burgundy-700 hover:bg-burgundy-600 text-[#FBF9F5] text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(114,21,36,0.4)] border border-white/10 transition-all"
              >
                Kolaborasi
              </a>
              <a
                href="#lookbook"
                className="pressable inline-flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] text-[#FBF9F5] border border-white/15 text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all"
              >
                Explore
              </a>
            </div>

          </div>

          {/* Right Column: Hero High-Res Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={imageCardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                setMousePos({ x: 0, y: 0 });
              }}
              style={{
                transform: isHovered
                  ? `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`
                  : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                transition: isHovered ? 'transform 120ms ease-out' : 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="relative w-full max-w-md bg-white/[0.03] p-2.5 sm:p-3 rounded-[2rem] shadow-[0_24px_60px_rgba(0,0,0,0.85)] border border-white/10 group"
            >
              {/* Inner Core Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[calc(2rem-0.625rem)] bg-[#140407]">
                <img
                  src="/assets/portrait_editorial_highres.jpg"
                  alt="Apatis Blues Dimas Rezza editorial portrait"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0204]/80 via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-serif text-2xl font-normal tracking-wide text-[#FBF9F5]">
                    Dimas Rezza
                  </p>
                  <p className="font-mono text-xs text-[#D49CA4] tracking-wider mt-0.5">
                    @.apatisblues &bull; #nyentrikwithblues
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
