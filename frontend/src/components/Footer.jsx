import logo from "../assets/logo_small.png"
import ("../styles/footer.css")

function Footer () {
    return (
        <div>
            <div className="white-line" />
            <div className="footer-content">
            <img alt="logo Earthathon" src={logo} />
            <div className="footer-text"><p>Pour toutes questions, réclamations ou suggestions veuillez me contacter à l'adresse : kevin.peset@gmail.com</p></div>
            </div>
        </div>
    )
}

export default Footer;