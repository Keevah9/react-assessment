'use client'

import React, { createContext, useState, ReactNode, useContext } from "react";

interface ModalContextType {
  show: boolean;
  modalMode: "start" | "winner" | "draw";
  showModal: () => void;
  hideModal: () => void;
  setModalMode: (mode: "start" | "winner" | "draw") => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalStateProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalStateProps> = ({ children }) => {
  const [show, setShow] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<"start" | "winner" | "draw">("winner");

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <ModalContext.Provider
      value={{
        show,
        modalMode,
        showModal,
        hideModal,
        setModalMode,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error("useModalContext must be used within ModalState");

  return context;
};