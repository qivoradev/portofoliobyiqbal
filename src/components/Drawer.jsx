import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useDialogA11y } from '../hooks/useDialogA11y';

const SPRING_MS = 500;

/**
 * Right-side drawer shell (Folioblox Matte Charcoal #141416)
 * Accessible dialog with focus trap and spring animation.
 */
export default function Drawer({
  eyebrow,
  title,
  titleId = 'drawer-title',
  closeLabel = 'Tutup',
  footer,
  onClose,
  children,
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const closeTimer = useRef(null);

  const requestClose = useCallback(() => {
    if (closeTimer.current) return;
    setOpen(false);
    closeTimer.current = setTimeout(onClose, SPRING_MS);
  }, [onClose]);

  useDialogA11y(panelRef, requestClose);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(true));
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        aria-hidden="true"
        onClick={requestClose}
        className={`absolute inset-0 bg-[#0A0A0B]/80 backdrop-blur-sm transition-opacity duration-500 ease-spring ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col border-l border-white/10 bg-[#141416] text-white shadow-2xl transition-transform duration-[500ms] ease-spring ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8 bg-[#141416]">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-wider text-[#FF511A] font-semibold">
              {eyebrow}
            </p>
            <h2
              id={titleId}
              className="type-display mt-2 text-balance text-2xl font-bold leading-tight sm:text-3xl text-white"
            >
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={requestClose}
            aria-label={closeLabel}
            className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-8 sm:px-8">
          {children}
        </div>

        {footer && (
          <footer className="border-t border-white/10 px-6 py-4 sm:px-8 bg-[#141416]">
            {footer}
          </footer>
        )}
      </aside>
    </div>
  );
}
