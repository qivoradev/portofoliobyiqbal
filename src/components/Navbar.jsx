import { ArrowRight } from 'lucide-react';

/**
 * Navbar Transparan di dalam bagian atas Hero (Folioblox Style)
 * - Kiri: Nama brand "iqbaldf" (font-bold text-white text-base tracking-tight)
 * - Kanan: Menu navigasi ringkas (Beranda, Tentang, Proyek, Kontak)
 *   + Tombol Pill Putih "Hubungi Saya" dengan lingkaran oranye (#FF511A) berisi panah putih
 */
export default function Navbar({ lang = 'id', onToggleLang }) {
  const isId = lang === 'id';

  const links = [
    { href: '#top', label: isId ? 'Beranda' : 'Home' },
    { href: '#tentang', label: isId ? 'Tentang' : 'About' },
    { href: '#proyek', label: isId ? 'Proyek' : 'Projects' },
    { href: '#kontak', label: isId ? 'Kontak' : 'Contact' },
  ];

  return (
    <header className="relative z-30 mx-auto w-full max-w-6xl px-6 pt-6 pb-4 flex items-center justify-between">
      {/* Brand Kiri */}
      <a
        href="#top"
        className="text-base font-bold tracking-tight text-white transition-opacity hover:opacity-85"
      >
        iqbaldf
      </a>

      {/* Navigasi Kanan */}
      <div className="flex items-center gap-5 sm:gap-7">
        <ul className="hidden sm:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Language switch */}
        <button
          type="button"
          onClick={onToggleLang}
          className="text-[11px] font-mono font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Switch language"
        >
          {lang.toUpperCase()}
        </button>

        {/* Tombol Pill Putih "Hubungi Saya" */}
        <a
          href="#kontak"
          className="flex items-center gap-2 rounded-full bg-white pl-4 pr-1.5 py-1.5 text-xs font-semibold text-[#111215] transition-all duration-300 ease-spring hover:bg-stone-100 hover:scale-105 active:scale-95 shadow-md"
        >
          <span>{isId ? 'Hubungi Saya' : 'Contact Me'}</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF511A] text-white shrink-0">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </header>
  );
}
