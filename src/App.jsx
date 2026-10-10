import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'sonner';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import Philosophy from './components/Philosophy';
import Lookbook from './components/Lookbook';
import RunwayEvents from './components/RunwayEvents';
import TikTokReels from './components/TikTokReels';
import InquirySection from './components/InquirySection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize luxury smooth inertial scrolling via Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    // Handle smooth scrolling for all anchor links
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, { offset: -60 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Handle initial hash on page load
    if (window.location.hash) {
      const initialEl = document.querySelector(window.location.hash);
      if (initialEl) {
        setTimeout(() => {
          lenis.scrollTo(initialEl, { offset: -60 });
        }, 150);
      }
    }

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0204] text-[#FBF9F5] font-sans selection:bg-burgundy-700 selection:text-white relative overflow-x-hidden">
      {/* Toast provider with Sonner */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1A0407',
            color: '#FBF9F5',
            border: '1px solid rgba(223, 163, 171, 0.2)',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '13px'
          }
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <BrandMarquee />
        <Philosophy />
        <Lookbook />
        <TikTokReels />
        <RunwayEvents />
        <InquirySection />
      </main>

      {/* Footer Colophon */}
      <Footer />
    </div>
  );
}
