import hammerhusNightImage from "../assets/logo.png";
import hammerhusDayImage from "../assets/logo.png";
import hammerenImage from "../assets/logo.png";
import gudhjemImage from "../assets/logo.png";
import dueoddeImage from "../assets/logo.png";
import osterlarsImage from "../assets/logo.png";

function Travels() {
  return (
    <div>
      <h2>Hammerhus By Night</h2>
      <img src={hammerhusNightImage} alt="Hammerhus By Night" />

      <h2>Hammerhus By Day</h2>
      <img src={hammerhusDayImage} alt="Hammerhus By Day" />

      <h2>Hammeren Roundtrip</h2>
      <img src={hammerenImage} alt="Hammeren Roundtrip" />

      <h2>Gudhjem Express</h2>
      <img src={gudhjemImage} alt="Gudhjem Express" />

      <h2>Dueodde Hangout</h2>
      <img src={dueoddeImage} alt="Dueodde Hangout" />

      <h2>Østerlars Guided Trip</h2>
      <img src={osterlarsImage} alt="Østerlars Guided Trip" />
    </div>
  );
}

export default Travels;