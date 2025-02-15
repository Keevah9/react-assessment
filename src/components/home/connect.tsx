import React from 'react'
import PageHeader from '../global/common/page-header'
import GameCard from '../global/common/game-card'

export default function Connect4() {
  return (
    <section className='content-container'>
        <PageHeader title='Connect4 game' content='Play Connect4 game' /> 
         <GameCard title='Connect4' url='/connect4' img='/img/connect.jpg' content='Created with react.js/next.js, typescript and Tailwind CSS' />
    </section>
  )
}
