import * as React from "react";
import Container from "../Container";
import Title from "../Title";
import Filter from "./Filter";

export interface CoffeFilterProps {}

export default function CoffeFilter(props: CoffeFilterProps) {
  return (
    <>
      <Container height={"150"}>
        <Title>Busque seu Café</Title>
      </Container>
      <Filter />
    </>
  );
}
