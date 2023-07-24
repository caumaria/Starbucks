import * as React from "react";
import Container from "../Container";
import items from "../../data/items.json";
import ProductCard from "./ProductCard";
import styled from "styled-components";

export interface ShopProps {}

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  padding: 0 1rem;
  margin: 2.5rem auto;
`;

export default function Shop(props: ShopProps) {
  return (
    <Container background={'#f2f0eb'}>
      <CardContainer>
        {items.map((item) => (
          <div key={item.id}>
            <ProductCard {...item} />
          </div>
        ))}
      </CardContainer>
    </Container>
  );
}
