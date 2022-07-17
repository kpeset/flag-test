import React, { useState } from "react";
import axios from "axios";

import "../styles/register.css";

function Register() {

  const [isRegister, setIsRegister] = useState("signin");

  const [registerValue, setRegisterValue] = useState({
    pseudo: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/api/login/",
        {
          email: loginValue.email,
          password: loginValue.password,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        localStorage.setItem("utilisateur",response.data.utilisateur)
        window.location = "/dashboard"
      })
      .catch(function (error) {
        const mailNotExist = error.response.data;
        if (mailNotExist === "Ce compte n'existe pas.") {
          alert(mailNotExist);
          window.location = "/";
        } else {
          alert("Email ou mot de passe incorrect.");
          window.location = "/";
        }
      });
  };

  const handleChangeLogin = (event) => {
    setLoginValue({
      ...loginValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    //Ici je sauvegarde les states de mon formulaire d'inscription
    if (registerValue.password !== registerValue.checkPassword) {
      alert("Les mots de passe ne sont pas identiques");
    } else {
      axios
        .post("http://localhost:8080/api/register/", {
          pseudo: registerValue.pseudo,
          email: registerValue.email,
          password: registerValue.password,
        })
        .then(function (response) {
          alert("Votre compte a été crée avec succès.");
          window.location = "/";
        })
        .catch(function (error) {
          const mailAlreadyExist = error.response.data;
          if (
            mailAlreadyExist ===
            "Votre email est déjà liée à un compte existant."
          ) {
            alert(mailAlreadyExist);
            window.location = "/";
          } else {
            alert("Votre mot de passe doit contenir au moins 6 caractères.");
            window.location = "/";
          }
        });
    }
  };

  const handleChangeRegister = (event) => {
    setRegisterValue({
      ...registerValue,
      [event.target.name]: event.target.value,
    });
  };

  const changeSigninSection = () => {
    setIsRegister("signin");
  };

  const changeLoginSection = () => {
    setIsRegister("login");
  };

  const signinSection = () => {
    return (
      <div className="register-content">
        <div className="signin-login-btn">
          <button className="signin-btn" onClick={changeSigninSection}>
            S'INSCRIRE
          </button>

          <button className="login-btn" onClick={changeLoginSection}>
            CONNEXION{" "}
          </button>
        </div>
        <div className="title-register">
          <h1>Créer un compte</h1>
        </div>
        <div className="info-register">
          <p>
            Commence par renseigner ton email, ton pseudo puis un mot de passe.
          </p>
        </div>
        <div className="warning-register">
          <p>La récupération du mot de passe n'est pas opérationnelle.</p>
          <p>
            {" "}
            Conserve le précieusement si tu ne veux pas perdre ta progression !
          </p>
        </div>
        <div>
          <form className="signin-form" onSubmit={handleSubmitRegister}>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={registerValue.email}
              onChange={handleChangeRegister}
            />
            <p>Pseudo</p>
            <input
              type="text"
              name="pseudo"
              value={registerValue.pseudo}
              onChange={handleChangeRegister}
            />
            <p>Mot de passe</p>
            <input
              type="password"
              name="password"
              value={registerValue.password}
              onChange={handleChangeRegister}
            />
            <p>Vérifie ton mot de passe</p>
            <input
              type="password"
              name="checkPassword"
              value={registerValue.checkPassword}
              onChange={handleChangeRegister}
            />
            <button className="signin-btn" type="submit">
              VALIDER{" "}
            </button>
          </form>
        </div>
        <div className="already-acc">
          <div className="line" />
          <button className="already-acc-btn" onClick={changeLoginSection}>
            Tu es déjà membre ?
          </button>
        </div>
      </div>
    );
  };

  const loginSection = () => {
    return (
      <div className="register-content">
        <div className="signin-login-btn">
          <button className="signin-btn" onClick={changeSigninSection}>
            S'INSCRIRE
          </button>

          <button className="login-btn" onClick={changeLoginSection}>
            CONNEXION{" "}
          </button>
        </div>
        <div className="title-register">
          <h1>Se connecter</h1>
        </div>
        <div>
          <form className="signin-form" onSubmit={handleSubmitLogin}>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={loginValue.email}
              onChange={handleChangeLogin}
            />
            <p>Mot de passe</p>
            <input
              type="password"
              name="password"
              value={loginValue.password}
              onChange={handleChangeLogin}
            />

            <button className="signin-btn" type="submit">
              VALIDER{" "}
            </button>
          </form>
        </div>
        <div className="already-acc">
          <div className="line" />
          <button className="already-acc-btn" onClick={changeLoginSection}>
            Pas encore membre ?
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>{isRegister === "signin" ? signinSection() : loginSection()}</div>
  );
}

export default Register;
