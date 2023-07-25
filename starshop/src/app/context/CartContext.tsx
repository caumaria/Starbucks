import { createContext, useContext } from "react";

type CartProviderProps ={
    children: React.ReactNode;
}

type CartContextProps = {
}

type CartItem = {
    id: number
    quantity: number
}


const CartContext = createContext({} as CartContextProps)

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
    return (
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}