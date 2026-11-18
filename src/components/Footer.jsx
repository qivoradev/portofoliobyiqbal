/**
 * Footer — Perry Wang "Let's Collaborate" contact block
 *
 * Layout:
 * - Massive editorial "Let's Collaborate" headline
 * - Contact link list: each row has a fine bottom border, label + value + ↗
 * - Highly clickable touch targets (py-6 per row)
 * - Copyright bar at the bottom
 */
import { ArrowUpRight } from 'lucide-react';
import { CONTACT } from '../content';
import { Reveal } from './ui';

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
      value: 'qivoradev',
      href: CONTACT.githubUrl,
      external: true,
    },
  ];

  return (
    <footer id="kontak" className="scroll-mt-10 border-t border-white/[0.07] bg-[#0A0A0B]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">

        {/* Overline */}
        <Reveal>
          <span className="type-label text-[#FF511A] block mb-5">
            {isId ? '[ HUBUNGI SAYA ]' : '[ GET IN TOUCH ]'}
          </span>
        </Reveal>

        {/* Massive "Let's Collaborate" headline */}
        <Reveal delay={60}>
          <h2 className="type-display text-[48px] sm:text-[64px] lg:text-[80px] xl:text-[96px] font-bold tracking-tight text-white leading-[0.92] max-w-4xl mb-14 sm:mb-20">
            {isId ? "Mari\nBerkolaborasi" : "Let's\nCollaborate"}
          </h2>
        </Reveal>

        {/* Contact rows — fine border separators, large touch targets */}
        <address className="not-italic">
          <ul className="border-t border-white/[0.08]">
            {links.map((link, i) => (
              <Reveal as="li" key={link.label} delay={i * 55} className="border-b border-white/[0.06]">
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex flex-col gap-2 py-6 sm:py-7 transition-colors hover:text-[#FF511A] sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 sm:w-32 shrink-0 group-hover:text-stone-400 transition-colors">
                    {link.label}
                  </span>
                  <span className="flex flex-1 items-baseline justify-between gap-4 sm:justify-end">
                    <span className="type-display text-xl sm:text-3xl font-semibold text-white group-hover:text-[#FF511A] transition-colors">
                      {link.value}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-stone-600 transition-all duration-300 ease-spring group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF511A]"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </address>

        {/* Copyright */}
        <Reveal delay={280} className="mt-14 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-xs text-stone-500">
            © 2026 Iqbal Dwi Fathonah. All rights reserved.
          </p>
          <span className="type-label text-stone-600">
            Data Analyst · QA Tester · Portfolio
          </span>
        </Reveal>
      </div>
    </footer>
  );
}
