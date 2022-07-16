import React, { useRef, useContext } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import ExportContext from "../contexts/Context";
import logo from "../assets/logo_small.png"
import "../styles/navbar.css";

function Navbar() {
  const { infoUser } = useContext(ExportContext.Context);

console.log(infoUser)
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <img className="logo" src={logo} alt="logo earthathon"/>
      <nav ref={navRef}>
        <a href="/">Accueil</a>
        <a href="/play">Jouer</a>
        {infoUser === null ? "": <a href="/dashboard">Ton profil</a>}
        <a href="/">A propos</a>

        <div>
        <img className="logo-burger" src={logo} alt="menu burger"/>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
