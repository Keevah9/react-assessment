"use client";

import { useGameContext } from "../../lib/context.tsx/game-context";
import React from "react";
import DynamicButton from "../global/common/button";
import PageHeader from "../global/common/page-header";
import ConnectBoard from "./connect-board";

export default function Connect4GameComponent() {
  const { handleReset, gameOver } = useGameContext(); 

  return (
    <div>
      <PageHeader title="Connect 4" />
      <ConnectBoard />
    </div>
  );
}
