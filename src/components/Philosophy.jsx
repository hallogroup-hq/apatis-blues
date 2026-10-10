import React from 'react';
import { creatorData } from '../data/portfolioData';

export default function Philosophy() {
  const { philosophy } = creatorData;

  return (
    <section id="philosophy" className="py-28 md:py-36 bg-[#110306] border-y border-white/10 relative overflow-hidden">
      {/* Subtle radial ambient warmth in deep wine */}
      <div 
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-burgundy-900/30 blur-[150px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FBF9F5] leading-tight mb-6">
            {philosophy.headline}
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-[#E8DCD4] leading-relaxed">
            "{philosophy.subheadline}"
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Juxtaposition (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            <div>
              <div className="bg-white/[0.03] p-2 rounded-[1.75rem] border border-white/10 shadow-xl overflow-hidden group">
                <div className="aspect-[3/4] rounded-[calc(1.75rem-0.5rem)] overflow-hidden bg-[#180408]">
                  <img
                    src="/assets/portrait_stucco_wall.jpg"
                    alt="Apatis Blues studded tailored blazer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="pt-8 sm:pt-12">
              <div className="bg-white/[0.03] p-2 rounded-[1.75rem] border border-white/10 shadow-xl overflow-hidden group">
                <div className="aspect-[3/4] rounded-[calc(1.75rem-0.5rem)] overflow-hidden bg-[#180408]">
                  <img
                    src="/assets/look_tailored_ecru_pants.jpg"
                    alt="Apatis Blues ecru wide trousers and loafers"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Essays (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
            <div className="space-y-6 text-[#E8DCD4] font-sans text-base sm:text-lg leading-relaxed font-light">
              {philosophy.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-[#C7BEB3]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-normal text-[#FBF9F5]">
                  Menolak Tren Instan
                </h3>
                <p className="text-xs text-[#B5ADA4] leading-relaxed">
                  Menyaring kebisingan fast fashion dengan memilih potongan berumur panjang dan material berkualitas tinggi.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl font-normal text-[#FBF9F5]">
                  Dedikasi Tekstur
                </h3>
                <p className="text-xs text-[#B5ADA4] leading-relaxed">
                  Mengeksplorasi tenunan selvedge berat (16oz), motif wabash klasik, dan jejak pemakaian alami yang otentik.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl font-normal text-[#FBF9F5]">
                  Eksplorasi Proporsi
                </h3>
                <p className="text-xs text-[#B5ADA4] leading-relaxed">
                  Keberanian mendobrak batasan formal dan kasual melalui perpaduan blazer, kacamata hitam retro, dan siluet santai.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
