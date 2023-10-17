"use client"
import * as React from "react";
import styled from "styled-components";

interface MenuButtonProps {
  handleClick: () => void;
  openMenu: boolean;
}

const MenuContainer = styled.div`
  display: none;
  padding-right: 1rem;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const StyledBurger = styled.button<{$openMenu: boolean}>`
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
    transform: ${(props) => (props.$openMenu ? "rotate(45deg)" : "rotate(0)")};
  }

  :nth-child(2) {
    opacity: ${(props) => (props.$openMenu ? "0" : "1")};
    transform: ${(props) => (props.$openMenu ? "translateX(20px)" : "translateX(0)")};
  }

  :nth-child(3) {
    transform: ${(props) => (props.$openMenu ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

export default function MenuButton({ openMenu, handleClick }: MenuButtonProps) {

  return (
    <MenuContainer>
      <StyledBurger $openMenu={openMenu} onClick={handleClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </MenuContainer>
  );
}
