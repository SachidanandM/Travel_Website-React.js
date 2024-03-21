import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assests/aer.jpg";
import Under from "../components/Under";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Under />
    </>
  );
}

export default Service;
