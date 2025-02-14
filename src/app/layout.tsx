import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Footer from "../components/global/nav/footer";
import Header from "../components/global/nav/header";
import { GameProvider } from "../lib/context.tsx/gameContext";
import { ModalProvider } from "../lib/context.tsx/modalContext";

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
