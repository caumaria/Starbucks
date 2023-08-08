"use client";
import HeaderContainer from "./HeaderStyle";
import Cart from "./Cart/Cart";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu/Menu";
import CoffeSection from "./Menu/CoffeSection";
import Login from "./Menu/Login";
import Search from "./Search/Search";

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
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
    <div ref={ref}>
      <HeaderContainer open={open}>
        <CoffeSection />

        {isDesktop ? (
          <>
            <Logo />
            <Search />
          </>
        ) : (
          <>
            <Search />
            <Logo />
          </>
        )}

        <Icons>
          <Cart></Cart>
          <Menu />
        </Icons>

        <Login />
      </HeaderContainer>
    </div>
  );
}
