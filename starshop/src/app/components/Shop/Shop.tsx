import * as React from "react";
import Container from "../Container";
import items from "../../data/items.json";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const ShopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: "100%";
  padding: 0 1rem;
  background: #f2f0eb;
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  padding: 0 1rem;
  margin: 2.5rem auto;
  gap: 1rem;
`;

export default function Shop() {
  return (
    <ShopContainer>
      <CardContainer>
        
          {items.map((item) => (
            <Container width={'300px'} key={item.id}>
              <ProductCard {...item} />
            </Container>
          ))}
        
      </CardContainer>
    </ShopContainer>
  );
}
