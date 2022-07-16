import { useNavigate } from "react-router-dom";
import "../styles/score.css"

function Score () {
const navigate = useNavigate()

    function home(){
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