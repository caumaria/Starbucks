"use client"
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
  width: 60px;
`;

export default function IconsContainer() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Icons>
        <Cart />
        <MenuButton openMenu={openMenu} handleClick={handleClick} />
      </Icons>
      <MenuOpen openMenu={openMenu} handleClick={handleClick} />
    </>
  );
}
