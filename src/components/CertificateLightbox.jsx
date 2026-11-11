import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useDialogA11y } from '../hooks/useDialogA11y';

const SPRING_MS = 500;

/** Certificate lightbox — spring fade/scale with optional switcher between BNSP & Certiport */
export default function CertificateLightbox({
  certificate,
  allCertificates = [],
  closeLabel = 'Tutup',
  onClose,
}) {
  const [open, setOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(certificate);
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
      aria-label={activeCert.modalTitle}
      tabIndex={-1}
      onClick={requestClose}
      className={`fixed inset-0 z-[70] flex items-center justify-center bg-[#0A0A0B]/90 p-4 backdrop-blur-md transition-opacity duration-500 ease-spring md:p-8 ${
        open ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        type="button"
        onClick={requestClose}
        aria-label={closeLabel}
        className="absolute right-4 top-4 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white transition-colors duration-500 ease-spring hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-8 md:top-8"
      >
        <X className="h-6 w-6" />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className={`m-0 flex max-w-4xl flex-col items-center transition-transform duration-500 ease-spring ${
          open ? 'scale-100' : 'scale-95'
        }`}
      >
        {/* Switcher if multiple certificates exist */}
        {allCertificates.length > 1 && (
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            {allCertificates.map((cert) => {
              const active = cert.id === activeCert.id;
              return (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => setActiveCert(cert)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#FF511A] text-white shadow-md'
                      : 'bg-white/10 text-stone-300 hover:bg-white/20'
                  }`}
                >
                  {cert.title}
                </button>
              );
            })}
          </div>
        )}

        <figcaption className="type-display mb-4 text-center text-lg text-white md:text-2xl font-bold">
          {activeCert.modalTitle}
        </figcaption>
        <img
          src={activeCert.image}
          alt={activeCert.modalTitle}
          className="max-h-[70vh] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl bg-black"
        />
      </figure>
    </div>
  );
}
