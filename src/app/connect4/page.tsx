
import DynamicButton from '@/components/global/common/button';
import HeroContainer from '@/components/global/common/heroContainer';
import Connect4GameComponent from '../../components/connect4/index';
import React from 'react';

export default function Connect4() {
  return (
    <>
      <HeroContainer img="/img/Connect4.jpg">
        <h1 className="!text-center">Connect 4</h1>
        <div className="mt-5">
          <p className='mb-5'>Enjoy the Connect 4 Game</p>
          <DynamicButton label="Play" link="#play-connect4" />
        </div>
      </HeroContainer>

      <section id="play-connect4" className=" max-w-3xl mx-auto content-container">
        <Connect4GameComponent />
      </section>
    </>
  );
}
