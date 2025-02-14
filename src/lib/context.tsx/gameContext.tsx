'use client';

import { getWinningCombinations } from "@/components/ticTacToe/GetWinningCombinations";
import { GameState } from "../../components/ticTacToe/GameState";
import React, { createContext, useState, useEffect, useContext, ReactNode, useRef } from "react";

const player_X = "X";
const player_O = "O";

interface GameContextType {
  tiles: (string | null)[];
  player: string;
  strikeLine: string | null;
  //@ts-ignore
  gameState: GameState;
  handleTileClick: (index: number) => void;
  handleReset: () => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [tiles, setTiles] = useState<(string | null)[]>(Array(9).fill(null));
  const [player, setPlayer] = useState(player_X);
  const [strikeLine, setStrikeLine] = useState<string | null>(null);
  const [gameState, setGameState] = useState(GameState.inProgress);

  const gameOverSound = useRef<HTMLAudioElement | null>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gameOverSound.current = new Audio("/game-over.wav");
      clickSound.current = new Audio("/click.wav");

      if (gameOverSound.current) gameOverSound.current.volume = 0.2;
      if (clickSound.current) clickSound.current.volume = 0.5;
    }
  }, []);

  function checkWinner(
    tiles: (string | null)[],
    setstrikeLine: (strikeLine: string) => void,
    //@ts-ignore
    setGameState: (gameState: GameState) => void
  ) {
    for (const { combo, strikeLine } of getWinningCombinations) {
      const tileValue1 = tiles[combo[0]];
      const tileValue2 = tiles[combo[1]];
      const tileValue3 = tiles[combo[2]];

      if (
        tileValue1 !== null &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
      ) {
        setstrikeLine(strikeLine);
        if (tileValue1 === player_X) {
          setGameState(GameState.playerXWins);
        } else {
          setGameState(GameState.playerOWins);
        }
        return;
      }
    }
  }

  const handleTileClick = (index: number) => {
    if (gameState !== GameState.inProgress || tiles[index] !== null) return;

    const newTiles = [...tiles];
    newTiles[index] = player;
    setTiles(newTiles);
    setPlayer(player === player_X ? player_O : player_X);
  };

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayer(player_X);
    setStrikeLine(null);
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeLine, setGameState);
    if (tiles.every(tile => tile !== null) && gameState === GameState.inProgress) {
      setGameState(GameState.draw);
    }
  }, [tiles, gameState]);

  const cpuMove = () => {
    const getAvailableMoves = tiles.map((tile, index) => (tile === null ? index : null)).filter((index) => index !== null);
    if (getAvailableMoves.length === 0) return;

    const randomMove = getAvailableMoves[Math.floor(Math.random() * getAvailableMoves.length)] as number;

    const newTiles = [...tiles];
    newTiles[randomMove] = player_O;
    setTiles(newTiles);
    setPlayer(player_X);
  };

  useEffect(() => {
    if (player === player_O && gameState === GameState.inProgress) {
      const timeout = setTimeout(() => {
        cpuMove();
      }, 500); 
      return () => clearTimeout(timeout);
    }
  }, [player, gameState]);

  useEffect(() => {
    if (tiles.some((tile) => tile !== null) && clickSound.current) {
      clickSound.current.play().catch(err => console.log('Error playing click sound:', err));
    }
  }, [tiles]);

  useEffect(() => {
    if (gameState !== GameState.inProgress && gameOverSound.current) {
      gameOverSound.current.play().catch(err => console.log('Error playing game over sound:', err));
    }
  }, [gameState]);

  return (
    <GameContext.Provider value={{ tiles, player, strikeLine, gameState, handleTileClick, handleReset }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context)
    throw Error("useGameContext must be used within GameProvider");

  return context;
};
