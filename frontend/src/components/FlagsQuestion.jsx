import { useNavigate } from "react-router-dom";
import("../styles/flagsQuestion.css");

function FlagsQuestion({
  firstCountry,
  secondCountry,
  thirdCountry,
  fourthCountry,
  flag,
}) {
  const navigate = useNavigate();

  function checkFirstAnswer() {
    if (flag.translations.fra.common === firstCountry.translations.fra.common) {
      voiceGood(firstCountry.translations.fra.common);
    } else {
      voiceNotGood(
        firstCountry.translations.fra.common,
        flag.translations.fra.common
      );
      navigate("/score");
    }
    window.location.reload();
  }

  function checkSecondAnswer() {
    if (
      flag.translations.fra.common === secondCountry.translations.fra.common
    ) {
      voiceGood(secondCountry.translations.fra.common);
    } else {
      voiceNotGood(
        secondCountry.translations.fra.common,
        flag.translations.fra.common
      );
      navigate("/score");
    }
    window.location.reload();
  }

  function checkThirdAnswer() {
    if (flag.translations.fra.common === thirdCountry.translations.fra.common) {
      voiceGood(thirdCountry.translations.fra.common);
    } else {
      voiceNotGood(
        thirdCountry.translations.fra.common,
        flag.translations.fra.common
      );
      navigate("/score");
    }
    window.location.reload();
  }

  function checkFourthAnswer() {
    if (
      flag.translations.fra.common === fourthCountry.translations.fra.common
    ) {
      voiceGood(fourthCountry.translations.fra.common);
    } else {
      voiceNotGood(
        fourthCountry.translations.fra.common,
        flag.translations.fra.common
      );
      navigate("/score");
    }
    window.location.reload();
  }

  function voiceNotGood(badCountry, goodCountry) {
    const msg = new SpeechSynthesisUtterance(
      `Faux ! Ce n'est pas ${badCountry}.  La bonne réponse est ${goodCountry}`
    );
    window.speechSynthesis.speak(msg);
  }

  function voiceGood(country) {
    const msg = new SpeechSynthesisUtterance(
      `Bonne réponse. C'est bien ${country}}`
    );
    window.speechSynthesis.speak(msg);
  }

  return (
    <div className="arch-question">
      <div className="card-question">
        <div className="title-question">
          <h1>A QUEL PAYS APPARTIENT CE DRAPEAU ?</h1>
        </div>
        <div className="object-question">
          {flag === "" ? (
            <h2>Chargement</h2>
          ) : (
            <img src={flag.flags.svg} alt="Vilain tricheur" />
          )}
        </div>
        <div className="proposition-question">
          {firstCountry === "" ? (
            <button>Chargement</button>
          ) : (
            <button onClick={checkFirstAnswer}>
              {firstCountry.translations.fra.common}
            </button>
          )}
          {secondCountry === "" ? (
            <button>Chargement</button>
          ) : (
            <button onClick={checkSecondAnswer}>
              {secondCountry.translations.fra.common}
            </button>
          )}
          {thirdCountry === "" ? (
            <button>Chargement</button>
          ) : (
            <button onClick={checkThirdAnswer}>
              {thirdCountry.translations.fra.common}
            </button>
          )}
          {fourthCountry === "" ? (
            <button>Chargement</button>
          ) : (
            <button onClick={checkFourthAnswer}>
              {fourthCountry.translations.fra.common}
            </button>
          )}
        </div>
        <div className="chrono">
          <h3>TEMPS RESTANT</h3>
          <h2>30</h2>
        </div>
      </div>
    </div>
  );
}

export default FlagsQuestion;
