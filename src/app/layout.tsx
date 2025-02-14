import type { Metadata } from "next";
import "./globals.css";
import Header from "../Components/Global/Nav/Header";
import Footer from "../Components/Global/Nav/Footer";
import { GameProvider } from "../lib/Context.tsx/gameContext";
import { ModalProvider } from "../lib/Context.tsx/modalContext";
import React from "react";

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
