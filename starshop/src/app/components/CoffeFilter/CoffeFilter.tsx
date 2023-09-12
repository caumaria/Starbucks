import * as React from "react";
import Container from "../Container";
import Title from "../Title";
import Filter from "./Filter";
import styled from "styled-components";

const CoffeFilterContainer = styled.div`
  margin-top: 8rem;
`;

export default function CoffeFilter() {
  return (
    <CoffeFilterContainer>
      <Container height={"120px"}>
        <Title>Busque seu Café</Title>
      </Container>
      <Filter />
    </CoffeFilterContainer>
  );
}
