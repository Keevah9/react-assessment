import { useGameContext } from "../../lib/context.tsx/gameContext";
import { useModalContext } from "../../lib/context.tsx/modalContext";
import React from "react";
import { motion } from "framer-motion";
import DynamicButton from "../global/common/button";
import GameOver from "../ticTacToe/GameOver";

const Modal = () => {
  const { hideModal } = useModalContext();
  const { handleReset, gameState } = useGameContext();
const close = () => {
  hideModal();
  handleReset()
}

  return (
    <div data-testid="modal" className="fixed inset-0 bg-black bg-opacity-60 flex justify-center !text-black items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white relative p-6 w-[80%] h-[40vh] md:w-4xl flex flex-col justify-center items-center rounded-2xl shadow-lg text-center"
      >
        
        <GameOver 
        // @ts-ignore
        gameState={gameState} />
        <div className="mt-4 gap-3">
            <p className="absolute cursor-pointer font-bold px-4 py-2 top-10 right-10 text-2xl bg-black rounded-full !text-white" onClick={close} style={{cursor: 'pointer'
            }}> X</p>
         <DynamicButton aria-label="reset"  onClick={close} label="Restart" buttonStyle=" !bg-black text-white" />
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;