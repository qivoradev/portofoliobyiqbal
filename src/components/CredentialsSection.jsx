/**
 * CredentialsSection — Perry Wang sleek list-view style
 *
 * Layout:
 * - Section header with orange eyebrow + large title
 * - 2-column dark bento cards (bg-[#141416]) for BNSP & Certiport
 * - Each card: scope badge, title, detail, cert thumbnail, fine bottom border CTA
 * - Fine bottom-border row list underneath for a "sleek list view" feel
 */
import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import { Reveal } from './ui';

export default function CredentialsSection({ lang = 'id', onOpenCertificate, certificates = [] }) {
  const isId = lang === 'id';

  const bnspCert = certificates.find((c) => c.id === 'bnsp') || {
    id: 'bnsp', title: 'BNSP Web Development',
    modalTitle: 'Sertifikat Kompetensi: Web Developer (BNSP)',
    image: '/certificates/bnsp-web-dev.jpg',
  };

  const certiportCert = certificates.find((c) => c.id === 'certiport') || {
    id: 'certiport', title: 'Certiport AI',
    modalTitle: 'Certiport: Artificial Intelligence Specialist',
    image: '/certificates/certiport-ai.jpg',
  };

  const credRows = [
    {
      title: 'BNSP Web Development',
      issuer: 'Badan Nasional Sertifikasi Profesi',
      scope: isId ? 'Nasional' : 'National',
      year: '2026',
      icon: CheckCircle2,
      iconColor: 'text-emerald-400',
      cert: bnspCert,
    },
    {
      title: 'Certiport Artificial Intelligence',
      issuer: 'Certiport · Pearson VUE',
      scope: isId ? 'Internasional' : 'International',
      year: '2026',
      icon: Award,
      iconColor: 'text-amber-400',
      cert: certiportCert,
    },
  ];

  return (
    <section id="sertifikasi" className="bg-[#0A0A0B] py-20 sm:py-28 px-5 sm:px-8 border-t border-white/[0.05] scroll-mt-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <Reveal className="mb-12">
          <span className="type-label text-[#FF511A] block mb-4">
            {isId ? '[ KREDENSIAL & SERTIFIKASI ]' : '[ CREDENTIALS & CERTIFICATIONS ]'}
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="type-display text-3xl sm:text-4xl xl:text-5xl font-bold text-white tracking-tight leading-tight">
              {isId ? 'Sertifikasi & Kompetensi' : 'Certifications & Competencies'}
            </h2>
            <p className="text-stone-500 text-sm max-w-xs leading-relaxed sm:text-right">
              {isId
                ? 'Terverifikasi secara nasional dan internasional.'
                : 'Nationally and internationally verified.'}
            </p>
          </div>
        </Reveal>

        {/* Bento card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {/* BNSP Card */}
          <Reveal delay={80}>
            <article
              onClick={() => onOpenCertificate(bnspCert)}
              className="group bento-card flex flex-col h-full p-6 sm:p-8 cursor-pointer select-none hover:-translate-y-1 transition-all duration-300 ease-spring"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="type-label text-[#FF511A]">
                  {isId ? 'KREDENSIAL NASIONAL' : 'NATIONAL CREDENTIAL'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono text-stone-300 shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  BNSP Verified
                </span>
              </div>

              <h3 className="type-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF511A] transition-colors leading-tight">
                BNSP Web Development
              </h3>
              <p className="text-stone-500 text-xs mt-1 mb-4">
                Badan Nasional Sertifikasi Profesi (BNSP)
              </p>
              <p className="text-stone-300 text-sm leading-relaxed mb-5">
                {isId
                  ? 'SKKNI — standar kompetensi kerja nasional dalam arsitektur sistem berbasis data relasional dan pengembangan aplikasi.'
                  : 'SKKNI — national competency standards in relational database architecture and application development.'}
              </p>

              {/* Certificate thumbnail */}
              <div className="w-full h-44 sm:h-52 overflow-hidden rounded-xl border border-white/[0.08] bg-black mb-5">
                <img
                  src="/certificates/bnsp-web-dev.jpg"
                  alt="BNSP Web Development Certificate"
                  loading="lazy"
                  className="w-full h-full object-cover object-top img-zoom"
                />
              </div>

              <div className="mt-auto border-t border-white/[0.08] pt-4 flex items-center justify-between">
                <span className="type-label text-stone-500 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Web Developer SKKNI
                </span>
                <span className="text-xs font-bold text-stone-300 group-hover:text-[#FF511A] inline-flex items-center gap-1.5 transition-colors">
                  {isId ? 'Lihat Sertifikat' : 'View Certificate'}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          </Reveal>

          {/* Certiport Card */}
          <Reveal delay={160}>
            <article
              onClick={() => onOpenCertificate(certiportCert)}
              className="group bento-card flex flex-col h-full p-6 sm:p-8 cursor-pointer select-none hover:-translate-y-1 transition-all duration-300 ease-spring"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="type-label text-[#FF511A]">
                  {isId ? 'KREDENSIAL INTERNASIONAL' : 'GLOBAL CREDENTIAL'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono text-stone-300 shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Pearson VUE
                </span>
              </div>

              <h3 className="type-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF511A] transition-colors leading-tight">
                Certiport Artificial Intelligence
              </h3>
              <p className="text-stone-500 text-xs mt-1 mb-4">
                Certiport · Pearson VUE Business
              </p>
              <p className="text-stone-300 text-sm leading-relaxed mb-5">
                {isId
                  ? 'Kompetensi global: fondasi Machine Learning, evaluasi model prediktif, pemrosesan dataset, dan etika AI.'
                  : 'Global competency: ML foundations, predictive model evaluation, dataset processing, and AI ethics.'}
              </p>

              {/* Certificate thumbnail */}
              <div className="w-full h-44 sm:h-52 overflow-hidden rounded-xl border border-white/[0.08] bg-black mb-5">
                <img
                  src="/certificates/certiport-ai.jpg"
                  alt="Certiport Artificial Intelligence Certificate"
                  loading="lazy"
                  className="w-full h-full object-cover object-top img-zoom"
                />
              </div>

              <div className="mt-auto border-t border-white/[0.08] pt-4 flex items-center justify-between">
                <span className="type-label text-stone-500 flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  AI Specialist · Pearson
                </span>
                <span className="text-xs font-bold text-stone-300 group-hover:text-[#FF511A] inline-flex items-center gap-1.5 transition-colors">
                  {isId ? 'Lihat Sertifikat' : 'View Certificate'}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Sleek list-view rows — Perry Wang editorial style */}
        <div className="border-t border-white/[0.08]">
          {credRows.map((row, i) => {
            const Icon = row.icon;
            return (
              <Reveal
                key={row.title}
                as="button"
                delay={i * 60}
                onClick={() => onOpenCertificate(row.cert)}
                className="w-full border-b border-white/[0.06] text-left"
              >
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-5 hover:pl-1 transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <Icon className={`h-4 w-4 shrink-0 ${row.iconColor}`} />
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-[#FF511A] transition-colors">
                        {row.title}
                      </p>
                      <p className="type-label text-stone-500 mt-0.5">{row.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 pl-8 sm:pl-0 shrink-0">
                    <span className="type-label text-stone-600 hidden sm:block">{row.scope}</span>
                    <span className="type-label text-stone-500">{row.year}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-stone-600 group-hover:text-[#FF511A] transition-colors" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
