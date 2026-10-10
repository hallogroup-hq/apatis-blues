import React from 'react';
import { creatorData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070102] text-[#FBF9F5] py-20 md:py-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Main Colophon Layout */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-16 border-b border-white/10 gap-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#D49CA4] block mb-3 font-medium">
              Independent Fashion Archive
            </span>
            <p className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FBF9F5] leading-none">
              APATIS BLUES
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#B5ADA4] mt-3 font-light">
              Dimas Rezza &bull; {creatorData.signatureTag} &bull; Bandung / Jakarta
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#lookbook"
              className="text-xs uppercase font-mono tracking-wider text-[#B5ADA4] hover:text-[#FBF9F5] transition-colors"
            >
              Koleksi
            </a>
            <a
              href="#reels"
              className="text-xs uppercase font-mono tracking-wider text-[#B5ADA4] hover:text-[#FBF9F5] transition-colors"
            >
              Reels
            </a>
            <a
              href="#events"
              className="text-xs uppercase font-mono tracking-wider text-[#B5ADA4] hover:text-[#FBF9F5] transition-colors"
            >
              Runway
            </a>
            <a
              href="#philosophy"
              className="text-xs uppercase font-mono tracking-wider text-[#B5ADA4] hover:text-[#FBF9F5] transition-colors"
            >
              Filosofi
            </a>
            <a
              href="#inquiry"
              className="text-xs uppercase font-mono tracking-wider text-[#B5ADA4] hover:text-[#FBF9F5] transition-colors"
            >
              Kontak
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="pressable text-xs uppercase font-mono tracking-wider text-[#D49CA4] hover:text-white transition-colors flex items-center space-x-1.5 ml-2"
            >
              <span>Ke Atas</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Colophon Notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#B5ADA4] gap-4">
          <p>
            &copy; {new Date().getFullYear()} Apatis Blues. Seluruh hak cipta visual dilindungi.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href={creatorData.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              TikTok: @.apatisblues
            </a>
            <span>&bull;</span>
            <a
              href={creatorData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              IG: @apatisblues_
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
