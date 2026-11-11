import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from './ui';

/**
 * Section "Profil & Pendekatan" + 2 Proyek Analisis Unggulan (Folioblox Theme)
 * - Latar belakang hitam matte (#0A0A0B), max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24
 * - Header 2 Kolom: Profil & Pendekatan + Tombol Pill Oranye "Lihat Resume / CV"
 * - Grid 2 Kolom Sejajar (Desktop) & 1 Kolom (Mobile) HANYA memuat 2 Proyek Asli:
 *   1. Pizza Sales Performance Dashboard ($817.8K Sales, Looker Studio)
 *   2. NYC Traffic Safety Analysis (238,421 Cases, Excel Analytics)
 * - Area preview gambar dasbor diperbesar agar visual grafik tajam dan jelas.
 */
export default function ProfileCardsSection({
  lang = 'id',
  onOpenProject,
  onOpenResume,
}) {
  const isId = lang === 'id';

  return (
    <section id="tentang" className="bg-[#0A0A0B] py-16 sm:py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ── 1. Header 2 Kolom: Profil & Pendekatan ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          {/* Kiri (lg:col-span-6) */}
          <Reveal className="lg:col-span-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF511A] mb-3 block">
              {isId ? '[ PROFIL & PENDEKATAN ]' : '[ PROFILE & APPROACH ]'}
            </span>
            <h2 className="type-display text-3xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              {isId
                ? 'Mengubah Data Mentah Menjadi Keputusan Terukur'
                : 'Turning Raw Data Into Measurable Decisions'}
            </h2>
          </Reveal>

          {/* Kanan (lg:col-span-6) */}
          <Reveal delay={120} className="lg:col-span-6 flex flex-col justify-between">
            <p className="text-stone-300 text-sm sm:text-base font-normal leading-relaxed mb-6">
              {isId
                ? 'Sebagai lulusan baru Teknologi Informasi (2026), saya berfokus mengolah data relasional menjadi keputusan bisnis melalui SQL dan Excel, didukung sertifikasi BNSP Web Development dan Certiport AI.'
                : 'As a recent Information Technology graduate (2026), I focus on transforming relational data into sound business decisions through SQL and Excel, backed by BNSP Web Development and Certiport AI certifications.'}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs text-stone-400 max-w-[200px] leading-relaxed">
                {isId
                  ? 'Mari Membangun Solusi Berbasis Data'
                  : 'Building Data-Driven Strategic Solutions'}
              </span>

              {/* Tombol Pill Oranye "Lihat Resume / CV" */}
              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center gap-3 rounded-full bg-[#FF511A] hover:bg-[#e04310] text-white pl-5 pr-1.5 py-1.5 text-xs font-semibold w-fit transition-all duration-300 ease-spring hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
              >
                <span>{isId ? 'Lihat Resume / CV' : 'View Resume / CV'}</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#FF511A] shrink-0 shadow-xs">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* ── 2. Grid 2 Kolom Sejajar: 2 Proyek Analisis Unggulan ── */}
        <div id="proyek" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 scroll-mt-24">
          {/* Proyek 1: Pizza Sales Performance Dashboard */}
          <Reveal delay={100}>
            <article
              onClick={() => onOpenProject('pizza-sales-performance')}
              className="group flex flex-col justify-between h-full rounded-[28px] bg-[#EAEAEA] p-6 sm:p-8 text-[#111215] shadow-xl transition-all duration-300 ease-spring hover:-translate-y-2 hover:shadow-2xl cursor-pointer select-none"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-stone-600 font-bold block">
                  LOOKER STUDIO BI
                </span>
                <h3 className="type-display text-2xl font-bold text-[#111215] mt-2 group-hover:text-[#FF511A] transition-colors leading-tight">
                  Pizza Sales Performance Dashboard
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2.5 line-clamp-2 leading-relaxed">
                  {isId
                    ? 'Evaluasi kinerja penjualan tahunan ($817K+), pola jam sibuk operasional, dan analisis kontribusi menu.'
                    : 'Annual sales analysis ($817K+), peak operational rush modeling, and menu category profitability.'}
                </p>

                {/* Dashboard Preview Image (Ukuran Diperbesar) */}
                <div className="w-full h-56 sm:h-64 lg:h-72 my-6 overflow-hidden rounded-2xl bg-stone-300 border border-black/10 relative shadow-inner">
                  <img
                    src="https://github.com/user-attachments/assets/3796a228-1677-4d5c-8af4-a43cbd412148"
                    alt="Pizza Sales Performance Dashboard"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-spring group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="border-t border-black/10 pt-4 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-stone-800">
                  $817.8K Sales · 49.574 Sold
                </span>
                <span className="text-xs font-bold text-[#111215] group-hover:text-[#FF511A] inline-flex items-center gap-1.5 transition-colors">
                  <span>{isId ? 'Buka Analisis' : 'View Analysis'}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          </Reveal>

          {/* Proyek 2: NYC Traffic Safety Analysis */}
          <Reveal delay={180}>
            <article
              onClick={() => onOpenProject('nyc-traffic-safety')}
              className="group flex flex-col justify-between h-full rounded-[28px] bg-[#EAEAEA] p-6 sm:p-8 text-[#111215] shadow-xl transition-all duration-300 ease-spring hover:-translate-y-2 hover:shadow-2xl cursor-pointer select-none"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-stone-600 font-bold block">
                  EXCEL ANALYTICS
                </span>
                <h3 className="type-display text-2xl font-bold text-[#111215] mt-2 group-hover:text-[#FF511A] transition-colors leading-tight">
                  NYC Traffic Safety Analysis
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2.5 line-clamp-2 leading-relaxed">
                  {isId
                    ? 'Analisis 238k+ insiden tabrakan NYC, memetakan zona rawan wilayah, rasio cedera/fatalitas, dan tren waktu.'
                    : 'Deep dive into 238k+ collision records, mapping borough danger corridors, casualty rates, and hourly peaks.'}
                </p>

                {/* Dashboard Preview Image (Ukuran Diperbesar) */}
                <div className="w-full h-56 sm:h-64 lg:h-72 my-6 overflow-hidden rounded-2xl bg-stone-300 border border-black/10 relative shadow-inner">
                  <img
                    src="/projects/nyc-dashboard.png"
                    alt="NYC Traffic Safety Analysis"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-spring group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="border-t border-black/10 pt-4 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-stone-800">
                  238,421 Cases · 116,227 Injuries
                </span>
                <span className="text-xs font-bold text-[#111215] group-hover:text-[#FF511A] inline-flex items-center gap-1.5 transition-colors">
                  <span>{isId ? 'Buka Analisis' : 'View Analysis'}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
