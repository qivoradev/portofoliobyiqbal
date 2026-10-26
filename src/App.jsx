import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Award,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  Mail,
  Layers,
  X,
} from 'lucide-react';

function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsappIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
      <path d="M8.5 9.5a5.5 5.5 0 0 0 6 6l1-.5a1 1 0 0 0 .5-1l-.5-1.5a1 1 0 0 0-1-.7l-1 .3a3.5 3.5 0 0 1-2.6-2.6l.3-1a1 1 0 0 0-.7-1l-1.5-.5a1 1 0 0 0-1 .5z" />
    </svg>
  );
}

const tools = [
  'Microsoft Excel',
  'SQL Databases',
  'Looker Studio',
  'Google Sheets',
  'Figma',
];

// Duplicate items for a seamless gapless infinite scroll loop
const marqueeItems = [...tools, ...tools, ...tools, ...tools];

const content = {
  id: {
    nav: {
      brand: 'Portofolio',
      about: 'Tentang',
      projects: 'Proyek',
      capabilities: 'Kemampuan',
    },
    hero: {
      badge: 'Terbuka untuk Peran Data Analyst',
      heading: "Halo, saya Iqbal Dwi Fathonah.",
      role: 'Data Analyst',
      description:
        'Lulusan Teknologi Informasi (2026). Berspesialisasi dalam mentransformasi skema basis data relasional kompleks menjadi model SQL yang bersih, dasbor Microsoft Excel terotomatisasi, dan wawasan eksekutif.',
      viewProjects: 'Lihat Proyek',
      downloadResume: 'Unduh Resume',
      assetCaption: 'Arsitektur Data & Struktur Analitis',
    },
    projects: {
      overline: 'Etalase Portofolio',
      title: 'Analisis Unggulan',
      subtitle:
        'Mentransformasi catatan transaksi mentah menjadi model analitis yang siap pakai untuk pengambilan keputusan strategis.',
      items: [
        {
          id: 'project-1',
          caseStudy: 'STUDI KASUS 01',
          metrics: 'Reduksi latensi query 42%',
          schemaTag: 'SKEMA RELASIONAL • SQL / EXCEL',
          title: 'Basis Data Penjualan Relasional & Pemodelan Pendapatan',
          description:
            'Merancang skema relasional 3NF untuk transaksi ritel bervolume tinggi. Membangun kueri SQL terindeks, pipeline penyerapan ETL otomatis, dan kalkulasi metrik retensi pendapatan kohort secara real-time.',
          tools: ['SQL', 'PostgreSQL', 'Excel', 'ETL Modeling'],
        },
        {
          id: 'project-2',
          caseStudy: 'STUDI KASUS 02',
          metrics: 'Mengotomasi 15+ jam/minggu pelaporan',
          schemaTag: 'DASBOR EKSEKUTIF • EXCEL / POWER BI',
          title: 'Dasbor Kinerja & Operasional Eksekutif',
          description:
            'Mengembangkan suite pelaporan Microsoft Excel multi-sheet otomatis dengan tabel pivot dinamis, model matriks VLOOKUP/INDEX-MATCH terotomatisasi, dan dasbor varians eksekutif.',
          tools: ['Excel', 'Pivot Tables', 'SQL', 'Power BI'],
        },
      ],
    },
    capabilities: {
      overline: 'Keahlian Teknis',
      title: 'Kemampuan Utama',
      subtitle:
        'Teknologi dan alat utama yang digunakan dalam pemodelan data, manipulasi SQL, pelaporan bisnis, dan perancangan dasbor.',
    },
    accreditations: {
      overline: 'Kredensial',
      title: 'Akreditasi',
      subtitle:
        'Sertifikasi teknis standar nasional dan internasional yang terverifikasi.',
      verified: 'Terverifikasi',
      items: [
        {
          title: 'BNSP Web Development',
          issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
          code: 'Sertifikasi Kompetensi Nasional',
          certificateImage: '/certificates/bnsp-web-dev.jpg',
          description:
            'Kualifikasi nasional yang mengesahkan standar kompetensi arsitektur sistem, desain basis data relasional, dan siklus pengembangan web.',
          icon: ShieldCheck,
        },
        {
          title: 'Certiport AI',
          issuer: 'Certiport - Pearson VUE',
          code: 'Sertifikasi Spesialis TI',
          certificateImage: '/certificates/certiport-ai.jpg',
          description:
            'Akreditasi terverifikasi dalam konsep dasar kecerdasan buatan, persiapan data machine learning, dan tata kelola data yang etis.',
          icon: Award,
        },
      ],
    },
    footer: {
      overline: 'Kontak',
      title: 'Mari Terhubung',
      description:
        'Tertarik berdiskusi mengenai pemodelan data, optimasi SQL, atau sistem pelaporan otomatis? Jangan ragu untuk menghubungi saya.',
      sendEmail: 'Kirim Email',
      copyright: '© 2026 Iqbal Dwi Fathonah. Hak Cipta Dilindungi.',
    },
  },
  en: {
    nav: {
      brand: 'Portfolio',
      about: 'About',
      projects: 'Projects',
      capabilities: 'Capabilities',
    },
    hero: {
      badge: 'Available for Data Analyst Roles',
      heading: "Hi, I'm Iqbal Dwi Fathonah.",
      role: 'Data Analyst',
      description:
        'Information Technology Graduate (2026). Specializing in transforming complex relational database schemas into clean SQL models, automated Microsoft Excel dashboards, and executive insights.',
      viewProjects: 'View Projects',
      downloadResume: 'Download Resume',
      assetCaption: 'Data Architecture & Analytical Structure',
    },
    projects: {
      overline: 'Portfolio Showcase',
      title: 'Featured Analysis',
      subtitle:
        'Transforming raw transactional records into actionable, decision-grade models.',
      items: [
        {
          id: 'project-1',
          caseStudy: 'CASE STUDY 01',
          metrics: '42% query latency reduction',
          schemaTag: 'RELATIONAL SCHEMA • SQL / EXCEL',
          title: 'Relational Sales Database & Revenue Modeling',
          description:
            'Engineered 3NF relational schemas for high-volume retail transactions. Built indexed SQL queries, automated ETL ingestion pipelines, and calculated real-time cohort revenue retention metrics.',
          tools: ['SQL', 'PostgreSQL', 'Excel', 'ETL Modeling'],
        },
        {
          id: 'project-2',
          caseStudy: 'CASE STUDY 02',
          metrics: 'Automated 15+ hours/wk reporting',
          schemaTag: 'EXECUTIVE DASHBOARD • EXCEL / POWER BI',
          title: 'Executive Operations & KPI Performance Dashboard',
          description:
            'Developed an automated multi-sheet Microsoft Excel reporting suite with dynamic pivot tables, automated VLOOKUP/INDEX-MATCH matrix models, and executive variance dashboards.',
          tools: ['Excel', 'Pivot Tables', 'SQL', 'Power BI'],
        },
      ],
    },
    capabilities: {
      overline: 'Technical Stack',
      title: 'Core Capabilities',
      subtitle:
        'Core technologies and tools deployed across data modeling, relational manipulation, and executive reporting.',
    },
    accreditations: {
      overline: 'Credentials',
      title: 'Accreditations',
      subtitle:
        'Verified national and international technical certifications.',
      verified: 'Verified',
      items: [
        {
          title: 'BNSP Web Development',
          issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
          code: 'Competency Certified',
          certificateImage: '/certificates/bnsp-web-dev.jpg',
          description:
            'National qualification certifying systematic system architecture, database design standards, and web application lifecycle.',
          icon: ShieldCheck,
        },
        {
          title: 'Certiport AI',
          issuer: 'Certiport - Pearson VUE',
          code: 'IT Specialist Certification',
          certificateImage: '/certificates/certiport-ai.jpg',
          description:
            'Verified accreditation in foundational artificial intelligence concepts, machine learning data preparation, and ethical data handling.',
          icon: Award,
        },
      ],
    },
    footer: {
      overline: 'Get In Touch',
      title: "Let's Connect",
      description:
        'Interested in discussing data modeling, SQL optimization, or automated reporting systems? Reach out to collaborate.',
      sendEmail: 'Send an Email',
      copyright: '© 2026 Iqbal Dwi Fathonah. All rights reserved.',
    },
  },
};

