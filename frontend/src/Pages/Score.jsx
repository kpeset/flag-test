import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import sadearth from "../assets/sadearth.png"
import "../styles/score.css";

function Score() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(`http://localhost:8080/api/alluser/`, {
        email: localStorage.getItem("utilisateur"),
      })
      .then(function (response) {
        localStorage.setItem("bestscore", response.data.bestscore);
      });
  }, []);

  const updateScore = () => {
    if (
      parseInt(localStorage.getItem("Score:count")) >
      parseInt(localStorage.getItem("bestscore"))
    ) {
      axios.post(
        "http://localhost:8080/api/updateScore/",
        {
          email: localStorage.getItem("utilisateur"),
          bestscore: localStorage.getItem("Score:count"),
        },
        {
          withCredentials: true,
        }
      );
    }
  };

  function home() {
    updateScore();
    localStorage.setItem("Score:count", null);
    navigate("/");
  }

  function replay() {
    updateScore();
    localStorage.setItem("Score:count", null);
    navigate("/play");
  }



  return (
    <div className="score-content">
      <h1>Aie... Tu as perdu !</h1>
      <img src={sadearth} alt="Planete triste" />
      <h1>
        Mais {localStorage.getItem("Score:count")} points, ce n'est pas si mal.
      </h1>
      <h1>Refais une partie et tente de battre ton score !</h1>
      <div className="button-menu-score">
        <div className="replay"><button onClick={replay}>Rejouer</button></div>
        <div className="home-btn"><button onClick={home}>Accueil</button></div>
      </div>
    </div>
  );
}

export default Score;
