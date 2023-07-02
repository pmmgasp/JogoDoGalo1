import React, {useState} from 'react'
import {Board} from '../../components/Board'

function PlayPvP() {

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

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  }

  return (
    <div>
      <Board board={board} onClick={handleBoxClick}/>
      </div>
  )
}

export default PlayPvP