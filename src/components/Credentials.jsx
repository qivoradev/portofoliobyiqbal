import { ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';

/** Two editorial rows (national / international) — each opens the certificate. */
export default function Credentials({ t, onOpenCertificate }) {
  return (
    <section
      id="kredensial"
      className="mx-auto max-w-7xl scroll-mt-14 px-5 py-20 sm:px-8 md:py-28"
    >
      <SectionHeader overline={t.overline} title={t.title} />

      <ul aria-label={t.listAria} className="border-t border-line">
        {t.items.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 70} className="border-b border-line">
            <button
              type="button"
              onClick={() => onOpenCertificate(item)}
              className="group grid w-full cursor-pointer gap-3 px-2 py-7 text-left transition-colors duration-500 ease-spring hover:bg-surface-hover focus-visible:bg-surface-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink sm:px-4 md:grid-cols-12 md:items-center md:gap-6"
            >
              <span className="type-micro text-muted md:col-span-3">{item.scope}</span>

              <span className="block transition-transform duration-500 ease-spring group-hover:translate-x-2 md:col-span-6">
                <span className="type-display block text-xl leading-tight sm:text-2xl">
                  {item.title}
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                  {item.detail}
                </span>
              </span>

              <span className="type-micro inline-flex items-center gap-2 text-muted transition-colors duration-500 ease-spring group-hover:text-ink md:col-span-3 md:justify-end">
                {t.hint}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-500 ease-spring group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </button>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

