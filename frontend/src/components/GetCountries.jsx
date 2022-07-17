import React, { useState } from "react";
import axios from "axios";
import FlagsQuestion from "../components/FlagsQuestion";
import { useEffect } from "react";

function GetCountries() {
  const [firstCountry, setFirstCountry] = useState("");
  const [secondCountry, setSecondCountry] = useState("");
  const [thirdCountry, setThirdCountry] = useState("");
  const [fourthCountry, setFourthCountry] = useState("");

  const [flag, setFlag] = useState("");

  const firstId = Math.floor(Math.random() * 250);
  const secondId = Math.floor(Math.random() * 250);
  const thirdId = Math.floor(Math.random() * 250);
  const fourthId = Math.floor(Math.random() * 250);

  const randomId = Math.floor(Math.random() * 4);

  function getCountries() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(function (resp) {
        return resp.data;
      })
      .then((data) => {
        setFirstCountry(data[firstId]);
        setSecondCountry(data[secondId]);
        setThirdCountry(data[thirdId]);
        setFourthCountry(data[fourthId]);
        if (randomId === 0) {
          setFlag(data[firstId]);
        } else if (randomId === 1) {
          setFlag(data[secondId]);
        } else if (randomId === 2) {
          setFlag(data[thirdId]);
        } else {
          setFlag(data[fourthId]);
        }
      });
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <FlagsQuestion
        firstcountry={firstCountry}
        secondcountry={secondCountry}
        thirdcountry={thirdCountry}
        fourthcountry={fourthCountry}
        flag={flag}
      />
    </div>
  );
}

export default GetCountries;
