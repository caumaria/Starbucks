import * as React from "react";
import MenuButton from "./MenuButton";
import MenuOpen from "./MenuOpen";
import { useState } from "react";
import Cart from "../Cart/Cart";
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

export default function IconsContainer() {
  const [open, setOpen] = useState(false);

  return (
    <Icons>
      <Cart />
      <MenuButton open={open} setOpen={setOpen} />
      <MenuOpen open={open} setOpen={setOpen}/>
    </Icons>
  );
}
