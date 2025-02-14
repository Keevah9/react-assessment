import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "@/Components/Global/Nav/header";
import Footer from "@/Components/Global/Nav/footer";
import { GameProvider } from "@/lib/Context.tsx/gameContext";
import { ModalProvider } from "@/lib/Context.tsx/modalContext";

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
