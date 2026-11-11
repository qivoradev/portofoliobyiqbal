import KeffiHeroCard from './KeffiHeroCard';
import { Reveal } from './ui';

/**
 * Hero Section — Master Bento Card Centerpiece (Studio Keffi)
 * Sits comfortably on the deep obsidian charcoal canvas (#0C0D0E)
 * with the floating capsule navbar positioned overhead.
 */
export default function Hero({ lang = 'id', onOpenResume }) {
  return (
    <section
      id="top"
      className="mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8"
    >
      <Reveal>
        <KeffiHeroCard lang={lang} onOpenResume={onOpenResume} />
      </Reveal>
    </section>
  );
}
