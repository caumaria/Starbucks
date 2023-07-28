"use client";

import { useCart } from "@/app/context/CartContext";
import items from "../../../data/items.json";
import { CartItem } from "./CartItem";
import { ShoppingContainer } from "./ShoppingCartStyle";
import EmptyCart from "./EmptyCart";

export function ShoppingCart() {
  const { cartItems, cartQuantity } = useCart();

  return (
    <ShoppingContainer>
      {
        cartQuantity === 0 ? <EmptyCart /> :
      <>
        <header>
          <h4>Cart</h4>
        </header>
        <div>
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div>
              Total{" "}
              {cartItems.reduce((total, cartItem) => {
                const item = items.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}
            </div>
          </div>
        </div>
      </>}
    </ShoppingContainer>
  );
}
