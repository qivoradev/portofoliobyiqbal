import { useCallback, useEffect, useState } from 'react';
import { content } from './content';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import CompetencyStrip from './components/CompetencyStrip';
import ProfileCardsSection from './components/ProfileCardsSection';
import CredentialsSection from './components/CredentialsSection';
import ProjectDrawer from './components/ProjectDrawer';
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
    <div className="min-h-screen w-full max-w-full bg-[#0A0A0B] font-sans text-white selection:bg-[#FF511A] selection:text-white antialiased overflow-x-hidden">
      {isPreloading && <Preloader onFinish={finishPreload} />}

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black font-semibold"
      >
        {t.nav.skip}
      </a>

      <main id="main" className="w-full overflow-x-hidden">
        {/* 1. Folioblox Sunset Hero Section (Transparent Navbar + Responsive Portrait + Asymmetric Typography) */}
        <Hero
          lang={lang}
          onToggleLang={() => setLang(lang === 'id' ? 'en' : 'id')}
        />

        {/* 2. Secondary Stack / Competency Strip */}
        <CompetencyStrip lang={lang} />

        {/* 3. Profile & 2 Curated Projects (2 Kolom Sejajar) */}
        <ProfileCardsSection
          lang={lang}
          onOpenProject={setProjectId}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 4. Section Terpisah: Kredensial & Sertifikasi (BNSP & Certiport) */}
        <CredentialsSection
          lang={lang}
          onOpenCertificate={setCertificate}
          certificates={t.credentials.items}
        />
      </main>

      {/* 5. Minimalist Footer */}
      <Footer lang={lang} />

      {/* Modals & Dialogs */}
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
          allCertificates={t.credentials.items}
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
