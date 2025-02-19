import React from "react";
import { motion } from "framer-motion";
import DynamicButton from "../global/common/button";
import GameOver from "../tic-tac-toe/game-over";
import { useGameContext } from "../../lib/context.tsx/game-context";
import { useModalContext } from "../../lib/context.tsx/modal-context";

interface ModalProps {
  title?: boolean;
}

const Modalcomponent = ({ title }: ModalProps) => {
  const { hideModal } = useModalContext();
  const { handleReset, gameState, currPlayer, delayedGameOver} = useGameContext();
const close = () => {
  hideModal();
  handleReset()
}

  return (
    <div data-testid="modal" className="fixed inset-0 bg-uiwhite dark:bg-uiblack bg-opacity-60 flex justify-center !text-uiwhite dark:!text-uiblack items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-uiblack dark:bg-uiwhite text-uiwhite dark:text-uiblack relative p-6 w-[80%] h-[40vh] md:w-4xl flex flex-col justify-center items-center rounded-2xl shadow-lg text-center"
      >
        {title  ? `${currPlayer === 'X' ? 'Red' : 'Black'} wins!` :  <GameOver 
        // @ts-ignore
        gameState={gameState} />   }
        <div className="mt-4 gap-3">
            <p className="absolute cursor-pointer font-bold px-4 py-2 top-10 right-10 text-2xl bg-uiwhite dark:bg-uiblack text-uiblack dark:text-uiwhite rounded-full" onClick={close} style={{cursor: 'pointer'
            }}> X</p>
         <DynamicButton aria-label="restart"  onClick={close} label="Restart" buttonStyle=" !bg-uiwhite dark:!bg-uiblack text-uiblack dark:text-uiwhite" />
        </div>
      </motion.div>
    </div>
  );
};

export default Modalcomponent;