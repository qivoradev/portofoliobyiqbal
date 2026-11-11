import Navbar from './Navbar';
import { Reveal } from './ui';

/**
 * Hero Section — 100% Folioblox Composition + Real Portrait Photo
 * - Sunset Orange Gradient to Dark Burgundy/Black
 * - Large rounded bottom corners: rounded-b-[32px] sm:rounded-b-[48px]
 * - Transparent Navbar inside top
 * - Centerpiece Portrait Photo (Iqbal Dwi Fathonah in suit)
 * - Asymmetric Text: Left giant "Data Analyst", Right bold statement
 * - Bottom row of 4 numbered pillars (#01-#04)
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
      {/* 1. Navbar Transparan di Atas Hero */}
      <Navbar lang={lang} onToggleLang={onToggleLang} />

      {/* 2. Main Hero Viewport */}
      <div className="relative mx-auto max-w-6xl px-6 pt-8 sm:pt-14 pb-8 min-h-[560px] sm:min-h-[640px] flex flex-col justify-between">
        {/* Foto Potret Asli Saya (Centerpiece di Tengah Bawah) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none flex justify-center items-end">
          <img
            src="/fotoiqbalnew.png"
            alt="Iqbal Dwi Fathonah"
            className="h-[380px] sm:h-[480px] w-auto max-w-none object-contain object-bottom grayscale contrast-125 mix-blend-luminosity opacity-90 [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] select-none"
          />
        </div>

        {/* Teks Asimetris di Atas Foto (z-20) */}
        <div className="relative z-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-4 sm:pt-6">
          {/* Sisi Kiri */}
          <Reveal className="flex flex-col max-w-xl">
            <span className="text-white/90 text-sm sm:text-base font-medium mb-2 tracking-wide">
              {isId ? 'Halo, Saya Iqbal Dwi Fathonah' : 'Hello, I am Iqbal Dwi Fathonah'}
            </span>
            <h1 className="type-display text-5xl sm:text-7xl lg:text-[84px] font-bold leading-[0.95] tracking-tight text-white">
              Data<br />Analyst
            </h1>
          </Reveal>

          {/* Sisi Kanan */}
          <Reveal delay={120} className="flex flex-col md:text-right max-w-sm md:self-end">
            <p className="text-white font-semibold text-base sm:text-lg leading-snug">
              {isId
                ? 'Data yang presisi harus terasa jelas.'
                : 'Precise data must feel unmistakable.'}
            </p>
            <p className="text-white/80 text-xs sm:text-sm mt-2 max-w-[280px] md:ml-auto leading-relaxed">
              {isId
                ? 'Dari kueri relasional hingga dasbor interaktif, saya membangun model analitik yang terukur.'
                : 'From relational queries to interactive dashboards, I build measurable analytical models.'}
            </p>
          </Reveal>
        </div>

        {/* 3. Baris 4 Pilar Bernomor di Bagian Bawah Hero */}
        <Reveal delay={200} className="relative z-20 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 sm:pt-14 pb-2 border-t border-white/15 mt-8 sm:mt-12">
          {pillars.map((item) => (
            <div key={item.num} className="flex flex-col">
              <span className="font-mono text-sm sm:text-base font-bold text-[#FF511A] tracking-wider">
                {item.num}
              </span>
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide mt-1">
                {item.title}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
