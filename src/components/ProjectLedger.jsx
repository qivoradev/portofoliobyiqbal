import { ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';

/**
 * Editorial project ledger — replaces the twin-card grid.
 * Each row is one <button> inside an <li>; hover tints the row and
 * nudges the title + arrow on the spring curve.
 *
 * Row anatomy: Meta (index, kind) → Body (title, summary) → Tags → Action (arrow)
 */
export default function ProjectLedger({ t, onOpenProject }) {
  return (
    <section
      id="proyek"
      className="mx-auto max-w-7xl scroll-mt-14 px-5 py-20 sm:px-8 md:py-28"
    >
      <SectionHeader overline={t.overline} title={t.title} subtitle={t.subtitle} />

      <ol aria-label={t.listAria} className="border-t border-line">
        {t.items.map((project, i) => (
          <Reveal as="li" key={project.id} delay={i * 70} className="border-b border-line">
            <button
              type="button"
              onClick={() => onOpenProject(project.id)}
              aria-label={`${t.openLabel}: ${project.title}`}
              className="group grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-4 px-2 py-7 text-left transition-colors duration-500 ease-spring hover:bg-surface-hover focus-visible:bg-surface-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink sm:px-4 md:grid-cols-12 md:items-center md:gap-x-6"
            >
              {/* Meta */}
              <span className="type-micro pt-1.5 text-muted md:col-span-1 md:pt-0">
                {project.index}
              </span>

              {/* Body */}
              <span className="block transition-transform duration-500 ease-spring group-hover:translate-x-2 md:col-span-5">
                <span className="type-micro mb-2 block text-muted">{project.kind}</span>
                <span className="type-display block text-xl leading-tight sm:text-2xl">
                  {project.title}
                </span>
                <span className="mt-2 block max-w-md text-sm leading-relaxed text-muted">
                  {project.summary}
                </span>
              </span>

              {/* Action */}
              <ArrowUpRight
                aria-hidden="true"
                className="mt-1 h-5 w-5 text-muted transition-[transform,color] duration-500 ease-spring group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink md:order-last md:col-span-1 md:mt-0 md:justify-self-end"
              />

              {/* Tags */}
              <span className="col-span-3 col-start-1 flex flex-wrap gap-2 md:col-span-5 md:col-start-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </span>
            </button>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

