import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import("../styles/flagsQuestion.css");

function FlagsQuestion({
  firstcountry,
  secondcountry,
  thirdcountry,
  fourthcountry,
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
    setScore((current) => current + 1 * timer);
  };

  function checkFirstAnswer() {
    if (flag.translations.fra.common === firstcountry.translations.fra.common) {
incrementScore()
      voiceGood(firstcountry.translations.fra.common);
    } else {
      voiceNotGood(
        firstcountry.translations.fra.common,
        flag.translations.fra.common
      );
      navigate("/score");
    }
    window.location.reload();
  }

  function checkSecondAnswer() {
    if (
      flag.translations.fra.common === secondcountry.translations.fra.common

    ) {
      incrementScore()
      voiceGood(secondcountry.translations.fra.common);
    } else {
      voiceNotGood(
        secondcountry.translations.fra.common,
        flag.translations.fra.common
      );
      navigate("/score");
    }
    window.location.reload();
  }

  function checkThirdAnswer() {
    if (flag.translations.fra.common === thirdcountry.translations.fra.common) {
      incrementScore()


      voiceGood(thirdcountry.translations.fra.common);
    } else {
      voiceNotGood(
        thirdcountry.translations.fra.common,
        flag.translations.fra.common
      );
      navigate("/score");
    }
    window.location.reload();
  }

  function checkFourthAnswer() {
    if (
      flag.translations.fra.common === fourthcountry.translations.fra.common
    ) {
      incrementScore()

      voiceGood(fourthcountry.translations.fra.common);
    } else {
      voiceNotGood(
        fourthcountry.translations.fra.common,
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
          <h1>A QUEL PAYS APPARTIENT CE DRAPEAU ?</h1>
        </div>
        <div className="object-question">
          <img src={flag.flags.svg} alt="Vilain tricheur" />
        </div>
        <div className="proposition-question">
          <button type="button" onClick={checkFirstAnswer} firstCountry={firstcountry} flag={flag}>
            {firstcountry.translations.fra.common}
          </button>

          <button type="button" onClick={checkSecondAnswer} secondCountry={secondcountry} flag={flag}>
            {secondcountry.translations.fra.common}
          </button>

          <button type="button" onClick={checkThirdAnswer} thirdCountry={secondcountry} flag={flag}>
            {thirdcountry.translations.fra.common}
          </button>

          <button type="button" onClick={checkFourthAnswer} fourthCountry={fourthcountry} flag={flag}>
            {fourthcountry.translations.fra.common}
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
      {firstcountry === "" ||
      secondcountry === "" ||
      thirdcountry === "" ||
      fourthcountry === "" ||
      flag === ""
        ? loading()
        : showQuestion()}
    </div>
  );
}

export default FlagsQuestion;
