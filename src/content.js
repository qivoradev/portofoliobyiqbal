/**
 * Portfolio content — bilingual (id / en).
 * Presentation lives in src/components; this file is data only.
 */

export const SPLINE_SCENE =
  'https://prod.spline.design/iMpB0532LSESjGkI/scene.splinecode';

export const CONTACT = {
  email: 'iqbalfathonah20@gmail.com',
  whatsappDisplay: '+6282322231710',
  whatsappUrl:
    'https://api.whatsapp.com/send?phone=6282322231710&text=Halo%20Iqbal,%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi%20lebih%20lanjut.',
  githubHandle: 'qivoradev',
  githubUrl: 'https://github.com/qivoradev',
  linkedinUrl: 'https://www.linkedin.com/in/iqbal-dwi-fathonah-56ba2a3b0/',
};

const NYC_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/14tUDF0U0uOKbzDJWcWhTAp6HI32FQJAM/edit?usp=sharing&ouid=103313291434112811548&rtpof=true&sd=true';
const PIZZA_DASHBOARD_URL =
  'https://datastudio.google.com/reporting/81574dad-5d2d-4a15-aafb-eefb54548a3e';
const PIZZA_IMAGE =
  'https://github.com/user-attachments/assets/3796a228-1677-4d5c-8af4-a43cbd412148';

/**
 * Terminal scripts for the Focus Bento (language neutral — it is code).
 * k: cmd | out | ok | comment
 */
export const TERMINALS = {
  data: {
    file: 'nyc_collisions.sql',
    lines: [
      { k: 'comment', t: '-- collisions by borough' },
      { k: 'cmd', t: 'SELECT borough, COUNT(*) AS collisions' },
      { k: 'cmd', t: 'FROM nyc_collisions' },
      { k: 'cmd', t: 'GROUP BY borough' },
      { k: 'cmd', t: 'ORDER BY collisions DESC;' },
      { k: 'out', t: '' },
      { k: 'out', t: '-- 238,421 rows scanned' },
      { k: 'ok', t: '✓ KPI matrix refreshed: injuries 116,227 · rate 48.7%' },
      { k: 'ok', t: '✓ Brooklyn + Queens = 59% of incidents' },
    ],
  },
  qa: {
    file: 'reqres.collection_run.log',
    lines: [
      { k: 'comment', t: '# Postman · Collection Runner · ReqRes API' },
      { k: 'out', t: 'GET   /api/users?page=2          200 OK' },
      { k: 'out', t: 'POST  /api/login                 200 OK' },
      { k: 'out', t: 'POST  /api/login (no password)   400 Bad Request' },
      { k: 'out', t: '' },
      { k: 'ok', t: '✓ status code matches expectation' },
      { k: 'ok', t: '✓ error message validated (negative case)' },
      { k: 'ok', t: '✓ critical flows covered: 100%' },
    ],
  },
  ai: {
    file: 'schema.sql · supabase',
    lines: [
      { k: 'comment', t: '-- postgresql relational schema on supabase' },
      { k: 'cmd', t: 'create table tasks (' },
      { k: 'cmd', t: '  id uuid primary key default gen_random_uuid(),' },
      { k: 'cmd', t: '  user_id uuid references auth.users not null,' },
      { k: 'cmd', t: '  title text not null,' },
      { k: 'cmd', t: "  status text default 'todo'," },
      { k: 'cmd', t: '  created_at timestamptz default now()' },
      { k: 'cmd', t: ');' },
      { k: 'cmd', t: 'alter table tasks enable row level security;' },
      { k: 'ok', t: '✓ schema applied on supabase cloud' },
    ],
  },
};

