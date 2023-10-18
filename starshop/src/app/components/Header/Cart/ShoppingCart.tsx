"use client";

import { CartItem } from "./CartItem";
import {
  CardWrapper,
  ShopContainer,
  ShoppingContainer,
} from "./ShoppingCartStyle";
import EmptyCart from "./EmptyCart";
import ShoppingCartTotal from "./ShoppingCartTotal";
import { useCart } from "app/context/CartContext";

export function ShoppingCart({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const { cartItems, cartQuantity } = useCart();

  return (
    <ShoppingContainer>
      {cartQuantity === 0 ? (
        <EmptyCart open={open} setOpen={setOpen} />
      ) : (
        <>
          <ShopContainer>
            <section>
              <div>
                <h1>Meu Carrinho</h1>
                <p>{cartQuantity} itens no Carrinho</p>
              </div>
              <button onClick={() => setOpen(!open)}>x</button>
            </section>
            <div>
              <CardWrapper>
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </CardWrapper>

              <ShoppingCartTotal />
            </div>
          </ShopContainer>
        </>
      )}
    </ShoppingContainer>
  );
}
