import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineLogout } from "react-icons/ai";

import { FaBars, FaTimes } from "react-icons/fa";
import ExportContext from "../contexts/Context";
import logo from "../assets/logo_small.png";
import "../styles/navbar.css";

function Navbar() {
  const { infoUser } = useContext(ExportContext.Context);
  const navRef = useRef();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("utilisateur");
    navigate("/");
    window.location.reload();
    showNavbar();
  };
  
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <img className="logo" src={logo} alt="logo earthathon" />
      <nav ref={navRef}>
        <a href="/">Accueil</a>
        <a href="/play">Jouer</a>
        <a href="/ranking">Classement</a>
        {infoUser === null ? (
          <a href="/register">Inscription / Connexion</a>
        ) : (
          ""
        )}
        {infoUser === null ? "" : <a href="/dashboard">Ton profil</a>}
        {infoUser === null ? (
          ""
        ) : (
          <button className="logout-btn" onClick={logout}>
            <AiOutlineLogout />
          </button>
        )}

        <div>
          <img className="logo-burger" src={logo} alt="menu burger" />
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
