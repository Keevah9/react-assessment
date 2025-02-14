import React from "react";

interface TileProps {
  className?: string;
  value?: string | number | null;
  onClick?: () => void;
  player: string | null;
}

const Tile: React.FC<TileProps> = ({ className, value, onClick, player }) => {
  let hoverClass = "";
  
  if (value === null && player !== null) {
    hoverClass = `${player.toLowerCase()}-hover`;
  }

  return (
    <div data-player={player}
      onClick={onClick}
      className={`flex justify-center items-center text-2xl transition duration-300 ${className} ${hoverClass}`}
    >
      {value !== null ? value : ""}
    </div>
  );
};

export default Tile;
