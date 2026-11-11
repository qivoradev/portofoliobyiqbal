/**
 * Floating Capsule Navbar (Studio Keffi Replicant)
 * Centered floating pill with deep obsidian/stone blur background,
 * tracked uppercase brand on the left, navigation in the middle,
 * and white action capsule "Hubungi Saya" on the right.
 */
export default function Navbar({ t, lang, onToggleLang }) {
  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label={t.ariaLabel}
        className="pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 rounded-full border border-white/10 bg-stone-900/90 px-6 py-2.5 shadow-2xl backdrop-blur-md transition-all duration-300"
      >
        {/* Brand Kiri */}
        <a
          href="#top"
          className="text-xs font-bold uppercase tracking-widest text-white transition-opacity duration-300 ease-spring hover:opacity-75"
        >
          iqbaldf
        </a>

        {/* Menu Navigasi Tengah */}
        <ul className="hidden items-center gap-6 md:flex">
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

        {/* Tombol Aksi Kanan: Language Switch + Kapsul Putih "Hubungi Saya" */}
        <div className="flex items-center gap-2.5">
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
            className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition-all duration-300 ease-spring hover:bg-stone-200 hover:scale-105 active:scale-95"
          >
            {lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}
          </a>
        </div>
      </nav>
    </header>
  );
}
