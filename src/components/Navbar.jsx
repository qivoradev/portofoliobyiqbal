/**
 * Floating Pill Navbar (Persis Studio Keffi)
 * Container: max-w-2xl mx-auto mt-4 px-6 py-3 bg-[#16171A]/90 border border-white/10 backdrop-blur-md rounded-full
 * Left: "iqbaldf" (font-bold text-white text-xs tracking-widest uppercase)
 * Nav: Fokus, Proyek, Kontak (hidden sm:flex gap-6)
 * Right: Solid white capsule "Hubungi Saya"
 */
export default function Navbar({ t, lang, onToggleLang }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label={t.ariaLabel}
        className="pointer-events-auto flex w-full max-w-2xl items-center justify-between rounded-full border border-white/10 bg-[#16171A]/90 px-6 py-3 shadow-2xl backdrop-blur-md transition-all duration-300 mt-4"
      >
        {/* Brand Kiri */}
        <a
          href="#top"
          className="text-xs font-bold uppercase tracking-widest text-white transition-opacity duration-300 ease-spring hover:opacity-80"
        >
          {t.brand}
        </a>

        {/* Nav Links Tengah */}
        <ul className="hidden sm:flex items-center gap-6">
          {t.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium text-stone-400 transition-colors duration-300 ease-spring hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Aksi Kanan: Language Switch + Kapsul Putih "Hubungi Saya" */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={t.langAria}
            className="rounded-full px-2 py-0.5 text-[11px] font-mono text-stone-400 transition-colors hover:text-white cursor-pointer"
          >
            {lang.toUpperCase()}
          </button>

          <a
            href="#kontak"
            className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition-all duration-300 ease-spring hover:bg-stone-200 hover:scale-105 active:scale-95 shrink-0"
          >
            {t.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
