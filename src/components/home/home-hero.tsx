'use client'
import React from 'react'  
import HeroContainer from '../global/common/hero-container'

export default function HomeHero() {

  return (
    <HeroContainer img='/img/herobg.jpg'>
        <h1 className=' text-uiwhite !text-center'>React Games</h1>
        <div className="mt-5">  <p className='text-uiwhite'>Games created with react.js/next.js and Tailwind css</p> </div>
    </HeroContainer>
  )
}