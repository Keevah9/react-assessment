import React from "react";
import { motion } from "framer-motion";
import { useGameContext } from "../../lib/context.tsx/game-context";

interface SlotProps {
  ch: string;
  x: number;
  y: number;
}

export const Slot: React.FC<SlotProps> = ({ ch, x, y }) => {
  const { gameOver, handleMove } = useGameContext();

  return (
    <div
      className="w-16 h-16 bg-white rounded-full flex cursor-pointer relative"
      data-col={x}
      onClick={() => !gameOver && handleMove(x)}
    >
      {ch && (
        <motion.img
          src={ch === "X" ? "/img/redtoken.svg" : "/img/blacktoken.svg"}
          alt={ch}
          className="w-full h-full absolute"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: y * 0.1 }}
        />
      )}
    </div>
  );
};
