/**
 * Hero Section — Perry Wang × Bento Grid Dashboard Intro
 *
 * Layout concept:
 * - Full-bleed Folioblox sunset gradient container (rounded-b corners)
 * - Transparent Navbar integrated at top
 * - DESKTOP: Massive editorial name + dual role tags left; portrait centerpiece; KPI strip bottom
 * - MOBILE: Stacked flex-col: text → portrait → 4 pillars grid (no collisions)
 */
import Navbar from './Navbar';
import { Reveal } from './ui';

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
      className="relative w-full overflow-hidden rounded-b-[36px] sm:rounded-b-[52px] bg-hero-gradient text-white shadow-2xl"
    >
      {/* Integrated transparent navbar */}
      <Navbar lang={lang} onToggleLang={onToggleLang} />

      {/* ── MOBILE VIEW (< lg) ── natural vertical flow, zero text/photo collisions */}
      <div className="flex flex-col lg:hidden w-full">
        {/* Text block */}
        <div className="px-5 sm:px-8 pt-6 sm:pt-8">
          <Reveal>
            <span className="type-label text-white/60 block mb-4">
              {isId ? 'Halo — Iqbal Dwi Fathonah' : 'Hello — Iqbal Dwi Fathonah'}
            </span>

            {/* Dual-role tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white">
                Data Analyst
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-white/80">
                QA Tester
              </span>
            </div>

            <h1 className="type-display text-[52px] sm:text-[68px] font-bold leading-[0.92] tracking-tight text-white">
              Iqbal Dwi<br />Fathonah
            </h1>

            <p className="text-white/70 text-sm mt-5 leading-relaxed max-w-sm">
              {isId
                ? 'Mengubah data mentah menjadi wawasan bisnis yang terstruktur.'
                : 'Turning raw data into structured business intelligence.'}
            </p>
          </Reveal>
        </div>

        {/* Portrait — contained, no overflow clash */}
        <div className="w-[240px] sm:w-[300px] mx-auto mt-8 relative z-10">
          <img
            src="/fotoiqbalnew.png"
            alt="Iqbal Dwi Fathonah"
            className="w-full h-auto object-contain object-bottom grayscale contrast-125 mix-blend-luminosity opacity-90 select-none"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 65% 75% at 50% 45%, black 52%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 65% 75% at 50% 45%, black 52%, transparent 100%)',
            }}
          />
        </div>

        {/* 4 Pillars grid — solid dark gradient backing prevents any collision */}
        <div className="relative z-20 w-full bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/95 to-transparent pt-6 pb-8 px-5 sm:px-8 -mt-6">
          {/* Location + Status row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-5">
            <span className="type-label text-white/50">📍 Yogyakarta, Indonesia</span>
            <span className="type-label text-white/50">
              {isId ? '🎓 Fresh Graduate IT (Des 2026)' : '🎓 Fresh Graduate IT (Dec 2026)'}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {pillars.map((item) => (
              <div
                key={item.num}
                className="flex flex-col bg-white/[0.05] p-3 rounded-2xl border border-white/[0.08]"
              >
                <span className="font-mono text-xs font-bold text-[#FF511A] tracking-wider">{item.num}</span>
                <span className="text-white text-xs font-semibold tracking-wide mt-1">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP VIEW (>= lg) — Asymmetric editorial layout ── */}
      <div className="hidden lg:flex lg:flex-col relative mx-auto max-w-6xl px-8 pt-6 pb-0 min-h-[640px] xl:min-h-[700px]">

        {/* Centerpiece portrait — absolute, center-bottom */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none flex justify-center items-end">
          <img
            src="/fotoiqbalnew.png"
            alt="Iqbal Dwi Fathonah"
            className="h-[500px] xl:h-[560px] w-auto max-w-none object-contain object-bottom grayscale contrast-125 mix-blend-luminosity opacity-90 select-none"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 50% 44%, black 50%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 60% 70% at 50% 44%, black 50%, transparent 100%)',
            }}
          />
        </div>

        {/* Top row: asymmetric L/R text */}
        <div className="relative z-20 flex items-start justify-between gap-8 pt-4 flex-1">
          {/* Left — massive name + role tags */}
          <Reveal className="flex flex-col max-w-lg">
            <span className="type-label text-white/55 block mb-5">
              {isId ? '— Halo, Saya Iqbal Dwi Fathonah' : '— Hello, I am Iqbal Dwi Fathonah'}
            </span>
            {/* Dual-role pills */}
            <div className="flex gap-2 mb-5">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white">
                Data Analyst
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-xs font-semibold text-white/70">
                QA Tester
              </span>
            </div>
            <h1 className="type-display text-[76px] xl:text-[90px] font-bold leading-[0.9] tracking-tight text-white drop-shadow-sm">
              Iqbal Dwi<br />Fathonah
            </h1>
          </Reveal>

          {/* Right — approach statement + location */}
          <Reveal delay={100} className="flex flex-col text-right max-w-xs self-end pb-4">
            <p className="text-white font-semibold text-base leading-snug">
              {isId
                ? 'Mengubah data mentah menjadi wawasan bisnis yang terstruktur.'
                : 'Turning raw data into structured business intelligence.'}
            </p>
            <p className="text-white/60 text-xs mt-3 font-mono leading-relaxed">
              {isId
                ? 'Pahami konsep → tahu cara penggunaan → tahu kapan digunakan → praktik.'
                : 'Understand concept → know usage → know when to use → practice.'}
            </p>
            <div className="mt-5 flex flex-col items-end gap-1.5">
              <span className="type-label text-white/40">📍 Yogyakarta, Indonesia</span>
              <span className="type-label text-white/40">
                {isId ? '🎓 Fresh Graduate IT (Des 2026)' : '🎓 Fresh Graduate IT (Dec 2026)'}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Bottom: 4 Pillars strip — dark gradient overlay, flush with section bottom */}
        <Reveal
          delay={160}
          className="relative z-20 mt-auto px-6 pt-8 pb-7 rounded-t-2xl bg-gradient-to-t from-[#0A0A0B]/95 via-[#0A0A0B]/70 to-transparent border-t border-white/[0.07]"
        >
          <div className="grid grid-cols-4 gap-6">
            {pillars.map((item) => (
              <div key={item.num} className="flex flex-col">
                <span className="font-mono text-sm font-bold text-[#FF511A] tracking-wider">{item.num}</span>
                <span className="text-white text-sm font-semibold tracking-wide mt-1">{item.title}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
