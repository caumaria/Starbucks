"use client"
import CoffeFilter from "./components/CoffeFilter/CoffeFilter";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";


export default function Home() {
  return (
      <main>
        <CoffeFilter />
        <Shop />
        <Footer />
      </main>

  );
}
