"use client"

import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/Header/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextProps = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  cartQuantity: number
  cartItems: CartItem[]
};

type CartItem = {
  id: number;
  quantity: number;
};

const CartContext = createContext({} as CartContextProps);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeItem(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <CartContext.Provider 
        value={{
            getItemQuantity,
            increaseQuantity,
            decreaseQuantity,
            removeItem,
            cartItems,
            cartQuantity,
            openCart,
            closeCart
        }}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </CartContext.Provider>
  )
}
