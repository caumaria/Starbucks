import { useCart } from "@/app/context/CartContext"
import items from '../../../data/items.json'
import { CartItemContainer } from "./CartItemStyle"


type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeItem } = useCart()
    const item = items.find(i => i.id === id)

    if (item == null) return null

    return (
        <CartItemContainer>
            <img src={item.imgUrl}/>
            <div>
                <div>{item.name}
                {quantity > 1 && <span>
                    x{quantity}</span>}
                </div>
                <div>
                    ${item.price}
                </div>
            </div>
            <div>{(item.price) * quantity}</div>
            <button onClick={() => 
                removeItem(item.id)}>&times;</button>
        </CartItemContainer>
    )
}