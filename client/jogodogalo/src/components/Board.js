import React from 'react';
import './Board.css';
import { Box } from './Box.js';

export const Board = ({ board, onClick, player1Image, player2Image }) => {
  return (
    <div className='board'>      
      {board.map((value, idx) => {
        let playerImage = null;
        if (value === 'Player1') {
          playerImage = player1Image;
        } else if (value === 'Player2') {
          playerImage = player2Image;
        }
        return <Box key={idx} value={value} playerImage={playerImage} onClick={() => onClick(idx)} />;
      })}
    </div>
  );
};
