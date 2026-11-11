import { Component, lazy, Suspense, useEffect, useState } from 'react';
import { SPLINE_SCENE } from '../content';

// Lazy-load Spline runtime so it does not block critical page render.
const Spline = lazy(() => import('@splinetool/react-spline'));

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
      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-transparent text-muted transition-opacity duration-700 ease-spring ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {pulse && (
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
      )}
      <span className="type-micro rounded-full border border-line bg-paper/80 px-4 py-1.5 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}

/**
 * Panggung 3D Komputer (Center Stage Workstation)
 * - Full-width stage (w-full max-w-5xl h-[520px] sm:h-[600px])
 * - Canvas background transparan menyatu dengan warna dasar #F5F3ED
 * - Watermark-safe layout: node badge di kiri atas, micro-hint di kanan atas / dock di bawah
 */
export default function SplineStage({ t }) {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (loaded) return undefined;
    const timer = setTimeout(() => setTimedOut(true), 20000);
    return () => clearTimeout(timer);
  }, [loaded]);

  const handleLoad = (app) => {
    try {
      if (typeof app?.setBackgroundColor === 'function') {
        app.setBackgroundColor('transparent');
      }
    } catch {
      // background override fallback
    }
    setLoaded(true);
  };

  const fallback = <StageMessage label={t.stageFallback} />;

  return (
    <div
      aria-label={t.stageAria}
      className="relative mx-auto h-[520px] w-full max-w-5xl overflow-hidden rounded-3xl bg-transparent sm:h-[600px]"
    >
      <StageBoundary fallback={fallback}>
        <Suspense fallback={<StageMessage label={t.stageLoading} pulse />}>
          <div className="h-full w-full">
            <Spline
              scene={SPLINE_SCENE}
              htmlContentMode="sandbox"
              onLoad={handleLoad}
              style={{ width: '100%', height: '100%', background: 'transparent' }}
            />
          </div>
          {timedOut && !loaded ? (
            fallback
          ) : (
            <StageMessage label={t.stageLoading} pulse visible={!loaded} />
          )}
        </Suspense>
      </StageBoundary>

      {/* Top badges — positioned away from Spline's bottom-right watermark */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-6">
        <span className="type-micro rounded-full border border-line bg-paper/85 px-3.5 py-1.5 text-ink shadow-xs backdrop-blur-md">
          {t.stageBadge}
        </span>
        <span className="type-micro hidden rounded-full border border-line bg-paper/85 px-3.5 py-1.5 text-muted shadow-xs backdrop-blur-md sm:inline-flex">
          {t.stageHint}
        </span>
      </div>
    </div>
  );
}
