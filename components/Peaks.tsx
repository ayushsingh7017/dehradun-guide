const PEAKS: [string, number][] = [
  ["Haridwar", 314],
  ["Rishikesh", 340],
  ["Dehradun", 640],
  ["Mussoorie", 2005],
  ["Chakrata", 2118],
  ["Dhanaulti", 2286],
];

const MAX = 2286;

// 2005 becomes "2,005". Written by hand so the server and browser always print the same text.
const fmt = (n: number) => (n >= 1000 ? `${Math.floor(n / 1000)},${String(n % 1000).padStart(3, "0")}` : String(n));

export default function Peaks() {
  return (
    <div className="peaks">
      <svg
        viewBox="0 0 800 330"
        role="img"
        aria-label="Peaks drawn to scale showing the height of Haridwar, Rishikesh, Dehradun, Mussoorie, Chakrata and Dhanaulti"
      >
        <line x1="0" y1="270" x2="800" y2="270" stroke="#fff" strokeOpacity=".4" />
        {PEAKS.map(([name, m], i) => {
          const cx = 70 + i * 124;
          const h = Math.max(24, (m / MAX) * 230);
          const top = 270 - h;
          const bw = 62 + (h > 150 ? 22 : 0);
          const fill = name === "Dehradun" ? "#f2a33a" : h > 150 ? "#3a4f96" : "#2a6b72";
          const snow = h > 150;
          const p = (n: number) => n.toFixed(0);
          return (
            <g key={name}>
              <polygon points={`${cx - bw},270 ${cx},${p(top)} ${cx + bw},270`} fill={fill} stroke="#fff" strokeOpacity=".5" strokeWidth="2" />
              {snow && (
                <polygon
                  points={`${p(cx - bw * 0.3)},${p(top + h * 0.3)} ${cx},${p(top)} ${p(cx + bw * 0.3)},${p(top + h * 0.3)} ${p(cx + bw * 0.12)},${p(top + h * 0.22)} ${cx},${p(top + h * 0.34)} ${p(cx - bw * 0.14)},${p(top + h * 0.22)}`}
                  fill="#fff"
                />
              )}
              <text className="m" x={cx} y={p(top - 10)} textAnchor="middle">
                {fmt(m)} m
              </text>
              <text x={cx} y="302" textAnchor="middle">
                {name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
