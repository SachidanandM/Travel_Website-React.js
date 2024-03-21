import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assests/about.jpg";
import Under from "../components/Under";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />

      <AboutUs />
      <Under />
    </>
  );
}

export default About;
