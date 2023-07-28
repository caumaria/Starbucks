"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import Search from "../../../../public/search-icon.svg";
import Container from "../Container";
import { HeaderContainer } from "./Header";
import Cart from "./Cart/Cart";



export default function Navbar() {


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

            <Cart></Cart>

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
