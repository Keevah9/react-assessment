import React from 'react'
import PageHeader from '../global/common/pageHeader';
import GameCard from '../global/common/gameCard';

export default function Tictactoe() {
  return (
    <section className='content-container'>
        <PageHeader title='Tic Tac Toe' content='Play Tic Tac Toe with AI' /> 
         <GameCard title='Tic Tac Toe' url='/tic-tac-toe' img='/img/tictac.jpg' content='Created with react.js/next.js, typescript and Tailwind CSS' />
    </section>
  )
}
