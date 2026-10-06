"use client";

import { useState, type CSSProperties } from "react";
import { SEAS, type Season } from "@/data/seasons";
import { LO, HI, MN } from "@/data/climate";

const W = 620;
const H = 270;
const L = 34;
const T = 20;
const B = 30;
const BW = 30;
const GAP = (W - L - 12 - 12 * BW) / 11;
const y = (v: number) => T + (H - T - B) * (1 - v / 40);

function Chart({ season }: { season: Season }) {
  return (
    <>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Typical monthly low and high temperatures in degrees Celsius, with ${season.k} months highlighted`}>
        {[0, 10, 20, 30, 40].map((v) => (
          <g key={v}>
            <line x1={L} x2={W} y1={y(v)} y2={y(v)} stroke="currentColor" strokeOpacity=".22" />
            <text x={L - 6} y={y(v) + 4} textAnchor="end">
              {v}
            </text>
          </g>
        ))}
        {MN.map((label, m) => {
          const x = L + 6 + m * (BW + GAP);
          const on = season.m.includes(m);
          return (
            <g key={m}>
              <rect x={x.toFixed(1)} y={y(HI[m]).toFixed(1)} width={BW} height={(y(LO[m]) - y(HI[m])).toFixed(1)} rx="2" style={{ fill: "var(--pfg)" }} opacity={on ? 1 : 0.22} />
              {on && (
                <text className="hi" x={(x + BW / 2).toFixed(1)} y={(y(HI[m]) - 6).toFixed(1)} textAnchor="middle">
                  {HI[m]}°
                </text>
              )}
              <text x={(x + BW / 2).toFixed(1)} y={H - 8} textAnchor="middle" opacity={on ? 1 : 0.6}>
                {label}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="chartnote">Bars run from the typical daily low to the typical daily high. Highlighted months match the selected season.</p>
    </>
  );
}

export default function Seasons() {
  const [i, setI] = useState(0);
  const s = SEAS[i];
  const panelStyle = { "--pbg": s.bg, "--pfg": s.fg } as CSSProperties;

  return (
    <section id="season">
      <div className="wrap">
        <div className="sec-head">
          <p className="label">Weather</p>
          <h2>
            Best time
            <br />
            to visit
          </h2>
          <p>Pick a season. The chart shows typical monthly lows and highs for the city in °C. Nearby hill stations are several degrees cooler.</p>
        </div>
        <div className="seasons-tabs" role="tablist" aria-label="Seasons">
          {SEAS.map((x, n) => (
            <button key={x.k} className="stab" role="tab" type="button" aria-selected={n === i} onClick={() => setI(n)}>
              {x.k}
            </button>
          ))}
        </div>
        <div className="spanel" style={panelStyle}>
          <div className="sleft">
            <span className="rt">{s.rt}</span>
            <h3>{s.k}</h3>
            <p>{s.d}</p>
            <dl>
              <dt>Temp</dt>
              <dd>{s.temp}</dd>
              <dt>Rain</dt>
              <dd>{s.rain}</dd>
              <dt>Crowds</dt>
              <dd>{s.crowd}</dd>
              <dt>Pack</dt>
              <dd>{s.wear}</dd>
            </dl>
          </div>
          <div className="sright">
            <Chart season={s} />
          </div>
        </div>
      </div>
    </section>
  );
}
