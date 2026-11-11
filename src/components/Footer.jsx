import { ArrowUpRight } from 'lucide-react';
import { CONTACT } from '../content';
import { Reveal } from './ui';

/**
 * Footer Minimalis & Kontak (Folioblox Matte Black #0A0A0B)
 * - Garis batas tipis border-white/10
 * - Tautan kontak: Email, LinkedIn, GitHub, WhatsApp
 * - Copyright: "© 2026 Iqbal Dwi Fathonah"
 */
export default function Footer({ lang = 'id' }) {
  const isId = lang === 'id';

  const links = [
    {
      label: 'Email',
      value: CONTACT.email,
      href: CONTACT.mailtoUrl,
      external: false,
    },
    {
      label: 'WhatsApp',
      value: CONTACT.whatsappDisplay,
      href: CONTACT.whatsappUrl,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'Iqbal Dwi Fathonah',
      href: CONTACT.linkedinUrl,
      external: true,
    },
    {
      label: 'GitHub',
      value: CONTACT.githubHandle,
      href: CONTACT.githubUrl,
      external: true,
    },
  ];

  return (
    <footer id="kontak" className="scroll-mt-14 border-t border-white/10 bg-[#0A0A0B]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF511A] block mb-3">
            {isId ? '[ HUBUNGI SAYA ]' : '[ GET IN TOUCH ]'}
          </span>
          <h2 className="type-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.08]">
            {isId
              ? 'Mari Membangun Solusi Berbasis Data & Keputusan Strategis.'
              : 'Let’s Build Data-Driven Solutions & Strategic Insights.'}
          </h2>
        </Reveal>

        <address className="mt-14 not-italic">
          <ul className="border-t border-white/10">
            {links.map((link, i) => (
              <Reveal as="li" key={link.label} delay={i * 60} className="border-b border-white/10">
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex flex-col gap-2 py-6 transition-colors hover:text-[#FF511A] sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-stone-400 sm:w-36 shrink-0 group-hover:text-stone-300">
                    {link.label}
                  </span>
                  <span className="flex flex-1 items-baseline justify-between gap-4 sm:justify-end">
                    <span className="type-display text-xl sm:text-3xl font-semibold text-white group-hover:text-[#FF511A] transition-colors">
                      {link.value}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-300 ease-spring group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF511A]"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </address>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-stone-400">
            © 2026 Iqbal Dwi Fathonah. All rights reserved.
          </p>
          <span className="font-mono text-[11px] text-stone-500 uppercase tracking-widest">
            Data Analyst Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
