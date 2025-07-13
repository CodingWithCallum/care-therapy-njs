import "./globals.css";
import Feature from "./Components/Feature";
import Hero from "./Components/Hero";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <section>
      <div className="" data-theme="corporate">
          <Hero/>
          <Feature/>
          <Testimonials/>
      </div>
    </section>
  );
}
