import * as React from "react";
import Button from "../../Button";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import Text from "../../lettering";
import SectionMenu1 from "./sectionMenu1.png";
import SectionMenu2 from "./sectionMenu2.png";
import SectionMenu3 from "./sectionMenu3.png";
import Image from "next/image";

interface MenuOpenProps {
  openMenu: boolean;
  handleClick: () => void;
}

interface MenuContainerProps {
  openMenu: boolean;
}

const MenuContainer = styled.div<MenuContainerProps>`
  height: 100vh;
  background-color: #f2f0eb;
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${({ openMenu }) =>
    openMenu ? "translateX(0)" : "translateX(-100%)"};
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100vw;
  width: 100%;
  font-family: "LanderGrande";
  font-size: 2.1rem;
  line-height: 1.1;
  z-index: 99;

  span {
    position: fixed;
    top: 4%;
    right: 2%;
  }
  p {
    cursor: pointer;
    margin: 0;
    font-size: 0.7rem;
    font-weight: 600;
    font-family: "SoDoSans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 2rem;
  }
  ul {
    cursor: pointer;
    height: 100vh;
    width: 40%;
    border-right: 1px solid rgba(30, 57, 50, 0.1);
    padding: 6rem 1.3rem;
    li {
      list-style: none;
      padding: 0.5rem 0;
    }
  }
  aside {
    height: 100vh;
    padding: 6rem 2rem;
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
  }
`;

export default function MenuOpen({ openMenu, handleClick }: MenuOpenProps) {
  return (
    <MenuContainer openMenu={openMenu}>
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
        <Button>Compre Aqui</Button>
      </ul>

      <aside>
        <div>
          <Image src={SectionMenu1} alt="capsulas de café Nespresso"></Image>
          <Text>Starbucks® by Nespresso®</Text>
        </div>
        <div>
          <Image src={SectionMenu2} alt="capsulas de café Dolce Gusto"></Image>
          <Text>Starbucks® by NESCAFÉ® Dolce Gusto®</Text>
        </div>
        <div>
          <Image src={SectionMenu3} alt="café moído"></Image>
          <Text>Café Torrado Moído</Text>
        </div>
      </aside>
    </MenuContainer>
  );
}
