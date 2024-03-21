import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assests/thai1.jpg";
import Trip2 from "../assests/mala.jpg";
import Trip3 from "../assests/tok.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Map.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Thailand"
          text="Theoretical perspectives on Thai
         Tourism have started mainly in 2 major
          perspectives. The first strand is the
           strand mainly pursued by Thai academics
           aucrats which is to examine condition and str
           ategy to develop tourism industry in Thailand.
            The second strand is ones mainly discussed by
             ."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Theoretical perspectives on Thai
         Tourism have started mainly in 2 major
          perspectives. The first strand is the
           strand mainly pursued by Thai academics
           aucrats which is to examine condition and str
           ategy to develop tourism industry in Thailand.
            The second strand is ones mainly discussed by
             ."
        />
        <TripData
          image={Trip3}
          heading="Trip in Tokyo"
          text="Theoretical perspectives on Thai
         Tourism have started mainly in 2 major
          perspectives. The first strand is the
           strand mainly pursued by Thai academics
           aucrats which is to examine condition and str
           ategy to develop tourism industry in Thailand.
            The second strand is ones mainly discussed by
             ."
        />
      </div>
    </div>
  );
}
export default Trip;
