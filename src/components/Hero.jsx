import { ArrowDownRight, FileText } from 'lucide-react';
import SplineStage from './SplineStage';
import { Reveal } from './ui';

/**
 * Hero anatomy
 *   Root (section)
 *   ├─ Left column
 *   │   ├─ Meta Stack   → status pill
 *   │   ├─ Body Stack   → headline, intro, core-stack bar
 *   │   └─ Action Base  → primary / secondary CTA
 *   └─ Media Box        → locked-ratio Spline stage
 */
export default function Hero({ t, onOpenResume }) {
  return (
    <section
      id="top"
      className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:pb-28 lg:pt-36"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start lg:col-span-7">
          {/* Meta Stack */}
          <Reveal
            as="p"
            className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 font-mono text-[10px] uppercase leading-snug tracking-wider text-muted sm:text-[11px] sm:tracking-widest"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-500"
            />
            {t.status}
          </Reveal>

          {/* Body Stack */}
          <Reveal as="h1" delay={80} className="type-display mt-8 text-balance text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.08]">
            {t.headline}
          </Reveal>

          <Reveal as="p" delay={160} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t.intro}
          </Reveal>

          <Reveal
            as="dl"
            delay={240}
            className="mt-10 flex w-full flex-wrap items-center gap-x-6 gap-y-3 border-y border-line py-4"
          >
            <dt className="type-micro text-muted">{t.stackLabel}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs">
                {t.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </Reveal>

          {/* Action Base */}
          <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#proyek"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-500 ease-spring hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {t.ctaPrimary}
              <ArrowDownRight
                className="h-4 w-4 transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-medium transition-[transform,background-color,border-color] duration-500 ease-spring hover:-translate-y-0.5 hover:border-ink/60 hover:bg-surface-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <FileText className="h-4 w-4 text-muted" aria-hidden="true" />
              {t.ctaSecondary}
            </button>
          </Reveal>
        </div>

        {/* Media Box */}
        <Reveal delay={200} className="lg:col-span-5">
          <SplineStage t={t} />
        </Reveal>
      </div>
    </section>
  );
}

