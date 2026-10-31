import { useEffect, useRef, useState } from 'react';
import { X, Download, ExternalLink, FileText, Eye, Smartphone } from 'lucide-react';

/**
 * ResumeModal — PDF CV Preview Modal
 *
 * Props:
 *   isOpen   {boolean}  — controls visibility
 *   onClose  {function} — callback to close the modal
 *   lang     {string}   — 'id' | 'en' for bilingual label support
 *
 * File location: Place your CV file at /public/cv.pdf
 * It will be accessible at the path /cv.pdf in your Vite app.
 */

const PDF_PATH = '/CV_IQBALDWIFATHONAH.pdf';
const PDF_DOWNLOAD_NAME = 'CV_IQBALDWIFATHONAH.pdf';

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
        className="relative flex flex-col w-full max-w-4xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden transition-colors"
        style={{
          maxHeight: '90vh',
          animation: 'resumeSlideUp 0.25s cubic-bezier(0.22,1,0.36,1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ══ HEADER / ACTION BAR ══ */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 shrink-0 transition-colors">
          {/* Left: Title */}
          <div className="flex items-center gap-2.5 min-w-0">
            <FileText className="w-4 h-4 text-neutral-500 dark:text-neutral-400 shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 leading-none mb-0.5 hidden sm:block">
                {t.title}
              </p>
              <h2 className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-50 truncate leading-snug">
                {t.subtitle}
              </h2>
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Download PDF */}
            <a
              href={PDF_PATH}
              download={PDF_DOWNLOAD_NAME}
              title={t.download}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">{t.openTab}</span>
            </a>

            {/* Divider */}
            <div className="w-px h-5 bg-neutral-200 dark:bg-neutral-700 hidden sm:block" />

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label={t.close}
              title={t.close}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ══ BODY: PDF Viewer ══ */}
        <div className="flex-1 overflow-hidden bg-neutral-100 dark:bg-neutral-950 min-h-0">
          {isMobile ? (
            /* ── Mobile Fallback Banner ── */
            <div className="flex flex-col items-center justify-center h-full min-h-[55vh] px-6 py-10 text-center gap-5">
              <div className="w-14 h-14 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-neutral-500 dark:text-neutral-400" />
              </div>
              <div>
                <p className="font-medium text-neutral-900 dark:text-neutral-50 mb-1.5">
                  {t.mobileTitle}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs leading-relaxed">
                  {t.mobileDesc}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                <a
                  href={PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-950 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-all duration-150 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.mobileOpen}
                </a>
                <a
                  href={PDF_PATH}
                  download={PDF_DOWNLOAD_NAME}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-150 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Download className="w-4 h-4" />
                  {t.mobileDownload}
                </a>
              </div>
            </div>
          ) : (
            /* ── Desktop: iframe PDF Preview ── */
            <iframe
              src={`${PDF_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title={`${t.title} – ${t.subtitle}`}
              className="w-full border-0"
              style={{ height: 'calc(85vh - 62px)' }}
              loading="lazy"
            />
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

/* ─────────────────────────────────────────────
   ResumeButton — standalone trigger button
   Usage: drop anywhere (Hero, About, Footer)
   ───────────────────────────────────────────── */
export function ResumeButton({ onClick, lang = 'id', variant = 'outline' }) {
  const label = lang === 'id' ? 'Lihat Resume / CV' : 'View Resume / CV';

  const base =
    'w-full max-w-[260px] sm:w-auto rounded-full px-6 py-2.5 font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 cursor-pointer select-none';

  const styles =
    variant === 'solid'
      ? 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200 shadow-xs'
      : 'bg-neutral-100 text-neutral-800 border border-neutral-200 hover:bg-neutral-200/80 hover:border-neutral-300 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:border-neutral-700';

  return (
    <button type="button" onClick={onClick} className={`${base} ${styles}`}>
      <Eye className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
      <span>{label}</span>
    </button>
  );
}

