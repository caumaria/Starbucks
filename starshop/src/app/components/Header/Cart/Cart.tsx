import { useCart } from "@/app/context/CartContext";
import * as React from "react";
import Image from "next/image";
import CartIcon from "../../../../../public/minicart.svg";
import styled from "styled-components";
import { ShoppingCart } from "../ShoppingCart";
import { useState, useEffect, useRef } from "react";


const CartButton = styled.button`
  background-color: none;
  border: none;
`;

export default function Cart() {
  const { cartQuantity } = useCart();
  const [open, setOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  return (
    <div ref={ref}>
      <CartButton onClick={() => setOpen(!open)}>
        <Image src={CartIcon} alt="Shopping Cart"></Image>
        {cartQuantity}
      </CartButton>
      {open ? <ShoppingCart setOpen/> : null}
    </div>
  );
}
