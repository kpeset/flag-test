import Home from "./pages/Home";
import Play from "./pages/Play";
import About from "./pages/About";
import Score from "./pages/Score";
import Register from "./pages/Register";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import { Route, Routes } from "react-router-dom";

function App() {
  return (
  
  <div>
    <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/play" element={<Play />} />
  <Route path="/about" element={<About />} />
  <Route path="/score" element={<Score />} />
  <Route path="/register" element={<Register />} />
  </Routes>
  <Footer />
  </div>
)}


export default App;
