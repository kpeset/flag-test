import Home from "./Pages/Home";
import Play from "./Pages/Play";
import About from "./Pages/About";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
  
  <div>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/play" element={<Play />} />
  <Route path="/about" element={<About />} />
  </Routes>
  </div>
)}


export default App;
