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
  margin-top: 0.3rem;
  width: 100px;
`;

export default function IconsContainer() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Icons>
      <Cart />
      <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MenuOpen openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    </Icons>
  );
}
