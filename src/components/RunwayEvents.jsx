import React from 'react';
import { creatorData } from '../data/portfolioData';

export default function RunwayEvents() {
  const { events } = creatorData;

  return (
    <section id="events" className="py-28 md:py-36 bg-[#0E0305] text-[#FBF9F5] relative overflow-hidden border-t border-white/10">
      {/* Background ambient glow in deep velvet wine */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-burgundy-900/25 blur-[160px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/10">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FBF9F5]">
              Events & Visits
            </h2>
          </div>
        </div>

        {/* 2-Column Luxury Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 sm:p-10 hover:border-rose-400/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#D49CA4] uppercase tracking-wider">
                    {event.type}
                  </span>
                  <span className="text-white/40">
                    {event.year}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5] leading-snug group-hover:text-rose-200 transition-colors">
                  {event.title}
                </h3>

                {/* Host & Location */}
                <p className="font-sans text-xs sm:text-sm text-[#E8DCD4]">
                  Oleh <span className="font-medium text-[#FBF9F5]">{event.host}</span> &bull; {event.location}
                </p>

                {/* Event Summary */}
                <p className="font-sans text-xs sm:text-sm text-[#B5ADA4] leading-relaxed pt-2">
                  {event.note}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
