import { useNavigate } from "react-router-dom";
import "../styles/score.css"

function Score () {
const navigate = useNavigate()

    function home(){
navigate("/")
    }

    function replay() {
        navigate("/play")
    }

    return (
        <div className="score-content">
            <div className="score">
            <h1>Tu as perdu !</h1>
        
        </div>
        <div className="btn-menu-score">
            <div className="replay">
            <button onClick={replay}>Rejouer</button>
            </div>
            <div className="home">
            <button onClick={home}>Accueil</button>
        </div>
        </div>
        </div>
    )
}

export default Score