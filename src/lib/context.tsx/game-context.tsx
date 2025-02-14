'use client';

import { getWinningCombinations } from "../../components/tic-tac-toe/get-winning-combinations";
import { GameState } from "../../components/tic-tac-toe/game-state";
import React, { createContext, useState, useEffect, useContext, ReactNode, useRef } from "react";

const player_X = "X";
const player_O = "O";
const grid_Size = 20;
const numRows = 6;
const numCols = 7;


interface GameContextType {
  tiles: (string | null)[];
  player: string;
  strikeLine: string | null;
  //@ts-ignore
  gameState: GameState;
  handleTileClick: (index: number) => void;
  handleReset: () => void;
  gameOver: boolean;
  handleMove: (col: number) => void;
//   currentPlayer: string;
  resetGame: () => void;
    board: string[][];
    currPlayer: string;
    setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
    setCurrPlayer: React.Dispatch<React.SetStateAction<string>>;
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [tiles, setTiles] = useState<(string | null)[]>(Array(9).fill(null));
  const [player, setPlayer] = useState(player_X);
  const [strikeLine, setStrikeLine] = useState<string | null>(null);
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [gameOver, setGameOver] = useState(false);

  //connect 4
  const [board, setBoard] = useState<string[][]>(Array.from({ length: numRows }, () => Array(numCols).fill('')));
  
  const [currPlayer, setCurrPlayer] = useState('X');

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

  const handleMove = (col: number) => {
    if (gameOver) return; // Prevent moves if the game is over
  
    // Find the first available row in the chosen column
    const row = board.findIndex((r) => r[col] === '');
  
    if (row === -1) return; // Column is full, no move can be made
  
    // Place the token in the first available row
    const newBoard = [...board];
    newBoard[row][col] = currPlayer;
    setBoard(newBoard);
  
    // Check for a win after the move
    if (checkWin(newBoard, row, col)) {
      setGameOver(true);  // Set game over when there's a winner
      console.log(`${currPlayer} wins!`); // Display the winner in the console (you can replace this with UI)
    } else {
      // Switch players if no winner yet
      setCurrPlayer(currPlayer === 'X' ? 'O' : 'X');
    }
  };  

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayer(player_X);
    setStrikeLine(null);
    setBoard(Array.from({ length: numRows }, () => Array(numCols).fill('')));
    setGameOver(false);
    setCurrPlayer('X');
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

  const checkWin = (board: string[][], row: number, col: number) => {
    const directions = [
      { r: 0, c: 1 }, // Horizontal
      { r: 1, c: 0 }, // Vertical
      { r: 1, c: 1 }, // Diagonal /
      { r: 1, c: -1 }, // Diagonal \
    ];
  
    const target = board[row][col];
  
    // Check in each direction for 4 consecutive tokens
    for (const { r, c } of directions) {
      let count = 1;
  
      // Check in the positive direction (e.g., to the right, down, etc.)
      for (let i = 1; i < 4; i++) {
        const newRow = row + r * i;
        const newCol = col + c * i;
        if (newRow < 0 || newRow >= numRows || newCol < 0 || newCol >= numCols || board[newRow][newCol] !== target) break;
        count++;
      }
  
      // Check in the negative direction (e.g., to the left, up, etc.)
      for (let i = 1; i < 4; i++) {
        const newRow = row - r * i;
        const newCol = col - c * i;
        if (newRow < 0 || newRow >= numRows || newCol < 0 || newCol >= numCols || board[newRow][newCol] !== target) break;
        count++;
      }
  
      if (count >= 4) return true;
    }
  
    return false;
  };
  

  return (
    <GameContext.Provider value={{  board, 
        currPlayer, 
        gameOver, 
        setBoard, 
        setCurrPlayer, 
        setGameOver, 
        handleMove, // Pass the correct handleMove function here
        tiles, 
        player, 
        strikeLine, 
        gameState, 
        handleTileClick, 
        handleReset,
        resetGame: handleReset  }}>
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
