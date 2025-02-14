import React from 'react'
import PageHeader from '../global/common/pageHeader';
import GameCard from '../global/common/gameCard';

export default function Snake() {
  return (
    <section className='content-container'>
        <PageHeader title='Snake game' content='Play Snake game' /> 
         <GameCard title='Snake' url='/snake' img='/img/snake.jpg' content='Created with react.js/next.js, typescript and Tailwind CSS' />
    </section>
  )
}
