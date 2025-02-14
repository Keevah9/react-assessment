"use client";

import React from "react";
import PageHeader from "../global/common/page-header";
import ConnectBoard from "./connect-board";

export default function Connect4GameComponent() { 

  return (
    <div>
      <PageHeader title="Connect 4" />
      <ConnectBoard />
    </div>
  );
}
