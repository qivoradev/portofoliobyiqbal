import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import { Reveal } from './ui';

/**
 * Section "Kredensial & Sertifikasi" (Folioblox Dark Charcoal Theme)
 * - Latar belakang hitam matte (#0A0A0B), max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24
 * - Header: Eyebrow oranye "KREDENSIAL RESMI" + Judul putih "Sertifikasi & Kompetensi"
 * - Grid 2 Kolom Sejajar (md:grid-cols-2 gap-6) bergaya #141416 dengan border halus:
 *   1. BNSP Web Development (Badan Nasional Sertifikasi Profesi)
 *   2. Certiport Artificial Intelligence (Certiport · Pearson VUE)
 */
export default function CredentialsSection({
  lang = 'id',
  onOpenCertificate,
  certificates = [],
}) {
  const isId = lang === 'id';

  // Fallback default certificates if not passed
  const bnspCert = certificates.find((c) => c.id === 'bnsp') || {
    id: 'bnsp',
    title: 'BNSP Web Development',
    modalTitle: 'Sertifikat Kompetensi: Web Developer (BNSP)',
    image: '/certificates/bnsp-web-dev.jpg',
  };

  const certiportCert = certificates.find((c) => c.id === 'certiport') || {
    id: 'certiport',
    title: 'Certiport AI',
    modalTitle: 'Certiport: Artificial Intelligence Specialist',
    image: '/certificates/certiport-ai.jpg',
  };

  return (
    <section id="sertifikasi" className="bg-[#0A0A0B] py-16 sm:py-24 px-5 sm:px-8 border-t border-white/5 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <Reveal>
          <div className="flex flex-col mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF511A] mb-3 block">
              {isId ? '[ KREDENSIAL RESMI ]' : '[ OFFICIAL CREDENTIALS ]'}
            </span>
            <h2 className="type-display text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
              {isId ? 'Sertifikasi & Kompetensi' : 'Certifications & Competencies'}
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              {isId
                ? 'Standar kompetensi resmi pengembangan sistem data dan kecerdasan buatan, terverifikasi secara nasional dan internasional.'
                : 'Verified national and international competency standards in relational database systems and artificial intelligence.'}
            </p>
          </div>
        </Reveal>

        {/* Grid 2 Kolom: Kartu Sertifikasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Kartu 1: BNSP Web Development */}
          <Reveal delay={100}>
            <article
              onClick={() => onOpenCertificate(bnspCert)}
              className="group flex flex-col justify-between h-full rounded-[28px] bg-[#141416] border border-white/10 hover:border-white/25 p-6 sm:p-8 text-white shadow-xl transition-all duration-300 ease-spring hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer select-none"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#FF511A] font-bold">
                    {isId ? 'KREDENSIAL NASIONAL' : 'NATIONAL CREDENTIAL'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-stone-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    BNSP Terverifikasi
                  </span>
                </div>

                <h3 className="type-display text-2xl font-bold text-white mt-3 group-hover:text-[#FF511A] transition-colors leading-tight">
                  BNSP Web Development
                </h3>
                <p className="text-xs font-medium text-stone-400 mt-1">
                  Badan Nasional Sertifikasi Profesi (BNSP)
                </p>
                <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                  {isId
                    ? 'Standar Kompetensi Kerja Nasional Indonesia (SKKNI) dalam arsitektur sistem berbasis data relasional dan pengembangan aplikasi.'
                    : 'Indonesian National Occupational Competency Standards in relational database system architecture and application development.'}
                </p>

                {/* Preview Thumbnail Sertifikat */}
                <div className="w-full h-48 sm:h-56 my-5 overflow-hidden rounded-xl bg-black border border-white/10 relative shadow-inner">
                  <img
                    src="/certificates/bnsp-web-dev.jpg"
                    alt="Sertifikat BNSP Web Development"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-spring group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="font-mono text-xs text-stone-400 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  ID: Web Developer SKKNI
                </span>
                <span className="text-xs font-bold text-white group-hover:text-[#FF511A] inline-flex items-center gap-1.5 transition-colors">
                  <span>{isId ? 'Lihat Sertifikat' : 'View Certificate'}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          </Reveal>

          {/* Kartu 2: Certiport Artificial Intelligence */}
          <Reveal delay={180}>
            <article
              onClick={() => onOpenCertificate(certiportCert)}
              className="group flex flex-col justify-between h-full rounded-[28px] bg-[#141416] border border-white/10 hover:border-white/25 p-6 sm:p-8 text-white shadow-xl transition-all duration-300 ease-spring hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer select-none"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#FF511A] font-bold">
                    {isId ? 'KREDENSIAL INTERNASIONAL' : 'GLOBAL CREDENTIAL'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-stone-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Pearson VUE Certified
                  </span>
                </div>

                <h3 className="type-display text-2xl font-bold text-white mt-3 group-hover:text-[#FF511A] transition-colors leading-tight">
                  Certiport Artificial Intelligence
                </h3>
                <p className="text-xs font-medium text-stone-400 mt-1">
                  Certiport · Pearson VUE Business
                </p>
                <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                  {isId
                    ? 'Sertifikasi kompetensi global mencakup fondasi Machine Learning, evaluasi model data prediktif, pemrosesan dataset, serta etika AI.'
                    : 'Global competency certification covering Machine Learning foundations, predictive data model evaluation, and AI ethics.'}
                </p>

                {/* Preview Thumbnail Sertifikat */}
                <div className="w-full h-48 sm:h-56 my-5 overflow-hidden rounded-xl bg-black border border-white/10 relative shadow-inner">
                  <img
                    src="/certificates/certiport-ai.jpg"
                    alt="Sertifikat Certiport Artificial Intelligence"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-spring group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="font-mono text-xs text-stone-400 flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  ID: AI Specialist Pearson
                </span>
                <span className="text-xs font-bold text-white group-hover:text-[#FF511A] inline-flex items-center gap-1.5 transition-colors">
                  <span>{isId ? 'Lihat Sertifikat' : 'View Certificate'}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

