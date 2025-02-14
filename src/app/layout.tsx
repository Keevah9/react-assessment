import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/global/nav/header";
import Footer from "../components/global/nav/footer";
import { GameProvider } from "../lib/context.tsx/gameContext";
import { ModalProvider } from "../lib/context.tsx/modalContext";
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
