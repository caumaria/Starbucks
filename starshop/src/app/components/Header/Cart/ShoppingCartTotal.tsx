import { useCart } from "@/app/context/CartContext";
import items from "../../../data/items.json";
import * as React from "react";
import Button from "../../Button";
import { CartTotal } from "./ShoppingCartStyle";
import Link from "next/link";

export default function ShoppingCartTotal() {
  const { cartItems } = useCart();

  return (
    <CartTotal>
      <section>
        <b>Subtotal</b>
        <b>R${" "}
          {cartItems.reduce((total, cartItem) => {
            const item = items.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)}
        </b>
      </section>

      <Button>
        Avançar para o Checkout
      </Button>

      <Link href="/cart" >ver carrinho</Link>
    </CartTotal>
  );
}
