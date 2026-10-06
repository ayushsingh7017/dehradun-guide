"use client";

import { useState } from "react";
import { PLACES } from "@/data/places";
import { SCENES } from "@/data/scenes";

const CATEGORIES = ["All", "Nature", "Spiritual", "Heritage", "City & family"];

function PlaceArt({ scene }: { scene: string }) {
  return (
    <svg
      viewBox="0 0 300 170"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: SCENES[scene] ?? "" }}
    />
  );
}

export default function Places() {
  const [cat, setCat] = useState("All");

  return (
    <section id="places">
      <div className="wrap">
        <div className="sec-head">
          <p className="label">Things to see</p>
          <h2>
            Places worth
            <br />
            your time
          </h2>
          <p>Distances are approximate and measured from the Clock Tower (Ghanta Ghar) in the city centre.</p>
        </div>
        <div className="chips" role="group" aria-label="Filter places">
          {CATEGORIES.map((c) => (
            <button key={c} className="chip" type="button" aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="places">
          {PLACES.filter((p) => cat === "All" || p.c === cat).map((p) => (
            <article className="place" key={p.n}>
              <div className="art">
                <PlaceArt scene={p.s} />
              </div>
              <div className="pbody">
                <div className="prow">
                  <span className="cat">{p.c}</span>
                  <span className="km">{p.d}</span>
                </div>
                <h3>{p.n}</h3>
                <p>{p.p}</p>
                <div className="meta">
                  <span>
                    <b>Time:</b> {p.t}
                  </span>
                  <span>
                    <b>Tip:</b> {p.b}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
