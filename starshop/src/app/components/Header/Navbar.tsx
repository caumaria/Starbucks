"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import Search from "../../../../public/search-icon.svg";
import CartIcon from "../../../../public/minicart.svg";
import Container from "../Container";
import styled from "styled-components";
import { useCart } from "@/app/context/CartContext";
import { HeaderContainer } from "./Header";

const CartButton = styled.button`
  background-color: none;
  border: none;
`;

export default function Navbar() {
  const { openCart, cartQuantity } = useCart()


  return (
    <Container>
      <HeaderContainer>
        <ul>
          <div>
            <Link href="/">Explore nossos Cafés</Link>
            <Link href="/recipe">Receitas</Link>
            <Link href="/knowmore">Saiba mais</Link>
          </div>

          <Link href="/">
            <Image
              src={Logo}
              alt="logo Starbucks"
              style={{ marginTop: ".2rem" }}
            ></Image>
          </Link>

          <div>
            <Link href="/search">
              Pesquisar
              <Image src={Search} alt="Search Icon"></Image>
            </Link>

            <CartButton onClick={openCart}>
              <Image src={CartIcon} alt="Shopping Cart"></Image>
             {cartQuantity}            
            </CartButton>

            <>
              <Link href="/login">Entrar</Link>
              <Link href="/register">Registrar</Link>
            </>
          </div>
        </ul>
      </HeaderContainer>
    </Container>
  );
}
