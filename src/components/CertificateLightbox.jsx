import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useDialogA11y } from '../hooks/useDialogA11y';

const SPRING_MS = 500;

/** Certificate lightbox — spring fade/scale in and out. */
export default function CertificateLightbox({ certificate, closeLabel, onClose }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const closeTimer = useRef(null);

  const requestClose = useCallback(() => {
    if (closeTimer.current) return;
    setOpen(false);
    closeTimer.current = setTimeout(onClose, SPRING_MS);
  }, [onClose]);

  useDialogA11y(dialogRef, requestClose);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(true));
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={certificate.modalTitle}
      tabIndex={-1}
      onClick={requestClose}
      className={`fixed inset-0 z-[70] flex items-center justify-center bg-[#121316]/85 p-4 backdrop-blur-sm transition-opacity duration-500 ease-spring md:p-8 ${
        open ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        type="button"
        onClick={requestClose}
        aria-label={closeLabel}
        className="absolute right-4 top-4 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[#F5F3ED] transition-colors duration-500 ease-spring hover:bg-[#F5F3ED]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F3ED] md:right-8 md:top-8"
      >
        <X className="h-6 w-6" />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className={`m-0 flex max-w-5xl flex-col items-center transition-transform duration-500 ease-spring ${
          open ? 'scale-100' : 'scale-95'
        }`}
      >
        <figcaption className="type-display mb-5 text-center text-lg text-[#F5F3ED] md:text-2xl">
          {certificate.modalTitle}
        </figcaption>
        <img
          src={certificate.image}
          alt={certificate.modalTitle}
          className="max-h-[75vh] w-auto max-w-full rounded-lg border border-[#F5F3ED]/10 object-contain shadow-2xl"
        />
      </figure>
    </div>
  );
}

