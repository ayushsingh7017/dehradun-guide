"use client";

import { useState } from "react";
import { TRIPS } from "@/data/trips";

const S = 2.6; // pixels per km on the schematic map
const C = 300; // centre of the 600 x 600 map

export default function Radar() {
  const [sel, setSel] = useState(0);
  const t = TRIPS[sel];

  const pts = TRIPS.map((trip) => {
    const rad = (trip.ang * Math.PI) / 180;
    return {
      ...trip,
      x: C + trip.km * S * Math.sin(rad),
      y: C - trip.km * S * Math.cos(rad),
      // Mussoorie's label goes on the left so it does not cover Dhanaulti.
      right: trip.ang < 180 && trip.n !== "Mussoorie",
    };
  });

  return (
    <>
      <div className="radar">
        <svg viewBox="0 0 600 600" role="group" aria-label="Schematic map of day trips around Dehradun">
          {[25, 50, 75, 100].map((k) => (
            <g key={k}>
              <circle cx={C} cy={C} r={k * S} fill="none" stroke="#fff" strokeOpacity=".22" strokeDasharray="4 6" />
              <text x={C + 6} y={C - k * S - 4} fill="#9fb0ea" fontFamily="DM Mono, monospace" fontSize="12">
                {k} km
              </text>
            </g>
          ))}
          <circle className="ring" cx={C} cy={C} r="260" fill="none" stroke="#f2a33a" strokeWidth="2" />
          {pts.map((p) => (
            <line key={p.n} x1={C} y1={C} x2={p.x.toFixed(1)} y2={p.y.toFixed(1)} stroke="#fff" strokeOpacity=".3" />
          ))}
          {pts.map((p, i) => (
            <g
              key={p.n}
              className={"pt" + (i === sel ? " on" : "")}
              tabIndex={0}
              role="button"
              aria-label={`${p.n}, ${p.km} km`}
              onClick={() => setSel(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSel(i);
                }
              }}
            >
              <circle className="dot" cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r="9" />
              <text x={(p.x + (p.right ? 18 : -18)).toFixed(1)} y={(p.y + 6).toFixed(1)} textAnchor={p.right ? "start" : "end"}>
                {p.n}
              </text>
            </g>
          ))}
          <circle cx={C} cy={C} r="16" fill="#f2a33a" stroke="#fff" strokeWidth="3" />
          <text x={C} y="345" textAnchor="middle" fill="#fff" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1">
            DEHRADUN
          </text>
        </svg>

        <div className="detail" aria-live="polite">
          <p className="label">Day trip</p>
          <h3>{t.n}</h3>
          <div className="big">
            {t.km}
            <small>KM</small>
          </div>
          <dl>
            <dt>Drive</dt>
            <dd>{t.time}</dd>
            <dt>Height</dt>
            <dd>{t.h}</dd>
            <dt>Known for</dt>
            <dd>{t.why}</dd>
          </dl>
        </div>
      </div>
      <p className="note">Schematic map. Rings show road distance in 25 km steps, and directions are approximate.</p>
    </>
  );
}
