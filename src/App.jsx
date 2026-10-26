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
  Sun,
  Moon,
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
      badge: 'Terbuka untuk Kerja',
      name: 'Iqbal Dwi Fathonah',
      title: 'Data Analyst',
      heading: 'Data Analyst',
      role: 'Data Analyst',
      subheadline:
        'Lulusan Teknologi Informasi (2026). Berspesialisasi dalam mentransformasi data menjadi wawasan bisnis yang jelas melalui SQL dan Excel, didukung oleh pemahaman fundamental Artificial Intelligence.',
      description:
        'Lulusan Teknologi Informasi (2026). Berspesialisasi dalam mentransformasi data menjadi wawasan bisnis yang jelas melalui SQL dan Excel, didukung oleh pemahaman fundamental Artificial Intelligence.',
      viewProjects: 'Lihat Proyek',
      downloadResume: 'Unduh Resume',
    },
    projects: {
      overline: 'Etalase Portofolio',
      title: 'Analisis Unggulan',
      subtitle:
        'Mentransformasi catatan transaksi dan data operasional menjadi model analitis, wawasan mendalam, dan rekomendasi strategis.',
      items: [
        {
          id: 'nyc-traffic-safety',
          title: 'NYC Traffic Safety',
          imageUrl: '/projects/nyc-dashboard.png',
          shortDesc:
            'Dashboard Excel interaktif untuk menganalisis 238rb+ data kecelakaan NYC. Memetakan zona rawan, tren waktu, dan penyebab utama guna mendukung rekomendasi keselamatan jalan.',
          tools: ['Excel', 'Data Modeling', 'Root Cause Analysis', 'Dashboard'],
          modal: {
            metrics: [
              { label: 'Total Kasus', value: '238.421' },
              { label: 'Korban Cedera', value: '116.227' },
              { label: 'Rasio Cedera', value: '48,7%' },
            ],
            problemLabel: 'The Problem',
            problem:
              'Di mana kecelakaan paling sering terjadi, kapan waktu paling rawan, dan apa akar penyebab utamanya?',
            insightsLabel: 'Insights & Recommendations',
            insights: [
              {
                title: 'Faktor Distraksi',
                finding: '1 dari 4 insiden (25%) dipicu kelalaian pengemudi.',
                recommendation:
                  'Prioritaskan kampanye edukasi anti-distraksi dan tilang elektronik.',
              },
              {
                title: 'Konsentrasi Wilayah',
                finding: '59% kecelakaan terpusat di Brooklyn & Queens.',
                recommendation:
                  'Alokasikan patroli fisik dan rambu di persimpangan rawan pada dua area ini.',
              },
              {
                title: 'Jam Rawan',
                finding: 'Puncak insiden terjadi pukul 16:00–17:00.',
                recommendation:
                  'Perketat rekayasa lalu lintas menjelang jam 14:00-18:00.',
              },
            ],
          },
        },
        {
          id: 'superstore-profitability',
          title: 'Superstore Sales & Profitability',
          imageUrl: '/projects/superstore-dashboard.png',
          shortDesc:
            'Analisis data ritel untuk mengevaluasi profitabilitas regional, tren musiman, dan mengukur dampak pemberian tingkat diskon terhadap margin keuntungan bersih.',
          tools: [
            'Excel',
            'Financial Modeling',
            'Profitability Analysis',
            'Pricing Strategy',
          ],
          modal: {
            metrics: [
              { label: 'Total Sales', value: '$2.29M' },
              { label: 'Profit', value: '$285K' },
              { label: 'Profit Margin', value: '12.5%' },
            ],
            problemLabel: 'The Problem',
            problem:
              'Margin 12.5% tampak sehat, namun 19% transaksi berujung rugi. Di mana profit bocor dan apakah diskon menjadi penyebabnya?',
            insightsLabel: 'Insights & Recommendations',
            insights: [
              {
                title: 'Dampak Diskon',
                finding:
                  'Profit positif pada diskon <20%, berbalik rugi signifikan di atas 20%.',
                recommendation:
                  'Batasi batas atas diskon di angka 20% tanpa persetujuan khusus.',
              },
              {
                title: 'Kinerja Kategori & Wilayah',
                finding:
                  'Kategori Tables dan wilayah Texas mencatat kerugian terbesar.',
                recommendation:
                  'Tinjau ulang struktur harga produk yang merugi dan telusuri inefisiensi operasional di Texas.',
              },
              {
                title: 'Musiman',
                finding:
                  'Q1 lambat, memuncak di September & November.',
                recommendation:
                  'Siapkan stok sebelum September, dorong promo Q1 di bawah batas diskon 20%.',
              },
            ],
          },
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
          modalTitle: 'Sertifikat Kompetensi: Web Developer (BNSP)',
          description:
            'Kualifikasi nasional yang mengesahkan standar kompetensi arsitektur sistem, desain basis data relasional, dan siklus pengembangan web.',
          icon: ShieldCheck,
        },
        {
          title: 'Certiport AI',
          issuer: 'Certiport - Pearson VUE',
          code: 'Sertifikasi Spesialis TI',
          certificateImage: '/certificates/certiport-ai.jpg',
          modalTitle: 'Certiport: Artificial Intelligence Specialist',
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
      badge: 'Open to Work',
      name: 'Iqbal Dwi Fathonah',
      title: 'Data Analyst',
      heading: 'Data Analyst',
      role: 'Data Analyst',
      subheadline:
        'Information Technology Graduate (2026). Specializing in transforming data into actionable business insights through SQL and Excel, backed by a foundational understanding of Artificial Intelligence.',
      description:
        'Information Technology Graduate (2026). Specializing in transforming data into actionable business insights through SQL and Excel, backed by a foundational understanding of Artificial Intelligence.',
      viewProjects: 'View Projects',
      downloadResume: 'Download Resume',
    },
    projects: {
      overline: 'Portfolio Showcase',
      title: 'Featured Analysis',
      subtitle:
        'Transforming operational and transactional records into decision-grade models, executive insights, and strategic recommendations.',
      items: [
        {
          id: 'nyc-traffic-safety',
          title: 'NYC Traffic Safety',
          imageUrl: '/projects/nyc-dashboard.png',
          shortDesc:
            'Interactive Excel dashboard analyzing 238k+ NYC collision records to map high-risk zones, time trends, and root causes for actionable safety recommendations.',
          tools: ['Excel', 'Data Modeling', 'Root Cause Analysis', 'Dashboard'],
          modal: {
            metrics: [
              { label: 'Total Collisions', value: '238,421' },
              { label: 'Injuries', value: '116,227' },
              { label: 'Injury Rate', value: '48.7%' },
            ],
            problemLabel: 'The Problem',
            problem:
              'Where do collisions occur most frequently, when are peak risk hours, and what are the primary root causes?',
            insightsLabel: 'Insights & Recommendations',
            insights: [
              {
                title: 'Distraction Factor',
                finding:
                  '1 in 4 incidents (25%) were triggered by driver inattention.',
                recommendation:
                  'Prioritize anti-distraction educational campaigns and automated camera enforcement.',
              },
              {
                title: 'Geographic Concentration',
                finding:
                  '59% of collisions are concentrated in Brooklyn & Queens.',
                recommendation:
                  'Deploy targeted physical patrols and signage to high-risk intersections in these two boroughs.',
              },
              {
                title: 'Peak Danger Hours',
                finding:
                  'Incident peaks consistently between 16:00–17:00.',
                recommendation:
                  'Tighten proactive traffic engineering and signal timing ahead of the 14:00–18:00 window.',
              },
            ],
          },
        },
        {
          id: 'superstore-profitability',
          title: 'Superstore Sales & Profitability',
          imageUrl: '/projects/superstore-dashboard.png',
          shortDesc:
            'Retail data analysis to evaluate regional profitability, seasonal sales trends, and the direct impact of discount tiers on net profit margins.',
          tools: [
            'Excel',
            'Financial Modeling',
            'Profitability Analysis',
            'Pricing Strategy',
          ],
          modal: {
            metrics: [
              { label: 'Total Sales', value: '$2.29M' },
              { label: 'Profit', value: '$285K' },
              { label: 'Profit Margin', value: '12.5%' },
            ],
            problemLabel: 'The Problem',
            problem:
              'A 12.5% margin seems healthy, yet 19% of transactions resulted in net losses. Where is profit leaking, and are excessive discount tiers responsible?',
            insightsLabel: 'Insights & Recommendations',
            insights: [
              {
                title: 'Discount Impact',
                finding:
                  'Profit remains positive at discounts <20%, turning into steep losses beyond 20%.',
                recommendation:
                  'Enforce a strict 20% discount ceiling without executive override.',
              },
              {
                title: 'Category & Regional Breakdown',
                finding:
                  'The Tables sub-category and the Texas region register the heaviest deficits.',
                recommendation:
                  'Restructure pricing on deficit product lines and audit operational costs in Texas.',
              },
              {
                title: 'Seasonality',
                finding:
                  'Q1 sales remain slow, surging in September & November.',
                recommendation:
                  'Build warehouse inventory ahead of September and run selective Q1 promotions capped under 20% discount.',
              },
            ],
          },
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
          modalTitle: 'Sertifikat Kompetensi: Web Developer (BNSP)',
          description:
            'National qualification certifying systematic system architecture, database design standards, and web application lifecycle.',
          icon: ShieldCheck,
        },
        {
          title: 'Certiport AI',
          issuer: 'Certiport - Pearson VUE',
          code: 'IT Specialist Certification',
          certificateImage: '/certificates/certiport-ai.jpg',
          modalTitle: 'Certiport: Artificial Intelligence Specialist',
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Smart Cinematic Curtain Preloader States (Runs once per session)
  const [isPreloading, setIsPreloading] = useState(() => {
    try {
      return !sessionStorage.getItem('hasSeenPreloader');
    } catch {
      return false;
    }
  });
  const [progress, setProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (!isPreloading) return;

    // Smooth dynamic counter from 0 to 100%
    const duration = 1800; // ms
    const intervalTime = 20; // updates every 20ms
    const step = 100 / (duration / intervalTime);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(100, Math.floor(prev + step));
      });
    }, intervalTime);

    // Slide curtain up after counter completes
    const revealTimer = setTimeout(() => {
      setIsRevealed(true);
      try {
        sessionStorage.setItem('hasSeenPreloader', 'true');
      } catch {
        // ignore
      }
    }, 2100);

    // Unmount from DOM after slide-up animation
    const removeTimer = setTimeout(() => {
      setIsPreloading(false);
    }, 3100);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(revealTimer);
      clearTimeout(removeTimer);
    };
  }, [isPreloading]);

  // Typewriter effect state for "Analyst"
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = 'Analyst';
    let timer;

    if (!isDeleting) {
      if (typedText.length < word.length) {
        timer = setTimeout(() => {
          setTypedText(word.slice(0, typedText.length + 1));
        }, 150);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(word.slice(0, typedText.length - 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
        setSelectedProject(null);
      }
    };
    if (selectedCert || selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert, selectedProject]);

  useEffect(() => {
    if (isPreloading || selectedCert || selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPreloading, selectedCert, selectedProject]);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 transition-colors duration-300">
      {/* Cinematic Curtain Reveal Preloader */}
      {isPreloading && (
        <div
          id="cinematic-preloader"
          aria-hidden={isRevealed}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950 text-white transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isRevealed ? '-translate-y-full pointer-events-none' : 'translate-y-0'
          }`}
        >
          <div className="flex flex-col items-center justify-center text-center px-6 w-full max-w-sm">
            {/* Simple Eyebrow/Name */}
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
              iqbaldf
            </h2>
            {/* Subtitle */}
            <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase mb-12">
              Data Analyst Portfolio
            </p>

            {/* The Progress Bar Container */}
            <div className="w-full flex flex-col gap-3">
              <div className="flex justify-between text-xs tracking-widest uppercase text-neutral-500">
                <span>Loading</span>
                <span>{progress}%</span>
              </div>
              <div className="h-[1px] w-full bg-neutral-800 relative overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. Floating Navbar with Compact Single-Button Language Switch and Dark Mode Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto inline-flex items-center gap-3 sm:gap-6 px-4 sm:px-5 py-2 rounded-full bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800 shadow-sm transition-colors duration-300"
        >
          <a
            href="#about"
            id="nav-logo"
            className="flex items-center gap-2 group transition-opacity hover:opacity-80"
          >
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-50 group-hover:scale-125 transition-transform" />
            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-900 dark:text-neutral-50 transition-colors">
              {t.nav.brand}
            </span>
          </a>

          <div className="h-3.5 w-px bg-neutral-300/80 dark:bg-neutral-800 hidden md:block transition-colors" />

          {/* Middle Nav Links: Hidden on mobile (< md), visible on desktop (md+) */}
          <div className="hidden md:flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <a
              href="#about"
              id="nav-link-about"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#projects"
              id="nav-link-projects"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#capabilities"
              id="nav-link-capabilities"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              {t.nav.capabilities}
            </a>
          </div>

          <div className="h-3.5 w-px bg-neutral-300/80 dark:bg-neutral-800 transition-colors" />

          {/* Controls: Compact Language Switcher & Dark Mode Toggle */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              id="lang-toggle-btn"
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              aria-label={`Switch language. Current: ${lang.toUpperCase()}`}
              className="rounded-full px-2.5 py-1 text-xs sm:text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/80 dark:text-neutral-300 dark:hover:text-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer select-none"
            >
              {lang.toUpperCase()}
            </button>

            <button
              type="button"
              id="theme-toggle-btn"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="rounded-full p-1.5 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/80 dark:text-neutral-300 dark:hover:text-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer select-none"
            >
              {isDarkMode ? (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-700" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* 2. Hero Section (Split Two-Column Design) */}
        <section
          id="about"
          className="pt-32 pb-28 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-36 px-4 sm:px-6 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
            {/* Left Column (Text Content) */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 mb-6 text-xs font-medium text-neutral-600 dark:text-neutral-300 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t.hero.badge}
              </div>

              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-3">
                {t.hero.name}
              </span>

              {/* Main Title with Typewriter Effect on "Analyst" */}
              <h1 className="font-serif text-4xl md:text-6xl lg:text-[4.5rem] xl:text-7xl text-neutral-900 dark:text-white mb-4 leading-tight">
                Data <span className="text-neutral-500 dark:text-neutral-400">{typedText}</span>
                <span className="animate-pulse font-sans font-light ml-0.5 text-neutral-400 dark:text-neutral-500 select-none">|</span>
              </h1>

              {/* Sub-headline */}
              <p className="max-w-xl text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed mb-8 transition-colors">
                {t.hero.subheadline}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#projects"
                  id="btn-view-projects"
                  className="w-full max-w-[260px] sm:w-auto rounded-full px-6 py-2.5 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200 font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>{t.hero.viewProjects}</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  id="btn-download-resume"
                  className="w-full max-w-[260px] sm:w-auto rounded-full px-6 py-2.5 bg-neutral-100 text-neutral-800 border border-neutral-200 hover:bg-neutral-200/80 hover:border-neutral-300 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  <span>{t.hero.downloadResume}</span>
                </a>
              </div>
            </div>

            {/* Right Column (Profile Picture) */}
            <div className="relative flex justify-center lg:justify-end order-last">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-xl border-4 border-white dark:border-neutral-900 mx-auto lg:mx-0 lg:ml-auto">
                <img
                  src="/profile-picture.png"
                  alt="Iqbal Dwi Fathonah"
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Featured Projects */}
        <section
          id="projects"
          className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 block mb-1">
                {t.projects.overline}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors">
                {t.projects.title}
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-sm mt-2 sm:mt-0 transition-colors">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.projects.items.map((project, index) => (
              <article
                key={project.id}
                id={project.id}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedProject(project);
                  }
                }}
                className="group border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 sm:p-8 bg-neutral-50 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-700 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer select-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                      CASE STUDY 0{index + 1}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors">
                      <span>{lang === 'id' ? 'Buka Analisis' : 'View Deep Dive'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-neutral-900 dark:text-neutral-50 tracking-tight group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mt-3.5 transition-colors">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 bg-white dark:bg-neutral-800 transition-colors"
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
          className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800 overflow-hidden transition-colors"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 block mb-1">
                  {t.capabilities.overline}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors">
                  {t.capabilities.title}
                </h2>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-sm mt-2 sm:mt-0 transition-colors">
                {t.capabilities.subtitle}
              </p>
            </div>
          </div>

          {/* Marquee Banner Track */}
          <div className="w-full relative py-8 sm:py-12 border-y border-neutral-200/80 dark:border-neutral-800 bg-neutral-100/40 dark:bg-neutral-900/30 select-none group overflow-hidden transition-colors">
            {/* Subtle Gradient Fade Masks on Viewport Edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-10 bg-gradient-to-r from-neutral-50 dark:from-neutral-950 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-10 bg-gradient-to-l from-neutral-50 dark:from-neutral-950 to-transparent" />

            {/* Seamless Infinite Scrolling Track */}
            <div className="animate-marquee flex items-center whitespace-nowrap will-change-transform">
              {marqueeItems.map((tool, index) => (
                <div
                  key={`${tool}-${index}`}
                  className="inline-flex items-center"
                >
                  <span className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-neutral-300 dark:text-neutral-700 tracking-tight transition-colors duration-300 hover:text-neutral-900 dark:hover:text-neutral-100 px-4 sm:px-8 cursor-default">
                    {tool}
                  </span>
                  <span className="text-xl sm:text-3xl text-neutral-400 dark:text-neutral-600 select-none px-2 sm:px-4">
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
          className="py-20 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 border-t border-neutral-200 dark:border-neutral-800 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 block mb-1">
                {t.accreditations.overline}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors">
                {t.accreditations.title}
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-sm mt-2 sm:mt-0 transition-colors">
              {t.accreditations.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.accreditations.items.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  onClick={() =>
                    setSelectedCert({
                      url: cert.certificateImage,
                      title: cert.modalTitle,
                    })
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedCert({
                        url: cert.certificateImage,
                        title: cert.modalTitle,
                      });
                    }
                  }}
                  className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 bg-white/40 dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-4 cursor-pointer group select-none"
                >
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 shrink-0 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-neutral-50 dark:group-hover:text-neutral-950 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-neutral-800 dark:text-neutral-200 group-hover:text-white dark:group-hover:text-neutral-950 transition-colors duration-200" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                        {cert.title}
                      </h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                        {t.accreditations.verified}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 mt-1 mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
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
          className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 border-t border-neutral-200 dark:border-neutral-800 text-center transition-colors"
        >
          <div className="max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 block mb-2">
              {t.footer.overline}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-neutral-900 dark:text-neutral-50 tracking-tight mb-4 transition-colors">
              {t.footer.title}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-8 transition-colors">
              {t.footer.description}
            </p>

            <a
              href="mailto:iqbalfathonah20@gmail.com?subject=Peluang%20Kerja%20Data%20Analyst"
              id="footer-email-btn"
              className="rounded-full px-7 py-3 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200 font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2.5 shadow-xs mb-10"
            >
              <Mail className="w-4 h-4" />
              <span>{t.footer.sendEmail}</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400 pt-6 border-t border-neutral-200/80 dark:border-neutral-800 transition-colors">
              <a
                href="https://www.linkedin.com/in/iqbal-dwi-fathonah-56ba2a3b0/"
                target="_blank"
                rel="noopener noreferrer"
                id="link-linkedin"
                className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/qivoradev"
                target="_blank"
                rel="noopener noreferrer"
                id="link-github"
                className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                <span>GitHub</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=6282322231710&text=Halo%20Iqbal,%20saya%20melihat%20portofolio%20Data%20Analyst%20Anda%20dan%20ingin%20berdiskusi%20lebih%20lanjut."
                target="_blank"
                rel="noopener noreferrer"
                id="link-whatsapp"
                className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
              >
                <WhatsappIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-10 transition-colors">
              {t.footer.copyright}
            </p>
          </div>
        </footer>
      </main>

      {/* 7. Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950/90 p-4 md:p-8 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button at top-right */}
          <button
            type="button"
            id="close-cert-modal"
            onClick={() => setSelectedCert(null)}
            aria-label="Close certificate modal"
            className="absolute top-6 right-6 text-white hover:text-neutral-300 cursor-pointer select-none transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="flex flex-col items-center justify-center max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title Text */}
            <h3 className="text-white font-serif text-xl md:text-2xl mb-6 text-center">
              {selectedCert.title}
            </h3>

            {/* Certificate Image */}
            <img
              src={selectedCert.url}
              alt={selectedCert.title}
              className="w-auto max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-md shadow-2xl border border-neutral-800"
            />
          </div>
        </div>
      )}

      {/* 8. Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-xl shadow-2xl relative text-neutral-900 dark:text-neutral-50 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header */}
            <div className="sticky -top-6 sm:-top-8 -mt-6 sm:-mt-8 pt-6 sm:pt-8 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xs pb-4 mb-6 border-b border-neutral-200 dark:border-neutral-800 flex items-start justify-between gap-4 z-10 transition-colors">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
                  {lang === 'id' ? 'Detail Analisis Kasus' : 'Case Study Deep Dive'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-50 tracking-tight">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                type="button"
                id="close-project-modal"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Dashboard Showcase Screenshot */}
            {selectedProject.imageUrl && (
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg border border-neutral-200 dark:border-neutral-800 mb-8"
              />
            )}

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 mb-8 border-y border-neutral-200 dark:border-neutral-800">
              {selectedProject.modal.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                    {metric.label}
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 dark:text-neutral-50 tracking-tight">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* The Problem */}
            <div className="mb-8">
              <h4 className="font-serif text-2xl mb-4 border-b border-neutral-200 pb-2 dark:border-neutral-800">
                {selectedProject.modal.problemLabel}
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg mb-8">
                {selectedProject.modal.problem}
              </p>
            </div>

            {/* Insights & Recommendations */}
            <div className="mb-8">
              <h4 className="font-serif text-2xl mb-6 border-b border-neutral-200 pb-2 dark:border-neutral-800">
                {selectedProject.modal.insightsLabel}
              </h4>
              <div className="flex flex-col gap-8">
                {selectedProject.modal.insights.map((item, idx) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <h5 className="font-bold text-lg text-neutral-900 dark:text-white">
                      {idx + 1}. {item.title}
                    </h5>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {lang === 'id' ? 'Temuan: ' : 'Finding: '}
                      </span>
                      {item.finding}
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {lang === 'id' ? 'Rekomendasi: ' : 'Recommendation: '}
                      </span>
                      {item.recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="pt-6 mt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mr-2">
                {lang === 'id' ? 'Alat Analisis:' : 'Analysis Stack:'}
              </span>
              {selectedProject.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
