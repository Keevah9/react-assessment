
import Connect4GameComponent from '../../components/connect';
import DynamicButton from '../../components/global/common/button';
import HeroContainer from '../../components/global/common/hero-container';

import React from 'react';

export default function Connect4() {
  return (
    <>
      <HeroContainer img="/img/connect.jpg">
        <h1 className="text-uiwhite !text-center">Connect 4</h1>
        <div className="mt-5">
          <p className='mb-5 text-uiwhite'>Enjoy the Connect 4 Game</p>
          <div className=' flex flex-col text-center items-center justify-center'>
            <DynamicButton label="Play" link="#play-connect4" />
          </div>
        </div>
      </HeroContainer>

      <section id="play-connect4" className=" !max-w-2xl mx-auto !content-container">
        <Connect4GameComponent />
      </section>
    </>
  );
}
