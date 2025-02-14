'use client'

import { useGameContext } from '@/lib/Context.tsx/GameContext';
import { useModalContext } from '@/lib/Context.tsx/ModalContext';
import React, { useEffect, useRef } from 'react'
import PageHeader from '../Global/Common/PageHeader';
import Modal from '../Modal/Modal';
import Board from './Board';
import { GameState } from './GameState';

export default function TicTacToeComponent() {
  const { show, showModal, setModalMode } = useModalContext();
  const { tiles, player, strikeLine, gameState, handleTileClick } = useGameContext();

  //@ts-ignore
  const lastGameState = useRef<GameState | null>(null);

  useEffect(() => {
    if (lastGameState.current !== gameState) {
      if (gameState === GameState.playerXWins || gameState === GameState.playerOWins) {
        setModalMode("winner");
        showModal();
      } else if (gameState === GameState.draw) {
        setModalMode("draw");
        showModal();
      }
      lastGameState.current = gameState; 
    }
  }, [gameState, setModalMode, showModal]);
  
  return (
    <div className='flex flex-col justify-center items-center'>
        <PageHeader title='Tic Tac Toe'/>
        <Board player={player} tiles={tiles} onTileClick={handleTileClick} strikeLine={strikeLine || ''} />
          {show && (
         <Modal />
      )}
    </div>
  )
}
