import React from 'react'
import './ScoreBoard.css'

export const ScoreBoard = ({scores}) => {
  const {p1Score, p2Score} = scores;
  return (
    <div className='scoreboard'>
        <p className='score'>Player 1 - {p1Score}</p>
        <p className='score'>Player 2 - {p2Score}</p>
        </div>
  )
}
