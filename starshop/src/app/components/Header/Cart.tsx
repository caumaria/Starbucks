import * as React from "react";
import Image from "next/image";
import CartIcon from "../../../../public/minicart.svg";
import Link from "next/link";
import styled from "styled-components";

export interface CartProps {}

const CartButton = styled.button`
  background-color: none;
  border: none;
`;

/* click open cart + cart quantity */

export default function Cart(props: CartProps) {
  return (
    <CartButton>
      <Link href="/cart">
        <Image src={CartIcon} alt="Shopping Cart"></Image>3
      </Link>
    </CartButton>
  );
}
