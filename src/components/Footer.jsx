import { ArrowUpRight } from 'lucide-react';
import { CONTACT } from '../content';
import { Reveal } from './ui';

/** Large editorial contact rows with a spring-filled underline. */
export default function Footer({ t }) {
  const links = [
    { label: t.labels.email, value: CONTACT.email, href: `mailto:${CONTACT.email}?subject=Peluang%20Kerja%20Data%20%26%20QA`, external: false },
    { label: t.labels.whatsapp, value: CONTACT.whatsappDisplay, href: CONTACT.whatsappUrl, external: true },
    { label: t.labels.github, value: CONTACT.githubHandle, href: CONTACT.githubUrl, external: true },
    { label: t.labels.linkedin, value: t.linkedinValue, href: CONTACT.linkedinUrl, external: true },
  ];

  return (
    <footer id="kontak" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="type-micro text-muted">{t.overline}</p>
          <h2 className="type-display mt-6 max-w-5xl text-balance text-[clamp(2.25rem,6vw,5.5rem)] leading-[1.05]">
            {t.statement}
          </h2>
        </Reveal>

        <address className="mt-16 not-italic md:mt-24">
          <ul className="border-t border-line">
            {links.map((link, i) => (
              <Reveal as="li" key={link.label} delay={i * 70} className="border-b border-line">
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex flex-col gap-2 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:flex-row md:items-baseline md:justify-between md:gap-8"
                >
                  <span className="type-micro text-muted md:w-40 md:shrink-0">
                    {link.label}
                  </span>
                  <span className="flex flex-1 items-baseline justify-between gap-4 md:justify-end">
                    <span className="type-display text-[1.4rem] leading-tight [overflow-wrap:anywhere] sm:text-4xl md:text-right">
                      <span className="link-line">{link.value}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-muted transition-[transform,color] duration-500 ease-spring group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink sm:h-7 sm:w-7"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </address>

        <p className="type-micro mt-16 text-muted">{t.copyright}</p>
      </div>
    </footer>
  );
}

