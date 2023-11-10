"use client";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Header/Navbar";
import StyledComponentsRegistry from "../../lib/registry";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";
import IconLogo from '../../public/logo.png'

const myFont = localFont({ src: "../../public/sodosans.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Starbucks</title>
        <link rel="icon" type="icon" href={"https://cdn-icons-png.flaticon.com/512/5977/5977591.png"}></link>
      </head>
      <body className={myFont.className}>
        <StyledComponentsRegistry>
          <CartProvider itemCounter={0}>
            <Navbar />
            {children}
          </CartProvider>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
