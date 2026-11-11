import { ArrowUpRight } from 'lucide-react';
import Drawer from './Drawer';

/**
 * "Keyboard: Stack Logika" panel — the four core tools, what each is used for,
 * and a jump to the case study that proves it.
 */
export default function StackDrawer({ t, projectTitles, onOpenProject, onClose }) {
  return (
    <Drawer
      eyebrow={t.eyebrow}
      title={t.title}
      titleId="stack-title"
      closeLabel={t.close}
      onClose={onClose}
    >
      <p className="mb-8 max-w-md leading-relaxed text-muted">{t.intro}</p>

      <ol className="border-t border-line">
        {t.items.map((tool, i) => (
          <li key={tool.name} className="border-b border-line py-6">
            <p className="type-micro text-muted">0{i + 1}</p>
            <h3 className="type-display mt-2 text-xl">{tool.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{tool.use}</p>
            <button
              type="button"
              onClick={() => onOpenProject(tool.projectId)}
              className="group mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-xs font-medium transition-[transform,background-color,border-color] duration-500 ease-spring hover:scale-105 hover:border-ink/60 hover:bg-surface-hover active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <span className="type-micro text-muted">{t.seeIn}</span>
              {projectTitles[tool.projectId]}
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-500 ease-spring group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </li>
        ))}
      </ol>
    </Drawer>
  );
}

