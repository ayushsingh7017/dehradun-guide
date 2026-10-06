const HISTORY = [
  ["1675", "Guru Ram Rai settles in the valley and builds his dera."],
  ["1906", "The Forest Research Institute is founded. Its main building opens in 1929."],
  ["1932", "The Indian Military Academy begins training officers here."],
  ["2000", "Uttarakhand becomes a state and Dehradun becomes its capital."],
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <div>
          <p className="label">About the city</p>
          <div className="eq">
            <small>Where the name comes from</small>
            Dera <em>+</em> Dun <em>=</em> Dehradun
          </div>
          <div className="prose">
            <p>
              <b>Dera</b> means camp and <b>Dun</b> is the local word for a valley. Guru Ram Rai set up his camp here in the 1600s, and the Gurudwara Darbar Sahib in the centre of the city still marks the spot.
            </p>
            <p>
              The British added schools, survey offices and research institutes. The Survey of India, the Forest Research Institute, the Indian Military Academy and the Doon School all grew here, and Dehradun is still known as a school and training town. Wide tree-lined roads in Rajpur and the Cantonment area come from that time.
            </p>
            <p>
              Today it is the largest city in Uttarakhand and the main gate to the Garhwal mountains. Many visitors treat it as a stop on the way to Mussoorie or Rishikesh. It deserves more time than that. It has river caves, a tall Tibetan stupa, old forests and a slow pace that most cities of its size lost long ago.
            </p>
            <p>The valley is also known for Dehradun basmati rice and for litchi orchards that fruit in May and June.</p>
          </div>
        </div>
        <div className="tl" aria-label="Short history">
          {HISTORY.map(([year, text]) => (
            <div key={year}>
              <b>{year}</b>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
