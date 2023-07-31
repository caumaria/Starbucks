"use client";

import { useCart } from "@/app/context/CartContext";
import items from "../../../data/items.json";
import { CartItem } from "./CartItem";
import { CardWrapper, ShopContainer, ShoppingContainer } from "./ShoppingCartStyle";
import EmptyCart from "./EmptyCart";

export function ShoppingCart() {
  const { cartItems, cartQuantity } = useCart();

  return (
    <ShoppingContainer>
      {
        cartQuantity === 0 ? <EmptyCart /> :
      <>
        <ShopContainer>
        <div>
          <h1>Meu Carrinho</h1>
          <p>{cartQuantity} itens no Carrinho</p>
        </div>
        <div>

          <CardWrapper>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </CardWrapper>

          <div>
              Total{" "}
              {cartItems.reduce((total, cartItem) => {
                const item = items.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}
            </div>
        </div>
        </ShopContainer>
      </>}
    </ShoppingContainer>
  );
}
