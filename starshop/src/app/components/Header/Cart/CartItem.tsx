import items from "../../../data/items.json";
import styled from "styled-components";
import { CounterContainer } from "../../Shop/CardStyle";
import { CenterDiv } from "../../Center";
import { useCart } from "app/context/CartContext";
import Image from "next/image";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  img {
    width: 75px;
  }
  
  p:first-child {
    color: var(--main-green);
    font-size: 1.1rem;
    line-height: 28px;
  }

  p {
    margin: .4rem 0;
    font-size: 0.9rem;
    color: #333;
  }
`;

const RemoveButton = styled.button`
  background-color: inherit;
  color: var(--secondary-green);
  line-height: 28px;
  font-size: 1rem;
  font-weight: 400;
  border: none;
  text-decoration: underline;
  margin: 0.4rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem, increaseQuantity, decreaseQuantity } = useCart();
  const item = items.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <CartItemContainer>
      <div>
        <Image src={item.imgUrl} alt={item.name} width={76} height={94}/>
      </div>

      <div>
        <p>{item.name}</p>

        <p>Visualizar detalhes v</p>

        <p>R${item.price}</p>
        <ButtonsContainer>
          <CounterContainer>
            <button onClick={() => decreaseQuantity(id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => increaseQuantity(id)}>+</button>
          </CounterContainer>
          <RemoveButton onClick={() => removeItem(item.id)}>
            Remover
          </RemoveButton>
        </ButtonsContainer>
      </div>
    </CartItemContainer>
  );
}
