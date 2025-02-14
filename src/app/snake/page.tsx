import DynamicButton from '../../components/global/common/button'
import HeroContainer from '../../components/global/common/heroContainer'
import React from 'react'

export default function Snake() {
  return (
    <HeroContainer img='/img/snake.jpg'>
        <h1 className='!text-center'>Snake Game</h1>
        <div className="mt-5"> 
            <p>Enjoy the Snake Game</p> 
            <DynamicButton label='Play' link='#play-snake' />
        </div>
    </HeroContainer>
)
}