import React from 'react'
import PageHeader from '../Global/Common/PageHeader'
import GameCard from '../Global/Common/GameCard'

export default function Connect4() {
  return (
    <section className='content-container'>
        <PageHeader title='Connect4 game' content='Play Connect4 game' /> 
         <GameCard title='Connect4' url='/Connect4' img='/img/connect4.jpg' content='Created with react.js/next.js, typescript and Tailwind CSS' />
    </section>
  )
}
