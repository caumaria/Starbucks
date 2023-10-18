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
  font-size: 0.75rem;
  color: var(--main-green);
  margin: 1rem 0;

  img {
    width: 75px;
  }

  p {
    margin: .4rem 0;
  }
`;

const RemoveButton = styled.button`
  background-color: inherit;
  color: var(--secondary-green);
  line-height: 28px;
  font-size: 0.7rem;
  font-weight: 550;
  border: none;
  text-decoration: underline;
  margin: 0.4rem;
`;

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem, increaseQuantity, decreaseQuantity } = useCart();
  const item = items.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <CartItemContainer>
      <div>
        <Image src={item.imgUrl} alt="" />
      </div>

      <div>
        <b>{item.name}</b>

        <p>Visualizar Detalhes v</p>

        <div>R${item.price}</div>
        <CenterDiv>
          <CounterContainer>
            <button onClick={() => decreaseQuantity(id)}>-</button>
            <button onClick={() => increaseQuantity(id)}>+</button>
            <span>{quantity}</span>
          </CounterContainer>
          <RemoveButton onClick={() => removeItem(item.id)}>
            Remover
          </RemoveButton>
        </CenterDiv>
      </div>
    </CartItemContainer>
  );
}
