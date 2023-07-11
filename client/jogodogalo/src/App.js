import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Account/Login";
import Register from "./pages/Account/Register";
import Play from "./pages/Play/Play";
import PlayPvP from "./pages/Play/PlayPvP";
import PlayPvM from "./pages/Play/PlayPvM";
import Options from "./pages/Options";
import About from "./pages/About";
import React, { useState } from "react";
function App() {
  const [difficulty, setDifficulty] = useState("easy");

  const handleDifficultyChange = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  const [player1Image, setPlayer1Image] = useState('oImage');
  const [player2Image, setPlayer2Image] = useState('xImage');

  const handleOptionsSubmit = (image1, image2) => {
    setPlayer1Image(image1);
    console.log(image1)
    setPlayer2Image(image2);
    console.log(image2)
  } ;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/play" element={<Play />}></Route>
          <Route path="/playpvp" element={<PlayPvP />}></Route>
          <Route
            path="/playpvm"
            element={
              <PlayPvM
                difficulty={difficulty}
                player1Image={player1Image}
                player2Image={player2Image}
              />
            }
          />
          <Route
            path="/options"
            element={<Options onDifficultyChange={handleDifficultyChange}  onOptionsSubmit={handleOptionsSubmit}/>}
            
          />
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
