import * as React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: none;
  padding-right: 1rem;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const StyledBurger = styled.button<{ openMenu: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1rem;
  height: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    width: 1rem;
    height: 0.1rem;
    background: var(--main-green);
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
  }

  :first-child {
    transform: ${({ openMenu }) => (openMenu ? "rotate(45deg)" : "rotate(0)")};
  }

  :nth-child(2) {
    opacity: ${({ openMenu }) => (openMenu ? "0" : "1")};
    transform: ${({ openMenu }) => (openMenu ? "translateX(20px)" : "translateX(0)")};
  }

  :nth-child(3) {
    transform: ${({ openMenu }) => (openMenu ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

export default function MenuButton({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}) {
  return (
    <MenuContainer>
      <StyledBurger openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </MenuContainer>
  );
}
