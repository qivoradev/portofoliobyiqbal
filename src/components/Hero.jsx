import { useEffect, useRef, useState } from 'react';
import {
  Monitor,
  Keyboard,
  NotebookPen,
  Coffee,
  Mail,
  MessageCircle,
  MousePointer2,
} from 'lucide-react';
import { CONTACT } from '../content';
import SplineStage from './SplineStage';
import { Reveal } from './ui';

/**
 * Hero Section — Center Stage Workstation (Mas Gem Style)
 *
 * Layout:
 * 1. Header (Centered):
 *    - Micro-tag & Status Badge
 *    - Headline ("Menghubungkan Logika Data dengan Presisi Sistem.")
 *    - Sub-headline
 * 2. Full-Width 3D Workstation Stage
 * 3. Minimalist Glassmorphism Mode Selector Dock
 */
export default function Hero({ t, onOpenResume, onOpenStack }) {
  const [coffeeOpen, setCoffeeOpen] = useState(false);
  const coffeeRef = useRef(null);

  // Close coffee popover on click outside or Escape
  useEffect(() => {
    if (!coffeeOpen) return undefined;
    const handleClickOutside = (e) => {
      if (coffeeRef.current && !coffeeRef.current.contains(e.target)) {
        setCoffeeOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setCoffeeOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [coffeeOpen]);

  const handleDockAction = (id) => {
    if (id === 'screen') {
      setCoffeeOpen(false);
      document.getElementById('proyek')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'keyboard') {
      setCoffeeOpen(false);
      onOpenStack();
    } else if (id === 'notes') {
      setCoffeeOpen(false);
      onOpenResume();
    } else if (id === 'coffee') {
      setCoffeeOpen((prev) => !prev);
    }
  };

  const getDockIcon = (id) => {
    switch (id) {
      case 'screen':
        return <Monitor className="h-4 w-4" aria-hidden="true" />;
      case 'keyboard':
        return <Keyboard className="h-4 w-4" aria-hidden="true" />;
      case 'notes':
        return <NotebookPen className="h-4 w-4" aria-hidden="true" />;
      case 'coffee':
        return <Coffee className="h-4 w-4" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="top"
      className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:pb-24 sm:pt-36 lg:pt-40"
    >
      {/* ── 1. Centered Header ── */}
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Top Badges: Micro-tag + Status Pill */}
        <Reveal className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="type-micro rounded-full border border-line bg-surface px-3 py-1 text-muted">
            {t.kicker}
          </span>
          <span className="type-micro inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1 text-muted">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-500"
            />
            {t.status}
          </span>
        </Reveal>

        {/* Headline */}
        <Reveal
          as="h1"
          delay={80}
          className="type-display mt-6 text-balance text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.08]"
        >
          {t.headline}
        </Reveal>

        {/* Sub-headline */}
        <Reveal
          as="p"
          delay={140}
          className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg"
        >
          {t.subheadline}
        </Reveal>
      </div>

      {/* ── 2. Full-Width 3D Workstation Stage ── */}
      <Reveal delay={200} className="relative mt-8 sm:mt-10">
        <SplineStage t={t} />

        {/* Floating Micro-hint (Mobile & Desktop) */}
        <div className="mt-3 flex justify-center sm:hidden">
          <span className="type-micro inline-flex items-center gap-2 rounded-full border border-line bg-paper/85 px-4 py-1.5 text-muted shadow-xs backdrop-blur-md">
            <MousePointer2 className="h-3 w-3 text-ink" aria-hidden="true" />
            {t.stageHint}
          </span>
        </div>
      </Reveal>

      {/* ── 3. Mode Selector Dock (Studio Keffi Glassmorphism) ── */}
      <Reveal delay={260} className="mt-8 flex flex-col items-center">
        <nav
          aria-label={t.dock.ariaLabel}
          className="relative inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-line bg-paper/85 p-1.5 shadow-md backdrop-blur-md sm:rounded-full sm:p-2 sm:gap-2"
        >
          {t.dock.items.map((item) => {
            const isCoffee = item.id === 'coffee';
            return (
              <div key={item.id} className="relative" ref={isCoffee ? coffeeRef : undefined}>
                <button
                  type="button"
                  onClick={() => handleDockAction(item.id)}
                  aria-expanded={isCoffee ? coffeeOpen : undefined}
                  aria-haspopup={isCoffee ? 'menu' : undefined}
                  className="group inline-flex cursor-pointer items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium text-ink transition-transform duration-500 ease-spring hover:scale-105 hover:bg-surface-hover active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:rounded-full sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  <span className="text-muted transition-colors duration-500 ease-spring group-hover:text-ink">
                    {getDockIcon(item.id)}
                  </span>
                  <span className="type-micro hidden text-muted sm:inline">
                    [{item.eyebrow}]
                  </span>
                  <span>{item.label}</span>
                </button>

                {/* Popover Menu untuk [ ☕ Kopi: Kolaborasi ] */}
                {isCoffee && coffeeOpen && (
                  <div
                    role="menu"
                    className="panel-in absolute bottom-full left-1/2 z-50 mb-3 -translate-x-1/2 flex min-w-[200px] flex-col gap-1 rounded-2xl border border-line bg-paper/95 p-2 shadow-xl backdrop-blur-lg"
                  >
                    <p className="type-micro px-3 py-1.5 text-muted">
                      {item.eyebrow} · {item.label}
                    </p>
                    <a
                      role="menuitem"
                      href={CONTACT.mailtoUrl}
                      className="group flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-ink transition-colors duration-300 ease-spring hover:bg-surface-hover"
                    >
                      <Mail className="h-4 w-4 text-muted group-hover:text-ink" />
                      <span>{t.dock.coffeeMenu.email}</span>
                    </a>
                    <a
                      role="menuitem"
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-ink transition-colors duration-300 ease-spring hover:bg-surface-hover"
                    >
                      <MessageCircle className="h-4 w-4 text-emerald-500" />
                      <span>{t.dock.coffeeMenu.whatsapp}</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </Reveal>
    </section>
  );
}
