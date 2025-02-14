import DynamicButton from '../../components/global/common/button'
import HeroContainer from '../../components/global/common/hero-container'
import TicTacToeComponent from '../../components/tic-tac-toe'
import React from 'react'

export default function TicTacToe() {
  return (
    <>
        <HeroContainer img='/img/tictac.jpg'>
            <h1 className='!text-center'>Tic Tac Game</h1>
            <div className="mt-5 w-full">  
                <p className='mb-6'>Enjoy the Tic Tac Toe Game with an AI</p>
                <div className=' flex flex-col text-center items-center justify-center'>
                    <DynamicButton label='Play' link='#play-tic-tac-toe'/>
                </div>
            </div>
        </HeroContainer>
        <section id='play-tic-tac-toe' className='content-container'>
            <TicTacToeComponent />
        </section>
    </>
)
}
