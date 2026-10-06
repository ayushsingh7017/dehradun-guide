"use client";

import { useRef } from "react";
import { FOOD } from "@/data/food";

export default function Food() {
  const rail = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.current?.scrollBy({ left: dir * 320, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="band-sun" id="food">
      <div className="wrap">
        <div className="sec-head">
          <p className="label">What to eat</p>
          <h2>
            Garhwali plates and
            <br />
            city street food
          </h2>
          <p>Start with chaat in Paltan Bazaar, then look for Garhwali food in thalis and small restaurants along Rajpur Road and Mussoorie Road.</p>
        </div>
        <div className="rail-ctl">
          <button type="button" onClick={() => scroll(-1)} aria-label="Previous dishes">
            ←
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="Next dishes">
            →
          </button>
        </div>
        <div className="rail" ref={rail} tabIndex={0} aria-label="Dishes to try">
          {FOOD.map((f) => (
            <article className="dish" key={f.n} style={{ background: f.bg, color: f.fg }}>
              <span className="g" aria-hidden="true">
                {f.g}
              </span>
              <span className="dv">{f.dv}</span>
              <h3>{f.n}</h3>
              <p>{f.d}</p>
              <div className="tags">
                {f.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <span className="try">Try it: {f.tr}</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
