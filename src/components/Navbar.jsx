import React, { useState, useEffect } from 'react';
import { creatorData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Koleksi Brand', href: '#lookbook' },
    { name: 'Selected Content', href: '#reels' },
    { name: 'Events & Visits', href: '#events' },
    { name: 'Filosofi', href: '#philosophy' },
    { name: 'Kolaborasi', href: '#inquiry' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-4 sm:px-6 md:px-8 pointer-events-none transition-all duration-300">
        <div className={`pointer-events-auto max-w-6xl mx-auto rounded-full transition-all duration-500 px-5 sm:px-7 py-3 flex items-center justify-between border ${
          isScrolled 
            ? 'bg-[#140407]/90 backdrop-blur-2xl border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.6)] ring-1 ring-white/5' 
            : 'bg-[#140407]/75 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
        }`}>
          
          {/* Brand Signature */}
          <a 
            href="#" 
            className="group flex items-baseline space-x-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-400 rounded-sm"
            aria-label="Apatis Blues Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-[#FBF9F5] group-hover:text-rose-200 transition-colors">
              APATIS BLUES
            </span>
            <span className="hidden sm:inline-block text-[10px] tracking-widest text-[#D49CA4] uppercase font-mono">
              DIMAS REZZA
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-widest text-[#B5ADA4] hover:text-[#FBF9F5] transition-colors duration-200 py-1 font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Social & Direct CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-xs text-[#B5ADA4]">
              <a 
                href={creatorData.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-[11px] tracking-wider uppercase font-mono"
                aria-label="TikTok Apatis Blues"
              >
                TikTok
              </a>
              <span className="text-white/20">&bull;</span>
              <a 
                href={creatorData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-[11px] tracking-wider uppercase font-mono"
                aria-label="Instagram Apatis Blues"
              >
                Instagram
              </a>
            </div>

            <a
              href="#inquiry"
              className="pressable inline-flex items-center bg-gradient-to-r from-burgundy-700 to-burgundy-600 hover:from-burgundy-600 hover:to-burgundy-500 text-[#FBF9F5] text-[11px] uppercase tracking-widest font-medium px-5 py-2 rounded-full border border-white/10 transition-all shadow-[0_2px_12px_rgba(114,21,36,0.35)]"
            >
              Kolaborasi
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#FBF9F5] hover:text-rose-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-rose-400 rounded-full"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>

        </div>
      </header>

      {/* Fullscreen Editorial Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#0B0204]/96 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-12 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-serif text-2xl text-[#FBF9F5] tracking-wide">
              APATIS BLUES
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white"
              aria-label="Tutup menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto" aria-label="Mobile Navigation Links">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl sm:text-4xl text-[#FBF9F5] hover:text-rose-200 transition-colors flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-white/30 group-hover:text-rose-300">
                  0{idx + 1} &rarr;
                </span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-[#B5ADA4]">
              <a 
                href={creatorData.tiktokUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white font-mono text-xs uppercase"
              >
                TikTok: @.apatisblues
              </a>
              <a 
                href={creatorData.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white font-mono text-xs uppercase"
              >
                IG: @apatisblues_
              </a>
            </div>

            <a
              href="#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="pressable text-center bg-burgundy-700 hover:bg-burgundy-600 text-white text-xs uppercase tracking-widest font-semibold py-3.5 px-6 rounded-full"
            >
              Kolaborasi
            </a>
          </div>
        </div>
      )}
    </>
  );
}
