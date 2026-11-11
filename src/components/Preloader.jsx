import { useEffect, useState } from 'react';

/**
 * Curtain preloader — runs once per session.
 * Fixed obsidian/paper colours so it reads identically in light and dark mode.
 */
export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const duration = 1800;
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const revealTimer = setTimeout(() => {
      setRevealed(true);
      try {
        sessionStorage.setItem('hasSeenPreloader', 'true');
      } catch {
        // storage unavailable — ignore
      }
    }, 2100);
    const removeTimer = setTimeout(onFinish, 3000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(revealTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div
      aria-hidden={revealed}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#121316] text-[#F5F3ED] transition-transform duration-[900ms] ease-spring ${
        revealed ? 'pointer-events-none -translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex w-full max-w-sm flex-col px-6">
        <p className="text-xs font-semibold uppercase tracking-widest">iqbaldf</p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-[#F5F3ED]/50">
          Data Analyst &amp; QA Portfolio
        </p>

        <div className="mt-14 flex items-end justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#F5F3ED]/50">
            Loading
          </span>
          <span className="type-display text-5xl tabular-nums">{progress}</span>
        </div>
        <div className="mt-3 h-px w-full bg-[#F5F3ED]/15">
          <div
            className="h-full bg-[#F5F3ED] transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

