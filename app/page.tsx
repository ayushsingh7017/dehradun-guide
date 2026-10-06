import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Places from "@/components/Places";
import Radar from "@/components/Radar";
import Peaks from "@/components/Peaks";
import Food from "@/components/Food";
import Seasons from "@/components/Seasons";
import Plan from "@/components/Plan";
import Planner from "@/components/Planner";
import { Tips, Reach, Faq, Footer } from "@/components/Info";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Places />

        <div className="band-dusk" id="map">
          <div className="wrap">
            <div className="sec-head">
              <p className="label">Around Dehradun</p>
              <h2>
                Day trips
                <br />
                from the Doon
              </h2>
              <p>Dehradun works well as a base. Tap a spot on the map to see the distance, drive time and what it is known for.</p>
            </div>
            <Radar />
            <div className="peaks-wrap">
              <div className="sec-head" style={{ marginBottom: 20 }}>
                <p className="label">Height above sea level</p>
                <h2 style={{ fontSize: "clamp(2.2rem,6vw,4rem)" }}>Going up from the plains</h2>
              </div>
              <Peaks />
            </div>
          </div>
        </div>

        <Food />
        <Seasons />
        <Plan />
        <Planner />
        <Tips />
        <Reach />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
