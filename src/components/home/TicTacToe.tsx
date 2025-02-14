import React from 'react'
import PageHeader from '../Global/Common/PageHeader'
import GameCard from '../Global/Common/GameCard'

export default function Tictactoe() {
  return (
    <section className='content-container'>
        <PageHeader title='Tic Tac Toe' content='Play Tic Tac Toe with AI' /> 
         <GameCard title='Tic Tac Toe' url='/tic-tac-toe' img='/img/tictac.jpg' content='Created with react.js/next.js, typescript and Tailwind CSS' />
    </section>
  )
}
