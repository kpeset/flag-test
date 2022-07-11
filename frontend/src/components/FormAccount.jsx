import "../styles/formAccount.css";
import world1 from "../assets/world1.jpg";
import flagspic from "../assets/flagspic.jpg";

function FormAccount() {
  return (
    <div
      className="promotion"
      style={{
        backgroundImage: `url(${world1})`,
        backgroundSize: "cover",
      }}
    >
      <div className="form">
        <div className="title-form">
          <h2>LEARN AND FUN!</h2>
        </div>
        <div className="describe-form">
          <p>
            Améliore tes connaissances en géographie à travers une série de
            questions et tente de battre le score des autres.
          </p>
        </div>
        <div className="btn-area">
          <div className="btn-form">
            <button className="btn-subscribe">S'INSCRIRE</button>
          </div>
        </div>
        <div className="illustrations">
            <h3>Découvre les drapeaux</h3>
          <img alt="drapeaux du monde" src={flagspic} />
        </div>
      </div>
    </div>
  );
}

export default FormAccount;
