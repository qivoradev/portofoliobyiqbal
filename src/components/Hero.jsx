import Navbar from './Navbar';
import { Reveal } from './ui';

/**
 * Hero Section — 100% Folioblox Composition + Real Portrait Photo
 * - Sunset Orange Gradient to Dark Burgundy/Black
 * - Large rounded bottom corners: rounded-b-[32px] sm:rounded-b-[48px]
 * - Transparent Navbar inside top
 * - Mobile Layout (< 1024px): Natural vertical flex-col flow (Navbar → Text → Photo → 4 Pillars over dark gradient)
 * - Desktop Layout (>= 1024px): Asymmetric 2-sided text with large center bottom portrait (h-[480px] xl:h-[540px])
 *   and radial-gradient mask for seamless shoulder blending.
 */
export default function Hero({ lang = 'id', onToggleLang }) {
  const isId = lang === 'id';

  const pillars = [
    { num: '#01', title: isId ? 'Pemodelan SQL' : 'SQL Modeling' },
    { num: '#02', title: isId ? 'Visualisasi BI' : 'BI Visualization' },
    { num: '#03', title: isId ? 'Analisis Excel' : 'Excel Analytics' },
    { num: '#04', title: isId ? 'Validasi Data' : 'Data Validation' },
  ];

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden rounded-b-[32px] sm:rounded-b-[48px] bg-hero-gradient text-white shadow-2xl"
    >
      {/* 1. Navbar Transparan di Bagian Atas Hero */}
      <Navbar lang={lang} onToggleLang={onToggleLang} />

      {/* ── MOBILE / TABLET VIEW (< 1024px) ── */}
      {/* Susunan Vertikal Alami (Flex-Col): Tidak ada tabrakan teks dengan foto */}
      <div className="flex flex-col justify-between lg:hidden w-full">
        {/* Blok Teks Utama */}
        <div className="px-5 sm:px-8 pt-4 sm:pt-6 flex flex-col text-left">
          <Reveal>
            <span className="text-white/90 text-xs sm:text-sm font-medium mb-2 tracking-wide block">
              {isId ? 'Halo, Saya Iqbal Dwi Fathonah' : 'Hello, I am Iqbal Dwi Fathonah'}
            </span>
            <h1 className="type-display text-5xl sm:text-6xl font-bold leading-none tracking-tight text-white">
              Data Analyst
            </h1>
            <p className="text-white font-semibold text-sm sm:text-base mt-4 leading-snug">
              {isId
                ? 'Data yang presisi harus terasa jelas.'
                : 'Precise data must feel unmistakable.'}
            </p>
            <p className="text-white/80 text-xs sm:text-sm mt-1.5 leading-relaxed max-w-md">
              {isId
                ? 'Dari kueri relasional hingga dasbor interaktif, saya membangun model analitik yang terukur.'
                : 'From relational queries to interactive dashboards, I build measurable analytical models.'}
            </p>
          </Reveal>
        </div>

        {/* Wadah Foto Potret (Tengah Bawah Teks) */}
        <div className="w-[260px] sm:w-[320px] mx-auto mt-6 flex justify-center items-end relative z-10">
          <img
            src="/fotoiqbalnew.png"
            alt="Iqbal Dwi Fathonah"
            className="w-full h-auto object-contain object-bottom grayscale contrast-125 mix-blend-luminosity opacity-90 select-none drop-shadow-xl"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 65% 75% at 50% 45%, black 52%, transparent 100%)',
              maskImage:
                'radial-gradient(ellipse 65% 75% at 50% 45%, black 52%, transparent 100%)',
            }}
          />
        </div>

        {/* Grid 4 Pilar (#01 - #04) di Paling Bawah di Atas Lapisan Gelap Pekat */}
        <div className="relative z-20 w-full bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/95 to-transparent pt-6 pb-8 px-5 sm:px-8 -mt-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {pillars.map((item) => (
              <div
                key={item.num}
                className="flex flex-col bg-white/[0.05] p-3 rounded-xl border border-white/10"
              >
                <span className="font-mono text-xs font-bold text-[#FF511A] tracking-wider">
                  {item.num}
                </span>
                <span className="text-white text-xs font-semibold tracking-wide mt-1">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP VIEW (>= 1024px) ── */}
      {/* Layout Asimetris Editorial dengan Centerpiece Foto Skala Besar */}
      <div className="hidden lg:flex lg:flex-col lg:justify-between relative mx-auto max-w-6xl px-8 pt-8 pb-8 min-h-[620px] xl:min-h-[680px]">
        {/* Foto Potret Skala Besar di Tengah Bawah */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none flex justify-center items-end">
          <img
            src="/fotoiqbalnew.png"
            alt="Iqbal Dwi Fathonah"
            className="h-[480px] xl:h-[540px] w-auto max-w-none object-contain object-bottom grayscale contrast-125 mix-blend-luminosity opacity-90 select-none drop-shadow-2xl"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 62% 72% at 50% 45%, black 52%, transparent 100%)',
              maskImage:
                'radial-gradient(ellipse 62% 72% at 50% 45%, black 52%, transparent 100%)',
            }}
          />
        </div>

        {/* Teks Asimetris di Atas Foto (z-20) */}
        <div className="relative z-20 flex items-end justify-between gap-8 pt-6">
          {/* Sisi Kiri: Headline Raksasa */}
          <Reveal className="flex flex-col max-w-xl">
            <span className="text-white/90 text-sm sm:text-base font-medium mb-2 tracking-wide">
              {isId ? 'Halo, Saya Iqbal Dwi Fathonah' : 'Hello, I am Iqbal Dwi Fathonah'}
            </span>
            <h1 className="type-display text-7xl xl:text-[84px] font-bold leading-[0.95] tracking-tight text-white drop-shadow-sm">
              Data<br />Analyst
            </h1>
          </Reveal>

          {/* Sisi Kanan: Otoritas & Subteks */}
          <Reveal delay={120} className="flex flex-col text-right max-w-sm self-end">
            <p className="text-white font-semibold text-lg leading-snug drop-shadow-sm">
              {isId
                ? 'Data yang presisi harus terasa jelas.'
                : 'Precise data must feel unmistakable.'}
            </p>
            <p className="text-white/80 text-sm mt-2 max-w-[280px] ml-auto leading-relaxed">
              {isId
                ? 'Dari kueri relasional hingga dasbor interaktif, saya membangun model analitik yang terukur.'
                : 'From relational queries to interactive dashboards, I build measurable analytical models.'}
            </p>
          </Reveal>
        </div>

        {/* Baris 4 Pilar di Bagian Bawah Desktop dengan Lapisan Gradien Gelap */}
        <Reveal
          delay={200}
          className="relative z-20 mt-16 pt-8 pb-3 px-6 rounded-2xl bg-gradient-to-t from-[#0A0A0B]/90 via-[#0A0A0B]/60 to-transparent border-t border-white/10"
        >
          <div className="grid grid-cols-4 gap-6">
            {pillars.map((item) => (
              <div key={item.num} className="flex flex-col">
                <span className="font-mono text-base font-bold text-[#FF511A] tracking-wider">
                  {item.num}
                </span>
                <span className="text-white text-sm font-semibold tracking-wide mt-1">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
