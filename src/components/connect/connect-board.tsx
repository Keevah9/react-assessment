import { useGameContext } from "../../lib/context.tsx/game-context";
import React from "react";
import { Slot } from "./slot";
import Modalcomponent from "../modal/modal-component";

const ConnectBoard: React.FC = () => {
  const { board, delayedGameOver } = useGameContext();

  return (
    <div className="grid w-full grid-cols-7 gap-2 place-items-center border-4 rounded-lg">
      {board.map((row, rowIndex) =>
        row.map((ch, colIndex) => (
          <Slot key={`${rowIndex}-${colIndex}`} ch={ch} x={colIndex} y={rowIndex} />
        ))
      )}
      {delayedGameOver && <Modalcomponent title />}
    </div>
  );
};

export default ConnectBoard;
