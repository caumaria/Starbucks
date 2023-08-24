import * as React from "react";
import Button from "../Button";
import { ButtonsContainer, Card, CounterContainer } from "./CardStyle";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function ProductCard({
  id,
  name,
  price,
  imgUrl,
}: StoreItemProps) {
  const { getItemQuantity, increaseQuantity, decreaseQuantity, addToCart } =
    useCart();

  const quantity = getItemQuantity(id);

  const [itemCounter, setItemCounter] = useState(1);

  const plus = () => {
    setItemCounter(itemCounter + 1);
  };
  const minus = () => {
    if (itemCounter === 1) {
      return;
    } else {
      setItemCounter(itemCounter - 1);
    }
  };

  return (
    <Card>
      <div>
        <img src={imgUrl} alt=""></img>
      </div>
      <div>
        <p>{name}</p>
        <p>★★★★★ (0)</p>
        <p>RS{price}</p>

        <ButtonsContainer>
          <CounterContainer>
            <button onClick={minus}>-</button>
            <button onClick={plus}>+</button>
          </CounterContainer>
          <span>{itemCounter}</span>
          <Button onClick={() => addToCart(id, itemCounter)}>Adicionar</Button>
        </ButtonsContainer>
      </div>
    </Card>
  );
}
