"use client";

import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Header/Navbar";
import StyledComponentsRegistry from "../../lib/registry";
import { CartProvider } from "./context/CartContext";

const myFont = localFont({ src: "../../public/sodosans.woff2" });

export const metadata: Metadata = {
  title: "Starbucks",
  description: "Starbucks Shopping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <StyledComponentsRegistry>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
