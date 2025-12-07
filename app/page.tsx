import Packges from "./(pages)/packages/page";
import MaduraiToRameshwarem from "./(pages)/madurai-to-rameshwaram/page";
import OneWay from "./(pages)/one-way/page";
import AboutUs from "./(pages)/about/page";
import HomePages from "./(pages)/home/page";

export default function Home() {
  return (
    <main>
      <section id="home">
        <HomePages />
      </section>

      <section id="popular-packages">
        <Packges />
      </section>

      <section id="rameshwaram-taxi">
        <MaduraiToRameshwarem />
      </section>

      <section id="one-way-taxi">
        <OneWay/>
      </section>

      <section id="about-us">
        <AboutUs />
      </section>
    </main>
  );
}
