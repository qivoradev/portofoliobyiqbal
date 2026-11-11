import { ExternalLink } from 'lucide-react';
import Drawer from './Drawer';

/**
 * Project drawer — Problem · Action · Result.
 * Body anatomy: Media Box → Metrics → P/A/R Stack → Tools. Action Base lives in the footer.
 */
export default function ProjectDrawer({ project, labels, onClose }) {
  const sectionTitle = 'type-micro mb-4 flex items-center gap-3 text-muted';

  const footer = project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-500 ease-spring hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      {labels.live}
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </a>
  );

  return (
    <Drawer
      eyebrow={`${labels.caseStudy} ${project.index} · ${project.kind}`}
      title={project.title}
      closeLabel={labels.close}
      footer={footer}
      onClose={onClose}
    >
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
    </Drawer>
  );
}
