import * as React from "react";
import Image from "next/image";
import CartIcon from "../../../../../public/minicart.svg";
import styled from "styled-components";
import { ShoppingCart } from "./ShoppingCart";
import { useState, useEffect, useRef } from "react";
import { useCart } from "app/context/CartContext";


const CartContainer = styled.div`
`;

const CartButton = styled.button`
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    margin: 0 .3rem;
  }

  span {
    font-size: 16px;
    color: var(--main-green);
    margin-top: 2px;
    display: inline-block;
  }
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
    <CartContainer ref={ref}>
      <CartButton onClick={() => setOpen(!open)}>
        <Image src={CartIcon} alt="Shopping Cart"></Image>
        {cartQuantity > 0 ? (
          <span>{cartQuantity}</span>
        ) : null}
      </CartButton>

      {open ? 
      <ShoppingCart open={open} setOpen={setOpen} /> 
      : null}

    </CartContainer>
  );
}
