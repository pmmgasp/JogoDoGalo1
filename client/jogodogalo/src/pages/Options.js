import React, { useState } from "react";
import oImage from "../images/O.png";
import xImage from "../images/X.png";
import "./Options.css";

function Options() {
  const [difficulty, setDifficulty] = useState("");
  const [player1Image, setPlayer1Image] = useState(oImage);
  const [player2Image, setPlayer2Image] = useState(xImage);
  const [uploadedImage1, setUploadedImage1] = useState(null);
  const [uploadedImage2, setUploadedImage2] = useState(null);

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleImageChange = (event, player) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (player === 1) {
          setPlayer1Image(e.target.result);
          if (player2Image === oImage) {
            setPlayer2Image(xImage);
          }
        } else if (player === 2) {
          setPlayer2Image(e.target.result);
          if (player1Image === oImage) {
            setPlayer1Image(xImage);
          }
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleUploadedImage1 = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage1(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleUploadedImage2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage2(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="options">
      <h1>Options</h1>
      <div className="options-container">
      <div className="section-container">
        <div className="difficulty">
          
          <div className="difficulty-buttons">
            <button
              className={`difficulty-button ${difficulty === "easy" ? "active" : ""}`}
              onClick={() => setDifficulty("easy")}
            >
              Fácil
            </button>
            <button
              className={`difficulty-button ${difficulty === "medium" ? "active" : ""}`}
              onClick={() => setDifficulty("medium")}
            >
              Intermédio
            </button>
            <button
              className={`difficulty-button ${difficulty === "hard" ? "active" : ""}`}
              onClick={() => setDifficulty("hard")}
            >
              Dificil
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
                      className={`image-button ${player1Image === oImage && !uploadedImage1 ? "active" : ""}`}
                      onClick={() => {
                        setPlayer1Image(oImage);
                        setUploadedImage1(null); // Remover imagem de upload
                        if (player2Image === oImage) {
                          setPlayer2Image(xImage);
                        }
                      }}
                    >
                      <img src={oImage} alt="Image 1" />
                    </button>
                    <button
                      className={`image-button ${player1Image === xImage && !uploadedImage1 ? "active" : ""}`}
                      onClick={() => {
                        setPlayer1Image(xImage);
                        setUploadedImage1(null); // Remover imagem de upload
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

              <div className="image-option">
                <label>
                  Upload Image:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUploadedImage1}
                  />
                </label>
              </div>

              {uploadedImage1 && (
                <div className="selected-image">
                  <h4>Selected Image (Player 1):</h4>
                  <img src={uploadedImage1} alt="Uploaded" />
                </div>
              )}
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
                      className={`image-button ${player2Image === oImage && !uploadedImage2 ? "active" : ""}`}
                      onClick={() => {
                        setPlayer2Image(oImage);
                        setUploadedImage2(null); // Remover imagem de upload
                        if (player1Image === oImage) {
                          setPlayer1Image(xImage);
                        }
                      }}
                    >
                      <img src={oImage} alt="Image 1" />
                    </button>
                    <button
                      className={`image-button ${player2Image === xImage && !uploadedImage2 ? "active" : ""}`}
                      onClick={() => {
                        setPlayer2Image(xImage);
                        setUploadedImage2(null); // Remover imagem de upload
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

              <div className="image-option">
                <label>
                  Upload Image:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUploadedImage2}
                  />
                </label>
              </div>

              {uploadedImage2 && (
                <div className="selected-image">
                  <h4>Selected Image (Player 2):</h4>
                  <img src={uploadedImage2} alt="Uploaded" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Options;