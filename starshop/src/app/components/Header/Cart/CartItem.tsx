import { useCart } from "@/app/context/CartContext";
import items from "../../../data/items.json";
import styled from "styled-components";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItemContainer = styled.div`
display: flex;
gap: .8rem;
font-size: .75rem;
color: var(--main-green);
margin: 1rem 0;

img {
    width: 75px;
}

button {
  background-color: inherit;
  color: var(--secondary-green);
  line-height: 28px;
  font-size: .7rem;
  font-weight: 550;
  border: none;
  text-decoration: underline;
}
`;

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem } = useCart();
  const item = items.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <CartItemContainer>
      <div>
        <img src={item.imgUrl} />
      </div>

      <div>
        <strong>{item.name}</strong>

        <div>Visualizar Detalhes v</div>

        <div>
          ${item.price}
          <button onClick={() => removeItem(item.id)}>Remover</button>
        </div>
      </div>
    </CartItemContainer>
  );
}
