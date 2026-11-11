import { useCallback, useEffect, useState } from 'react';
import { content } from './content';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FocusBento from './components/FocusBento';
import ProjectLedger from './components/ProjectLedger';
import ProjectDrawer from './components/ProjectDrawer';
import Credentials from './components/Credentials';
import CertificateLightbox from './components/CertificateLightbox';
import Footer from './components/Footer';
import ResumeModal from './ResumeModal';

function shouldPreload() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return !sessionStorage.getItem('hasSeenPreloader');
  } catch {
    return false;
  }
}

export default function App() {
  const [lang, setLang] = useState('id');
  const [isDark, setIsDark] = useState(false);
  const [projectId, setProjectId] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPreloading, setIsPreloading] = useState(shouldPreload);

  const finishPreload = useCallback(() => setIsPreloading(false), []);
  const closeProject = useCallback(() => setProjectId(null), []);
  const closeCertificate = useCallback(() => setCertificate(null), []);
  const closeResume = useCallback(() => setIsResumeOpen(false), []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Lock scroll while the curtain is up (dialogs lock scroll themselves).
  useEffect(() => {
    if (!isPreloading) return undefined;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPreloading]);

  const t = content[lang];
  const project = t.projects.items.find((item) => item.id === projectId);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink transition-colors duration-500">
      {isPreloading && <Preloader onFinish={finishPreload} />}

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        {t.nav.skip}
      </a>

      <Navbar
        t={t.nav}
        lang={lang}
        onToggleLang={() => setLang(lang === 'id' ? 'en' : 'id')}
        isDark={isDark}
        onToggleTheme={() => setIsDark((v) => !v)}
      />

      <main id="main">
        <Hero t={t.hero} onOpenResume={() => setIsResumeOpen(true)} />
        <FocusBento t={t.focus} onOpenProject={setProjectId} />
        <ProjectLedger t={t.projects} onOpenProject={setProjectId} />
        <Credentials t={t.credentials} onOpenCertificate={setCertificate} />
      </main>

      <Footer t={t.footer} />

      {project && (
        <ProjectDrawer
          key={project.id}
          project={project}
          labels={t.projects.labels}
          onClose={closeProject}
        />
      )}

      {certificate && (
        <CertificateLightbox
          certificate={certificate}
          closeLabel={t.credentials.closeLabel}
          onClose={closeCertificate}
        />
      )}

      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} lang={lang} />
    </div>
  );
}
