import "../styles/formAccount.css";
import world1 from "../assets/world1.jpg";
import medalspic from "../assets/medalspic.jpg"
import flagspic from "../assets/flagspic.jpg";

function FormAccount() {
  return (
    <div
      className="promotion"
      style={{
        backgroundImage: `url(${world1})`,
        backgroundSize: "160vh",
        backgroundRepeat: "no-repeat",
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
          <img alt="drapeaux du monde" src={flagspic} />
          <h3>Différents mode de jeux</h3>
<p>Les drapeaux n'ont aucun secrets pour toi? Tu connais les capitales sur le bout des doigts? Alors Earthathon est fait pour toi.</p>
<img alt="médailles" src={medalspic} />
<h3>Monte dans le classement</h3>
<p>Crée toi un compte, enchaine les parties, améliore tes connaissances et grimpe dans le classement pour décrocher la médaille !</p>

        </div>
      </div>
     </div>
  );
}

export default FormAccount;
