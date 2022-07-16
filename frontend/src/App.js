import React, {useEffect, useContext} from "react";

import Home from "./pages/Home";
import Play from "./pages/Play";
import About from "./pages/About";
import Score from "./pages/Score";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ExportContext from "./contexts/Context";


import { Route, Routes } from "react-router-dom";



function App() {

  const { infoUser, setInfoUser } = useContext(ExportContext.Context);

  const myUser = localStorage.getItem("utilisateur")

  console.log(`infoUser : ${infoUser}`)

  useEffect(() => {
setInfoUser(myUser)
  }, [])


  return (
  <div>
    <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/play" element={<Play />} />
  <Route path="/about" element={<About />} />
  <Route path="/score" element={<Score />} />
  <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/test" element={<Test />} />

  </Routes>
  <Footer />
  </div>
)}


export default App;
