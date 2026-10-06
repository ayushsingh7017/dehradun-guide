"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { n: 640, unit: "m", label: "Height above sea level" },
  { n: 2, unit: "", label: "Rivers frame the valley, Ganga and Yamuna" },
  { n: 12, unit: "", label: "Places covered in this guide" },
  { n: 120, unit: "yrs", label: "Since the Forest Research Institute began (1906)" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  // Starts at the final numbers so the page is complete before any animation.
  const [vals, setVals] = useState(STATS.map((s) => s.n));

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        let t0: number | null = null;
        const step = (t: number) => {
          if (t0 === null) t0 = t;
          const p = Math.min(1, (t - t0) / 1100);
          const e = 1 - Math.pow(1 - p, 3);
          setVals(STATS.map((s) => Math.round(s.n * e)));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="stats" ref={ref}>
      <div className="wrap">
        {STATS.map((s, i) => (
          <div className="stat" key={s.label}>
            <b>
              {vals[i]}
              {s.unit && <small>{s.unit}</small>}
            </b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
