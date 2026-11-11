import { useCallback, useEffect, useState } from 'react';
import { content } from './content';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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

  // Lock scroll while preloader is active
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
    <div className="min-h-screen bg-[#0C0D0E] font-sans text-[#F5F3ED] selection:bg-white selection:text-black antialiased overflow-x-hidden">
      {isPreloading && <Preloader onFinish={finishPreload} />}

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black font-semibold"
      >
        {t.nav.skip}
      </a>

      <Navbar
        t={t.nav}
        lang={lang}
        onToggleLang={() => setLang(lang === 'id' ? 'en' : 'id')}
      />

      <main id="main">
        {/* 1. Master Hero Bento Card */}
        <Hero
          t={t.hero}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. Curated Projects Section (2 Real Data Analyst Projects Only) */}
        <ProjectLedger
          t={t.projects}
          onOpenProject={setProjectId}
        />

        {/* 3. Verified Credentials */}
        <Credentials
          t={t.credentials}
          onOpenCertificate={setCertificate}
        />
      </main>

      {/* 4. Contact Footer */}
      <Footer t={t.footer} />

      {/* Modals & Lightboxes */}
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

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={closeResume}
        lang={lang}
      />
    </div>
  );
}
