import axios from "axios";
import React, { useEffect, useState } from "react";

function GetTwoFlags() {
  // Faire en sorte de mettre la 404 dans un state
  const [firstCountry, setFirstCountry] = useState("");
  const [secondCountry, setSecondCountry] = useState("");
  const [flag, setFlag] = useState("");
  const [countShowAnswer, setCountShowAnswer] = useState(1);
  const [badAnswer, setBadAnswer] = useState(1);

  const firstId = Math.floor(Math.random() * 250);
  const secondId = Math.floor(Math.random() * 250);
  const randomNb = Math.random();

  const getCountries = async () => {
    try {
      const resp = await axios.get("https://restcountries.com/v3.1/all");
      setFirstCountry(resp.data[firstId]);
      setSecondCountry(resp.data[secondId]);
    } catch (err) {
      console.error(err);
    }
  };

  const getFlag = async () => {
    try {
      const resp = await axios.get("https://restcountries.com/v3.1/all");
      if (randomNb < 0.5) {
        setFlag(resp.data[firstId]);
      } else {
        setFlag(resp.data[secondId]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  function checkFirstAnswer() {
    if (flag.translations.fra.common === firstCountry.translations.fra.common) {
      voiceGood(firstCountry.translations.fra.common);
    } else {
      voiceNotGood(
        secondCountry.translations.fra.common,
        firstCountry.translations.fra.common
      );
      voiceGameOver();
    }
    setCountShowAnswer(countShowAnswer - 1);
    window.location.reload();
  }

  function checkSecondAnswer() {
    if (
      flag.translations.fra.common === secondCountry.translations.fra.common
    ) {
      voiceGood(secondCountry.translations.fra.common);
    } else {
      voiceNotGood(
        firstCountry.translations.fra.common,
        secondCountry.translations.fra.common
      );
      voiceGameOver();
    }
    setCountShowAnswer(countShowAnswer - 1);
    window.location.reload();
  }

  useEffect(() => {
    getCountries();
    getFlag();
  }, []);

  function voiceNotGood(country, badCountry) {
    const msg = new SpeechSynthesisUtterance(
      `Faux ! Ce n'est pas ${badCountry}.  La bonne réponse est ${country}`
    );
    window.speechSynthesis.speak(msg);
  }

  function voiceGood(country) {
    const msg = new SpeechSynthesisUtterance(
      `Bonne réponse. C'est bien ${country}}`
    );
    window.speechSynthesis.speak(msg);
  }

  function voiceGameOver() {
    const msg = new SpeechSynthesisUtterance(`Tu as perdu !`);
    window.speechSynthesis.speak(msg);
  }

  return (
    <div className="card">
      <div className="question">
      <h1>A quel pays appartient ce drapeau ?</h1>
      </div>
      <div className="proposition">
      <div className="center-flag">
        {flag === "" ? (
          "chargement"
        ) : (
          <img alt="Vilain tricheur" src={flag.flags.svg} />
        )}
      </div>
      <div className="button">
        <button onClick={checkFirstAnswer}>
          {firstCountry === ""
            ? "chargement"
            : firstCountry.translations.fra.common}
        </button>
        <button onClick={checkSecondAnswer}>
          {secondCountry === ""
            ? "chargement"
            : secondCountry.translations.fra.common}
        </button>
      </div>
      </div>
    </div>
  );
}

export default GetTwoFlags;
