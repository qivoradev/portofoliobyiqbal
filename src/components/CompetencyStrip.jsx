import { Database, BarChart3, Table2, Cpu } from 'lucide-react';
import { Reveal } from './ui';

/**
 * Strip Kompetensi / Tools (Folioblox Secondary Bar Stack)
 * - Container bg-[#141416] rounded-b-[32px] sm:rounded-b-[48px] -mt-6 pt-12 py-8
 * - Kiri: Teks kecil muted "Kompetensi & Alat Utama"
 * - Kanan: 4 item ikon monokrom putih + teks bold
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
    <section className="relative z-0 -mt-6 w-full rounded-b-[32px] sm:rounded-b-[48px] bg-[#141416] px-6 py-8 pt-12 sm:px-12 border-b border-white/5 shadow-xl">
      <Reveal className="mx-auto flex max-w-6xl flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
        {/* Kiri: Teks Muted */}
        <p className="text-xs font-mono uppercase tracking-wider text-stone-400 max-w-[150px] leading-relaxed">
          {isId ? 'Kompetensi & Alat Utama' : 'Core Competencies & Tools'}
        </p>

        {/* Kanan: 4 Item Monokrom */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full md:w-auto">
          {items.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
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

