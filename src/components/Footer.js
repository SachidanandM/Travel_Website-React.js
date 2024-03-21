import "./FooterStyle.css";
//import Desart from "../assests/thar.jpg";
import Desart1 from "../assests/goa2.jpg";
import Desart2 from "../assests/goa1.jpg";
import Desart3 from "../assests/cour2.jpg";
import Desart4 from "../assests/cour3.jpg";
import FooterData from "./FooterData";

const Footer = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see your memories</p>
      <FooterData
        className="first-des"
        heading="Courtallam Tourism"
        text=" To alleviate the headache of Shiva, the sage
         prepared an oil with cow milk, green coconut and mixture 
         of 42 herbs and applied it to Shiva. Pleased by his devotion,
          Shiva made the place his abode and came to be called Kutralanathar 
          and the falls
         nearby the temple got the name of Coutrallam 
         as Coutrallam Falls.
         The river sources of thess falls are River Chittra, 
         Manimutharu, Pachaiyar and Tamirabarani which cascades over 60m-92 m. 
         The bitter part of this falls is, during season time, it will be over crowed 
         and thronged with people"
        img1={Desart3}
        img2={Desart4}
      />
      <FooterData
        className="first-des-reverse"
        heading="Goa Tourism"
        text=" The state of Goa, in India, is famous for its 
        beaches and places of worship. Tourism is its 
        primary industry, and is generally focused on the
         coastal areas of Goa, with decreased tourist activity inland.

        Foreign tourists, mostly from Europe, 
        arrive in Goa in winter, whilst the summer and 
        monsoon seasons see many Indian tourists. Goa handled 2.29% of all foreign tourist arrivals in the country in 2011.[1][2] This relatively small state is situated on the west coast of India, between the borders of Maharashtra and Karnataka, and is better known to the world as a former Portuguese enclave on Indian soil. Thus, Tourism forms the backbone of Goa's economy.[3]"
        img1={Desart1}
        img2={Desart2}
      />
    </div>
  );
};

export default Footer;
