import React from "react";
import { GameState } from "./game-state";


interface GameOverProps {
  gameState: any;
}

function GameOver({ gameState }: GameOverProps) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div>O Wins</div>;
    case GameState.playerXWins:
      return <div>X Wins</div>;
    case GameState.draw:
      return <div>Draw</div>;
    default:
      return <></>;
  }
}

export default GameOver;