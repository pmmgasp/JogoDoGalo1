import React from 'react'
import './Box.css'
import Img1 from "../images/X.png"
import Img2 from "../images/O.png"

export const Box = ({ value, onClick }) => {
  const player = value === "X" ? Img1 : Img2;

    return (
          <button className="box" onClick={onClick}>
            {value === 'X' && <img src={player} alt="Jogador" className='img'/>}
            {value === 'O' && <img src={player} alt="Jogador" className='img'/>}
          </button>
      
  )
}
