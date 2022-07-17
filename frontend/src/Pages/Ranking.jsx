import React, { useEffect, useState } from "react";
import axios from "axios";

import firstMedal from "../assets/1.png";
import secondMedal from "../assets/2.png";
import thirdMedal from "../assets/3.png";
import world2 from "../assets/world2.jpg";

import("../styles/ranking.css");

function Ranking() {
  const [playersList, setPlayersList] = useState([]);
  const [topPlayers, setTopPlayers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/ranking/`).then(function (response) {
      setPlayersList(response.data);
    });
  }, []);

  //   const topThree = playersList.map((joueur) => (
  // setTopPlayers(joueur)
  //   ))

  return (
    <div className="ranking-content">
      <div
        className="ranking-content-part-one"
        style={{
          backgroundImage: `url(${world2})`,
          backgroundSize: "160vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="ranking-title">
          <h1>PODIUM ACTUEL</h1>
        </div>
        <div className="podium">
          <div className="left">
            <img src={secondMedal} alt="Deuxième place" />
            <p>
              {playersList
                .map((el, index) => (
                  <div>
                    <p>{el.pseudo}</p>
                  </div>
                ))
                .slice(1, 2)}
            </p>
          </div>
          <div className="middle">
            <img className="gold-medal" src={firstMedal} alt="Première place" />
            <p>
              {playersList
                .map((el, index) => (
                  <div>
                    <p>{el.pseudo}</p>
                  </div>
                ))
                .slice(0, 1)}
            </p>
          </div>
          <div className="right">
            <img src={thirdMedal} alt="Troisième place" />
            <p>
              {playersList
                .map((el, index) => (
                  <div>
                    <p>{el.pseudo}</p>
                  </div>
                ))
                .slice(2, 3)}
            </p>
          </div>
        </div>
        <div className="classement-general">
          <div className="classement-general-title">
            <h1>TOP 10</h1>
          </div>
          <div className="players-list">
          <table>
          <tr>
            <th>CLASSEMENT</th>
            <th>PSEUDO</th>
            <th>SCORE</th>

          </tr>
          {playersList
                .map((el, index) => (
                  <tr>
                    <td>
                      {index + 1}  
                    </td>
                    <td>
                    {el.pseudo}
                    </td>
                    <td>
                    {el.bestscore}
                    </td>
                  </tr>
                ))
                .slice(0,10)}
          
        </table>
          </div>
        </div>
      </div>
      <div className="testTABLEAU">
        
      </div>
    </div>
  );
}

export default Ranking;
