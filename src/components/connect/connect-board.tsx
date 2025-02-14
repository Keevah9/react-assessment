import { useGameContext } from "../../lib/context.tsx/game-context";
import React from "react";
import { Slot } from "./slot";
import Modalcomponent from "../modal/modal-component";

const ConnectBoard: React.FC = () => {
  const { board, delayedGameOver } = useGameContext();

  return (
    <div className="grid w-full mb-6 grid-cols-7 gap-2">
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
