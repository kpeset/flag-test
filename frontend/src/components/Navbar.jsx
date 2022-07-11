import React, { useRef } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/logo_small.png"
import "../styles/navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <img className="logo" src={logo} />
      <nav ref={navRef}>
        <a href="/">Accueil</a>
        <a href="/play">Jouer</a>
        <a href="/">A propos</a>
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
