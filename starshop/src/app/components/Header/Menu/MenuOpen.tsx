import * as React from "react";
import Button from "../../Button";
import styled from "styled-components";
import MenuButton from "./MenuButton";

interface MenuOpenProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const MenuContainer = styled.div<MenuOpenProps>`
  height: 100vh;
  background-color: #f2f0eb;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 1000px) {
    width: 100%;
  }

`;

export default function MenuOpen({ open, setOpen }: MenuOpenProps) {
  return (
    <MenuContainer open={open}>
      <MenuButton open={open} setOpen={setOpen} />
      <p>Nossos produtos</p>
      <p>filtro</p>
      <p>receitas</p>
      <p>saiba mais</p>
      <p>Minha conta</p>
      Entrar Registrar
      <Button>Compre Aqui</Button>
    </MenuContainer>
  );
}
