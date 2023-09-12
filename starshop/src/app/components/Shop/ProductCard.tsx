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
  const { addToCart } = useCart();
  const [itemCounter, setItemCounter] = useState(1);

  const initialText = "Adicionar";
  const addingText = "Adicionando...";
  const addedText = "Adicionado";

  const [buttonText, setButtonText] = useState(initialText);
  const [timerBetween, setTimerBetween] = useState(false)
  {/* timer between clicks, prevent rapid ugly interactions */}

  function handleAddToCartButton(id: number, itemCounter: number) {
    if (!timerBetween) {
      setButtonText(addingText);
      addToCart(id, itemCounter);

      setTimerBetween(true);

      setTimeout(() => {
        setButtonText(addedText);

        setTimeout(() => {
          setButtonText(initialText);
          setTimerBetween(false);
        }, 700);
      }, 900);
    }
  }

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
          <Button 
          disabled={timerBetween} 
          onClick={() => handleAddToCartButton(id, itemCounter)}
          style={{ opacity: timerBetween ? '50%' : '100%' }}
          >
            {buttonText}
          </Button>
        </ButtonsContainer>
      </div>
    </Card>
  );
}
