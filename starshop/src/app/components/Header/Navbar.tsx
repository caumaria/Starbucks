"use client";
import HeaderContainer from "./HeaderStyle";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import CoffeSection from "./Menu/CoffeSection";
import Login from "./Menu/Login";
import Search from "./Search/Search";
import IconsContainer from "./Menu/IconsContainer";
import styled from "styled-components";
import { CenterDiv, FixedDiv } from "../Center";


const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: white;
  padding: 0 1rem;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  padding-right: 1rem;
`;

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [isDesktop, setDesktop] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1000) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
    const updateMedia = () => {
      if (window.innerWidth > 1000) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <NavbarContainer ref={ref}>
      <HeaderContainer open={open}>
        {isDesktop ? (
          <>
            <FixedDiv>
              <CoffeSection />
            </FixedDiv>
            <Logo />
            <FixedDiv>
              <RightContainer>
                <Search />
                <IconsContainer />
                <Login />
              </RightContainer>
            </FixedDiv>
          </>
        ) : (
          <>
            <CenterDiv>
              <Search />
            </CenterDiv>
            <Logo />
            <CenterDiv>
              <IconsContainer />
              <Login />
            </CenterDiv>
          </>
        )}
      </HeaderContainer>
    </NavbarContainer>
  );
}
