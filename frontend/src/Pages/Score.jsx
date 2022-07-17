import { useNavigate } from "react-router-dom";
import React, {useEffect} from "react";
import axios from "axios"
import "../styles/score.css"

function Score () {
const navigate = useNavigate()


useEffect(() => {
    axios
    .post(
      `http://localhost:8080/api/alluser/`,
      {
        email: localStorage.getItem("utilisateur"),
      }
    )
    .then(function (response) {
     localStorage.setItem("bestscore", response.data.bestscore)
    })
   
  }, []);

const updateScore = () => {
    if (parseInt(localStorage.getItem("Score:count")) > parseInt(localStorage.getItem("bestscore"))) {
    axios
    .post(
      "http://localhost:8080/api/updateScore/",
      {
        email:localStorage.getItem("utilisateur"),
        bestscore: localStorage.getItem("Score:count"),
  
      },
      {
        withCredentials: true,
      }
    )
}
}


    function home(){
        updateScore()
        localStorage.setItem("Score:count", null)
navigate("/")
    }

    function replay() {
        localStorage.setItem("Score:count", null)
        navigate("/play")
    }



    return (
        <div className="score">
            <h1>Tu as perdu !</h1>
        <div className="button-menu-score">
            
            <button onClick={replay}>Rejouer</button>
            <button onClick={home}>Accueil</button>
        </div>
        </div>
    )
}

export default Score