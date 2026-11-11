import { Component, lazy, Suspense, useEffect, useState } from 'react';
import { MousePointer2 } from 'lucide-react';
import { SPLINE_SCENE } from '../content';

// The Spline runtime is heavy — load it on demand, off the critical path.
const Spline = lazy(() => import('@splinetool/react-spline'));

/** Catches chunk-load / WebGL failures so the hero never breaks. */
class StageBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function StageMessage({ label, pulse = false, visible = true }) {
  return (
    <div
      role="status"
      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface text-muted transition-opacity duration-700 ease-spring ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {pulse && (
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
      )}
      <span className="type-micro">{label}</span>
    </div>
  );
}

/**
 * Media Box — aspect ratio is locked (4:3 → 1:1 on lg) so the layout never
 * shifts while the 3D scene streams in.
 */
export default function SplineStage({ t }) {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  // The runtime exposes no error callback; give up gracefully after 20s.
  useEffect(() => {
    if (loaded) return undefined;
    const timer = setTimeout(() => setTimedOut(true), 20000);
    return () => clearTimeout(timer);
  }, [loaded]);

  const fallback = <StageMessage label={t.stageFallback} />;

  return (
    <figure
      aria-label={t.stageAria}
      className="relative m-0 aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-surface shadow-sm lg:aspect-square"
    >
      <StageBoundary fallback={fallback}>
        <Suspense fallback={<StageMessage label={t.stageLoading} pulse />}>
          <Spline
            scene={SPLINE_SCENE}
            htmlContentMode="sandbox"
            onLoad={() => setLoaded(true)}
            style={{ width: '100%', height: '100%' }}
          />
          {timedOut && !loaded ? (
            fallback
          ) : (
            <StageMessage label={t.stageLoading} pulse visible={!loaded} />
          )}
        </Suspense>
      </StageBoundary>

      <figcaption className="pointer-events-none absolute inset-0">
        <span className="type-micro absolute left-4 top-4 rounded-full border border-line bg-paper/70 px-3 py-1.5 text-ink backdrop-blur-sm">
          {t.stageBadge}
        </span>
        <span className="type-micro absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-paper/70 px-3 py-1.5 text-muted backdrop-blur-sm">
          <MousePointer2 className="h-3 w-3" aria-hidden="true" />
          {t.stageHint}
        </span>
      </figcaption>
    </figure>
  );
}

