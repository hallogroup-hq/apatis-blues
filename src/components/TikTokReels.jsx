import React from 'react';
import { creatorData } from '../data/portfolioData';

export default function TikTokReels() {
  const reels = [
    {
      id: 'reel-1',
      image: '/assets/tiktok_reel_1.jpg',
      caption: 'playlist sengaruh itu',
      tag: '#nyentrikwithblues',
      url: 'https://www.tiktok.com/@.apatisblues/video/7660472774934236424'
    },
    {
      id: 'reel-2',
      image: '/assets/tiktok_reel_2.jpg',
      caption: 'outfit inspo by the GOAT! @Wisdom Kaye',
      tag: '#nyentrikwithblues',
      url: 'https://www.tiktok.com/@.apatisblues/video/7692379557252386068'
    },
    {
      id: 'reel-3',
      image: '/assets/tiktok_reel_3.jpg',
      caption: 'Masterpiece-02 before insoak',
      tag: '#nyentrikwithblues',
      url: 'https://www.tiktok.com/@.apatisblues/video/7659725795304164615'
    },
    {
      id: 'reel-4',
      image: '/assets/tiktok_reel_4.jpg',
      caption: 'bhap',
      tag: '#nyentrikwithblues',
      url: 'https://www.tiktok.com/@.apatisblues/video/7689413993731001621'
    }
  ];

  return (
    <section id="reels" className="py-28 md:py-36 bg-[#0B0204] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 pb-8 border-b border-white/10">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FBF9F5] leading-tight">
              Selected Content
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#B5ADA4] mt-2 font-light">
              Kurasi video dan visual styling personal di TikTok @.apatisblues.
            </p>
          </div>

          <a
            href={creatorData.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable inline-flex items-center space-x-2 text-xs font-mono text-[#D49CA4] hover:text-[#FBF9F5] transition-colors py-1"
          >
            <span>Kunjungi TikTok Profil</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>

        {/* 4-Column Video Feed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pressable group bg-white/[0.03] p-3 rounded-[2rem] border border-white/10 hover:border-rose-400/30 transition-all duration-300 flex flex-col justify-between shadow-xl"
              aria-label={`Tonton video TikTok: ${reel.caption}`}
            >
              <div>
                {/* Video Cover Aspect 9/16 */}
                <div className="relative aspect-[9/16] rounded-[calc(2rem-0.75rem)] overflow-hidden bg-[#180408] mb-4">
                  <img
                    src={reel.image}
                    alt={reel.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0204]/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                  {/* Play pill icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-burgundy-800/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                      <svg className="w-5 h-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Caption & Authentic Tag */}
                <div className="px-2 space-y-1.5">
                  <p className="font-serif text-lg text-[#FBF9F5] leading-snug group-hover:text-rose-200 transition-colors">
                    "{reel.caption}"
                  </p>
                  <p className="font-mono text-xs text-[#D49CA4]">
                    {reel.tag}
                  </p>
                </div>
              </div>

              {/* Action row */}
              <div className="px-2 pt-4 mt-2 flex items-center justify-between text-xs font-mono text-[#B5ADA4] border-t border-white/5">
                <span>Tonton di TikTok</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
