import * as React from "react";
import styled from "styled-components";
import Container from "../Container";

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
  padding: 0 30px;

  p {
    font-size: 18px;
    color: var(--main-green);
    text-align: center;
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
        <img src={imgUrl} alt="" width={200}></img>
      </div>
      <div>
        <p>{name}</p>
        <p>★★★★★ (0)</p>
        <p>{price}</p>- 1 + <button>add</button>
      </div>
    </Card>
  );
}
