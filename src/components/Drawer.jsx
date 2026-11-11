import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useDialogA11y } from '../hooks/useDialogA11y';

const SPRING_MS = 600;

/**
 * Right-side drawer shell shared by the project and stack panels.
 *
 * Anatomy: Header (Meta) → Scroll body (children) → optional Footer (Action)
 * Stays mounted through the spring exit animation and calls `onClose`
 * once the slide-out has finished.
 */
export default function Drawer({
  eyebrow,
  title,
  titleId = 'drawer-title',
  closeLabel,
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

  // Mount closed, then flip to open on the next frame so the transition runs.
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
        className={`absolute inset-0 bg-[#121316]/60 backdrop-blur-sm transition-opacity duration-500 ease-spring ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col border-l border-line bg-paper shadow-2xl transition-transform duration-[600ms] ease-spring ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
          <div className="min-w-0">
            <p className="type-micro text-muted">{eyebrow}</p>
            <h2
              id={titleId}
              className="type-display mt-2 text-balance text-2xl leading-tight sm:text-3xl"
            >
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={requestClose}
            aria-label={closeLabel}
            className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-muted transition-colors duration-500 ease-spring hover:bg-surface-hover hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-8 sm:px-8">
          {children}
        </div>

        {footer && (
          <footer className="border-t border-line px-6 py-4 sm:px-8">{footer}</footer>
        )}
      </aside>
    </div>
  );
}

