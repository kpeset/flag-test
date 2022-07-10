import Home from "./Pages/Home";
import Play from "./Pages/Play";
import About from "./Pages/About";
import Score from "./Pages/Score";
import "./Styles/Play.css"

import { Route, Routes } from "react-router-dom";

function App() {
  return (
  
  <div>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/play" element={<Play />} />
  <Route path="/about" element={<About />} />
  <Route path="/score" element={<Score />} />
  </Routes>
  </div>
)}


export default App;
