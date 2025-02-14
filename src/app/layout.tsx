import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Footer from "../Components/Global/Nav/Footer";
import Header from "../Components/Global/Nav/Header";
import { GameProvider } from "../lib/Context.tsx/GameContext";
import { ModalProvider } from "../lib/Context.tsx/ModalContext";

export const metadata: Metadata = {
  title: "React games assessment",
  description: "Games created with react.js/next.js and Tailwind css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
        <GameProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </GameProvider> 
        </ModalProvider>
      </body>
    </html>
  );
}
