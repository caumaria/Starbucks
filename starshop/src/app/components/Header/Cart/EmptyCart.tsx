import * as React from "react";
import Image from "next/image";
import Text from "../../lettering";
import Button from "../../Button";
import EmptyCartImage from "./empty-minicart.png";
import Container from "../../Container";
import styled from "styled-components";
import Link from "next/link";

const EmptyCartContainer = styled.section`
  height: 100%;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;

    button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

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

export default function EmptyCart({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <EmptyCartContainer>
      <section>
        <div>
          <h1>Meu Carrinho</h1>
          <p>0 itens no Carrinho</p>
        </div>
        <button onClick={() => setOpen(!open)}>x</button>
      </section>

      <Container height="80%">
        <Image src={EmptyCartImage} alt=""></Image>
        <Text>
          O seu carrinho ainda está vazio, que tal adicionar alguns itens?
        </Text>
        <Link href="/">
          <Button open={open} onClick={() => setOpen(!open)}>
            Explore nossos Cafés
          </Button>
        </Link>
      </Container>
    </EmptyCartContainer>
  );
}
