"use client";

import Container from "./components/Container";
import Filter from "./components/CoffeFilter/Filter";
import Title from "./components/Title";
import CoffeFilter from "./components/CoffeFilter/CoffeFilter";
import Shop from "./components/Shop/Shop";



export default function Home() {
  return (
    <main>
      <CoffeFilter />
      <Shop />
    </main>
  );
}
