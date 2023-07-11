import React, { useState, useEffect } from "react";
import oImage from "../images/O.png";
import xImage from "../images/X.png";
import "./Options.css";
import { Box } from "../components/Box";
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

function Options({ onDifficultyChange }) {

  Axios.defaults.withCredentials = true;

  const [difficulty, setDifficulty] = useState("easy");
  const [player1Image, setPlayer1Image] = useState(oImage);
  const [player2Image, setPlayer2Image] = useState(xImage);
  const [name , setName] =  useState("");
  const [id , setId] = useState("");
  const [nameNew , setNameNew] =  useState("");
  const [erro, setErro] = useState("")
  const [confirm, setConfirm] = useState("")
  const navigate = useNavigate()
  const [logged , setLogged] = useState(false);
 
  ////dificuldade************************************************
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
  //****************************************************************************** */


  /*********alterações de conta********************************************* */

  Axios.defaults.withCredentials = true;

  //Efetua a mudança do nome de utilizador da conta autenticada
  const ChangeName = () => {
      
      
      //Alterar o nome de utilizador
      Axios.post("http://localhost:3001/changeName", {
          name: name, nameNew: nameNew

      }).then((response) => {
          setErro(response.data.erro)
          setConfirm(response.data.confirm)

          setTimeout(function() {
            window.location.reload(false);
        }.bind(this),50)
        
          
      })
  }




  const deleteAcc = () => { 
    //Alterar o nome de utilizador
    Axios.post("http://localhost:3001/delete" , {id: id}).then((response) => {
      Axios.post("http://localhost:3001/logout", {})

      setTimeout(function() {
        window.location.reload(false);
    }.bind(this),50) 
    })}




  useEffect(() => {
    //Se o utilizador não estiver autenticado, mudar para a página principal
    Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.logged == true) {
            setId(response.data.user[0].id)
            setName(response.data.user[0].name)
            setLogged(true)

        }else{
          setLogged(false)
        }
    })
}, [])

  //****************************************************************************** */

  const handlePlayImageChange = (event) => {
    const player1choice = event.target.value;
    setPlayer1Image(player1choice);
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
          {logged == true ?  <div className="accChanges">
            <div className="accChanges-buttons">
            <p className="RegText">Email</p>
              <input className="input" type="text" placeholder={name} onChange={(e) => { setNameNew(e.target.value) }}></input>
              <button className="accChanges-button" onClick={ChangeName} >mudar o meu nome</button>
              <button className="accChanges-button" onClick={deleteAcc} >Apagar conta</button>
            </div>
          </div> : <div></div>

          
         
          }
        </div>
      </div>
    </div>
  );
}

export default Options;
