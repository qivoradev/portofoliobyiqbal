import { Database, BarChart3, Table2, Cpu } from 'lucide-react';
import { Reveal } from './ui';

/**
 * Strip Kompetensi / Tools (Folioblox Secondary Bar Stack)
 * - Container bg-[#141416] rounded-b-[32px] sm:rounded-b-[48px] -mt-6 pt-12 py-8
 * - Mobile: rapi dengan grid-cols-2 gap-3, overflow-x-hidden
 * - Desktop: horizontal row dengan ikon monokrom putih
 */
export default function CompetencyStrip({ lang = 'id' }) {
  const isId = lang === 'id';

  const items = [
    { name: 'PostgreSQL & SQL', icon: Database },
    { name: 'Looker Studio', icon: BarChart3 },
    { name: 'Microsoft Excel', icon: Table2 },
    { name: 'Certiport AI', icon: Cpu },
  ];

  return (
    <section className="relative z-0 -mt-6 w-full overflow-x-hidden rounded-b-[32px] sm:rounded-b-[48px] bg-[#141416] px-5 py-8 pt-12 sm:px-8 lg:px-12 border-b border-white/5 shadow-xl">
      <Reveal className="mx-auto flex max-w-6xl flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
        {/* Kiri: Teks Muted */}
        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold leading-relaxed shrink-0">
          {isId ? 'KOMPETENSI & ALAT UTAMA' : 'CORE COMPETENCIES & TOOLS'}
        </p>

        {/* Kanan: 4 Item Badge Tools */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 w-full lg:w-auto">
          {items.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="flex items-center gap-2.5 rounded-2xl bg-white/[0.04] sm:bg-white/5 border border-white/10 px-3.5 py-2.5 text-white transition-colors hover:border-white/20"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF511A]/10 text-[#FF511A] shrink-0">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white tracking-tight whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
