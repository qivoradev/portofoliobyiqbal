/**
 * ProfileCardsSection — Perry Wang Bento Grid
 *
 * Grid layout:
 * ┌────────────────────┬──────────────────┐
 * │  Profile + Intro   │  Approach card   │  ← bento row 1 (lg: 7+5 cols)
 * ├────────────────────┴──────────────────┤
 * │   Project Card 1  │  Project Card 2  │  ← bento row 2 (md: 2 equal cols)
 * └───────────────────┴──────────────────┘
 *
 * Project cards: light (#EAEAEA) on dark page — maximum contrast, real images.
 * On hover: image scales inside overflow-hidden container (img-zoom class).
 */
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from './ui';

export default function ProfileCardsSection({ lang = 'id', onOpenProject, onOpenResume }) {
  const isId = lang === 'id';

  return (
    <section id="tentang" className="bg-[#0A0A0B] py-20 sm:py-28 px-5 sm:px-8 scroll-mt-8">
      <div className="mx-auto max-w-6xl space-y-6">

        {/* ── ROW 1: Profile bento cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Card A — Intro / Profile (lg: 7 cols) */}
          <Reveal className="lg:col-span-7">
            <div className="bento-card h-full p-7 sm:p-9 flex flex-col justify-between gap-8">
              <div>
                <span className="type-label text-[#FF511A] block mb-5">
                  {isId ? '[ PROFIL & PENDEKATAN ]' : '[ PROFILE & APPROACH ]'}
                </span>
                <h2 className="type-display text-3xl sm:text-4xl xl:text-[42px] font-bold text-white leading-[1.05] tracking-tight">
                  {isId
                    ? 'Mengubah Data Mentah Menjadi Keputusan Terukur'
                    : 'Turning Raw Data Into Measurable Decisions'}
                </h2>
                <p className="text-stone-400 text-sm sm:text-base mt-5 leading-relaxed max-w-lg">
                  {isId
                    ? 'Sebagai lulusan baru Teknologi Informasi (2026), saya berfokus mengolah data relasional menjadi keputusan bisnis melalui SQL dan Excel, didukung sertifikasi BNSP Web Development dan Certiport AI.'
                    : 'As a recent Information Technology graduate (2026), I transform relational data into business decisions through SQL and Excel, backed by BNSP Web Development and Certiport AI certifications.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-white/[0.08]">
                <span className="text-xs text-stone-500 font-mono leading-relaxed">
                  {isId ? 'Yogyakarta · Fresh Graduate IT · 2026' : 'Yogyakarta · Fresh Graduate IT · 2026'}
                </span>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="flex items-center gap-3 rounded-full bg-[#FF511A] hover:bg-[#e04310] text-white pl-5 pr-1.5 py-1.5 text-xs font-bold w-fit transition-all duration-300 ease-spring hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>{isId ? 'Lihat Resume / CV' : 'View Resume / CV'}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#FF511A] shrink-0">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
            </div>
          </Reveal>

          {/* Card B — Approach Philosophy (lg: 5 cols) */}
          <Reveal delay={80} className="lg:col-span-5">
            <div className="bento-card h-full p-7 sm:p-9 flex flex-col justify-between gap-6">
              <div>
                <span className="type-label text-stone-500 block mb-5">
                  {isId ? '[ FILOSOFI PENDEKATAN ]' : '[ APPROACH PHILOSOPHY ]'}
                </span>
                <p className="text-white font-semibold text-lg sm:text-xl leading-snug">
                  {isId
                    ? 'Pahami konsep → tahu cara penggunaan → tahu kapan digunakan → praktik.'
                    : 'Understand concept → know how to use → know when to use → practice.'}
                </p>
              </div>

              {/* Approach steps — visual */}
              <ol className="space-y-3 mt-2">
                {(isId
                  ? ['Pahami konsep dasar', 'Pelajari cara penggunaan', 'Identifikasi kapan digunakan', 'Terapkan dalam praktik nyata']
                  : ['Understand the core concept', 'Learn how to use it', 'Know when it applies', 'Apply it in real practice']
                ).map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] font-bold text-[#FF511A] mt-0.5 shrink-0 w-5">
                      0{i + 1}
                    </span>
                    <span className="text-stone-300 text-sm leading-snug">{step}</span>
                  </li>
                ))}
              </ol>

              {/* Metric pair */}
              <div className="grid grid-cols-2 gap-3 pt-5 border-t border-white/[0.08] mt-auto">
                <div>
                  <p className="type-label text-stone-500 mb-1">{isId ? 'Kasus Dianalisis' : 'Cases Analyzed'}</p>
                  <p className="type-display text-2xl font-bold text-white">238K+</p>
                </div>
                <div>
                  <p className="type-label text-stone-500 mb-1">{isId ? 'Revenue Dimodelkan' : 'Revenue Modeled'}</p>
                  <p className="type-display text-2xl font-bold text-white">$817K</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── ROW 2: Selected Works — Project Cards ── */}
        <div id="proyek" className="scroll-mt-20">
          {/* Section header */}
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5 pt-4">
            <div>
              <span className="type-label text-[#FF511A] block mb-2">
                {isId ? '[ PROYEK PILIHAN ]' : '[ SELECTED WORKS ]'}
              </span>
              <h2 className="type-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {isId ? 'Proyek Analisis Unggulan' : 'Featured Data Analysis'}
              </h2>
            </div>
            <p className="text-stone-500 text-xs sm:text-sm max-w-sm leading-relaxed">
              {isId
                ? 'Studi kasus analitik nyata — PAR framework (Problem, Action, Result)'
                : 'Real analytical case studies — PAR framework (Problem, Action, Result)'}
            </p>
          </Reveal>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Project 1 — Pizza Sales */}
            <Reveal delay={80}>
              <article
                onClick={() => onOpenProject('pizza-sales-performance')}
                className="group flex flex-col h-full rounded-[20px] bg-[#EAEAEA] p-6 sm:p-7 text-[#111215] cursor-pointer select-none transition-all duration-300 ease-spring hover:-translate-y-1.5"
                style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="type-label text-stone-500 block mb-2">LOOKER STUDIO · BI</span>
                    <h3 className="type-display text-xl sm:text-2xl font-bold text-[#111215] leading-tight group-hover:text-[#FF511A] transition-colors">
                      Pizza Sales Performance Dashboard
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-500 shrink-0 mt-0.5">01</span>
                </div>

                {/* PAR Summary */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                  <span className="font-bold text-stone-700">P: </span>
                  {isId
                    ? 'Bagaimana tren penjualan pizza tahunan, kapan jam puncak, dan menu apa yang paling menghasilkan?'
                    : 'How did annual pizza sales trend, when were peak hours, and which menu drove the most revenue?'}
                </p>

                {/* Dashboard preview image */}
                <div className="w-full h-52 sm:h-60 lg:h-64 overflow-hidden rounded-2xl bg-stone-300 border border-black/[0.07] relative mb-5">
                  <img
                    src="https://github.com/user-attachments/assets/3796a228-1677-4d5c-8af4-a43cbd412148"
                    alt="Pizza Sales Performance Dashboard"
                    loading="lazy"
                    className="w-full h-full object-cover object-top img-zoom"
                  />
                </div>

                {/* Metrics strip */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Total Sales', value: '$817.8K' },
                    { label: isId ? 'Pizza Terjual' : 'Pizzas Sold', value: '49,574' },
                    { label: 'Avg Order', value: '$38.31' },
                  ].map((m) => (
                    <div key={m.label} className="bg-black/[0.04] rounded-xl p-3 border border-black/[0.06]">
                      <p className="type-label text-stone-500 mb-1">{m.label}</p>
                      <p className="font-bold text-base text-[#111215]">{m.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-black/[0.08] pt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {['Looker Studio', 'SQL', 'BI'].map((tag) => (
                      <span key={tag} className="type-label px-2.5 py-1 rounded-full bg-black/[0.06] text-stone-600">{tag}</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#111215] group-hover:text-[#FF511A] inline-flex items-center gap-1.5 transition-colors">
                    {isId ? 'Buka Analisis' : 'View Analysis'}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            </Reveal>

            {/* Project 2 — NYC Traffic */}
            <Reveal delay={160}>
              <article
                onClick={() => onOpenProject('nyc-traffic-safety')}
                className="group flex flex-col h-full rounded-[20px] bg-[#EAEAEA] p-6 sm:p-7 text-[#111215] cursor-pointer select-none transition-all duration-300 ease-spring hover:-translate-y-1.5"
                style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="type-label text-stone-500 block mb-2">EXCEL ANALYTICS · DATA</span>
                    <h3 className="type-display text-xl sm:text-2xl font-bold text-[#111215] leading-tight group-hover:text-[#FF511A] transition-colors">
                      NYC Traffic Safety & Collision Analysis
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-500 shrink-0 mt-0.5">02</span>
                </div>

                {/* PAR Summary */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                  <span className="font-bold text-stone-700">P: </span>
                  {isId
                    ? 'Di mana kecelakaan paling sering terjadi di NYC, kapan jam rawan, dan apa akar penyebab utamanya?'
                    : 'Where do collisions most frequently occur in NYC, when are peak danger hours, and what are root causes?'}
                </p>

                {/* Dashboard preview image */}
                <div className="w-full h-52 sm:h-60 lg:h-64 overflow-hidden rounded-2xl bg-stone-300 border border-black/[0.07] relative mb-5">
                  <img
                    src="/projects/nyc-dashboard.png"
                    alt="NYC Traffic Safety Analysis Dashboard"
                    loading="lazy"
                    className="w-full h-full object-cover object-top img-zoom"
                  />
                </div>

                {/* Metrics strip */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: isId ? 'Total Kasus' : 'Total Cases', value: '238,421' },
                    { label: isId ? 'Korban Cedera' : 'Injuries', value: '116,227' },
                    { label: isId ? 'Rasio Cedera' : 'Injury Rate', value: '48.7%' },
                  ].map((m) => (
                    <div key={m.label} className="bg-black/[0.04] rounded-xl p-3 border border-black/[0.06]">
                      <p className="type-label text-stone-500 mb-1">{m.label}</p>
                      <p className="font-bold text-base text-[#111215]">{m.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-black/[0.08] pt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {['Excel', 'PivotTables', 'RCA'].map((tag) => (
                      <span key={tag} className="type-label px-2.5 py-1 rounded-full bg-black/[0.06] text-stone-600">{tag}</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#111215] group-hover:text-[#FF511A] inline-flex items-center gap-1.5 transition-colors">
                    {isId ? 'Buka Analisis' : 'View Analysis'}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
