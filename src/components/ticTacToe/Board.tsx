import React, { useEffect } from "react";
import Tile from "./Tile";
import Strike from "./Strike";

interface BoardProps {
  tiles: Array<string | null>;
  onTileClick: (index: number) => void;
  player: string;
  strikeLine?: string;
}


const Board: React.FC<BoardProps> = ({ tiles, onTileClick, player,  strikeLine}) => {
  return (
    <div data-testid="board"
      className="grid mx-auto w-fit place-content-center cursor-pointer relative"
      style={{

        gridTemplateColumns: "repeat(3, 100px)",
        gridTemplateRows: "repeat(3, 100px)",
      }}
    >
      {tiles.map((tileValue, index) => (
        <Tile   player={player} data-testid={`tile-${index}`} onClick={() => onTileClick(index)}
          key={index}
          className={`border-white ${
            index < 6 ? "border-b-2" : ""
          } ${index % 3 !== 2 ? "border-r-2" : ""}`}
          value={tileValue}
        />
      ))}
      <Strike strikeLine={strikeLine || ''} />
    </div>
  );
};

export default Board;
