import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>C'est ici que tout commence...</h1>
      <div>
          <ul>
          <NavLink to="/play"><li>Jouer</li></NavLink>
          <NavLink to="/about"><li>A propos</li></NavLink>
          </ul>
      </div>
    </div>
  );
}

export default Home;
