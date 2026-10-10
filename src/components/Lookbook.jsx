import React, { useState } from 'react';
import { creatorData } from '../data/portfolioData';

export default function Lookbook() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('index'); // 'index' or 'spread'
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    'All',
    'Raw & Selvedge Denim',
    'Tailoring & Footwear',
    'Modern Essentials',
    'Grooming & Scent'
  ];

  const filteredItems = activeCategory === 'All'
    ? creatorData.collaborations
    : creatorData.collaborations.filter(item => item.category === activeCategory);

  const activeItem = filteredItems[activeIndex] || filteredItems[0] || creatorData.collaborations[0];

  return (
    <section id="lookbook" className="py-28 md:py-36 bg-[#0B0204] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FBF9F5] leading-tight">
              Arsip Kolaborasi Brand
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="max-w-sm font-sans text-xs sm:text-sm text-[#B5ADA4] leading-relaxed">
              Dokumentasi kurasi visual independen. Membedah karakter tenunan, konstruksi pakaian, dan artikulasi styling dalam format lookbook.
            </p>

            {/* View Mode Toggle: Runway Index vs Magazine Spreads */}
            <div className="inline-flex p-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('index')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                  viewMode === 'index'
                    ? 'bg-burgundy-700 text-[#FBF9F5] shadow-sm font-medium'
                    : 'text-[#B5ADA4] hover:text-[#FBF9F5]'
                }`}
              >
                Runway Index
              </button>
              <button
                type="button"
                onClick={() => setViewMode('spread')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                  viewMode === 'spread'
                    ? 'bg-burgundy-700 text-[#FBF9F5] shadow-sm font-medium'
                    : 'text-[#B5ADA4] hover:text-[#FBF9F5]'
                }`}
              >
                Magazine Spreads
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters: Minimalist Text Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-14 border-b border-white/5 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveIndex(0);
                }}
                className={`pressable px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-white/10 text-[#FBF9F5] border border-white/20 font-medium'
                    : 'text-[#B5ADA4] hover:text-[#FBF9F5] border border-transparent'
                }`}
              >
                {cat === 'All' ? 'Semua Arsip' : cat}
              </button>
            );
          })}
        </div>

        {filteredItems.length === 0 ? (
          <div className="py-24 text-center border border-white/10 rounded-2xl bg-white/[0.02]">
            <p className="font-serif text-2xl text-[#FBF9F5] mb-2">
              Belum ada arsip dalam kategori ini
            </p>
            <p className="font-sans text-sm text-[#B5ADA4]">
              Silakan pilih kategori lainnya pada filter di atas.
            </p>
          </div>
        ) : viewMode === 'index' ? (
          /* ========================================================================= */
          /* MODE 1: THE RUNWAY INDEX (MONOLITHIC ROSTER + STICKY FLOATING PREVIEW)   */
          /* ========================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Monolithic Typographic Roster (7 cols) */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
              {filteredItems.map((item, idx) => {
                const isSelected = activeItem?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className={`group py-6 sm:py-8 cursor-pointer transition-all duration-300 flex items-start justify-between gap-4 ${
                      isSelected ? 'opacity-100' : 'opacity-60 hover:opacity-90'
                    }`}
                  >
                    <div className="flex items-start space-x-5 sm:space-x-8">
                      <span className="font-mono text-xs sm:text-sm text-[#D49CA4] pt-1.5">
                        0{idx + 1}
                      </span>
                      <div className="space-y-1.5">
                        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FBF9F5] tracking-tight group-hover:text-rose-200 transition-colors">
                          {item.brand}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-[#B5ADA4] font-light">
                          {item.article}
                        </p>
                        <span className="inline-block font-mono text-[10px] text-[#D49CA4] uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="pressable shrink-0 mt-2 text-xs font-mono text-[#D49CA4] hover:text-[#FBF9F5] flex items-center space-x-1.5 py-1 px-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-rose-400/30 transition-all"
                      aria-label={`Lihat video TikTok ${item.brand}`}
                    >
                      <span>TikTok Reel</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Floating Editorial Preview Window (5 cols) */}
            <div className="lg:col-span-5 sticky top-28">
              {activeItem && (
                <div className="bg-white/[0.03] p-3.5 sm:p-4 rounded-[2rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] space-y-5 animate-fadeIn">
                  
                  {/* High-res Image Preview */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[calc(2rem-0.75rem)] bg-[#180408]">
                    <img
                      key={activeItem.id}
                      src={activeItem.image}
                      alt={`${activeItem.brand} editorial look`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="eager"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0204]/90 via-transparent to-transparent opacity-85" />

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#D49CA4] mb-1">
                        {activeItem.category}
                      </p>
                      <h4 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] leading-snug">
                        {activeItem.brand}
                      </h4>
                      <p className="font-sans text-xs text-[#E8DCD4] mt-1 font-light">
                        {activeItem.article}
                      </p>
                    </div>
                  </div>

                  {/* Editorial Reflections & Quote */}
                  <div className="px-2 space-y-4">
                    {activeItem.quote && (
                      <blockquote className="font-serif italic text-base sm:text-lg text-[#FBF9F5] border-l-2 border-burgundy-600 pl-3 leading-snug">
                        "{activeItem.quote}"
                      </blockquote>
                    )}

                    <p className="font-sans text-xs sm:text-sm text-[#B5ADA4] leading-relaxed">
                      {activeItem.stylingNotes}
                    </p>

                    <div className="pt-2 flex items-center justify-end">
                      <a
                        href={activeItem.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pressable inline-flex items-center space-x-2 bg-burgundy-700 hover:bg-burgundy-600 text-white text-xs font-mono uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors"
                      >
                        <span>Tonton di TikTok</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              )}
            </div>

          </div>
        ) : (
          /* ========================================================================= */
          /* MODE 2: MAGAZINE SPREADS (ASYMMETRICAL EDITORIAL SPREADS)                */
          /* ========================================================================= */
          <div className="space-y-24">
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <article
                  key={item.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Column (6 cols) */}
                  <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="bg-white/[0.03] p-3 rounded-[2rem] border border-white/10 shadow-xl overflow-hidden group">
                      <div className="aspect-[4/5] sm:aspect-[3/4] rounded-[calc(2rem-0.75rem)] overflow-hidden bg-[#180408]">
                        <img
                          src={item.image}
                          alt={`${item.brand} editorial look`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Typography & Editorial Column (6 cols) */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                    <span className="font-mono text-xs text-[#D49CA4] uppercase tracking-[0.25em] block">
                      {item.category}
                    </span>

                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FBF9F5] leading-tight">
                      {item.brand}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-[#D49CA4] font-medium">
                      {item.article}
                    </p>

                    {item.quote && (
                      <blockquote className="font-serif italic text-xl sm:text-2xl text-[#E8DCD4] leading-relaxed border-l border-white/20 pl-4 py-1">
                        "{item.quote}"
                      </blockquote>
                    )}

                    <p className="font-sans text-sm text-[#B5ADA4] leading-relaxed">
                      {item.stylingNotes}
                    </p>

                    <div className="pt-4">
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pressable inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#FBF9F5] hover:text-rose-200 group"
                      >
                        <span className="underline underline-offset-8">Tonton Video di TikTok</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
