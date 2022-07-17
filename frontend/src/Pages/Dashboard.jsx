import React, { useContext, useEffect, useState } from "react";
import ExportContext from "../contexts/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import helloearth from "../assets/helloearth.png";

import "../styles/dashboard.css";

function Dashboard() {
  const { infoUser } = useContext(ExportContext.Context);
  const navigate = useNavigate();

  const [pseudo, setPseudo] = useState("");
  const [playerList, setPlayersList] = useState([]);

  const playGame = () => {
    navigate("/play");
  };

  const search = (obj) => obj.pseudo === localStorage.getItem("pseudo");

  useEffect(() => {
    axios
      .post(`http://localhost:8080/api/alluser/`, {
        email: localStorage.getItem("utilisateur"),
      })
      .then(function (response) {
        setPseudo(response.data);
        localStorage.setItem("pseudo", response.data.pseudo);
        localStorage.setItem("bestscore", response.data.bestscore);
      });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/ranking/`).then(function (response) {
      setPlayersList(response.data);
    });
  }, []);

  localStorage.setItem("Score:count", 0);

  const alreadyPlayed = () => {
    if (localStorage.getItem("bestscore") === "0") {
      return (
        <div>
          <h2>Tu n'as pas encore joué la moindre partie. </h2>
          <h2>Qu'est-ce que tu attends ?</h2>
        </div>
      );
    } else {
      return (
        <>
          <h2>
            Tu es classé{" "}
            {`${playerList.findIndex(search) + 1}${
              playerList.findIndex(search) + 1 === 1 ? "er" : "ème"
            }`}{" "}
            sur {playerList.length} joueurs avec un score total de{" "}
            {localStorage.getItem("bestscore")} points !
          </h2>
          <h2>Penses-tu pouvoir faire mieux ?</h2>
        </>
      );
    }
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-title">
        <div className="title-msg">
          <h1>Bonjour {localStorage.getItem("pseudo")}</h1>
        </div>
        <div className="title-img">
          <img src={helloearth} alt="Planète Terre qui dit bonjour" />
        </div>
      </div>

      <div className="dashboard-msg">
        {infoUser === null ? navigate("/register") : alreadyPlayed()}

        <div className="btn-dashboard">
          <button onClick={playGame}>JOUER</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
