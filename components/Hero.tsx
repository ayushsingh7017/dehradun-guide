"use client";

import { useEffect, useMemo, useRef } from "react";

// Small seeded random so the stars and trees are the same on the server and the client.
function makeRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function buildScene() {
  const rnd = makeRng(7);
  const stars = Array.from({ length: 46 }, () => ({
    cx: Math.round(rnd() * 1440),
    cy: Math.round(rnd() * 250),
    r: Number((0.8 + rnd() * 1.6).toFixed(1)),
    delay: Number((rnd() * 3).toFixed(1)),
  }));
  const trees: string[] = [];
  for (let x = -10; x < 1460; x += 16 + rnd() * 18) {
    const h = 34 + rnd() * 60;
    const w = 12 + rnd() * 9;
    const y = 668;
    const f = (n: number) => n.toFixed(1);
    trees.push(
      `M${f(x)} ${y} l${f(-w)} 0 l${f(w * 0.55)} ${f(-h * 0.42)} l${f(-w * 0.35)} 0 l${f(w * 0.6)} ${f(-h * 0.4)} l${f(-w * 0.3)} 0 l${f(w * 0.5)} ${f(-h * 0.3)} l${f(w * 0.5)} ${f(h * 0.3)} l${f(-w * 0.3)} 0 l${f(w * 0.6)} ${f(h * 0.4)} l${f(-w * 0.35)} 0 l${f(w * 0.55)} ${f(h * 0.42)}z`
    );
  }
  return { stars, trees };
}

export default function Hero() {
  const { stars, trees } = useMemo(buildScene, []);
  const scene = useRef<SVGSVGElement>(null);

  // Parallax: each layer drifts down a little as the page scrolls.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const layers = Array.from(scene.current?.querySelectorAll<SVGGElement>(".layer") ?? []);
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 900) return;
      layers.forEach((l) => {
        const speed = parseFloat(l.getAttribute("data-speed") || "0");
        l.style.transform = `translateY(${(y * speed).toFixed(1)}px)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hero">
      <svg
        ref={scene}
        className="scene"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMax slice"
        role="img"
        aria-label="Illustration of the Doon valley at dusk with snow peaks, layered hills, pine forest and a low sun"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0d1440" />
            <stop offset=".3" stopColor="#1b3f86" />
            <stop offset=".5" stopColor="#e59a58" />
            <stop offset=".66" stopColor="#f6c96b" />
            <stop offset="1" stopColor="#f6c96b" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <rect width="1440" height="700" fill="url(#sky)" />
        <g>
          {stars.map((s, i) => (
            <circle key={i} className="twinkle" cx={s.cx} cy={s.cy} r={s.r} fill="#fff" style={{ animationDelay: `-${s.delay}s` }} />
          ))}
        </g>
        <g className="layer" data-speed=".03">
          <g className="sunglow">
            <circle cx="1010" cy="440" r="210" fill="#ffe3a0" opacity=".16" />
            <circle cx="1010" cy="440" r="150" fill="#ffe3a0" opacity=".22" />
          </g>
          <circle cx="1010" cy="440" r="104" fill="#ffe7a8" />
        </g>
        <g className="layer" data-speed=".05">
          <path d="M0 400 L110 330 L170 360 L280 270 L360 340 L450 300 L560 380 L660 290 L760 350 L880 260 L980 340 L1080 300 L1200 370 L1320 310 L1440 360 V720 H0Z" fill="#d5ddff" opacity=".42" />
        </g>
        <g className="bird">
          <path d="M0 150 q8 -10 16 0 q8 -10 16 0" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity=".85" />
        </g>
        <g className="bird b">
          <path d="M0 210 q6 -8 12 0 q6 -8 12 0" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".7" />
        </g>
        <g className="layer" data-speed=".09">
          <path d="M0 470 L140 410 L260 450 L400 380 L540 450 L700 400 L860 460 L1020 390 L1180 450 L1320 410 L1440 450 V720 H0Z" fill="#3a4f96" />
        </g>
        <g className="mist" opacity=".55">
          <ellipse cx="420" cy="470" rx="380" ry="36" fill="#ffe9c4" filter="url(#blur)" />
        </g>
        <g className="layer" data-speed=".14">
          <path d="M0 540 L130 490 L270 530 L420 470 L580 530 L740 480 L900 540 L1060 490 L1220 530 L1440 480 V720 H0Z" fill="#2a6b72" />
        </g>
        <g className="mist b" opacity=".5">
          <ellipse cx="1000" cy="545" rx="420" ry="30" fill="#ffe9c4" filter="url(#blur)" />
        </g>
        <g className="layer" data-speed=".2">
          <path d="M0 610 Q180 550 360 600 T720 590 T1080 605 T1440 570 V720 H0Z" fill="#17583f" />
        </g>
        <g className="layer" data-speed=".28">
          <path d="M0 650 Q200 620 400 655 T800 640 T1200 660 T1440 630 V720 H0Z" fill="#0a2a20" />
          <g fill="#0a2a20">
            {trees.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        </g>
      </svg>

      <div className="stamp" aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <defs>
            <path id="circ" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
          </defs>
          <circle cx="100" cy="100" r="98" fill="#f2a33a" stroke="#1a1205" strokeWidth="4" />
          <circle cx="100" cy="100" r="58" fill="none" stroke="#1a1205" strokeWidth="2.5" />
          <g className="spin">
            <text fontFamily="DM Mono, monospace" fontSize="13" fontWeight="500" fill="#1a1205">
              <textPath href="#circ" textLength="470" lengthAdjust="spacing">
                THE DOON VALLEY · UTTARAKHAND · 640 M ABOVE SEA ·{" "}
              </textPath>
            </text>
          </g>
          <text x="100" y="118" textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight="900" fontSize="46" fill="#1a1205">
            GUIDE
          </text>
        </svg>
      </div>

      <div className="wrap hero-inner">
        <span className="deva">देहरादून</span>
        <h1>
          <span>Dehradun</span>
          <span className="out">The Doon valley</span>
        </h1>
        <p className="lede">
          Caves, monasteries, mountain roads and Garhwali food in one valley between the Ganga and the Yamuna. Everything you need to plan a trip.
        </p>
        <div className="cta">
          <a className="btn fill" href="#places">
            See the places
          </a>
          <a className="btn ghost" href="#plan">
            3-day plan
          </a>
        </div>
      </div>
    </div>
  );
}
