import React from 'react';
import { creatorData } from '../data/portfolioData';

export default function BrandMarquee() {
  const { championedBrands } = creatorData;
  const doubled = [...championedBrands, ...championedBrands];

  return (
    <div className="py-10 bg-[#0E0305] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#D49CA4] text-center">
          Collaborations &bull; Runway Showcases &bull; Artisanal Denim
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex select-none">
        {/* Soft edge blur masks matching noir canvas */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#0E0305] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#0E0305] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center space-x-3 mx-6 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-rose-400/30 transition-colors"
            >
              <span className="font-serif text-lg tracking-wide text-[#FBF9F5]">
                {brand.name}
              </span>
              <span className="font-mono text-[10px] text-[#B5ADA4] uppercase tracking-wider">
                &bull; {brand.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
