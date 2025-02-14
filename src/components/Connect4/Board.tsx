import { useGameContext } from "@/lib/Context.tsx/GameContext";
import React from "react";
import Modal from "../Modal/Modal";
import { Slot } from "./Slot";

const Board: React.FC = () => {
  const { board, gameOver } = useGameContext();

  return (
    <div className="grid border-4 w-full rounded-[10px] mb-6 grid-cols-7 gap-2">
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
