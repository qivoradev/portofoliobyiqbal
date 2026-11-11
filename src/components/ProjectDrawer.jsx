import { useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';

/**
 * Centered Project Modal (Folioblox Theme)
 * Mengubah drawer samping kanan menjadi centered modal di tengah layar.
 * - Backdrop: fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md
 * - Kotak Modal: w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[#141416] border border-white/15 p-5 sm:p-10 shadow-2xl
 * - Tombol tutup X mudah dijangkau di pojok kanan atas, klik backdrop menutup modal.
 */
export default function ProjectDrawer({ project, labels, onClose }) {
  const modalRef = useRef(null);

  // Keyboard shortcut: Escape untuk menutup modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll saat modal aktif
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const sectionTitle = 'type-micro mb-3 sm:mb-4 flex items-center gap-3 text-stone-400 font-bold';

  return (
    <div
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      style={{ animation: 'projectFadeIn 0.2s ease-out' }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[#141416] border border-white/15 p-5 sm:p-10 shadow-2xl text-white my-auto"
        style={{ animation: 'projectSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Tutup (X) Mudah Dijangkau di Pojok Kanan Atas */}
        <button
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="absolute right-4 top-4 sm:right-6 sm:top-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer z-30 shadow-md"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Modal */}
        <div className="pr-12 mb-6 sm:mb-8">
          <p className="font-mono text-xs uppercase tracking-wider text-[#FF511A] font-bold">
            {labels.caseStudy} {project.index} · {project.kind}
          </p>
          <h2
            id="project-modal-title"
            className="type-display mt-2 text-2xl sm:text-4xl font-bold leading-tight text-white"
          >
            {project.title}
          </h2>
        </div>

        {/* Dashboard Preview Image */}
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

        {/* Metrics Grid */}
        <dl className="mb-8 sm:mb-10 grid grid-cols-1 border-y border-white/10 sm:grid-cols-3">
          {project.metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`py-4 sm:py-5 sm:px-5 sm:first:pl-0 ${
                i > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''
              }`}
            >
              <dt className="type-micro text-stone-400">{metric.label}</dt>
              <dd className="type-display mt-1 sm:mt-2 text-2xl sm:text-3xl text-white font-bold">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* P / A / R Stack */}
        <section className="mb-8">
          <h3 className={sectionTitle}>
            <span className="text-[#FF511A] font-bold">[ P ]</span>
            {labels.problem}
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-white">
            {project.problem}
          </p>
        </section>

        <section className="mb-8">
          <h3 className={sectionTitle}>
            <span className="text-[#FF511A] font-bold">[ A ]</span>
            {labels.action}
          </h3>
          <p className="leading-relaxed text-stone-300 text-sm sm:text-base">
            {project.action}
          </p>
        </section>

        <section className="mb-8">
          <h3 className={sectionTitle}>
            <span className="text-[#FF511A] font-bold">[ R ]</span>
            {labels.result}
          </h3>
          <ol className="border-t border-white/10">
            {project.result.map((item, i) => (
              <li key={item.title} className="border-b border-white/10 py-4 sm:py-5">
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
                  <span className="font-semibold text-stone-200">
                    {labels.recommendation}:{' '}
                  </span>
                  {item.recommendation}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Tools Badges */}
        <section aria-label={labels.stack} className="mb-8">
          <p className="type-micro mb-3 text-stone-400 font-bold">{labels.stack}</p>
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

        {/* Live CTA Button */}
        {project.link && (
          <div className="pt-5 border-t border-white/10 flex justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF511A] hover:bg-[#e04310] px-6 py-3 text-xs font-semibold text-white transition-all duration-300 ease-spring hover:scale-105 active:scale-95 shadow-lg"
            >
              <span>{labels.live}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>

      <style>{`
        @keyframes projectFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes projectSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
