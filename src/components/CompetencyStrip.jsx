/**
 * CompetencyStrip — Seamless marquee OR tightly packed badge grid
 * Perry Wang dark-secondary bar: bg-[#111113] border-b border-white/[0.06]
 * Overlaps Hero with -mt-8, provides rounded-b continuation.
 */
import { Reveal } from './ui';

const TOOLS = [
  'Microsoft Excel',
  'SQL · PostgreSQL',
  'Looker Studio',
  'Supabase',
  'Git',
  'Postman',
  'API Testing',
  'PivotTables',
  'Data Modeling',
  'Root Cause Analysis',
  'BI Dashboards',
  'Data Validation',
];

export default function CompetencyStrip({ lang = 'id' }) {
  const isId = lang === 'id';
  // Duplicate for seamless marquee loop
  const doubled = [...TOOLS, ...TOOLS];

  return (
    <section
      className="relative z-0 -mt-8 w-full overflow-hidden rounded-b-[36px] sm:rounded-b-[52px] bg-[#111113] border-b border-white/[0.06] shadow-xl"
    >
      {/* Top spacer that "hides" behind hero rounded corner */}
      <div className="pt-14 pb-6 sm:pt-16 sm:pb-8">
        <Reveal className="mx-auto max-w-6xl px-5 sm:px-8 mb-5">
          <p className="type-label text-stone-500">
            {isId ? 'KOMPETENSI & ALAT UTAMA' : 'CORE COMPETENCIES & TOOLS'}
          </p>
        </Reveal>

        {/* Marquee row */}
        <div className="relative overflow-hidden">
          {/* Fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[#111113] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-[#111113] to-transparent" />

          <div className="marquee-track gap-3 px-4" aria-hidden="false">
            {doubled.map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="inline-flex shrink-0 items-center px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-semibold text-stone-300 mr-3 select-none whitespace-nowrap hover:border-white/20 hover:text-white transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
