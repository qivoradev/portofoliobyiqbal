import { useEffect, useRef, useState } from 'react';
import { X, Download, ExternalLink, FileText, Smartphone } from 'lucide-react';

/**
 * ResumeModal — PDF CV Preview Modal
 *
 * Props:
 *   isOpen   {boolean}  — controls visibility
 *   onClose  {function} — callback to close the modal
 *   lang     {string}   — 'id' | 'en' for bilingual label support
 *
 * File location: the PDF lives in /public (see PDF_PATH below) and is served
 * by Vite from the site root.
 */

const PDF_PATH = '/Resume_Iqbal_Dwi_Fathonah.pdf';
const PDF_DOWNLOAD_NAME = 'Resume_Iqbal_Dwi_Fathonah.pdf';

const labels = {
  id: {
    title: 'Curriculum Vitae',
    subtitle: 'Iqbal Dwi Fathonah — Data Analyst',
    download: 'Unduh PDF',
    openTab: 'Buka di Tab Baru',
    close: 'Tutup',
    mobileTitle: 'Pratinjau PDF tidak optimal di perangkat ini.',
    mobileDesc:
      'Untuk pengalaman terbaik, buka di tab baru atau unduh berkas PDF secara langsung.',
    mobileOpen: 'Buka PDF di Tab Baru',
    mobileDownload: 'Unduh Berkas PDF',
  },
  en: {
    title: 'Curriculum Vitae',
    subtitle: 'Iqbal Dwi Fathonah — Data Analyst',
    download: 'Download PDF',
    openTab: 'Open in New Tab',
    close: 'Close',
    mobileTitle: 'PDF preview is limited on this device.',
    mobileDesc:
      'For the best experience, open in a new tab or download the PDF directly.',
    mobileOpen: 'Open PDF in New Tab',
    mobileDownload: 'Download PDF File',
  },
};

/** Detect small-screen / mobile viewport where iframe PDF is unreliable */
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < breakpoint
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
}

export default function ResumeModal({ isOpen, onClose, lang = 'id' }) {
  const backdropRef = useRef(null);
  const isMobile = useIsMobile(640); // sm breakpoint
  const t = labels[lang] ?? labels.id;

  /* ── Keyboard: close on Escape ── */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  /* ── Body scroll lock ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* ── Backdrop click ── */
  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${t.title} – ${t.subtitle}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-neutral-950/85 backdrop-blur-sm p-3 sm:p-6 md:p-8"
      style={{ animation: 'resumeFadeIn 0.2s ease-out' }}
    >
      {/* ── Modal Container ── */}
      <div
        className="relative flex flex-col w-full max-w-4xl max-h-[90vh] md:h-[88vh] md:max-h-[88vh] bg-paper border border-line rounded-2xl shadow-2xl overflow-hidden transition-colors"
        style={{
          animation: 'resumeSlideUp 0.25s cubic-bezier(0.22,1,0.36,1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ══ HEADER / ACTION BAR ══ */}
        <div className="flex items-center justify-between gap-2.5 sm:gap-4 px-3.5 sm:px-6 py-3 sm:py-3.5 border-b border-line bg-surface shrink-0 transition-colors">
          {/* Left: Title */}
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
            <FileText className="w-4 h-4 text-muted shrink-0" />
            <div className="min-w-0">
              {/* Mobile (< md): Ringkas, "Curriculum Vitae" tanpa terpotong */}
              <h2 className="md:hidden text-sm font-semibold text-ink truncate leading-snug">
                {t.title}
              </h2>

              {/* Desktop (md+): Overline + Judul Lengkap beserta role */}
              <div className="hidden md:block">
                <p className="text-[11px] font-mono uppercase tracking-widest text-muted leading-none mb-1">
                  {t.title}
                </p>
                <h2 className="text-base font-medium text-ink truncate leading-snug">
                  {t.subtitle}
                </h2>
              </div>
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0 flex-shrink-0">
            {/* Download PDF */}
            <a
              href={PDF_PATH}
              download={PDF_DOWNLOAD_NAME}
              title={t.download}
              className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-ink text-paper hover:opacity-85 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] shadow-sm shrink-0"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">{t.download}</span>
            </a>

            {/* Open in New Tab */}
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              title={t.openTab}
              className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium border border-line text-ink bg-paper hover:bg-surface-hover transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">{t.openTab}</span>
            </a>

            {/* Divider */}
            <div className="w-px h-4 sm:h-5 bg-line mx-0.5 sm:mx-1 hidden sm:block" />

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label={t.close}
              title={t.close}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-muted hover:text-ink hover:bg-surface-hover transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ══ BODY: PDF Viewer ══ */}
        <div className="flex-1 overflow-hidden bg-surface min-h-0 w-full flex flex-col">
          {isMobile ? (
            /* ── Mobile Fallback Banner ── */
            <div className="flex flex-col items-center justify-center h-full min-h-[50vh] px-6 py-8 text-center gap-5 my-auto">
              <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-muted" />
              </div>
              <div>
                <p className="font-medium text-ink mb-1.5">
                  {t.mobileTitle}
                </p>
                <p className="text-sm text-muted max-w-xs leading-relaxed">
                  {t.mobileDesc}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                <a
                  href={PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-ink text-paper hover:opacity-85 transition-all duration-150 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.mobileOpen}
                </a>
                <a
                  href={PDF_PATH}
                  download={PDF_DOWNLOAD_NAME}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-line text-ink bg-paper hover:bg-surface-hover transition-all duration-150 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Download className="w-4 h-4" />
                  {t.mobileDownload}
                </a>
              </div>
            </div>
          ) : (
            /* ── Desktop: iframe PDF Preview ── */
            <div className="w-full h-full min-h-0 flex-1 overflow-hidden">
              <iframe
                src={`${PDF_PATH}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                title={`${t.title} – ${t.subtitle}`}
                className="w-full h-full border-0 block"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>

      {/* ── Keyframe Animations (injected once) ── */}
      <style>{`
        @keyframes resumeFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes resumeSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  );
}
