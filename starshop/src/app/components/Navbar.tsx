"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Cart from '../../../public/minicart.svg'
import Search from '../../../public/search-icon.svg'
import styled from "styled-components";

const Header = styled.header`
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      margin: 0 .8rem;
      color: var(--main-green);
      font-size: 18px;

      img {
        margin: -.1rem .5rem;
      }
    }
  }
`;

export default function Navbar() {
  return (
    <Header>
      <ul>
        <div>
          <Link href="/">Explore nossos Cafés</Link>
          <Link href="/recipe">Receitas</Link>
          <Link href="/knowmore">Saiba mais</Link>
        </div>

        <Link href="/">
          <Image src={Logo} alt="logo Starbucks"
          style={{marginTop: '.2rem'}}></Image>
        </Link>

        <div>
          <Link href="/search">
            Pesquisar
            <Image 
            src={Search} 
            alt="Search Icon"
            ></Image>
          </Link>
          <Link href="/cart">
            <Image src={Cart} alt="Shopping Cart"></Image>
          </Link>
          <Link href="/login">Entrar</Link>
          <Link href="/register">Registrar</Link>
        </div>
      </ul>
    </Header>
  );
}
