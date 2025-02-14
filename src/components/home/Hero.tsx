'use client'
import React from 'react'   
import HeroContainer from '../Global/Common/HeroContainer'

export default function Hero() {

  return (
    <HeroContainer img='/img/herobg.jpg'>
        <h1 className='!text-center'>React Games</h1>
        <div className="mt-5">  <p>Games created with react.js/next.js and Tailwind css</p> </div>
    </HeroContainer>
  )
}