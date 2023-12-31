"use client";
import Button from "../../Button";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import Text from "../../lettering";
import SectionMenu1 from "/public/sectionMenu1.png";
import SectionMenu2 from "/public/sectionMenu2.png";
import SectionMenu3 from "/public/sectionMenu3.png";
import Image from "next/image";

interface MenuOpenProps {
  openMenu: boolean;
  handleClick: () => void;
}

interface MenuContainerProps {
  $openMenu: boolean;
}

const MenuContainer = styled.div<MenuContainerProps>`
  background-color: #f2f0eb;
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $openMenu }) =>
    $openMenu ? "translateX(0)" : "translateX(-100%)"};
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1.1;
  min-width: 100%;
  min-height: 100%;
  z-index: 9;

  span {
    position: fixed;
    top: 4%;
    right: 2%;
  }
  p {
    cursor: pointer;
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 3rem;
  }
  ul {
    cursor: pointer;
    height: 100vh;
    width: 40%;
    border-right: 1px solid rgba(30, 57, 50, 0.1);
    margin: 3rem 1rem;
    padding-right: 1rem;
    li {
      list-style: none;
      padding: 0.5rem 0;
      font-weight: 300;
      font-family: "LanderGrande";
      line-height: 1;
    }
    @media (max-width: 500px) {
      border: none;
      width: 100%;
      font-size: 2.9rem;
    }
    button {
      padding: 1rem 2rem;
      a {
        color: white;
        font-size: 1rem;
      }
    }
  }
  aside {
    margin: 3rem 1rem;
    height: 100vh;
    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      img {
        width: 40px;
        height: auto;
        margin: 0;
        margin-right: 20px;
      }
    }
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export default function MenuOpen({ openMenu, handleClick }: MenuOpenProps) {
  return (
    <MenuContainer $openMenu={openMenu}>
      <span>
        <MenuButton openMenu={openMenu} handleClick={handleClick} />
      </span>

      <ul>
        <li>Nossos produtos</li>
        <Text>Por Tipo de Café</Text>
        <Text>Por Tipo de Torra</Text>
        <Text>Por Origem</Text>
        <li>Receitas</li>
        <li>Saiba mais</li>
        <li>Minha conta</li>
        <Text>Entrar</Text>
        <Text>Registrar</Text>
        <Button>
          <a href="*">Compre Aqui</a>
        </Button>
      </ul>

      <aside>
        <div>
          <Image src={SectionMenu1} alt="capsulas de café Nespresso" />
          <Text>Starbucks® by Nespresso®</Text>
        </div>
        <div>
          <Image src={SectionMenu2} alt="capsulas de café Dolce Gusto" />
          <Text>Starbucks® by NESCAFÉ® Dolce Gusto®</Text>
        </div>
        <div>
          <Image src={SectionMenu3} alt="café moído" />
          <Text>Café Torrado Moído</Text>
        </div>
      </aside>
    </MenuContainer>
  );
}
