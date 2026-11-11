/**
 * Content definition for iqbaldf portfolio
 * Studio Keffi Editorial Architecture (Bilingual ID / EN)
 */

export const CONTACT = {
  email: 'iqbalfathonah20@gmail.com',
  mailtoUrl:
    'mailto:iqbalfathonah20@gmail.com?subject=Peluang%20Kerja%20Data%20Analyst',
  whatsappDisplay: '+6282322231710',
  whatsappUrl:
    'https://api.whatsapp.com/send?phone=6282322231710&text=Halo%20Iqbal,%20saya%20melihat%20portofolio%20Data%20Analyst%20Anda%20dan%20ingin%20berdiskusi%20lebih%20lanjut.',
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

export const content = {
  id: {
    nav: {
      brand: 'iqbaldf',
      links: [
        { href: '#top', label: 'Fokus' },
        { href: '#proyek', label: 'Proyek' },
        { href: '#kontak', label: 'Kontak' },
      ],
      cta: 'Hubungi Saya',
      ariaLabel: 'Navigasi utama',
      langAria: 'Ganti bahasa. Saat ini: ID',
      skip: 'Lewati ke konten utama',
    },
    hero: {
      kicker: '[ DATA INTELLIGENCE & INSIGHTS ]',
      headline: 'Data yang Berbicara, Keputusan yang Terukur.',
      description:
        'Lulusan Baru Teknologi Informasi (2026). Mentransformasi jutaan baris data mentah dan catatan transaksi menjadi arsitektur analitik, visualisasi dasbor interaktif, serta wawasan bisnis strategis.',
      scopeLabel: '[SCOPE]',
      scopeValue:
        'Pemodelan Data · Dashboard BI · Analisis Performa Penjualan · Keselamatan Publik',
      stackLabel: '[STACK]',
      stackValue:
        'SQL (PostgreSQL) · Looker Studio · Advanced Microsoft Excel (Pivot Engine)',
      statusLabel: '[STATUS]',
      statusValue:
        'Yudisium Selesai (2026) · Terbuka untuk Posisi Data Analyst',
      ctaPrimary: 'Lihat Analisis Kasus ↓',
      ctaResume: 'Resume / CV',
      metrics: {
        header: 'METRIC SNAPSHOT',
        series: '(01)',
        metric1: {
          value: '238,421+',
          label: 'Kasus Lalu Lintas Dianalisis (NYC Dataset)',
        },
        metric2: {
          value: '$817.8K',
          label: 'Volume Pendapatan Dimodelkan (Maven Pizza)',
        },
        badge: '100% Data Cleaning & Validation',
      },
    },
    projects: {
      overline: '[ PROYEK PILIHAN ]',
      title: 'Proyek Analisis Unggulan',
      subtitle:
        'Dua studi kasus analitik nyata yang menguji pemodelan data relasional, visualisasi dasbor bisnis, dan penarikan wawasan strategis.',
      openLabel: 'Buka Studi Kasus',
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
          title: 'NYC Motor Vehicle Collisions Analysis',
          summary:
            'Dashboard Excel interaktif menganalisis 238k+ insiden NYC, memetakan zona rawan wilayah, rasio cedera/fatalitas, dan tren waktu.',
          kind: 'Data Analytics',
          tags: [
            'Microsoft Excel',
            'PivotTables',
            'KPI Safety Slicers',
            'Root Cause Analysis',
          ],
          image: '/projects/nyc-dashboard.png',
          link: NYC_SHEET_URL,
          metrics: [
            { label: 'Total Kasus', value: '238.421' },
            { label: 'Korban Cedera', value: '116.227' },
            { label: 'Rasio Cedera', value: '48,7%' },
          ],
          problem:
            'Di mana kecelakaan paling sering terjadi di New York City, kapan waktu paling rawan, dan apa akar penyebab utamanya?',
          action:
            'Memodelkan 238.421 baris data insiden dalam Excel Pivot Engine, menyusun matriks KPI (total kasus, korban cedera, rasio cedera), lalu menelusuri akar penyebab berdasarkan wilayah (borough), jam operasional, dan faktor kelalaian pengemudi dalam satu dashboard interaktif.',
          result: [
            {
              title: 'Faktor Distraksi',
              finding: '1 dari 4 insiden (25%) dipicu kelalaian pengemudi (driver inattention).',
              recommendation:
                'Prioritaskan kampanye edukasi anti-distraksi dan penegakan tilang elektronik pada zona rawan.',
            },
            {
              title: 'Konsentrasi Wilayah',
              finding: '59% kecelakaan terpusat di dua wilayah: Brooklyn & Queens.',
              recommendation:
                'Alokasikan patroli fisik dan rambu di persimpangan dengan frekuensi kecelakaan tertinggi.',
            },
            {
              title: 'Jam Rawan',
              finding: 'Puncak insiden terjadi pada pukul 16:00–17:00 waktu setempat.',
              recommendation:
                'Perketat rekayasa lalu lintas dan sinkronisasi lampu persimpangan menjelang jam 14:00–18:00.',
            },
          ],
          tools: [
            'Microsoft Excel',
            'PivotTables',
            'Data Modeling',
            'Root Cause Analysis',
          ],
        },
        {
          id: 'pizza-sales-performance',
          index: '02',
          title: 'Pizza Sales Performance Dashboard',
          summary:
            'Dasbor Business Intelligence via Looker Studio untuk mengevaluasi pendapatan tahunan ($817K+), pola jam operasional puncak, dan profit menu.',
          kind: 'Business Intelligence',
          tags: [
            'Google Looker Studio',
            'SQL Extraction',
            'Revenue Optimization',
            'Menu Engineering',
          ],
          image: PIZZA_IMAGE,
          link: PIZZA_DASHBOARD_URL,
          metrics: [
            { label: 'Total Sales', value: '$817.8K' },
            { label: 'Pizza Terjual', value: '49.574' },
            { label: 'Avg Order Value', value: '$38,31' },
          ],
          problem:
            'Bagaimana tren penjualan pizza sepanjang tahun, kapan jam operasional puncak terjadi, dan menu mana yang paling berkontribusi terhadap pendapatan bisnis?',
          action:
            'Membangun dashboard Business Intelligence interaktif di Google Looker Studio untuk mengevaluasi kinerja penjualan tahunan, memetakan pola jam sibuk makan siang dan malam, serta meninjau kontribusi kategori menu dan ukuran pizza terhadap margin pendapatan.',
          result: [
            {
              title: 'Pola Jam Sibuk Operasional',
              finding:
                'Pesanan memuncak pada jam makan siang (12:00–13:00) dan makan malam (17:00–19:00), dengan hari Jumat dan Sabtu mencatat volume pesanan tertinggi.',
              recommendation:
                'Optimalkan alokasi staf dapur dan persiapan bahan baku menjelang jam sibuk akhir pekan.',
            },
            {
              title: 'Kontribusi Kategori Menu',
              finding:
                'Kategori Classic dan The Classic Deluxe Pizza menjadi kontributor pendapatan terbesar dari total penjualan $817K+.',
              recommendation:
                'Amankan pasokan bahan baku produk terlaris dan terapkan paket bundling untuk mendongkrak kategori menu lainnya.',
            },
            {
              title: 'Distribusi Ukuran Pizza',
              finding:
                'Ukuran Large (L) mendominasi pembelian pelanggan dengan kontribusi lebih dari 45% terhadap total pendapatan.',
              recommendation:
                'Terapkan upselling ukuran Large dengan penawaran add-on minuman atau makanan pendamping.',
            },
          ],
          tools: [
            'Google Looker Studio',
            'SQL Extraction',
            'Data Visualization',
            'Business Intelligence',
          ],
        },
      ],
    },
    credentials: {
      overline: '[ KREDENSIAL TERVERIFIKASI ]',
      title: 'Sertifikasi Kompetensi',
      listAria: 'Daftar sertifikasi',
      hint: 'Lihat Sertifikat',
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
      overline: '[ HUBUNGI SAYA ]',
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
      brand: 'iqbaldf',
      links: [
        { href: '#top', label: 'Focus' },
        { href: '#proyek', label: 'Projects' },
        { href: '#kontak', label: 'Contact' },
      ],
      cta: 'Contact Me',
      ariaLabel: 'Main navigation',
      langAria: 'Switch language. Current: EN',
      skip: 'Skip to main content',
    },
    hero: {
      kicker: '[ DATA INTELLIGENCE & INSIGHTS ]',
      headline: 'Data that Speaks, Decisions that Measure.',
      description:
        'Recent Information Technology Graduate (2026). Transforming millions of raw data points and transactional records into analytical architecture, interactive dashboards, and executive insights.',
      scopeLabel: '[SCOPE]',
      scopeValue:
        'Data Modeling · BI Dashboards · Sales Performance Analytics · Public Safety Insights',
      stackLabel: '[STACK]',
      stackValue:
        'SQL (PostgreSQL) · Looker Studio · Advanced Microsoft Excel (Pivot Engine)',
      statusLabel: '[STATUS]',
      statusValue:
        'Graduated (2026) · Open for Data Analyst Opportunities',
      ctaPrimary: 'View Case Studies ↓',
      ctaResume: 'Resume / CV',
      metrics: {
        header: 'METRIC SNAPSHOT',
        series: '(01)',
        metric1: {
          value: '238,421+',
          label: 'Traffic Incidents Analyzed (NYC Dataset)',
        },
        metric2: {
          value: '$817.8K',
          label: 'Annual Revenue Modeled (Maven Pizza)',
        },
        badge: '100% Data Cleaning & Validation',
      },
    },
    projects: {
      overline: '[ SELECTED WORK ]',
      title: 'Featured Data Analysis',
      subtitle:
        'Two real analytical case studies demonstrating relational data modeling, BI visualization, and strategic business recommendations.',
      openLabel: 'Open Case Study',
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
          title: 'NYC Motor Vehicle Collisions Analysis',
          summary:
            'Interactive Excel dashboard analyzing 238k+ NYC collision records to map high-risk zones, casualty rates, and temporal trends.',
          kind: 'Data Analytics',
          tags: [
            'Microsoft Excel',
            'PivotTables',
            'KPI Safety Slicers',
            'Root Cause Analysis',
          ],
          image: '/projects/nyc-dashboard.png',
          link: NYC_SHEET_URL,
          metrics: [
            { label: 'Total Collisions', value: '238,421' },
            { label: 'Injuries', value: '116,227' },
            { label: 'Injury Rate', value: '48.7%' },
          ],
          problem:
            'Where do collisions occur most frequently in NYC, when are peak danger hours, and what are the primary contributing factors?',
          action:
            'Modeled 238,421 incident rows in the Excel Pivot Engine, built safety KPI matrices (total incidents, injuries, injury rate), and isolated root causes across boroughs, hours, and driver inattention in a single unified dashboard.',
          result: [
            {
              title: 'Distraction Factor',
              finding: '1 in 4 incidents (25%) were triggered by driver inattention.',
              recommendation:
                'Prioritize anti-distraction educational campaigns and automated camera enforcement at risk intersections.',
            },
            {
              title: 'Geographic Concentration',
              finding: '59% of collisions are concentrated in Brooklyn and Queens.',
              recommendation:
                'Deploy targeted physical patrols and signage to high-frequency collision corridors in these two boroughs.',
            },
            {
              title: 'Peak Danger Hours',
              finding: 'Incident peaks consistently between 16:00 and 17:00.',
              recommendation:
                'Tighten proactive traffic engineering and signal timing ahead of the 14:00–18:00 rush.',
            },
          ],
          tools: [
            'Microsoft Excel',
            'PivotTables',
            'Data Modeling',
            'Root Cause Analysis',
          ],
        },
        {
          id: 'pizza-sales-performance',
          index: '02',
          title: 'Pizza Sales Performance Dashboard',
          summary:
            'Business Intelligence dashboard via Looker Studio evaluating annual sales ($817K+), peak operating hours, and menu profitability.',
          kind: 'Business Intelligence',
          tags: [
            'Google Looker Studio',
            'SQL Extraction',
            'Revenue Optimization',
            'Menu Engineering',
          ],
          image: PIZZA_IMAGE,
          link: PIZZA_DASHBOARD_URL,
          metrics: [
            { label: 'Total Sales', value: '$817.8K' },
            { label: 'Pizzas Sold', value: '49,574' },
            { label: 'Avg Order Value', value: '$38.31' },
          ],
          problem:
            'How did annual sales trend over time, when were operational peak rushes, and which menu categories produced the greatest revenue?',
          action:
            'Built an interactive Business Intelligence dashboard in Google Looker Studio to track annual sales velocity, analyze lunch vs dinner rushes, and review the revenue contribution of individual pizza categories and sizes.',
          result: [
            {
              title: 'Peak Operational Hours',
              finding:
                'Orders peak consistently during lunch (12:00–13:00) and dinner (17:00–19:00), with Friday and Saturday recording highest volumes.',
              recommendation:
                'Optimize kitchen staffing and ingredient preparation ahead of peak weekend rushes.',
            },
            {
              title: 'Menu Category Contribution',
              finding:
                'The Classic category and The Classic Deluxe Pizza lead total revenue across the $817K+ sales.',
              recommendation:
                'Secure supply of top-tier ingredients and bundle bestsellers to lift underperforming categories.',
            },
            {
              title: 'Pizza Size Distribution',
              finding:
                'Large (L) size pizzas dominated customer orders, contributing over 45% of total sales revenue.',
              recommendation:
                'Implement upselling prompts for Large sizes paired with beverage and side offerings.',
            },
          ],
          tools: [
            'Google Looker Studio',
            'SQL Extraction',
            'Data Visualization',
            'Business Intelligence',
          ],
        },
      ],
    },
    credentials: {
      overline: '[ VERIFIED CREDENTIALS ]',
      title: 'Certifications',
      listAria: 'Certification list',
      hint: 'View Certificate',
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
      overline: '[ GET IN TOUCH ]',
      statement: "Let's Build Data-Driven Solutions & Strategic Insights.",
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
