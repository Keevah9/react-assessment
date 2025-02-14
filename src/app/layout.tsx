import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Footer from "../components/global/nav/footer";
import Header from "../components/global/nav/header";
import { GameProvider } from "../lib/context.tsx/game-context";
import { ModalProvider } from "../lib/context.tsx/modal-context";

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
          <main className="min-h-screen">{children}</main>
          <Footer />
        </GameProvider> 
        </ModalProvider>
      </body>
    </html>
  );
}
