import React from 'react';
import './Game.css'

const Game = () => {
  return (
    <div className="screen">
      <div className="game">
        <h1>Tic-Tac-Toe Game</h1>
        <div className="player" id="player">Player 1</div>
        <div className="board" id="board">
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
        </div>
      </div>

      <div className="winning-message" id="winningMessage">
        <div data-wining-message-text></div>
        <button id="restartButton">Restart</button>
      </div>
    </div>
      
  );
}

export default Game;
