import { Reveal } from './ui';

/**
 * The Master Hero Bento Card (Studio Keffi Aesthetic)
 * - Container: max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12
 * - Card: Warm Editorial Sand (#F5F3ED), rounded-[28px] sm:rounded-[36px] lg:rounded-[44px]
 * - 2-Column Asymmetric Grid (grid-cols-1 lg:grid-cols-12):
 *   * SISI KIRI (lg:col-span-7): Headline, Deskripsi, Table Divider Keffi, CTA Button
 *   * SISI KANAN (lg:col-span-5): Pure Editorial Metric Snapshot (NYC & Maven Pizza)
 */
export default function Hero({ t, onOpenResume }) {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16"
    >
      <Reveal>
        <article
          aria-label="Studio Keffi Master Hero Card"
          className="relative w-full overflow-hidden rounded-[28px] border border-stone-300/80 bg-[#F5F3ED] p-5 text-[#111215] shadow-2xl transition-all duration-500 ease-spring sm:rounded-[36px] sm:p-10 lg:rounded-[44px] lg:p-12"
        >
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            {/* ── SISI KIRI (lg:col-span-7) ── */}
            <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
              <div>
                {/* Header Kategori */}
                <p className="font-mono text-[11px] uppercase tracking-widest text-stone-500 font-medium">
                  {t.kicker}
                </p>

                {/* Headline Utama */}
                <h1 className="type-display mt-3 text-balance text-3xl font-bold tracking-tight text-[#111215] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                  {t.headline}
                </h1>

                {/* Deskripsi */}
                <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
                  {t.description}
                </p>
              </div>

              {/* Table Divider Keffi (Border tipis border-b border-black/15) */}
              <div className="flex flex-col border-t border-black/15 py-1">
                {/* Baris 1: [SCOPE] */}
                <div className="flex flex-col gap-1 py-3 border-b border-black/15 sm:flex-row sm:items-baseline sm:gap-4 text-xs">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 shrink-0 sm:w-20 font-medium">
                    {t.scopeLabel}
                  </span>
                  <span className="font-medium text-stone-800 leading-relaxed">
                    {t.scopeValue}
                  </span>
                </div>

                {/* Baris 2: [STACK] */}
                <div className="flex flex-col gap-1 py-3 border-b border-black/15 sm:flex-row sm:items-baseline sm:gap-4 text-xs">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 shrink-0 sm:w-20 font-medium">
                    {t.stackLabel}
                  </span>
                  <span className="font-medium text-stone-800 leading-relaxed">
                    {t.stackValue}
                  </span>
                </div>

                {/* Baris 3: [STATUS] */}
                <div className="flex flex-col gap-1 py-3 border-b border-black/15 sm:flex-row sm:items-baseline sm:gap-4 text-xs">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 shrink-0 sm:w-20 font-medium">
                    {t.statusLabel}
                  </span>
                  <span className="font-medium text-stone-800 leading-relaxed">
                    {t.statusValue}
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#proyek"
                  className="inline-flex items-center justify-center rounded-full bg-[#111215] px-8 py-4 text-xs font-semibold text-white transition-all duration-300 ease-spring hover:bg-stone-900 hover:scale-105 active:scale-95 text-center w-full sm:w-fit shadow-md"
                >
                  {t.ctaPrimary}
                </a>

                {onOpenResume && (
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="inline-flex cursor-pointer items-center justify-center rounded-full border border-black/20 bg-transparent px-6 py-4 text-xs font-semibold text-[#111215] transition-all duration-300 ease-spring hover:border-black/50 hover:bg-black/5 hover:scale-105 active:scale-95 text-center w-full sm:w-fit"
                  >
                    {t.ctaResume}
                  </button>
                )}
              </div>
            </div>

            {/* ── SISI KANAN (lg:col-span-5) Metric Snapshot ── */}
            <div className="flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-white/85 p-6 shadow-sm sm:rounded-3xl sm:p-8 lg:col-span-5">
              {/* Sudut Atas */}
              <div className="flex items-center justify-between border-b border-stone-200/80 pb-4">
                <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-stone-500">
                  {t.metrics.header}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-stone-400">
                  {t.metrics.series}
                </span>
              </div>

              {/* Tengah: Highlight Metrik Utama Nyata */}
              <div className="flex flex-col gap-6 py-6 sm:py-8">
                {/* Kartu mini 1: NYC */}
                <div>
                  <p className="type-display text-4xl font-bold tracking-tight text-[#111215] sm:text-5xl lg:text-[3.25rem] leading-none">
                    {t.metrics.metric1.value}
                  </p>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-stone-600 sm:text-sm">
                    {t.metrics.metric1.label}
                  </p>
                </div>

                {/* Divider tipis horizontal */}
                <div className="h-px w-full bg-stone-200/90" />

                {/* Kartu mini 2: Maven Pizza */}
                <div>
                  <p className="type-display text-4xl font-bold tracking-tight text-[#111215] sm:text-5xl lg:text-[3.25rem] leading-none">
                    {t.metrics.metric2.value}
                  </p>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-stone-600 sm:text-sm">
                    {t.metrics.metric2.label}
                  </p>
                </div>
              </div>

              {/* Sudut Bawah: Badge status minimalis */}
              <div className="flex items-center gap-2 border-t border-stone-200/80 pt-4">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-500" />
                <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-stone-600">
                  {t.metrics.badge}
                </span>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
