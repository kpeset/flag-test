import React, { useContext, useEffect, useState } from "react";
import ExportContext from "../contexts/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/dashboard.css";

function Dashboard() {
  const { infoUser } = useContext(ExportContext.Context);
  const navigate = useNavigate();

  const [pseudo, setPseudo] = useState("")

  useEffect(() => {
      axios
      .post(
        `http://localhost:8080/api/alluser/`,
        {
          email: localStorage.getItem("utilisateur"),
        }
      )
      .then(function (response) {
       setPseudo(response.data);
       localStorage.setItem("pseudo",response.data.pseudo)
       localStorage.setItem("bestscore", response.data.bestscore)
      })
     
    }, []);

console.log(localStorage.getItem("bestscore"))

    const alreadyPlayed = () => {
        if (localStorage.getItem("bestscore") === "0") {
            return (
                <div><h1>Tu n'as pas encore joué de partie. Qu'est-ce que tu attends ?</h1></div>
            )
        } else {
            return(
            <div>Ton meilleur score est de {localStorage.getItem("bestscore")}</div>
       ) }
    }


  return (
    <div className="dashboard-content">
      {infoUser === null ? navigate("/register") : alreadyPlayed()}
    </div>
  );
}

export default Dashboard;
