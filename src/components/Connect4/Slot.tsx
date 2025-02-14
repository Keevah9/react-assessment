import React from "react";
import { useGameContext } from "@/lib/Context.tsx/GameContext";

interface SlotProps {
  ch: string;
  x: number;
  y: number;
}

export const Slot: React.FC<SlotProps> = ({ ch, x, y }) => {
  const { gameOver, handleMove } = useGameContext();

  return (
    <div
      className="w-16 h-16 bg-white rounded-full flex cursor-pointer"
      data-col={x}
      onClick={() => !gameOver && handleMove(x)}
    >
      {ch && (
        <img
          src={ch === "X" ? "/img/redToken.svg" : "/img/blacktoken.svg"}
          alt={ch}
          className="w-full h-full"
        />
      )}
    </div>
  );
};
