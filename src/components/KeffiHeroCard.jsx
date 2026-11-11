import SplineStage from './SplineStage';

/**
 * The Master Bento Card (Replikasi 100% Studio Keffi Hero Architecture)
 * - Canvas Background: Deep Obsidian Charcoal (#0C0D0E) di sekelilingnya
 * - Card Background: Warm Editorial Sand (#F5F3ED) dengan aksen Charcoal (#111215)
 * - Border & Radius: rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 border border-stone-300/60 shadow-2xl
 * - 2-Column Grid: lg:grid-cols-12
 *   * Kiri: Headline Keffi, Sub-headline, Narasi, Divider Table [SCOPE], [TOOLS], [METRIC], CTA Kapsul Hitam
 *   * Kanan: Spline 3D Workstation (#spline-canvas-wrapper) dengan label micro atas & bawah
 */
export default function KeffiHeroCard({ lang = 'id', onOpenResume }) {
  const isId = lang === 'id';

  return (
    <article
      aria-label="Studio Keffi Master Hero Card"
      className="relative w-full rounded-[32px] border border-stone-300/60 bg-[#F5F3ED] p-7 text-[#111215] shadow-2xl sm:rounded-[40px] sm:p-12 lg:p-14 overflow-hidden transition-all duration-500 ease-spring"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* ── KOLOM KIRI (lg:col-span-6) ── */}
        <div className="flex flex-col justify-between lg:col-span-6">
          <div>
            {/* Headline Besar Keffi Style */}
            <h1 className="type-display text-5xl font-bold tracking-tight text-[#111215] sm:text-6xl mb-2 leading-[1.05]">
              Data &amp; Systems.
            </h1>

            {/* Sub-headline Tegas */}
            <p className="text-base sm:text-lg font-medium text-[#111215]/85 mb-3 leading-snug">
              {isId
                ? 'Mentransformasi logika relasional & integritas sistem.'
                : 'Transforming relational logic & system integrity.'}
            </p>

            {/* Paragraf Ringkas */}
            <p className="text-sm leading-relaxed text-stone-600 mb-6 max-w-xl">
              {isId
                ? 'Lulusan Baru TI (2026). Menggabungkan ekstraksi basis data SQL/Excel, penjaminan mutu sistem (QA), dan literasi kecerdasan buatan menjadi keputusan terukur.'
                : 'Recent IT Graduate (2026). Combining SQL/Excel database extraction, software quality assurance (QA), and AI foundations into measurable decisions.'}
            </p>
          </div>

          {/* Divider Table Keffi (Border tipis border-b border-black/15) */}
          <div className="flex flex-col border-t border-black/15 my-2">
            {/* Baris 1: [SCOPE] */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3 border-b border-black/15 text-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 shrink-0 sm:w-20">
                [SCOPE]
              </span>
              <span className="text-stone-800 font-medium">
                {isId
                  ? 'Analisis Data · Pemodelan SQL · Validasi QA · Otomasi API'
                  : 'Data Analytics · SQL Modeling · QA Validation · API Automation'}
              </span>
            </div>

            {/* Baris 2: [TOOLS] */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3 border-b border-black/15 text-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 shrink-0 sm:w-20">
                [TOOLS]
              </span>
              <span className="text-stone-800 font-medium">
                PostgreSQL · Looker Studio · Advanced Excel · Postman · Supabase
              </span>
            </div>

            {/* Baris 3: [METRIC] */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3 border-b border-black/15 text-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 shrink-0 sm:w-20">
                [METRIC]
              </span>
              <span className="text-stone-800 font-medium">
                {isId
                  ? '238k+ Baris Insiden · Efisiensi Penjualan $817K+ · 100% Core QA'
                  : '238k+ Incident Rows · $817K+ Sales Efficiency · 100% Core QA'}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#proyek"
              className="inline-flex items-center gap-2 rounded-full bg-[#111215] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-spring hover:bg-black hover:scale-105 active:scale-95 shadow-md w-fit"
            >
              <span>{isId ? 'Eksplorasi Proyek →' : 'Explore Projects →'}</span>
            </a>

            {onOpenResume && (
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-black/20 bg-transparent px-6 py-3.5 text-sm font-medium text-[#111215] transition-all duration-300 ease-spring hover:border-black/50 hover:bg-black/5 hover:scale-105 active:scale-95"
              >
                <span>Resume / CV</span>
              </button>
            )}
          </div>
        </div>

        {/* ── KOLOM KANAN (lg:col-span-6 relative) ── */}
        <div className="relative flex items-center justify-center lg:col-span-6">
          <SplineStage />
        </div>
      </div>
    </article>
  );
}

