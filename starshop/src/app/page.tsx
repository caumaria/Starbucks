"use client";

import Container from "./components/Container";
import Filter from "./components/CoffeFilter/Filter";
import Title from "./components/Title";
import CoffeFilter from "./components/CoffeFilter/CoffeFilter";
import Shop from "./components/Shop/Shop";
import { CartProvider } from "./context/CartContext";

export default function Home() {
  return (
    <CartProvider>
      <main>
        <CoffeFilter />
        <Shop />
      </main>
    </CartProvider>
  );
}
