import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TERMINALS } from '../content';
import { Reveal, SectionHeader } from './ui';

const LINE_STYLE = {
  cmd: 'text-[#F5F3ED]',
  out: 'text-[#F5F3ED]/55',
  ok: 'text-emerald-400',
  comment: 'text-[#F5F3ED]/35',
};

/** Terminal visualisation — always dark, re-keyed per tab so lines re-animate. */
function TerminalPanel({ script, label }) {
  return (
    <figure
      aria-label={label}
      className="m-0 flex h-full min-h-[20rem] flex-col bg-[#121316] text-[#F5F3ED]"
    >
      <figcaption className="flex items-center justify-between border-b border-[#F5F3ED]/10 px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F5F3ED]/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F5F3ED]/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F5F3ED]/20" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#F5F3ED]/45">
          {script.file}
        </span>
      </figcaption>

      <pre className="flex-1 overflow-x-auto p-5 font-mono text-[12.5px] leading-6 sm:p-6">
        <code>
          {script.lines.map((line, i) => (
            <span
              key={i}
              className={`term-line block whitespace-pre ${LINE_STYLE[line.k]}`}
              style={{ '--i': i }}
            >
              {line.t || ' '}
            </span>
          ))}
          <span
            className="term-line block text-[#F5F3ED]/70"
            style={{ '--i': script.lines.length }}
          >
            <span aria-hidden="true" className="term-cursor" />
          </span>
        </code>
      </pre>
    </figure>
  );
}

/**
 * Focus Bento anatomy
 *   Root (article)
 *   ├─ Tab list
 *   └─ Tab panel
 *       ├─ Content column
 *       │   ├─ Meta Stack   → role label, title, vision
 *       │   ├─ Body Stack   → SCOPE / TOOLS / OUTCOME rows
 *       │   └─ Action Base  → "open related case study"
 *       └─ Media Box        → context-aware terminal
 */
export default function FocusBento({ t, onOpenProject }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const tab = t.tabs[active];

  const selectTab = (index) => {
    const next = (index + t.tabs.length) % t.tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onTabKeyDown = (e, index) => {
    const keys = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: t.tabs.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      selectTab(keys[e.key]);
    }
  };

  return (
    <section
      id="fokus"
      className="mx-auto max-w-7xl scroll-mt-14 px-5 py-20 sm:px-8 md:py-28"
    >
      <SectionHeader overline={t.overline} title={t.title} />

      <Reveal
        as="article"
        className="overflow-hidden rounded-3xl border border-line bg-surface"
      >
        <div
          role="tablist"
          aria-label={t.tabsAria}
          className="flex overflow-x-auto border-b border-line"
        >
          {t.tabs.map((item, i) => {
            const selected = i === active;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={`relative flex shrink-0 cursor-pointer items-center gap-3 px-5 py-4 text-sm font-medium transition-colors duration-500 ease-spring after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:bg-ink after:transition-transform after:duration-500 after:ease-spring focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink sm:px-8 ${
                  selected
                    ? 'text-ink after:scale-x-100'
                    : 'text-muted after:scale-x-0 hover:text-ink'
                }`}
              >
                <span className="type-micro">[{item.index}]</span>
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="panel-in grid lg:grid-cols-2"
        >
          <div className="flex flex-col gap-8 p-6 sm:p-10">
            {/* Meta Stack */}
            <div>
              <p className="type-micro text-muted">{tab.role}</p>
              <h3 className="type-display mt-3 text-balance text-2xl leading-[1.1] sm:text-4xl">
                {tab.label}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-muted">{tab.vision}</p>
            </div>

            {/* Body Stack */}
            <dl className="border-t border-line">
              <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-4 sm:grid-cols-[7rem_1fr]">
                <dt className="type-micro pt-0.5 text-muted">{t.labels.scope}</dt>
                <dd className="text-sm leading-relaxed">{tab.scope.join(' · ')}</dd>
              </div>
              <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-4 sm:grid-cols-[7rem_1fr]">
                <dt className="type-micro pt-1.5 text-muted">{t.labels.tools}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {tab.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[11px]"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-4 sm:grid-cols-[7rem_1fr]">
                <dt className="type-micro pt-1 text-muted">{t.labels.outcome}</dt>
                <dd className="type-display text-lg leading-snug sm:text-xl">
                  {tab.outcome}
                </dd>
              </div>
            </dl>

            {/* Action Base */}
            <button
              type="button"
              onClick={() => onOpenProject(tab.projectId)}
              className="group inline-flex cursor-pointer items-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-500 ease-spring hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {t.cta}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-500 ease-spring group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Media Box */}
          <div className="border-t border-line lg:border-l lg:border-t-0">
            <TerminalPanel script={TERMINALS[tab.id]} label={t.terminalAria} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