export const content = {
  id: {
    nav: {
      links: [
        { href: '#fokus', label: 'Fokus' },
        { href: '#proyek', label: 'Proyek' },
        { href: '#kredensial', label: 'Kredensial' },
        { href: '#kontak', label: 'Kontak' },
      ],
      ariaLabel: 'Navigasi utama',
      langAria: 'Ganti bahasa. Saat ini: ID',
      themeToLight: 'Beralih ke mode terang',
      themeToDark: 'Beralih ke mode gelap',
      skip: 'Lewati ke konten utama',
    },
    hero: {
      status: '[ STATUS: TERSEDIA UNTUK ROLE DATA & QA ]',
      headline: 'Menghubungkan Logika Data dengan Presisi Sistem.',
      intro:
        'Lulusan baru Teknologi Informasi (2026) yang memadukan ekstraksi basis data relasional (SQL & Excel), penjaminan mutu sistem (QA), dan fondasi kecerdasan buatan (AI) — mengubah data mentah menjadi keputusan yang terukur dan sistem yang dapat diandalkan.',
      stackLabel: 'Core Stack',
      stack: ['SQL / PostgreSQL', 'Excel Pivot', 'Postman', 'Supabase'],
      ctaPrimary: 'Eksplorasi Analisis',
      ctaSecondary: 'Resume / CV',
      stageBadge: '[ WORKSTATION NODE: ACTIVE ]',
      stageHint: 'Gunakan kursor untuk berinteraksi',
      stageLoading: 'Memuat workstation 3D',
      stageFallback: 'Pratinjau 3D tidak tersedia di perangkat ini.',
      stageAria: 'Workstation 3D interaktif',
    },
    focus: {
      overline: '[ 01 ] Area Fokus',
      title: 'Tiga disiplin, satu pola pikir analitis.',
      tabsAria: 'Area fokus',
      labels: { scope: 'Scope', tools: 'Tools', outcome: 'Outcome' },
      cta: 'Buka Studi Kasus Terkait',
      terminalAria: 'Cuplikan terminal untuk area fokus yang dipilih',
      tabs: [
        {
          id: 'data',
          index: '01',
          label: 'Data Analytics & BI',
          role: 'Data Analyst',
          vision:
            'Mengubah catatan transaksi dan operasional menjadi model analitis, KPI yang jelas, dan rekomendasi yang bisa langsung dieksekusi.',
          scope: ['Relational Modeling', 'KPI Hierarchy', 'Root Cause Analysis'],
          tools: ['PostgreSQL', 'Advanced Excel', 'Looker Studio'],
          outcome: '238k+ Baris Insiden Terpetakan',
          projectId: 'nyc-traffic-safety',
        },
        {
          id: 'qa',
          index: '02',
          label: 'Quality Assurance (QA)',
          role: 'QA Engineer',
          vision:
            'Menjamin alur kritis berjalan konsisten sebelum rilis lewat pengujian API otomatis dan validasi black box yang terdokumentasi.',
          scope: ['Automated API Tests', 'Black Box Validation', 'Usability (SUS)'],
          tools: ['Postman', 'ReqRes API', 'SauceDemo'],
          outcome: '100% Test Coverage Alur Kritis',
          projectId: 'qa-testing-suite',
        },
        {
          id: 'ai',
          index: '03',
          label: 'AI & Web Systems',
          role: 'Systems Builder',
          vision:
            'Merancang fondasi sistem yang rapi — skema relasional, backend cloud, dan alur kerja berbantuan AI — dengan dasar sertifikasi BNSP dan Certiport.',
          scope: ['Relational Schema Design', 'Cloud Backend', 'AI-assisted Workflow'],
          tools: ['Supabase', 'PostgreSQL', 'Antigravity IDE'],
          outcome: 'Skema Relasional Terdeploy di Supabase Cloud',
          projectId: 'antigravity-tracker',
        },
      ],
    },
    projects: {
      overline: '[ 02 ] Indeks Proyek',
      title: 'Studi kasus terpilih.',
      subtitle:
        'Empat pekerjaan yang memperlihatkan cara saya memodelkan data, menguji sistem, dan merancang fondasinya.',
      listAria: 'Daftar proyek',
      openLabel: 'Buka',
      labels: {
        problem: 'Problem',
        action: 'Action',
        result: 'Result',
        finding: 'Temuan',
        recommendation: 'Rekomendasi',
        stack: 'Analysis Stack',
        live: 'Buka Sumber Proyek',
        close: 'Tutup panel proyek',
        caseStudy: 'Studi Kasus',
      },
      items: [
        {
          id: 'nyc-traffic-safety',
          index: '01',
          title: 'NYC Traffic Safety & Collision Analysis',
          summary:
            'Studi kasus 238k+ data kecelakaan: zona rawan, tren waktu, dan penyebab utama.',
          kind: 'Data Analytics',
          tags: ['Excel Pivot', 'Matriks KPI', 'Root Cause Analysis'],
          image: '/projects/nyc-dashboard.png',
          link: NYC_SHEET_URL,
          metrics: [
            { label: 'Total Kasus', value: '238.421' },
            { label: 'Korban Cedera', value: '116.227' },
            { label: 'Rasio Cedera', value: '48,7%' },
          ],
          problem:
            'Di mana kecelakaan paling sering terjadi, kapan waktu paling rawan, dan apa akar penyebab utamanya?',
          action:
            'Memodelkan 238.421 baris data insiden dalam Excel Pivot, menyusun matriks KPI (total kasus, korban cedera, rasio cedera), lalu menelusuri akar penyebab berdasarkan wilayah, jam, dan faktor kontribusi dalam satu dashboard interaktif.',
          result: [
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
                'Perketat rekayasa lalu lintas menjelang jam 14:00–18:00.',
            },
          ],
          tools: ['Excel', 'Data Modeling', 'Root Cause Analysis', 'Dashboard'],
        },
        {
          id: 'pizza-sales-performance',
          index: '02',
          title: 'Pizza Sales Performance Dashboard',
          summary:
            'Dashboard Looker Studio: pemodelan pendapatan $817.8K dan pola jam sibuk operasional.',
          kind: 'Business Intelligence',
          tags: ['Looker Studio', 'Revenue Modeling', 'Peak Hour Analysis'],
          image: PIZZA_IMAGE,
          link: PIZZA_DASHBOARD_URL,
          metrics: [
            { label: 'Total Sales', value: '$817.8K' },
            { label: 'Pizza Terjual', value: '49.574' },
            { label: 'Avg Order Value', value: '$38,31' },
          ],
          problem:
            'Bagaimana tren penjualan pizza sepanjang tahun, kapan jam sibuk operasional terjadi, dan menu mana yang paling berkontribusi terhadap pendapatan bisnis?',
          action:
            'Membangun dashboard Business Intelligence di Looker Studio untuk mengevaluasi kinerja penjualan tahunan, memetakan pola jam sibuk, dan meninjau kontribusi kategori menu serta ukuran produk terhadap pendapatan.',
          result: [
            {
              title: 'Pola Jam Sibuk Operasional',
              finding:
                'Pesanan memuncak pada jam makan siang (12:00–13:00) dan makan malam (17:00–19:00), dengan hari Jumat dan Sabtu mencatat volume tertinggi.',
              recommendation:
                'Optimalkan alokasi staf dapur dan persiapan inventaris menjelang jam sibuk akhir pekan.',
            },
            {
              title: 'Kontribusi Kategori Menu',
              finding:
                'Kategori Classic dan The Classic Deluxe Pizza menjadi kontributor pendapatan terbesar dari total penjualan $817K+.',
              recommendation:
                'Amankan pasokan bahan baku produk terlaris dan terapkan bundling untuk mendongkrak kategori lain.',
            },
            {
              title: 'Distribusi Ukuran Pizza',
              finding:
                'Ukuran Large (L) mendominasi pembelian dengan kontribusi lebih dari 45% terhadap total pendapatan.',
              recommendation:
                'Terapkan upselling ukuran Large dengan penawaran add-on minuman atau makanan pendamping.',
            },
          ],
          tools: [
            'Looker Studio',
            'Excel',
            'Data Visualization',
            'Business Intelligence',
          ],
        },
        {
          id: 'qa-testing-suite',
          index: '03',
          title: 'End-to-End QA Testing Suite',
          summary:
            'Pengujian API ReqRes via Postman, test case SauceDemo, dan metrik usability SUS.',
          kind: 'Quality Assurance',
          tags: ['Postman', 'Black Box Testing', 'SUS'],
          metrics: [
            { label: 'Cakupan Alur Kritis', value: '100%' },
            { label: 'API Target', value: 'ReqRes' },
            { label: 'Aplikasi Uji', value: 'SauceDemo' },
          ],
          problem:
            'Bagaimana memastikan alur kritis (autentikasi, manajemen pengguna, hingga checkout) berjalan konsisten sebelum rilis, tanpa bergantung pada pengujian manual yang berulang?',
          action:
            'Menyusun koleksi Postman untuk endpoint ReqRes (skenario positif dan negatif dengan assertion otomatis), merancang test case black box untuk alur login–keranjang–checkout di SauceDemo, serta mengukur kegunaan dengan kuesioner System Usability Scale (SUS).',
          result: [
            {
              title: 'Cakupan Alur Kritis',
              finding:
                'Seluruh alur kritis tervalidasi melalui test case terdokumentasi (100% coverage).',
              recommendation:
                'Jalankan koleksi Postman sebagai regression check pada setiap perubahan API.',
            },
            {
              title: 'Validasi Skenario Negatif',
              finding:
                'Kredensial kosong atau tidak valid diverifikasi terhadap kode status dan pesan galat yang diharapkan.',
              recommendation:
                'Tambahkan data-driven test untuk variasi input batas.',
            },
            {
              title: 'Metrik Usability',
              finding:
                'Skor SUS dipakai sebagai ukuran kuantitatif pengalaman pengguna.',
              recommendation:
                'Ulangi pengukuran SUS setelah perbaikan untuk melihat tren.',
            },
          ],
          tools: ['Postman', 'Black Box Testing', 'Test Case Design', 'SUS'],
        },
        {
          id: 'antigravity-tracker',
          index: '04',
          title: 'Antigravity IDE Personal Tracker Architecture',
          summary:
            'Arsitektur Supabase Cloud DB dengan skema relasional PostgreSQL untuk pelacak personal.',
          kind: 'AI & Web Systems',
          tags: ['Supabase', 'PostgreSQL', 'Relational Schema'],
          metrics: [
            { label: 'Basis Data', value: 'PostgreSQL' },
            { label: 'Backend', value: 'Supabase' },
            { label: 'Pola Data', value: 'Relasional' },
          ],
          problem:
            'Bagaimana merancang penyimpanan data pelacak personal yang terstruktur, konsisten, dan dapat diakses dari cloud tanpa membangun server sendiri?',
          action:
            'Merancang skema relasional PostgreSQL (tabel, primary/foreign key, dan constraint) di Supabase Cloud, lalu menyiapkan akses data melalui API bawaan Supabase dalam alur kerja Antigravity IDE.',
          result: [
            {
              title: 'Skema Terstruktur',
              finding:
                'Relasi antar tabel menjaga integritas data lewat key dan constraint.',
              recommendation:
                'Dokumentasikan skema sebagai acuan sebelum menambah fitur baru.',
            },
            {
              title: 'Backend Tanpa Server Sendiri',
              finding:
                'Supabase menyediakan basis data cloud dan API siap pakai sehingga fokus tetap pada model data.',
              recommendation:
                'Aktifkan Row Level Security untuk membatasi akses per pengguna.',
            },
          ],
          tools: ['Supabase', 'PostgreSQL', 'Relational Schema', 'Antigravity IDE'],
        },
      ],
    },
    credentials: {
      overline: '[ 03 ] Kredensial',
      title: 'Sertifikasi.',
      listAria: 'Daftar sertifikasi',
      hint: 'Lihat sertifikat',
      closeLabel: 'Tutup pratinjau sertifikat',
      items: [
        {
          id: 'bnsp',
          scope: 'Kredensial Nasional',
          title: 'BNSP Web Development',
          detail: 'Standar Arsitektur Sistem & Basis Data Relasional',
          image: '/certificates/bnsp-web-dev.jpg',
          modalTitle: 'Sertifikat Kompetensi: Web Developer (BNSP)',
        },
        {
          id: 'certiport',
          scope: 'Kredensial Internasional',
          title: 'Certiport AI',
          detail:
            'Pearson VUE — Fondasi Kecerdasan Buatan & Machine Learning',
          image: '/certificates/certiport-ai.jpg',
          modalTitle: 'Certiport: Artificial Intelligence Specialist',
        },
      ],
    },
    footer: {
      overline: '[ 04 ] Kontak',
      statement: 'Mari Membangun Solusi Berbasis Data & Logika Sistem.',
      labels: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
      linkedinValue: 'Iqbal Dwi Fathonah',
      copyright: '© 2026 iqbaldf. All rights reserved.',
    },
  },

  en: {
    nav: {
      links: [
        { href: '#fokus', label: 'Focus' },
        { href: '#proyek', label: 'Projects' },
        { href: '#kredensial', label: 'Credentials' },
        { href: '#kontak', label: 'Contact' },
      ],
      ariaLabel: 'Main navigation',
      langAria: 'Switch language. Current: EN',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      skip: 'Skip to main content',
    },
    hero: {
      status: '[ STATUS: AVAILABLE FOR DATA & QA ROLES ]',
      headline: 'Connecting Data Logic with System Precision.',
      intro:
        'Recent Information Technology graduate (2026) combining relational database extraction (SQL & Excel), system quality assurance (QA), and artificial intelligence (AI) foundations — turning raw data into measurable decisions and dependable systems.',
      stackLabel: 'Core Stack',
      stack: ['SQL / PostgreSQL', 'Excel Pivot', 'Postman', 'Supabase'],
      ctaPrimary: 'Explore the Analysis',
      ctaSecondary: 'Resume / CV',
      stageBadge: '[ WORKSTATION NODE: ACTIVE ]',
      stageHint: 'Use your cursor to interact',
      stageLoading: 'Loading 3D workstation',
      stageFallback: '3D preview is unavailable on this device.',
      stageAria: 'Interactive 3D workstation',
    },
    focus: {
      overline: '[ 01 ] Focus Areas',
      title: 'Three disciplines, one analytical mindset.',
      tabsAria: 'Focus areas',
      labels: { scope: 'Scope', tools: 'Tools', outcome: 'Outcome' },
      cta: 'Open Related Case Study',
      terminalAria: 'Terminal excerpt for the selected focus area',
      tabs: [
        {
          id: 'data',
          index: '01',
          label: 'Data Analytics & BI',
          role: 'Data Analyst',
          vision:
            'Turning transactional and operational records into analytical models, clear KPIs, and recommendations teams can act on right away.',
          scope: ['Relational Modeling', 'KPI Hierarchy', 'Root Cause Analysis'],
          tools: ['PostgreSQL', 'Advanced Excel', 'Looker Studio'],
          outcome: '238k+ Incident Rows Mapped',
          projectId: 'nyc-traffic-safety',
        },
        {
          id: 'qa',
          index: '02',
          label: 'Quality Assurance (QA)',
          role: 'QA Engineer',
          vision:
            'Making sure critical flows behave consistently before release through automated API tests and documented black box validation.',
          scope: ['Automated API Tests', 'Black Box Validation', 'Usability (SUS)'],
          tools: ['Postman', 'ReqRes API', 'SauceDemo'],
          outcome: '100% Critical-Flow Test Coverage',
          projectId: 'qa-testing-suite',
        },
        {
          id: 'ai',
          index: '03',
          label: 'AI & Web Systems',
          role: 'Systems Builder',
          vision:
            'Designing tidy system foundations — relational schemas, cloud backends, and AI-assisted workflows — backed by BNSP and Certiport certifications.',
          scope: ['Relational Schema Design', 'Cloud Backend', 'AI-assisted Workflow'],
          tools: ['Supabase', 'PostgreSQL', 'Antigravity IDE'],
          outcome: 'Relational Schema Deployed on Supabase Cloud',
          projectId: 'antigravity-tracker',
        },
      ],
    },
    projects: {
      overline: '[ 02 ] Project Index',
      title: 'Selected case studies.',
      subtitle:
        'Four pieces of work showing how I model data, test systems, and design their foundations.',
      listAria: 'Project list',
      openLabel: 'Open',
      labels: {
        problem: 'Problem',
        action: 'Action',
        result: 'Result',
        finding: 'Finding',
        recommendation: 'Recommendation',
        stack: 'Analysis Stack',
        live: 'Open Project Source',
        close: 'Close project panel',
        caseStudy: 'Case Study',
      },
      items: [
        {
          id: 'nyc-traffic-safety',
          index: '01',
          title: 'NYC Traffic Safety & Collision Analysis',
          summary:
            'Case study of 238k+ collision records: high-risk zones, time trends, and root causes.',
          kind: 'Data Analytics',
          tags: ['Excel Pivot', 'KPI Matrix', 'Root Cause Analysis'],
          image: '/projects/nyc-dashboard.png',
          link: NYC_SHEET_URL,
          metrics: [
            { label: 'Total Collisions', value: '238,421' },
            { label: 'Injuries', value: '116,227' },
            { label: 'Injury Rate', value: '48.7%' },
          ],
          problem:
            'Where do collisions occur most frequently, when are peak risk hours, and what are the primary root causes?',
          action:
            'Modeled 238,421 incident rows in Excel Pivot, built a KPI matrix (total collisions, injuries, injury rate), then traced root causes by borough, hour, and contributing factor in a single interactive dashboard.',
          result: [
            {
              title: 'Distraction Factor',
              finding: '1 in 4 incidents (25%) were triggered by driver inattention.',
              recommendation:
                'Prioritize anti-distraction educational campaigns and automated camera enforcement.',
            },
            {
              title: 'Geographic Concentration',
              finding: '59% of collisions are concentrated in Brooklyn & Queens.',
              recommendation:
                'Deploy targeted patrols and signage to high-risk intersections in these two boroughs.',
            },
            {
              title: 'Peak Danger Hours',
              finding: 'Incident peaks consistently between 16:00–17:00.',
              recommendation:
                'Tighten proactive traffic engineering and signal timing ahead of the 14:00–18:00 window.',
            },
          ],
          tools: ['Excel', 'Data Modeling', 'Root Cause Analysis', 'Dashboard'],
        },
        {
          id: 'pizza-sales-performance',
          index: '02',
          title: 'Pizza Sales Performance Dashboard',
          summary:
            'Looker Studio dashboard: $817.8K revenue modeling and operational peak-hour patterns.',
          kind: 'Business Intelligence',
          tags: ['Looker Studio', 'Revenue Modeling', 'Peak Hour Analysis'],
          image: PIZZA_IMAGE,
          link: PIZZA_DASHBOARD_URL,
          metrics: [
            { label: 'Total Sales', value: '$817.8K' },
            { label: 'Pizzas Sold', value: '49,574' },
            { label: 'Avg Order Value', value: '$38.31' },
          ],
          problem:
            'How does sales performance trend throughout the year, when are peak operational hours, and which menu categories drive the greatest revenue contribution?',
          action:
            'Built a Business Intelligence dashboard in Looker Studio to evaluate annual sales performance, map peak-hour patterns, and review how menu categories and product sizes contribute to revenue.',
          result: [
            {
              title: 'Peak Operational Hours',
              finding:
                'Orders peak during lunch (12:00–13:00) and dinner (17:00–19:00), with Friday and Saturday registering the highest volumes.',
              recommendation:
                'Optimize kitchen staffing and inventory prep ahead of peak weekend evening rushes.',
            },
            {
              title: 'Menu Category Contribution',
              finding:
                'The Classic category and The Classic Deluxe Pizza lead revenue contribution across the $817K+ annual sales.',
              recommendation:
                'Secure supply of best-selling ingredients and use combo bundling to lift other categories.',
            },
            {
              title: 'Pizza Size Distribution',
              finding:
                'Large (L) pizzas dominate orders, generating over 45% of total sales revenue.',
              recommendation:
                'Implement upselling prompts for Large sizes paired with beverage and side offerings.',
            },
          ],
          tools: [
            'Looker Studio',
            'Excel',
            'Data Visualization',
            'Business Intelligence',
          ],
        },
        {
          id: 'qa-testing-suite',
          index: '03',
          title: 'End-to-End QA Testing Suite',
          summary:
            'ReqRes API testing in Postman, SauceDemo test cases, and SUS usability metrics.',
          kind: 'Quality Assurance',
          tags: ['Postman', 'Black Box Testing', 'SUS'],
          metrics: [
            { label: 'Critical-Flow Coverage', value: '100%' },
            { label: 'Target API', value: 'ReqRes' },
            { label: 'App Under Test', value: 'SauceDemo' },
          ],
          problem:
            'How can critical flows (authentication, user management, through checkout) be confirmed to behave consistently before release, without relying on repetitive manual testing?',
          action:
            'Built a Postman collection for the ReqRes endpoints (positive and negative scenarios with automated assertions), designed black box test cases for the SauceDemo login–cart–checkout flow, and measured usability with the System Usability Scale (SUS) questionnaire.',
          result: [
            {
              title: 'Critical-Flow Coverage',
              finding:
                'All critical flows were validated through documented test cases (100% coverage).',
              recommendation:
                'Run the Postman collection as a regression check on every API change.',
            },
            {
              title: 'Negative Scenario Validation',
              finding:
                'Empty or invalid credentials were verified against expected status codes and error messages.',
              recommendation:
                'Add data-driven tests for boundary input variations.',
            },
            {
              title: 'Usability Metric',
              finding:
                'The SUS score serves as a quantitative measure of user experience.',
              recommendation:
                'Re-measure SUS after fixes to observe the trend.',
            },
          ],
          tools: ['Postman', 'Black Box Testing', 'Test Case Design', 'SUS'],
        },
        {
          id: 'antigravity-tracker',
          index: '04',
          title: 'Antigravity IDE Personal Tracker Architecture',
          summary:
            'Supabase Cloud DB architecture with a PostgreSQL relational schema for a personal tracker.',
          kind: 'AI & Web Systems',
          tags: ['Supabase', 'PostgreSQL', 'Relational Schema'],
          metrics: [
            { label: 'Database', value: 'PostgreSQL' },
            { label: 'Backend', value: 'Supabase' },
            { label: 'Data Pattern', value: 'Relational' },
          ],
          problem:
            'How can personal tracker data be stored in a structured, consistent way and reached from the cloud without building a custom server?',
          action:
            'Designed a PostgreSQL relational schema (tables, primary/foreign keys, constraints) on Supabase Cloud, then set up data access through Supabase’s built-in API within an Antigravity IDE workflow.',
          result: [
            {
              title: 'Structured Schema',
              finding:
                'Relations between tables protect data integrity through keys and constraints.',
              recommendation:
                'Document the schema as the reference before adding new features.',
            },
            {
              title: 'Backend Without a Custom Server',
              finding:
                'Supabase provides a cloud database and a ready-to-use API, keeping the focus on the data model.',
              recommendation:
                'Enable Row Level Security to restrict access per user.',
            },
          ],
          tools: ['Supabase', 'PostgreSQL', 'Relational Schema', 'Antigravity IDE'],
        },
      ],
    },
    credentials: {
      overline: '[ 03 ] Credentials',
      title: 'Certifications.',
      listAria: 'Certification list',
      hint: 'View certificate',
      closeLabel: 'Close certificate preview',
      items: [
        {
          id: 'bnsp',
          scope: 'National Credential',
          title: 'BNSP Web Development',
          detail: 'System Architecture Standards & Relational Databases',
          image: '/certificates/bnsp-web-dev.jpg',
          modalTitle: 'Certificate of Competence: Web Developer (BNSP)',
        },
        {
          id: 'certiport',
          scope: 'International Credential',
          title: 'Certiport AI',
          detail:
            'Pearson VUE — Artificial Intelligence & Machine Learning Foundations',
          image: '/certificates/certiport-ai.jpg',
          modalTitle: 'Certiport: Artificial Intelligence Specialist',
        },
      ],
    },
    footer: {
      overline: '[ 04 ] Contact',
      statement: 'Let’s Build Data-Driven Solutions & Sound System Logic.',
      labels: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
      linkedinValue: 'Iqbal Dwi Fathonah',
      copyright: '© 2026 iqbaldf. All rights reserved.',
    },
  },
};

