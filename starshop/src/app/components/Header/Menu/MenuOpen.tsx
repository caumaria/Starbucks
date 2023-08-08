import * as React from "react";
import Button from "../../Button";
import styled from "styled-components";

const MenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f0eb;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 99;
`;

export default function MenuOpen() {
  return (
    <MenuContainer>
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
