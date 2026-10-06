const TIPS: [string, string][] = [
  ["Start early", "The road to Mussoorie fills up by late morning on weekends. Leave Dehradun before 8 am."],
  ["Carry cash", "Cards work in cafes and malls, but small shops, parking and entry tickets often take cash or UPI only."],
  ["Check the road", "In the monsoon, look at road and weather updates before heading to Mussoorie or Chakrata."],
  ["Dress in layers", "Days can be warm and evenings cool, even in spring and autumn."],
  ["Respect sacred places", "Cover your shoulders, remove shoes at the door and ask before taking photographs inside."],
  ["Keep rivers clean", "Take your rubbish with you from Robber's Cave, Lacchiwala and Sahastradhara."],
  ["Book ahead", "Hotels in Mussoorie and Rishikesh fill up around Diwali, New Year and the May to June holidays."],
  ["Hire a local driver", "If you are not used to steep, narrow bends, a driver makes hill roads much easier."],
];

const REACH: [string, string][] = [
  ["By air", "Jolly Grant Airport (DED) is about 25 km from the city, between Dehradun and Rishikesh. Taxis and app cabs wait outside, and the ride takes about 45 minutes."],
  ["By train", "Dehradun Railway Station is in the middle of the city. Trains run from Delhi, including the Shatabdi and Jan Shatabdi, and from Haridwar, Lucknow, Kolkata and Mumbai."],
  ["By road", "Delhi is about 250 km away, usually 5 to 6 hours by car. Buses from Delhi, Chandigarh, Shimla and Haridwar arrive at the inter-state bus terminal."],
  ["In the city", "Shared tempos and city buses cover the main routes, and autos and app cabs are easy to find. For day trips, a hired cab with a driver is the simplest choice."],
];

const FAQ: [string, string][] = [
  ["How many days do I need?", "Two days cover the main sights in the city. Add one day each for Mussoorie and Rishikesh, so three to four days is a comfortable trip."],
  ["Is Dehradun good for a family trip?", "Yes. Malsi Deer Park, Sahastradhara, Lacchiwala and the Forest Research Institute grounds are easy for children, and the roads are good for driving."],
  ["Does it snow in Dehradun?", "Snow in the city is very rare. Nearby Mussoorie, Dhanaulti and Chakrata can see snowfall between December and February."],
  ["Is it safe for solo travellers?", "It is generally considered a comfortable city for solo travellers, including women. Use normal city sense: travel by day to remote places, share your plan with someone and use licensed taxis at night."],
  ["Can I visit the Indian Military Academy?", "Entry is restricted. Visitors usually need prior permission, and rules change, so check with the academy before you plan around it."],
  ["Stay in Dehradun or Mussoorie?", "Stay in Dehradun for caves, temples, food and lower prices. Stay in Mussoorie for cool air and mountain views if you plan to spend most of your time there."],
];

function CardList({ items }: { items: [string, string][] }) {
  return (
    <ul className="tips">
      {items.map(([title, text]) => (
        <li key={title}>
          <b>{title}</b>
          {text}
        </li>
      ))}
    </ul>
  );
}

export function Tips() {
  return (
    <section id="tips">
      <div className="wrap">
        <div className="sec-head">
          <p className="label">Before you go</p>
          <h2>Practical tips</h2>
        </div>
        <CardList items={TIPS} />
      </div>
    </section>
  );
}

export function Reach() {
  return (
    <section id="reach">
      <div className="wrap">
        <div className="sec-head">
          <p className="label">Getting here</p>
          <h2>
            How to reach
            <br />
            Dehradun
          </h2>
        </div>
        <CardList items={REACH} />
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-head">
          <p className="label">Questions</p>
          <h2>
            Common
            <br />
            questions
          </h2>
        </div>
        {FAQ.map(([q, a], i) => (
          <details key={q} open={i === 0}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="giant" aria-hidden="true">
          Doon
        </div>
        <div className="row">
          <b>Dehradun Guide</b>
          <span>Distances, travel times, temperatures and heights are approximate. Check timings, entry rules and road conditions before you travel.</span>
        </div>
      </div>
    </footer>
  );
}
