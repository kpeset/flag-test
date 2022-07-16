import "../styles/register.css";

function Register() {
  return (
    <div className="register-content">
      <div className="signin-login-btn">
        <button className="signin-btn">S'INSCRIRE</button>

        <button className="login-btn">CONNEXION </button>
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
        <form className="signin-form">
          <p>Email</p>
          <input type="email" name="email" />
          <p>Pseudo</p>
          <input type="text" name="pseudo" />
          <p>Mot de passe</p>
          <input type="password" name="password" />
          <p>Vérifie ton mot de passe</p>
          <input type="password" name="check-password" />
          <button className="signin-btn">
VALIDER          </button>
        </form>
      </div>
      <div className="login-button">
        <button>
          <p>Déjà membre ?</p>
        </button>
      </div>
    </div>
  );
}

export default Register;
