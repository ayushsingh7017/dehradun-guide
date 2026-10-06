"use client";

import { useState } from "react";
import { VIBES } from "@/data/vibes";

export default function Planner() {
  const [i, setI] = useState(0);
  const v = VIBES[i];

  return (
    <section id="planner">
      <div className="wrap">
        <div className="sec-head">
          <p className="label">Only one day?</p>
          <h2>
            Pick a mood,
            <br />
            get a plan
          </h2>
          <p>Choose what kind of day you want and get four stops in a sensible order.</p>
        </div>
        <div className="planner">
          <div className="vibes">
            {VIBES.map((x, n) => (
              <button key={x.k} className="vibe" type="button" aria-pressed={n === i} onClick={() => setI(n)}>
                <span>{x.k}</span>
                <small>{x.n}</small>
              </button>
            ))}
          </div>
          <div className="result" aria-live="polite">
            <p className="label">Your day</p>
            <h3 style={{ fontSize: "2.4rem" }}>{v.k}</h3>
            <ol>
              {v.s.map(([time, name, note]) => (
                <li key={time + name}>
                  <span className="t">{time}</span>
                  <div>
                    <b>{name}</b>
                    <span className="d">{note}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
