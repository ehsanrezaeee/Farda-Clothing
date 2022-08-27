import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

  const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) => item.id === productToAdd.id ? {...item , quantity: item.quantity + 1} : item);
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((item) => item.id === productToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  } else {
    return cartItems.map((item) => item.id === productToRemove.id ? {...item , quantity: item.quantity - 1} : item);
  }

};

const removeTotal = (cartItems, productToRemoveT) => {
  const existingCartItem = cartItems.find((item) => item.id === productToRemoveT.id);
  
  if (existingCartItem) {
    return cartItems.filter((item) => item.id !== productToRemoveT.id);
  }

  return [...cartItems]
};




export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  cartcount: 0,
  removeItemFromCart: () => {},
  removeTotal: () => {},
  cartTotal: 0
});

export const CartItemProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartcount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((totali, current) => totali+current.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((tota, curren) => tota+curren.price * curren.quantity, 0);
    setCartTotal(newCartTotal);
  }, [cartItems])
  
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  };

  const totalRemoval = (productToRemoveT) => {
    setCartItems(removeTotal(cartItems, productToRemoveT))
  };


  const value = { cartItems, addItemToCart, cartcount, removeItemFromCart, totalRemoval, cartTotal }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}