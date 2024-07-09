'use client';
import { products } from '@/data/data';
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [cart, setCart] = useState([]);

  const addItemToCart = (id) => {
    const selectedItem = products.find(p => p.id == id);
    setCart(prevCart => [...prevCart, selectedItem]);
    console.log(cart);
  }

  const incrementCart = () => {
    setCartItems(cartItems + 1);
  }

  const decrementCart = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
    }
  }

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showToast])
  
  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        incrementCart,
        decrementCart,
        showToast,
        setShowToast,
        addItemToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
