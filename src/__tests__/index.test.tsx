import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TicTacToeComponent from '../components/ticTacToe/index';
import { useGameContext } from '../lib/context.tsx/gameContext';
import { useModalContext } from '../lib/context.tsx/modalContext';
import { GameState } from '../components/ticTacToe/GameState';

jest.mock('../lib/context.tsx/gameContext');
jest.mock('../lib/context.tsx/modalContext');

describe('TicTacToeComponent', () => {
  let mockUseGameContext: jest.Mock;
  let mockUseModalContext: jest.Mock;

  beforeEach(() => {
    mockUseGameContext = useGameContext as jest.Mock;
    mockUseModalContext = useModalContext as jest.Mock;

    mockUseGameContext.mockReturnValue({
      tiles: Array(9).fill(null),
      player: 'X',
      strikeLine: null,
      gameState: GameState.inProgress,
      handleTileClick: jest.fn(),
      handleReset: jest.fn(),
    });

    mockUseModalContext.mockReturnValue({
      show: false,
      showModal: jest.fn(),
      setModalMode: jest.fn(),
    });
  });

  it('renders the Tic Tac Toe component', () => {
    render(<TicTacToeComponent />);
    expect(screen.getByText('Tic Tac Toe')).toBeInTheDocument();
  });

  it('shows the modal when game state is playerXWins', () => {
    mockUseGameContext.mockReturnValueOnce({
      tiles: ['X', null, null, null, 'O', null, null, null, 'X'],
      player: 'O',
      strikeLine: null,
      gameState: GameState.playerXWins,
      handleTileClick: jest.fn(),
      handleReset: jest.fn(),
    });
    

    render(<TicTacToeComponent />);
    expect(mockUseModalContext().setModalMode).toHaveBeenCalledWith('winner');
    expect(mockUseModalContext().showModal).toHaveBeenCalled();
  });

  it('shows the modal when game state is playerOWins', () => {
    mockUseGameContext.mockReturnValueOnce({
      tiles: Array(9).fill(null),
      player: 'X',
      strikeLine: null,
      gameState: GameState.playerOWins,
      handleTileClick: jest.fn(),
      handleReset: jest.fn(),
    });

    render(<TicTacToeComponent />);
    expect(mockUseModalContext().setModalMode).toHaveBeenCalledWith('winner');
    expect(mockUseModalContext().showModal).toHaveBeenCalled();
  });

  it('shows the modal when game state is draw', () => {
    mockUseGameContext.mockReturnValueOnce({
      tiles: ['X', null, null, null, 'O', null, null, null, 'X'],
      player: 'X',
      strikeLine: null,
      gameState: GameState.draw,
      handleTileClick: jest.fn(),
      handleReset: jest.fn(),
    });    

    render(<TicTacToeComponent />);
    expect(mockUseModalContext().setModalMode).toHaveBeenCalledWith('draw');
    expect(mockUseModalContext().showModal).toHaveBeenCalled();
  });

  it('renders the board with correct props', () => {
    mockUseGameContext.mockReturnValueOnce({
      tiles: Array(9).fill(null),
      player: 'X', 
      strikeLine: null,
      gameState: GameState.inProgress,
      handleTileClick: jest.fn(),
      handleReset: jest.fn(),
    });
  
    render(<TicTacToeComponent />);
    const board = screen.getByTestId('board');
    expect(board).toBeInTheDocument();
    
    const firstTile = screen.getByTestId('tile-0');
    expect(firstTile).toHaveAttribute('data-player', 'X');
  });
  
  

  it('renders the modal when show is true', () => {
    mockUseModalContext.mockReturnValueOnce({
      show: true,
      showModal: jest.fn(),
      setModalMode: jest.fn(),
    });

    render(<TicTacToeComponent />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('calls handleTileClick when a tile is clicked', () => {
    render(<TicTacToeComponent />);
    const tile = screen.getByTestId('tile-0');
    tile.click();
    expect(mockUseGameContext().handleTileClick).toHaveBeenCalledWith(0);
  });

  it('calls handleReset when the reset button is clicked', () => {
    render(<TicTacToeComponent />);
    const resetButton = screen.getByRole('button', { name: /reset/i });
    resetButton.click();
    expect(mockUseGameContext().handleReset).toHaveBeenCalled();
  });

  it('updates the board when tiles change', async () => {
    const handleTileClickMock = jest.fn();
  
    mockUseGameContext.mockReturnValueOnce({
      tiles: Array(9).fill(null),
      player: 'X',
      strikeLine: null,
      gameState: GameState.inProgress,
      handleTileClick: handleTileClickMock,
      handleReset: jest.fn(),
    });
  
    render(<TicTacToeComponent />);
    const tile = screen.getByTestId('tile-0');
    expect(tile).toHaveTextContent(''); 
    tile.click();
    
    await waitFor(() => {
      expect(screen.getByTestId("tile-0")).toHaveTextContent("X");
      expect(screen.getByTestId("tile-4")).toHaveTextContent("O");
      expect(screen.getByTestId("tile-8")).toHaveTextContent("X");
    });
    expect(handleTileClickMock).toHaveBeenCalledWith(0);
  })
  });