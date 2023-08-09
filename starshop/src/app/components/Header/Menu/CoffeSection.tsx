import * as React from "react";
import Link from "next/link";
import styled from "styled-components";

const CoffeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding-left: 1rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export default function CoffeSection() {
  return (
    <CoffeContainer>
      <Link href="/">Explore nossos Cafés</Link>
      <a>Receitas</a>
      <a>Saiba mais</a>
    </CoffeContainer>
  );
}
