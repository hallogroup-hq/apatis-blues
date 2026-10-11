import React, { useState } from 'react';
import { toast } from 'sonner';
import { creatorData } from '../data/portfolioData';

export default function InquirySection() {
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    email: '',
    scope: 'Event Visit',
    timeline: 'Bulan Ini',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} berhasil disalin ke clipboard`, {
      description: text,
      duration: 3000,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.brandName || !formData.email) {
      toast.error('Harap lengkapi nama brand dan alamat email.');
      return;
    }

    setIsSubmitting(true);

    const message = `Halo Dimas (Apatis Blues),

Saya mewakili brand *${formData.brandName}* (${formData.contactName || 'Creative Team'}).
Tertarik untuk inisiasi kolaborasi dengan detail berikut:
• Ruang Lingkup: ${formData.scope}
• Timeline: ${formData.timeline}
• Catatan Proyek: ${formData.notes || 'Mohon kirimkan rate card dan media kit terbaru.'}

Email Kontak: ${formData.email}

Terima kasih.`;

    const encodedWA = encodeURIComponent(message);
    const waUrl = `https://wa.me/6285703068231?text=${encodedWA}`;

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Brief kolaborasi siap dikirim', {
        description: 'Membuka WhatsApp untuk mengirim pesan langsung ke Dimas Rezza.',
        duration: 4000,
      });
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 350);
  };

  return (
    <section id="inquiry" className="py-28 md:py-36 bg-[#0B0204] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FBF9F5] leading-tight">
            Kolaborasi
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contacts & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white/[0.03] rounded-[2rem] p-8 sm:p-10 border border-white/10 shadow-xl space-y-8">
              <h3 className="font-serif text-3xl text-[#FBF9F5]">
                Contact
              </h3>
              
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div>
                  <span className="block font-mono text-[10px] text-[#D49CA4] uppercase tracking-wider mb-0.5">
                    Email Resmi
                  </span>
                  <a 
                    href={`mailto:${creatorData.email}`} 
                    className="font-mono text-xs sm:text-sm text-[#FBF9F5] hover:text-rose-200 transition-colors"
                  >
                    {creatorData.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(creatorData.email, 'Alamat Email')}
                  className="pressable px-3 py-1.5 bg-white/5 hover:bg-white/10 text-xs font-mono rounded-lg border border-white/10 text-[#FBF9F5] transition-colors"
                  aria-label="Salin email ke clipboard"
                >
                  Salin
                </button>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div>
                  <span className="block font-mono text-[10px] text-[#D49CA4] uppercase tracking-wider mb-0.5">
                    WhatsApp & Hotline
                  </span>
                  <a 
                    href={creatorData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs sm:text-sm text-[#FBF9F5] hover:text-rose-200 transition-colors"
                  >
                    {creatorData.whatsapp}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(creatorData.whatsapp, 'Nomor WhatsApp')}
                  className="pressable px-3 py-1.5 bg-white/5 hover:bg-white/10 text-xs font-mono rounded-lg border border-white/10 text-[#FBF9F5] transition-colors"
                  aria-label="Salin nomor WhatsApp ke clipboard"
                >
                  Salin
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-white/[0.03] rounded-[2rem] p-8 sm:p-10 border border-white/10 shadow-xl space-y-5">
              <h3 className="font-serif text-2xl text-[#FBF9F5]">
                Social Media
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={creatorData.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-rose-400/30 transition-all flex flex-col justify-between"
                >
                  <span className="font-mono text-[10px] text-[#D49CA4] uppercase tracking-wider">
                    TikTok
                  </span>
                  <span className="font-serif text-lg text-[#FBF9F5] mt-2">
                    @.apatisblues
                  </span>
                </a>

                <a
                  href={creatorData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-rose-400/30 transition-all flex flex-col justify-between"
                >
                  <span className="font-mono text-[10px] text-[#D49CA4] uppercase tracking-wider">
                    Instagram
                  </span>
                  <span className="font-serif text-lg text-[#FBF9F5] mt-2">
                    @apatisblues_
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Luxury Brief Composer Form (7 cols) */}
          <div className="lg:col-span-7 bg-white/[0.03] rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-2xl">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5] mb-2">
              Kirimkan Brief Kolaborasi
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#B5ADA4] mb-8 font-light">
              Lengkapi informasi singkat projek mu, kita coba untuk diskusi dan wujudkan bersama.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="brandName" className="block text-xs font-mono uppercase tracking-widest text-[#D49CA4] mb-2">
                    Nama Brand *
                  </label>
                  <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    required
                    value={formData.brandName}
                    onChange={handleInputChange}
                    placeholder="Contoh: Nappa Milano / NBDN"
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-rose-400 rounded-xl px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#B5ADA4]/40 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-xs font-mono uppercase tracking-widest text-[#D49CA4] mb-2">
                    Nama Narahubung / PIC
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="Nama Anda atau Tim"
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-rose-400 rounded-xl px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#B5ADA4]/40 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-[#D49CA4] mb-2">
                  Alamat Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contact@brand.com"
                  className="w-full bg-white/[0.03] border border-white/10 focus:border-rose-400 rounded-xl px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#B5ADA4]/40 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="scope" className="block text-xs font-mono uppercase tracking-widest text-[#D49CA4] mb-2">
                    Ruang Lingkup Proyek
                  </label>
                  <select
                    id="scope"
                    name="scope"
                    value={formData.scope}
                    onChange={handleInputChange}
                    className="w-full bg-[#180408] border border-white/10 focus:border-rose-400 rounded-xl px-4 py-3 text-sm text-[#FBF9F5] outline-none transition-colors"
                  >
                    <option value="Event Visit">Event Visit</option>
                    <option value="Brand Campaign">Brand Campaign</option>
                    <option value="Endorsement">Endorsement</option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Speaker">Speaker</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-widest text-[#D49CA4] mb-2">
                    Estimasi Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-[#180408] border border-white/10 focus:border-rose-400 rounded-xl px-4 py-3 text-sm text-[#FBF9F5] outline-none transition-colors"
                  >
                    <option value="Bulan Ini">Bulan Ini</option>
                    <option value="Kuartal Ini (Q1/Q2)">Kuartal Ini (Q1/Q2)</option>
                    <option value="Musim Depan">Musim Depan</option>
                    <option value="Eksplorasi Awal">Eksplorasi Awal</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-mono uppercase tracking-widest text-[#D49CA4] mb-2">
                  Catatan Singkat / Referensi
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Ceritakan gambaran singkat kampanye atau artikel yang ingin dikurasi..."
                  className="w-full bg-white/[0.03] border border-white/10 focus:border-rose-400 rounded-xl px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#B5ADA4]/40 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="pressable w-full py-4 rounded-full bg-burgundy-700 hover:bg-burgundy-600 disabled:opacity-50 text-[#FBF9F5] text-xs uppercase tracking-widest font-semibold border border-white/10 shadow-[0_4px_24px_rgba(114,21,36,0.4)] transition-all flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'Menyiapkan Brief...' : 'Kirimkan Brief ke WhatsApp'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
