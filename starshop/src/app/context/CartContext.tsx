'use client'
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartProviderProps = {
  children: React.ReactNode;
  itemCounter: number;
};

type CartContextProps = {
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  addToCart: (id: number, itemCounter: number) => void
  cartQuantity: number;
  cartItems: CartItem[];
  itemCounter: number;
};

type CartItem = {
  id: number;
  quantity: number;
};

const CartContext = createContext({} as CartContextProps);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children, itemCounter }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )

  const cartQuantity = Array.isArray(cartItems)
  ? cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
  : 0;

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function addToCart(id: number, itemCounter: number) {
    
    setCartItems(currItems => {
      const updatedItems = currItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + itemCounter };
        }
        return item;
      });
      
      const itemExists = currItems.some(item => item.id === id);
  
      if (!itemExists) {
        return [...updatedItems, { id, quantity: itemCounter }];
      }
  
      return updatedItems;
    });
  }
  

  {/* Cart */}
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
            addToCart,
            cartItems,
            cartQuantity,
            itemCounter            
        }}>
        {children}
    </CartContext.Provider>
  )
}
