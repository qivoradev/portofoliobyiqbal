import { useCallback, useEffect, useRef, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { useDialogA11y } from '../hooks/useDialogA11y';

const SPRING_MS = 600;

/**
 * Project drawer — Problem · Action · Result.
 *
 * Anatomy: Header (Meta) → Scroll body (Media Box → Metrics → P/A/R Stack → Tools) → Footer (Action)
 * Enter/exit use the spring curve; the component stays mounted for the exit
 * animation and calls `onClose` once the slide-out has finished.
 */
export default function ProjectDrawer({ project, labels, onClose }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const closeTimer = useRef(null);

  const requestClose = useCallback(() => {
    if (closeTimer.current) return;
    setOpen(false);
    closeTimer.current = setTimeout(onClose, SPRING_MS);
  }, [onClose]);

  useDialogA11y(panelRef, requestClose);

  // Mount closed, then flip to open on the next frame so the transition runs.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(true));
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(closeTimer.current);
    };
  }, []);

  const sectionTitle = 'type-micro mb-4 flex items-center gap-3 text-muted';

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        aria-hidden="true"
        onClick={requestClose}
        className={`absolute inset-0 bg-[#121316]/60 backdrop-blur-sm transition-opacity duration-500 ease-spring ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        tabIndex={-1}
        className={`absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col border-l border-line bg-paper shadow-2xl transition-transform duration-[600ms] ease-spring ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Meta */}
        <header className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
          <div className="min-w-0">
            <p className="type-micro text-muted">
              {labels.caseStudy} {project.index} · {project.kind}
            </p>
            <h2
              id="drawer-title"
              className="type-display mt-2 text-balance text-2xl leading-tight sm:text-3xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={requestClose}
            aria-label={labels.close}
            className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-muted transition-colors duration-500 ease-spring hover:bg-surface-hover hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {/* Body */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-8 sm:px-8">
          {project.image && (
            <figure className="m-0 mb-8 aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </figure>
          )}

          <dl className="mb-10 grid grid-cols-1 border-y border-line sm:grid-cols-3">
            {project.metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`py-5 sm:px-5 sm:first:pl-0 ${
                  i > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''
                }`}
              >
                <dt className="type-micro text-muted">{metric.label}</dt>
                <dd className="type-display mt-2 text-2xl sm:text-3xl">{metric.value}</dd>
              </div>
            ))}
          </dl>

          <section className="mb-10">
            <h3 className={sectionTitle}>
              <span className="text-ink">[ P ]</span>
              {labels.problem}
            </h3>
            <p className="text-lg leading-relaxed">{project.problem}</p>
          </section>

          <section className="mb-10">
            <h3 className={sectionTitle}>
              <span className="text-ink">[ A ]</span>
              {labels.action}
            </h3>
            <p className="leading-relaxed text-muted">{project.action}</p>
          </section>

          <section className="mb-10">
            <h3 className={sectionTitle}>
              <span className="text-ink">[ R ]</span>
              {labels.result}
            </h3>
            <ol className="border-t border-line">
              {project.result.map((item, i) => (
                <li key={item.title} className="border-b border-line py-5">
                  <h4 className="type-display text-lg">
                    <span className="mr-2 font-mono text-xs font-normal text-muted">
                      0{i + 1}
                    </span>
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed">
                    <span className="font-semibold">{labels.finding}: </span>
                    {item.finding}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    <span className="font-semibold text-ink">{labels.recommendation}: </span>
                    {item.recommendation}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-label={labels.stack}>
            <p className="type-micro mb-3 text-muted">{labels.stack}</p>
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px]"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Action Base */}
        {project.link && (
          <footer className="border-t border-line px-6 py-4 sm:px-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-500 ease-spring hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {labels.live}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </footer>
        )}
      </aside>
    </div>
  );
}

