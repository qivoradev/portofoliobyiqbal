import { ExternalLink } from 'lucide-react';
import Drawer from './Drawer';

/**
 * Project drawer — Problem · Action · Result (Folioblox Theme)
 * Body anatomy: Media Box → Metrics → P/A/R Stack → Tools. Action Base lives in the footer.
 */
export default function ProjectDrawer({ project, labels, onClose }) {
  const sectionTitle = 'type-micro mb-4 flex items-center gap-3 text-stone-400';

  const footer = project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full bg-[#FF511A] hover:bg-[#e04310] px-6 py-3 text-xs font-semibold text-white transition-all duration-300 ease-spring hover:scale-105 active:scale-95 shadow-lg"
    >
      <span>{labels.live}</span>
      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
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
        <figure className="m-0 mb-8 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0B]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </figure>
      )}

      <dl className="mb-10 grid grid-cols-1 border-y border-white/10 sm:grid-cols-3">
        {project.metrics.map((metric, i) => (
          <div
            key={metric.label}
            className={`py-5 sm:px-5 sm:first:pl-0 ${
              i > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''
            }`}
          >
            <dt className="type-micro text-stone-400">{metric.label}</dt>
            <dd className="type-display mt-2 text-2xl sm:text-3xl text-white font-bold">{metric.value}</dd>
          </div>
        ))}
      </dl>

      <section className="mb-10">
        <h3 className={sectionTitle}>
          <span className="text-[#FF511A] font-bold">[ P ]</span>
          {labels.problem}
        </h3>
        <p className="text-base sm:text-lg leading-relaxed text-white">{project.problem}</p>
      </section>

      <section className="mb-10">
        <h3 className={sectionTitle}>
          <span className="text-[#FF511A] font-bold">[ A ]</span>
          {labels.action}
        </h3>
        <p className="leading-relaxed text-stone-300 text-sm sm:text-base">{project.action}</p>
      </section>

      <section className="mb-10">
        <h3 className={sectionTitle}>
          <span className="text-[#FF511A] font-bold">[ R ]</span>
          {labels.result}
        </h3>
        <ol className="border-t border-white/10">
          {project.result.map((item, i) => (
            <li key={item.title} className="border-b border-white/10 py-5">
              <h4 className="type-display text-base sm:text-lg font-bold text-white">
                <span className="mr-2 font-mono text-xs font-bold text-[#FF511A]">
                  0{i + 1}
                </span>
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                <span className="font-semibold text-white">{labels.finding}: </span>
                {item.finding}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-400">
                <span className="font-semibold text-stone-200">{labels.recommendation}: </span>
                {item.recommendation}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label={labels.stack}>
        <p className="type-micro mb-3 text-stone-400">{labels.stack}</p>
        <ul className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-stone-300"
            >
              {tool}
            </li>
          ))}
        </ul>
      </section>
    </Drawer>
  );
}
