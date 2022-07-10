import { useNavigate } from "react-router-dom";


function Score () {
const navigate = useNavigate()

    function home(){
navigate("/")
    }

    function replay() {
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