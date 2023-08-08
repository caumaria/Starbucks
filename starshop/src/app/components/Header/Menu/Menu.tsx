import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import MenuOpen from "./MenuOpen";

const MenuContainer = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }

  button {
    background-color: none;
    border: none;
  }
`;

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <MenuContainer>
      <button onClick={() => setOpen(!open)}>x</button>

      {open ? <MenuOpen /> : null}
    </MenuContainer>
  );
}
