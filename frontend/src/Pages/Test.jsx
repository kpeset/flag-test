import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styles/test.css"

function Test () {

const [isLoading, setIsLoading] = useState(false)
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
            setIsLoading(true)
         setPseudo(response.data);
        })
       
      }, []);

console.log(pseudo)

    return (
        <div className="test">
            {isLoading === false ? <h1>Pas connecté</h1> : <h1>Bonjour {pseudo.pseudo} ! Ton meilleur score est de {pseudo.bestscore} points</h1>}
        </div>
    )
}

export default Test;