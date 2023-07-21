import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import StyledComponentsRegistry from "../../lib/registry";

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
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
