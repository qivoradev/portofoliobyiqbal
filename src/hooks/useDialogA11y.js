import { useEffect, useRef } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Shared dialog behaviour for drawers / lightboxes:
 *  - moves focus inside on mount and restores it to the trigger on unmount
 *  - traps Tab / Shift+Tab inside the dialog
 *  - Escape calls `onRequestClose`
 *  - locks body scroll while mounted
 */
export function useDialogA11y(containerRef, onRequestClose) {
  const closeRef = useRef(onRequestClose);

  useEffect(() => {
    closeRef.current = onRequestClose;
  });

  useEffect(() => {
    const node = containerRef.current;
    const previouslyFocused = document.activeElement;
    const getFocusable = () =>
      node ? Array.from(node.querySelectorAll(FOCUSABLE)) : [];

    (getFocusable()[0] ?? node)?.focus({ preventScroll: true });

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        closeRef.current();
        return;
      }
      if (e.key !== 'Tab') return;

      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [containerRef]);
}

