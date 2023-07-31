import { useCart } from "@/app/context/CartContext";
import items from "../../../data/items.json";
import { CartItemContainer } from "./CartItemStyle";

type CartItemProps = {
  id: number;
  quantity: number;
};

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
