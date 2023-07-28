import * as React from "react";
import Button from "../Button";
import { ButtonsContainer, Card, CounterContainer } from "./CardStyle";
import { useCart } from "@/app/context/CartContext";


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
  imgUrl,}: StoreItemProps) {

  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity
  } = useCart();

  const quantity = getItemQuantity(id);

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
            <button onClick={() => decreaseQuantity(id)}>-</button>
            <button onClick={() => increaseQuantity(id)} >+</button>
          </CounterContainer>
          <span>{quantity}</span>
          <Button onClick={() => increaseQuantity(id)}>Adicionar</Button>
        </ButtonsContainer>
      </div>
    </Card>
  );
}
