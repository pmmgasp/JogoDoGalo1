import React, { useState, useEffect } from "react";
import oImage from "../images/O.png";
import xImage from "../images/X.png";
import "./Options.css";
import { Box } from "../components/Box";

function Options({ onDifficultyChange }) {
  const [difficulty, setDifficulty] = useState("easy");
  const [player1Image, setPlayer1Image] = useState(oImage);
  const [player2Image, setPlayer2Image] = useState(xImage);

  useEffect(() => {
    const savedDifficulty = localStorage.getItem("difficulty");
    if (savedDifficulty) {
      setDifficulty(savedDifficulty);
      onDifficultyChange(savedDifficulty);
    }
  }, [onDifficultyChange]);

  const handleDifficultyChange = (event) => {
    const selectedDifficulty = event.target.value;
    setDifficulty(selectedDifficulty);
    onDifficultyChange(selectedDifficulty);
    localStorage.setItem("difficulty", selectedDifficulty);
  };

  return (
    <div className="options">
      <h1>Options</h1>
      <div className="options-container">
        <div className="section-container">
          <div className="difficulty">
            <div className="difficulty-buttons">
              <button
                className={`difficulty-button ${
                  difficulty === "easy" ? "active" : ""
                }`}
                onClick={handleDifficultyChange}
                value="easy"
              >
                Fácil
              </button>
              <button
                className={`difficulty-button ${
                  difficulty === "medium" ? "active" : ""
                }`}
                onClick={handleDifficultyChange}
                value="medium"
              >
                Intermédio
              </button>
              <button
                className={`difficulty-button ${
                  difficulty === "hard" ? "active" : ""
                }`}
                onClick={handleDifficultyChange}
                value="hard"
              >
                Difícil
              </button>
            </div>
          </div>
          <div className="players-sections">
            <div className="player-section">
              <h3>Jogador 1:</h3>
              <div className="image-options">
                <div className="image-option">
                  <label>
                    Pre-defined Images:
                    <div className="Btn-O-X">
                      <button
                        className={`image-button ${
                          player1Image === oImage ? "active" : ""
                        }`}
                        onClick={() => {
                          setPlayer1Image(oImage);
                          if (player2Image === oImage) {
                            setPlayer2Image(xImage);
                          }
                        }}
                      >
                        <img src={oImage} alt="Image 1" />
                      </button>
                      <button
                        className={`image-button ${
                          player1Image === xImage ? "active" : ""
                        }`}
                        onClick={() => {
                          setPlayer1Image(xImage);
                          if (player2Image === xImage) {
                            setPlayer2Image(oImage);
                          }
                        }}
                      >
                        <img src={xImage} alt="Image 2" />
                      </button>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="player-section">
              <h3>Jogador 2:</h3>
              <div className="image-options">
                <div className="image-option">
                  <label>
                    Pre-defined Images:
                    <div className="Btn-O-X">
                      <button
                        className={`image-button ${
                          player2Image === oImage ? "active" : ""
                        }`}
                        onClick={() => {
                          setPlayer2Image(oImage);
                          if (player1Image === oImage) {
                            setPlayer1Image(xImage);
                          }
                        }}
                      >
                        <img src={oImage} alt="Image 1" />
                      </button>
                      <button
                        className={`image-button ${
                          player2Image === xImage ? "active" : ""
                        }`}
                        onClick={() => {
                          setPlayer2Image(xImage);
                          if (player1Image === xImage) {
                            setPlayer1Image(oImage);
                          }
                        }}
                      >
                        <img src={xImage} alt="Image 2" />
                      </button>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Options;