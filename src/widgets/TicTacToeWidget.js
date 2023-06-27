import React, { useState } from 'react';
import '../styles/tictactoestyle.css'

const TicTacToeWidget = () => {
    // State to keep track of the game board and player turns
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isPlayerX, setIsPlayerX] = useState(true);
  
    // Function to handle a player's move
    const handleMove = (index) => {
      if (board[index] === null) {
        const updatedBoard = [...board];
        updatedBoard[index] = isPlayerX ? 'X' : 'O';
        setBoard(updatedBoard);
        setIsPlayerX(!isPlayerX);
      }
    };
  
    // Function to render the game board cells
    const renderCells = () => {
      return board.map((cell, index) => (
        <div
          key={index}
          className="cell"
          onClick={() => handleMove(index)}
        >
          {cell}
        </div>
      ));
    };
  
    // JSX rendering
    return (
      <div className="tic-tac-toe-widget">
        <div className="board">{renderCells()}</div>
      </div>
    );
  };
  
  export default TicTacToeWidget;