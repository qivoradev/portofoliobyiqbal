import { ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';

/**
 * Editorial Project Ledger (Hanya 2 Proyek Analisis Data Asli)
 * - Proyek 1: NYC Motor Vehicle Collisions Analysis
 * - Proyek 2: Pizza Sales Performance Dashboard
 * Click trigger: Membuka PAR Drawer (Problem, Action, Result)
 */
export default function ProjectLedger({ t, onOpenProject }) {
  return (
    <section
      id="proyek"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-24"
    >
      <SectionHeader overline={t.overline} title={t.title} subtitle={t.subtitle} />

      <ol aria-label="Project Ledger" className="border-t border-line">
        {t.items.map((project, i) => (
          <Reveal as="li" key={project.id} delay={i * 80} className="border-b border-line">
            <button
              type="button"
              onClick={() => onOpenProject(project.id)}
              aria-label={`${t.openLabel}: ${project.title}`}
              className="group grid w-full cursor-pointer grid-cols-[auto_1fr] items-start gap-x-4 gap-y-4 px-3 py-7 text-left transition-colors duration-500 ease-spring hover:bg-surface-hover focus-visible:bg-surface-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white sm:px-6 md:grid-cols-12 md:items-center md:gap-x-6"
            >
              {/* Meta Seri */}
              <span className="type-micro pt-1 text-muted md:col-span-1 md:pt-0">
                ({project.index})
              </span>

              {/* Body: Title & Summary */}
              <span className="block transition-transform duration-500 ease-spring group-hover:translate-x-2 md:col-span-5">
                <span className="type-micro mb-1.5 block text-muted">{project.kind}</span>
                <span className="type-display block text-xl font-bold leading-tight text-white sm:text-2xl">
                  {project.title}
                </span>
                <span className="mt-2 block max-w-md text-xs sm:text-sm leading-relaxed text-muted">
                  {project.summary}
                </span>
              </span>

              {/* Tags / Tools */}
              <span className="col-span-2 flex flex-wrap gap-2 pt-1 md:col-span-4 md:pt-0">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-stone-300"
                  >
                    {tag}
                  </span>
                ))}
              </span>

              {/* Action Button: "Buka Studi Kasus" */}
              <span className="col-span-2 flex items-center justify-end gap-1.5 text-xs font-medium text-stone-400 transition-colors duration-300 group-hover:text-white md:col-span-2 md:justify-self-end">
                <span>{t.openLabel}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-500 ease-spring group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-white"
                />
              </span>
            </button>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
