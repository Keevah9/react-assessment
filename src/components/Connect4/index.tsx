"use client";

import { useGameContext } from "@/lib/Context.tsx/GameContext";
import React from "react";
import DynamicButton from "../Global/Common/Button";
import PageHeader from "../Global/Common/PageHeader";
import Board from "./Board";

export default function Connect4GameComponent() {
  const { handleReset } = useGameContext(); 

  return (
    <div>
      <PageHeader title="Connect 4" />
      <Board />
      <div className="flex w-full flex-col items-center justify-center pt-6">
        <DynamicButton
          onClick={handleReset} 
          label="Restart"
          buttonStyle="pt-4"
        />
      </div>
    </div>
  );
}
