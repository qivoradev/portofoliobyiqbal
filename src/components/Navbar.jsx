import { Moon, Sun } from 'lucide-react';

export default function Navbar({ t, lang, onToggleLang, isDark, onToggleTheme }) {
  const iconBtn =
    'inline-flex h-9 items-center justify-center rounded-full px-3 text-muted transition-colors duration-500 ease-spring hover:bg-surface-hover hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md transition-colors duration-500">
      <nav
        aria-label={t.ariaLabel}
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="text-xs font-semibold uppercase tracking-widest transition-opacity duration-500 ease-spring hover:opacity-60"
        >
          iqbaldf
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {t.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="type-micro text-muted transition-colors duration-500 ease-spring hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={t.langAria}
            className={`${iconBtn} type-micro cursor-pointer`}
          >
            {lang.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? t.themeToLight : t.themeToDark}
            className={`${iconBtn} cursor-pointer`}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
}

