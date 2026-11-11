import { useInView } from '../hooks/useInView';

/** Spring-eased scroll reveal wrapper (renders the semantic tag you pass). */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      data-in={inView}
      style={{ '--d': `${delay}ms` }}
      className={`reveal ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Editorial section header: hairline rule, mono overline (left),
 * display title + optional subtitle (right).
 */
export function SectionHeader({ overline, title, subtitle }) {
  return (
    <Reveal
      as="header"
      className="mb-10 grid gap-4 border-t border-line pt-6 md:mb-14 md:grid-cols-12 md:gap-8"
    >
      <p className="type-micro text-muted md:col-span-4">{overline}</p>
      <div className="md:col-span-8">
        <h2 className="type-display text-balance text-3xl leading-[1.08] sm:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
