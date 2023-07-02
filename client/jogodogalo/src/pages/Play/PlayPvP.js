import React, {useState} from 'react'
import {Board} from '../../components/Board'
import {ScoreBoard} from '../../components/ScoreBoard';

function PlayPvP() {

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
 
  const handleBoxClick = (boxIdx) =>{
    if (board[boxIdx] !== null) {
      return;}

    const updatedBoard = board.map((value, idx) =>{
      if (idx === boxIdx) {
        return p1Playing === true ? "Player1" : "Player2";
      } else {
        return value;
      }
    })

    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);

    if(winner){
      if(winner === "Player2"){
        let {p2Score} = scores;
        p2Score += 1;
        setScores({...scores, p2Score});
    } else {
        let {p1Score} = scores;
        p1Score += 1;
        setScores({...scores, p1Score});
    }
  }

    setP1Playing(!p1Playing);
  }

  const checkWinner = (board) =>{
    for(const element of WC){
      const[x,y,z] = element;

      if (board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true)
        return board[x]
      }
    }
  }

  const resetBoard = () =>{
      setGameOver(false);
      setBoard(Array(9).fill(null));
  }

  return (
    <div>
      <ScoreBoard scores ={scores}/>
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
      </div>
  )
}

export default PlayPvP