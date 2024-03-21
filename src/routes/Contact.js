import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assests/thar.jpg";
import Under from "../components/Under";
import ContactUs from "../components/ContactUs";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactUs />
      <Under />
    </>
  );
}

export default Contact;
