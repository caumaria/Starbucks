import * as React from "react";
import Button from "../../Button";
import styled from "styled-components";
import MenuButton from "./MenuButton";

interface MenuOpenProps {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

interface MenuContainerProps {
  openMenu: boolean;
}

const MenuContainer = styled.div<MenuContainerProps>`
  height: 100vh;
  background-color: #f2f0eb;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: ${({ openMenu }) => (openMenu ? "translateX(0)" : "translateX(-100%)")};
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export default function MenuOpen({ openMenu, setOpenMenu }: MenuOpenProps) {
  return (
    <MenuContainer openMenu={openMenu}>
      <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <p>Nossos produtos</p>
      <p>filtro</p>
      <p>receitas</p>
      <p>saiba mais</p>
      <p>Minha conta</p>
      <p>Entrar</p>
      <p>Registrar</p>
      <Button>Compre Aqui</Button>
    </MenuContainer>
  );
}
