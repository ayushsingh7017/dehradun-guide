"use client";

import { useEffect, useRef } from "react";

const LINKS: [string, string][] = [
  ["#about", "About"],
  ["#places", "Places"],
  ["#map", "Map"],
  ["#food", "Food"],
  ["#season", "When"],
  ["#plan", "3 days"],
  ["#faq", "FAQ"],
];

export default function Header() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement;
      const max = Math.max(1, d.scrollHeight - window.innerHeight);
      if (bar.current) bar.current.style.width = Math.min(100, (window.scrollY / max) * 100) + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    let cur = root.getAttribute("data-theme");
    if (!cur) cur = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("dg-theme", next);
    } catch {}
  };

  return (
    <>
      <div className="progress" ref={bar} />
      <header className="top">
        <div className="wrap">
          <a className="brand" href="#top">
            <i />
            Dehradun Guide
          </a>
          <nav className="nav" aria-label="Sections">
            {LINKS.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <button className="themebtn" type="button" onClick={toggleTheme} aria-label="Switch light or dark theme">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
