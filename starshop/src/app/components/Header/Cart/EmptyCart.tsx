import * as React from "react";
import Image from "next/image";
import Text from "../../lettering";
import Button from "../../Button";
import EmptyCartImage from "./empty-minicart.png";
import Container from "../../Container";
import styled from "styled-components";

const EmptyCartContainer = styled.section`
  height: 100vh;

  h1 {
    font-size: 26px;
    font-weight: 400;
    line-height: 38px;
    color: var(--main-green);
  }

  p {
    color: var(--main-green);
    font-size: 16px;
  }
`;


export default function EmptyCart() {
  return (
    <EmptyCartContainer>
      <h1>Meu Carrinho</h1>

      <Container height="80%">
        <Image src={EmptyCartImage} alt=""></Image>
        <Text>
          O seu carrinho ainda está vazio, que tal adicionar alguns itens?
        </Text>
        <Button>Explore nossos Cafés</Button>
      </Container>
    </EmptyCartContainer>
  );
}
