import("../styles/flagsQuestion.css");

function FlagsQuestion({
  firstCountry,
  secondCountry,
  thirdCountry,
  fourthCountry,
  flag,
}) {
  const test = () => {
    console.log(flag);
  };

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
            <h2>CHARGEMENT</h2>
          ) : (
            <button>{firstCountry.translations.fra.common}</button>
          )}
          {secondCountry === "" ? (
            <h2>CHARGEMENT</h2>
          ) : (
            <button>{secondCountry.translations.fra.common}</button>
          )}
          {thirdCountry === "" ? (
            <h2>CHARGEMENT</h2>
          ) : (
            <button>{thirdCountry.translations.fra.common}</button>
          )}
          {fourthCountry === "" ? (
            <h2>CHARGEMENT</h2>
          ) : (
            <button>{fourthCountry.translations.fra.common}</button>
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
