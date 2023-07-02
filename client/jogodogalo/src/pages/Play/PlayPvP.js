import React, {useState} from 'react'
import {Board} from '../../components/Board'

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
  const [xPlaying, setXPlaying] = useState(true)
 
  const handleBoxClick = (boxIdx) =>{
    if (board[boxIdx] !== null) {
      return;}

    const updatedBoard = board.map((value, idx) =>{
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    })

    checkWinner(updatedBoard);
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  }

  const checkWinner =(board) =>{
    for(const element of WC){
      const[x,y,z] = element;

      if (board[x] && board[x] === board[y] && board[y] === board[z]){
        console.log(board[x])
        return board[x]
      }
    }
  }

  return (
    <div>
      <Board board={board} onClick={handleBoxClick}/>
      </div>
  )
}

export default PlayPvP