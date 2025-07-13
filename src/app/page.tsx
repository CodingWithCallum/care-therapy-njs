import "./globals.css";
import Feature from "./Components/Feature";
import Hero from "./Components/Hero";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <section>
      <head>
        <title>CARE Therapy | Home</title>
        <meta name="description" content="CARE Therapy - Your partner in mental health and wellness." />
        <meta property="og:title" content="CARE Therapy Home Page"/>
        <meta property="og:description" content="CARE Therapy Home Page For Clinical and Adapted Therapy"/>
        <meta property="og:image" content="/"/>
      </head>
      <div className="" data-theme="light">
          <Hero/>
          <Feature/>
          <Testimonials/>
      </div>
    </section>
  );
}
