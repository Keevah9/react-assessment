import { useGameContext } from "../../lib/context.tsx/game-context";
import React from "react";
import Modal from "../modal/modal-component";
import { Slot } from "./slot";

const Board: React.FC = () => {
  const { board, gameOver } = useGameContext();

  return (
    <div className="grid w-full mb-6 grid-cols-7 gap-2">
      {board.map((row, rowIndex) =>
        row.map((ch, colIndex) => (
          <Slot key={`${rowIndex}-${colIndex}`} ch={ch} x={colIndex} y={rowIndex} />
        ))
      )}
      {gameOver && <Modal title />}
    </div>
  );
};

export default Board;
