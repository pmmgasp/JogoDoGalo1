import React, {useState} from 'react'
import {Board} from '../../components/Board'
import {ScoreBoard} from '../../components/ScoreBoard';

function PlayPvP() {

  /* Condições dos indexs para que haja vitória */
  const WC = [ 
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
  ] 

  const [board, setBoard] = useState(Array(9).fill(null));
  const [p1Playing, setP1Playing] = useState(true);
  const [scores, setScores] = useState({p1Score: 0, p2Score: 0});
  const [gameOver,setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
 
  const handleBoxClick = (boxIdx) =>{
    /* Impede que o jogador volte a clicar no mesmo quadrado caso o valor do mesmo não seja null */
    if (board[boxIdx] !== null) {
      return;}

    /* Atualiza os indexs com as imagens dos jogadores consoante qual o jogador que está */  
    const updatedBoard = board.map((value, idx) =>{
      if (idx === boxIdx) {
        return p1Playing === true ? "Player1" : "Player2";
      } else {
        return value;
      }
    })

    /* inicia a board sem valores */

    setBoard(updatedBoard);

    /* verifica se existe vencedor */

    const winner = checkWinner(updatedBoard);

    /* Ao vencedor é incrementado 1 no valor do score pela função setScores e o valor ficar guardado */

    if (winner) {
      setGameOver(true);
      setShowPopup(true);
      if (winner === 'Player2') {
        let { p2Score } = scores;
        p2Score += 1;
        setScores({ ...scores, p2Score });
        setWinner(winner);
      } else {
        let { p1Score } = scores;
        p1Score += 1;
        setScores({ ...scores, p1Score });
        setWinner(winner);
      }
    } else if (checkTie(updatedBoard)) {
      setGameOver(true);
      setShowPopup(true);
    }

    /* Muda a vez de jogar */

    setP1Playing(!p1Playing);
  }

  /* Verifica se as condições de vitória dos indexs são cumpridas e retorna quem venceu */

  const checkWinner = (board) =>{
    for(const element of WC){
      const[x,y,z] = element;

      if (board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true)
        return board[x]
      }
    }
  }

  /* retorna se os valores do tabuleiro sao todos not null */

  const checkTie = (board) => {
    return (board.every((value) => value !== null))
  }

  //função para que o board dê reset ao clicarmos no botão "Reset"
  const handleReset = () => {
    resetBoard();
  }

  //função para que apareça um pop-up quando o jogo acaba
  const handlePopupOk = () => {
    setShowPopup(false);
    resetBoard();
    setWinner(null);
    };

  /* Dá reset na board */

  const resetBoard = () =>{
      setGameOver(false);
      setBoard(Array(9).fill(null));
  }

  return (
    <div>
      <ScoreBoard scores ={scores}/>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>{winner ? `${winner} wins!` : "It's a tie!"}</h2>
            <br />
            <button onClick={handlePopupOk}>OK</button>
          </div>
        </div>
      )}
      <button className= "btn-reset " onClick={handleReset}>Resetar</button>
      <Board board={board} onClick={handleBoxClick}/>
      </div>
  )
}

export default PlayPvP