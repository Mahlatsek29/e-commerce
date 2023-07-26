import React, { createContext, useContext, useState } from 'react';
import { getPlant } from './consts/plants';

const CartContext = createContext();

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  function addItemToCart(id) {
    const product = getPlant(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id === id) {
            item.qty++;
            item.totalPrice += product.price - item.product.price; // Subtract old price before adding the new one
          }
          return item;
        });
      }
    });
  }

  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider
      value={{ items, getItemsCount, addItemToCart, getTotalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider; 
