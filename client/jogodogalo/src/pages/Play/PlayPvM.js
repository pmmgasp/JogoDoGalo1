import React, { useState, useEffect } from 'react';
import { Board } from '../../components/Board';
import { ScoreBoard } from '../../components/ScoreBoard';
import '../Options.css';

function PlayPvM({ difficulty }) {
  const WC = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [p1Playing, setP1Playing] = useState(true);
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Utilize o valor da dificuldade conforme necessário
  console.log("Dificuldade selecionada:", difficulty);

  useEffect(() => {
    resetBoard();
  }, [difficulty]);

  const handleBoxClick = (boxIdx) => {
    if (board[boxIdx] !== null || gameOver) {
      return;
    }

    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return p1Playing ? 'Player1' : 'Player2';
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);

    if (winner) {
      setWinner(winner);
      setGameOver(true);
      setShowPopup(true);
      if (winner === 'Player2') {
        let { p2Score } = scores;
        p2Score += 1;
        setScores({ ...scores, p2Score });
      } else {
        let { p1Score } = scores;
        p1Score += 1;
        setScores({ ...scores, p1Score });
      }
    } else if (checkTie(updatedBoard)) {
      setGameOver(true);
      setShowPopup(true);
    }

    setP1Playing(!p1Playing);
  };

  //verificar se alguem venceu
  const checkWinner = (board) => {
    for (const element of WC) {
      const [x, y, z] = element;

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
    return null;
  };

  //se ninguem venceu e o tabuleiro está cheio é empate
  const checkTie = (board) => {
    return board.every((value) => value !== null);
  };

  //colocar os valores todos como vazio
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

 

  const botMoveEasy = () => {
    if (p1Playing || gameOver) {
      return;
    }

    //coloca todos os id vazios dentro de um array
    const emptyBoxes = board.reduce((acc, value, idx) => {
      if (value === null) {
        acc.push(idx);
      }
      return acc;
    }, []);

    //escolhe um id random
    if (emptyBoxes.length > 0) {
      const randomIdx = Math.floor(Math.random() * emptyBoxes.length);
      const boxIdx = emptyBoxes[randomIdx];
      handleBoxClick(boxIdx);
    }
  };

  const botMoveMedium = () => {
    if (p1Playing || gameOver) {
      return;
    }
  //coloca todos os id vazios entre de um array
    const emptyBoxes = board.reduce((acc, value, idx) => {
      if (value === null) {
        acc.push(idx);
      }
      return acc;
    }, []);

    if (emptyBoxes.length > 0) {
      // verifica se o bot pode ganhar na proxima jogada
      //[...board] é uma forma de criar uma copia do tabuleiro onde a função irá fazer as verificações
      for (const boxIdx of emptyBoxes) {
        const tempBoard = [...board];
        tempBoard[boxIdx] = 'Player2';
        if (checkWinner(tempBoard) === 'Player2') {
          handleBoxClick(boxIdx);
          return;
        }
      }

      // verifica se o jogador pode ganhar na proxima jogada
      for (const boxIdx of emptyBoxes) {
        const tempBoard = [...board];
        tempBoard[boxIdx] = 'Player1';
        if (checkWinner(tempBoard) === 'Player1') {
          handleBoxClick(boxIdx);
          return;
        }
      }

      // se nao houver jogadas vencedoras coloca um random
      const randomIdx = Math.floor(Math.random() * emptyBoxes.length);
      const boxIdx = emptyBoxes[randomIdx];
      handleBoxClick(boxIdx);
    }
  };

  //bot dificil segue os principios do bot medio
  //mas a parte da estrategia foi retirada do ChatGpt

  const botMoveHard = () => {
    if (p1Playing || gameOver) {
      return;
    }

    const emptyBoxes = board.reduce((acc, value, idx) => {
      if (value === null) {
        acc.push(idx);
      }
      return acc;
    }, []);

    if (emptyBoxes.length > 0) {
      
      for (const boxIdx of emptyBoxes) {
        const tempBoard = [...board];
        tempBoard[boxIdx] = 'Player2';
        if (checkWinner(tempBoard) === 'Player2') {
          handleBoxClick(boxIdx);
          return;
        }
      }

      
      for (const boxIdx of emptyBoxes) {
        const tempBoard = [...board];
        tempBoard[boxIdx] = 'Player1';
        if (checkWinner(tempBoard) === 'Player1') {
          handleBoxClick(boxIdx);
          return;
        }
      }

      /********************************************************************************************************* */
      
      if (emptyBoxes.includes(4)) {
        handleBoxClick(4);
        return;
      }

      const corners = [0, 2, 6, 8];
      const availableCorners = corners.filter((corner) => emptyBoxes.includes(corner));
      if (availableCorners.length > 0) {
        const randomCorner = availableCorners[Math.floor(Math.random() * availableCorners.length)];
        handleBoxClick(randomCorner);
        return;
      }

      const edges = [1, 3, 5, 7];
      const availableEdges = edges.filter((edge) => emptyBoxes.includes(edge));
      if (availableEdges.length > 0) {
        const randomEdge = availableEdges[Math.floor(Math.random() * availableEdges.length)];
        handleBoxClick(randomEdge);
        return;
      }
      /*********************************************************************************************************++ */
    }
  };

  //escolha da dificuldade
  useEffect(() => {
    if (!p1Playing && difficulty === 'easy') {
      botMoveEasy();
    } else if (!p1Playing && difficulty === 'medium') {
      botMoveMedium();
    } else if (!p1Playing && difficulty === 'hard') {
      botMoveHard();
    }
  }, [board, p1Playing, gameOver, difficulty]);

  const handlePopupOk = () => {
    setShowPopup(false);
    resetBoard();
  };

  const handleReset = () => {
    resetBoard();
  }

  return (
    //código para o popup e para o tabuleiro
    <div>
      <p>{difficulty }</p>
      <ScoreBoard scores={scores} />
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>{winner ? `${winner} wins!` : "It's a tie!"}</h2>
            <br />
            <button onClick={handlePopupOk}>OK</button>
          </div>
        </div>
      )}
      <button className= "btn-reset " onClick={handleReset}>Reset</button>
      <Board board={board} onClick={handleBoxClick} />
      <div>
      </div>
    </div>
  );
}

export default PlayPvM;
