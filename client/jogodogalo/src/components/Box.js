import React from 'react'
import './Box.css'
import Img1 from "../images/X.png"
import Img2 from "../images/O.png"
import'../pages/Options.js'

export const Box = ({ value, onClick, player1Image }) => {
  const player = value === "Player1" ? Img1 : Img2;
  
    return (
          <button className="box" onClick={onClick}>
            {value === 'Player1' && <img src={player} alt="Jogador1" className='img'/>}
            {value === 'Player2' && <img src={player} alt="Jogador2" className='img'/>}
          </button>
      
  )
}
