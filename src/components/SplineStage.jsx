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
      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-transparent text-stone-500 transition-opacity duration-700 ease-spring ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {pulse && (
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
      )}
      <span className="font-mono text-[11px] uppercase tracking-widest text-stone-600">
        {label}
      </span>
    </div>
  );
}

/**
 * 3D Workstation Canvas (Studio Keffi Right Column)
 * - Container: id="spline-canvas-wrapper" (w-full aspect-square max-h-[480px] rounded-2xl)
 * - Transparansi kanvas 100% menyatu dengan kartu Sand (#F5F3ED)
 * - Bebas watermark & anchor link luar
 * - Label mikro: "WORKSTATION // (01)" di atas & "INTERACTIVE // DRAG TO ROTATE" di bawah
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

  const fallback = <StageMessage label={t?.stageFallback || '3D Workstation Offline'} />;

  return (
    <div
      id="spline-canvas-wrapper"
      aria-label="3D Workstation"
      className="relative w-full aspect-square max-h-[480px] overflow-hidden rounded-2xl bg-transparent select-none"
    >
      {/* Label Micro Atas */}
      <div className="pointer-events-none absolute left-3 top-3 z-10 sm:left-4 sm:top-4">
        <span className="font-mono text-[11px] uppercase tracking-widest text-stone-500/90">
          WORKSTATION // (01)
        </span>
      </div>

      {/* 3D Spline Canvas */}
      <StageBoundary fallback={fallback}>
        <Suspense fallback={<StageMessage label={t?.stageLoading || 'Loading 3D Workstation...'} pulse />}>
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
            <StageMessage label={t?.stageLoading || 'Loading 3D Workstation...'} pulse visible={!loaded} />
          )}
        </Suspense>
      </StageBoundary>

      {/* Label Micro Bawah */}
      <div className="pointer-events-none absolute bottom-3 right-3 z-10 sm:bottom-4 sm:right-4">
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-stone-500/90">
          INTERACTIVE // DRAG TO ROTATE
        </span>
      </div>
    </div>
  );
}
