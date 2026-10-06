const NAMES = [
  "Robber's Cave",
  "Sahastradhara",
  "Mindrolling Stupa",
  "Paltan Bazaar",
  "Tapkeshwar",
  "Forest Research Institute",
  "Malsi Deer Park",
  "Mussoorie",
  "Rishikesh",
  "Rajaji National Park",
  "Kalsi",
  "Asan Barrage",
];

export default function Marquee() {
  // The list is rendered twice so the loop can slide by exactly half its width.
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {[...NAMES, ...NAMES].map((n, i) => (
          <span key={i}>{n}</span>
        ))}
      </div>
    </div>
  );
}
