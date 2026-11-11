import { useEffect, useState } from 'react';

/**
 * Curtain preloader — runs once per session.
 * Folioblox matte black with flame orange loading bar.
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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0B] text-white transition-transform duration-[900ms] ease-spring ${
        revealed ? 'pointer-events-none -translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex w-full max-w-sm flex-col px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-white">iqbaldf</p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-stone-400">
          Data Analyst Portfolio
        </p>

        <div className="mt-14 flex items-end justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-stone-400">
            Loading
          </span>
          <span className="type-display text-5xl tabular-nums text-white font-bold">{progress}</span>
        </div>
        <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF511A] transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
