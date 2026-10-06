"use client";

import { useState } from "react";
import { DAYS } from "@/data/plan";

export default function Plan() {
  const [i, setI] = useState(0);
  const d = DAYS[i];

  return (
    <div className="band-sal" id="plan">
      <div className="wrap">
        <div className="sec-head">
          <p className="label">Sample route</p>
          <h2>
            Three days in
            <br />
            and around Dehradun
          </h2>
          <p>A relaxed plan covering the city, the hills and the river. Swap days to suit the weather.</p>
        </div>
        <div className="dtabs" role="tablist" aria-label="Days">
          {DAYS.map((_, n) => (
            <button key={n} className="dtab" role="tab" type="button" aria-selected={n === i} onClick={() => setI(n)}>
              Day {n + 1}
            </button>
          ))}
        </div>
        <div className="dayview">
          <div>
            <div className="num" aria-hidden="true">
              0{i + 1}
            </div>
            <h3>{d.t}</h3>
          </div>
          <ul className="stops">
            {d.s.map(([time, name, note]) => (
              <li key={time + name}>
                <span className="t">{time}</span>
                <b>{name}</b>
                <span className="d">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
