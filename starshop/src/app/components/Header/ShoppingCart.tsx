"use client"

import { useCart } from "@/app/context/CartContext";
import items from "../../data/items.json";
import { CartItem } from "./CartItem";
import styled from "styled-components";
import { ShoppingContainer } from "./ShoppingCartStyle";
import { useEffect, useRef } from "react";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useCart();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closeCart();
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeCart]);

  return (
    <ShoppingContainer ref={ref}>
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
    </ShoppingContainer>
  );
}


