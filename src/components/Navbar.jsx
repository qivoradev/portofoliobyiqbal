/**
 * Navbar — Perry Wang × Folioblox Dark
 * - Transparent, lives inside the Hero gradient
 * - Left: brand "iqbaldf"  |  Right: nav links + lang + CTA pill
 */
import { ArrowRight } from 'lucide-react';

export default function Navbar({ lang = 'id', onToggleLang }) {
  const isId = lang === 'id';

  const links = [
    { href: '#tentang', label: isId ? 'Tentang' : 'About' },
    { href: '#proyek',  label: isId ? 'Proyek'  : 'Projects' },
    { href: '#sertifikasi', label: isId ? 'Sertifikasi' : 'Credentials' },
    { href: '#kontak',  label: isId ? 'Kontak'  : 'Contact' },
  ];

  return (
    <header className="relative z-30 mx-auto w-full max-w-6xl px-5 sm:px-8 pt-5 sm:pt-6 pb-3 flex items-center justify-between gap-4">
      {/* Brand */}
      <a href="#top" className="text-sm sm:text-base font-bold tracking-tight text-white/90 hover:text-white transition-colors shrink-0">
        iqbaldf
      </a>

      {/* Nav links — hidden on mobile */}
      <nav aria-label={isId ? 'Navigasi utama' : 'Main navigation'}>
        <ul className="hidden md:flex items-center gap-5 lg:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="type-label text-white/60 hover:text-white/90 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right cluster */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Lang toggle */}
        <button
          type="button"
          onClick={onToggleLang}
          aria-label={isId ? 'Ganti bahasa ke EN' : 'Switch language to ID'}
          className="type-label px-2.5 py-1.5 rounded-full bg-white/[0.07] border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.12] transition-all cursor-pointer"
        >
          {lang.toUpperCase()}
        </button>

        {/* CTA pill */}
        <a
          href="#kontak"
          className="hidden sm:flex items-center gap-1.5 rounded-full bg-white pl-4 pr-1 py-1 text-[11px] font-bold tracking-tight text-[#111215] hover:bg-stone-100 transition-all duration-300 ease-spring hover:scale-105 active:scale-95 shadow-md"
        >
          <span>{isId ? 'Hubungi Saya' : 'Contact Me'}</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF511A] text-white shrink-0">
            <ArrowRight className="h-3 w-3" />
          </span>
        </a>
      </div>
    </header>
  );
}
