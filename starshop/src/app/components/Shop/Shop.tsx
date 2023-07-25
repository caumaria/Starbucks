import * as React from "react";
import Container from "../Container";
import items from "../../data/items.json";
import ProductCard from "./ProductCard";
import styled from "styled-components";

export interface ShopProps {}

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 320px));
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  padding: 0 1rem;
  margin: 2.5rem auto;
  gap: 1rem;
`;

export default function Shop(props: ShopProps) {
  return (
    <Container background={"#f2f0eb"}>
      <CardContainer>
        
          {items.map((item) => (
            <Container width={'320px'} key={item.id}>
              <ProductCard {...item} />
            </Container>
          ))}
        
      </CardContainer>
    </Container>
  );
}
