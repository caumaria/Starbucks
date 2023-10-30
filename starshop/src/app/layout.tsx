'use client';
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Header/Navbar";
import StyledComponentsRegistry from "../../lib/registry";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";

const myFont = localFont({ src: "../../public/sodosans.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" title="Starbucks">
      <body className={myFont.className}>
        <StyledComponentsRegistry>
          <CartProvider itemCounter={0}>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