export default function App() {
  const [lang, setLang] = useState('id');
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. Floating Navbar with Compact Single-Button Language Switch */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto inline-flex items-center gap-4 sm:gap-6 px-4 sm:px-5 py-2 rounded-full bg-neutral-100/80 backdrop-blur-md border border-neutral-200/90 shadow-sm"
        >
          <a
            href="#about"
            id="nav-logo"
            className="flex items-center gap-2 group transition-opacity hover:opacity-80"
          >
            <span className="w-2 h-2 rounded-full bg-neutral-900 group-hover:scale-125 transition-transform" />
            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-900">
              {t.nav.brand}
            </span>
          </a>

          <div className="h-3.5 w-px bg-neutral-300/80" />

          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-neutral-600">
            <a
              href="#about"
              id="nav-link-about"
              className="hover:text-neutral-900 transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#projects"
              id="nav-link-projects"
              className="hover:text-neutral-900 transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#capabilities"
              id="nav-link-capabilities"
              className="hover:text-neutral-900 transition-colors"
            >
              {t.nav.capabilities}
            </a>
          </div>

          <div className="h-3.5 w-px bg-neutral-300/80" />

          {/* Single Compact Language Switch Button */}
          <button
            type="button"
            id="lang-toggle-btn"
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            aria-label={`Switch language. Current: ${lang.toUpperCase()}`}
            className="rounded-full px-2.5 py-0.5 text-xs sm:text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/80 transition-colors cursor-pointer select-none"
          >
            {lang.toUpperCase()}
          </button>
        </nav>
      </header>

      <main>
        {/* 2. Hero Section */}
        <section
          id="about"
          className="pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-48 md:pb-28 px-4 sm:px-6 max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-200 bg-white/60 mb-6 text-xs font-medium text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {t.hero.badge}
          </div>

          {/* H1 Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-neutral-900 tracking-tight leading-[1.1] mb-3">
            {t.hero.heading}
          </h1>

          {/* H2 Subtitle */}
          <h2 className="font-sans text-xl sm:text-2xl font-medium text-neutral-600 tracking-tight mb-6">
            {t.hero.role}
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
            <a
              href="#projects"
              id="btn-view-projects"
              className="rounded-full px-6 py-2.5 bg-neutral-900 text-white font-medium text-sm transition-all duration-200 hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 shadow-xs"
            >
              <span>{t.hero.viewProjects}</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              id="btn-download-resume"
              className="rounded-full px-6 py-2.5 bg-neutral-100 text-neutral-800 border border-neutral-200 font-medium text-sm transition-all duration-200 hover:bg-neutral-200/80 hover:border-neutral-300 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-neutral-600" />
              <span>{t.hero.downloadResume}</span>
            </a>
          </div>

          {/* Visual Asset Area */}
          <div className="w-full max-w-sm mx-auto">
            <div className="relative group">
              <img
                src="/hero-asset.jpg"
                alt="Visual Concept"
                className="w-full max-w-sm mx-auto object-contain pointer-events-none select-none rounded-2xl border border-neutral-200/80 shadow-xs transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="mt-3 text-[11px] font-mono tracking-widest uppercase text-neutral-600">
                {t.hero.assetCaption}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Featured Projects */}
        <section
          id="projects"
          className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-1">
                {t.projects.overline}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight">
                {t.projects.title}
              </h2>
            </div>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 sm:mt-0">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.projects.items.map((project) => (
              <article
                key={project.id}
                id={project.id}
                className="group border border-neutral-200 rounded-2xl overflow-hidden bg-white/40 hover:border-neutral-400/80 hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Placeholder */}
                  <div className="bg-neutral-200 h-56 relative overflow-hidden flex flex-col justify-between p-6 select-none">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#171717_1px,transparent_1px)] [background-size:16px_16px]" />
                    <div className="flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-wide bg-neutral-900/10 text-neutral-800 backdrop-blur-xs">
                        <Layers className="w-3 h-3 text-neutral-700" />
                        {project.caseStudy}
                      </span>
                      <span className="text-xs font-mono text-neutral-600">
                        {project.metrics}
                      </span>
                    </div>

                    <div className="z-10 mt-auto flex items-end justify-between">
                      <div className="font-mono text-xs text-neutral-600">
                        {project.schemaTag}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/80 border border-neutral-300/80 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-200">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-normal text-neutral-900 tracking-tight group-hover:text-neutral-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mt-2.5">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tool Tags */}
                <div className="px-6 pb-6 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="bg-[#DBEAFE] text-[#1E3A8A] text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Core Capabilities (Infinite Horizontal Text Marquee) */}
        <section
          id="capabilities"
          className="py-20 md:py-28 border-t border-neutral-200 overflow-hidden"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-1">
                  {t.capabilities.overline}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight">
                  {t.capabilities.title}
                </h2>
              </div>
              <p className="text-neutral-600 text-sm max-w-sm mt-2 sm:mt-0">
                {t.capabilities.subtitle}
              </p>
            </div>
          </div>

          {/* Marquee Banner Track */}
          <div className="w-full relative py-8 sm:py-12 border-y border-neutral-200/80 bg-neutral-100/40 select-none group overflow-hidden">
            {/* Subtle Gradient Fade Masks on Viewport Edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-10 bg-gradient-to-r from-neutral-50 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-10 bg-gradient-to-l from-neutral-50 to-transparent" />

            {/* Seamless Infinite Scrolling Track */}
            <div className="animate-marquee flex items-center whitespace-nowrap will-change-transform">
              {marqueeItems.map((tool, index) => (
                <div
                  key={`${tool}-${index}`}
                  className="inline-flex items-center"
                >
                  <span className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-neutral-300 tracking-tight transition-colors duration-300 hover:text-neutral-900 px-4 sm:px-8 cursor-default">
                    {tool}
                  </span>
                  <span className="text-xl sm:text-3xl text-neutral-400 select-none px-2 sm:px-4">
                    •
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Verified Accreditations */}
        <section
          id="accreditations"
          className="py-20 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 border-t border-neutral-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-1">
                {t.accreditations.overline}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight">
                {t.accreditations.title}
              </h2>
            </div>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 sm:mt-0">
              {t.accreditations.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.accreditations.items.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  onClick={() => setSelectedCert(cert.certificateImage)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedCert(cert.certificateImage);
                    }
                  }}
                  className="border border-neutral-200 rounded-2xl p-6 bg-white/40 hover:border-neutral-300 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-4 cursor-pointer group select-none"
                >
                  <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-800 shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5 text-neutral-800 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-xl font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                        {cert.title}
                      </h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {t.accreditations.verified}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-neutral-600 mt-1 mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Get In Touch (Footer) */}
        <footer
          id="contact"
          className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 border-t border-neutral-200 text-center"
        >
          <div className="max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-2">
              {t.footer.overline}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-neutral-900 tracking-tight mb-4">
              {t.footer.title}
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              {t.footer.description}
            </p>

            <a
              href="mailto:iqbaldwifathonah@example.com"
              id="footer-email-btn"
              className="rounded-full px-7 py-3 bg-neutral-900 text-white font-medium text-sm transition-all duration-200 hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2.5 shadow-xs mb-10"
            >
              <Mail className="w-4 h-4" />
              <span>{t.footer.sendEmail}</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-8 text-sm font-medium text-neutral-600 pt-6 border-t border-neutral-200/80">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                id="link-linkedin"
                className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-neutral-700" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                id="link-github"
                className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-neutral-700" />
                <span>GitHub</span>
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                id="link-whatsapp"
                className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
              >
                <WhatsappIcon className="w-4 h-4 text-neutral-700" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-neutral-500 mt-10">
              {t.footer.copyright}
            </p>
          </div>
        </footer>
      </main>

      {/* 7. Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              id="close-cert-modal"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate modal"
              className="absolute -top-12 right-0 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer select-none"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Certificate Image */}
            <img
              src={selectedCert}
              alt="Certificate"
              className="max-w-5xl max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl select-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
