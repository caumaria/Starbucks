import * as React from "react";
import styled from "styled-components";
import Button from "../Button";


type StoreItemProps = {
  id: number;
  name: string;
  price: string;
  imgUrl: string;
};

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 16px;
    color: var(--main-green);
    text-align: center;
    margin: 6px 0;
    word-wrap: break-word;
    letter-spacing: 0.02em;
  }
  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin: 1rem 0;

  span {
    position: relative;
    font-size: 14px;
    right: 19%;
    color: var(--secondary-green);
  }
`;

const CounterContainer = styled.div`
  gap: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-green);
    min-width: 26px;
    height: 26px;
    border-radius: 20px;
    border: 1px solid var(--secondary-green);

    font-size: 14px;
    font-weight: bold;
    background: transparent;
    line-height: 30px;
  }
  :hover {
    background-color: var(--secondary-green);
    color: white;
  }
`;



export default function ProductCard({
  id,
  name,
  price,
  imgUrl,
}: StoreItemProps) {
  return (
    <Card>
      <div>
        <img src={imgUrl} alt=""></img>
      </div>
      <div>
        <p>{name}</p>
        <p>★★★★★ (0)</p>
        <p>{price}</p>

        <ButtonsContainer>
          <CounterContainer>
            <button>-</button>
            <button>+</button>
          </CounterContainer>
          <span>1</span>
          <Button>Adicionar</Button>
        </ButtonsContainer>
      </div>
    </Card>
  );
}
