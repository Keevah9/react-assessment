"use client";

import { useGameContext } from "../../lib/context.tsx/gameContext";
import React from "react";
import DynamicButton from "../global/common/button";
import PageHeader from "../global/common/pageHeader";
import Board from "./board";

export default function Connect4GameComponent() {
  const { handleReset } = useGameContext(); 

  return (
    <div>
      <PageHeader title="Connect 4" />
      <Board />
      <div className="flex flex-col items-center
      justify-center pt-6">
        <DynamicButton
          onClick={handleReset} 
          label="Restart"
        />
      </div>
    </div>
  );
}
