import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import("../styles/flagsQuestion.css");

function FlagsQuestion({
  firstCountry,
  secondCountry,
  thirdCountry,
  fourthCountry,
  flag,
}) {
  const [timer, setTimer] = useState(15);
  const [chronoColorA, setChronoColorA] = useState(0);
  const [chronoColorB, setChronoColorB] = useState(128);
  const key = "Score:count";


  const [score, setScore] = useState(() => {
    let data = window.localStorage.getItem(key)

    if (data === null) {
      return 0;
    }

    try {
      return JSON.parse(data);
    } catch (error) {
      return 0;
    }

  })

  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      navigate("/score");
    }
  }, [timer]);

  const changeColor = () => {
    if (chronoColorA < 128) {
      setChronoColorA(chronoColorA + 16);
    }
    if (chronoColorA === 128) {
      setChronoColorB(chronoColorB - 16);
    }
  };

  useEffect(() => {
    changeColor();
  }, [timer]);

  React.useEffect(() => {
    let data = JSON.stringify(score);
    window.localStorage.setItem(key, data);
  }, [score]);

  const incrementScore = () => {
    setScore((current) => current + 1);
  };

  function checkFirstAnswer() {
    if (flag.translations.fra.common === firstCountry.translations.fra.common) {
incrementScore()
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
      incrementScore()
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
      incrementScore()


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
      incrementScore()

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

  const showQuestion = () => {
   

    return (
      <div className="card-question">
        <div className="title-question">
          <h1>A QUEL PAYS APPARTIENT CE DRAPEAUuu ?</h1>
        </div>
        <div className="object-question">
          <img src={flag.flags.svg} alt="Vilain tricheur" />
        </div>
        <div className="proposition-question">
          <button type="button" onClick={checkFirstAnswer} firstCountry={firstCountry} flag={flag}>
            {firstCountry.translations.fra.common}
          </button>

          <button type="button" onClick={checkSecondAnswer} secondCountry={secondCountry} flag={flag}>
            {secondCountry.translations.fra.common}
          </button>

          <button type="button" onClick={checkThirdAnswer} thirdCountry={secondCountry} flag={flag}>
            {thirdCountry.translations.fra.common}
          </button>

          <button type="button" onClick={checkFourthAnswer} fourthCountry={fourthCountry} flag={flag}>
            {fourthCountry.translations.fra.common}
          </button>
        </div>
        <div className="chrono">
          <h2>Score : {score} </h2>
          <h2>Temps restant</h2>
          <div
            className="test-barre"
            style={{
              width: `${timer}rem`,
              background: `rgb(${chronoColorA}, ${chronoColorB}, 0)`,
            }}
          />
        </div>
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="loading">
        <h1>Chargement en cours</h1>
      </div>
    );
  };
  
  return (
    <div className="arch-question">
      {firstCountry === "" ||
      secondCountry === "" ||
      thirdCountry === "" ||
      fourthCountry === "" ||
      flag === ""
        ? loading()
        : showQuestion()}
    </div>
  );
}

export default FlagsQuestion;
