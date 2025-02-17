import React from 'react';

interface StrikeProps {
  strikeLine?: string;
}

const Strike: React.FC<StrikeProps> = ({ strikeLine }) => {
  return (
    <div className={` bg-uiblack dark:bg-uiwhite absolute ${strikeLine}`}></div>
  );
};

export default Strike;
