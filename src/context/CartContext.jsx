import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ১. কার্টে আইটেম যোগ করা (বা সংখ্যা বাড়ানো)
  const addToCart = (item) => {
    const existing = cart.find(i => i.name === item.name);
    if (existing) {
      setCart(cart.map(i => i.name === item.name ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // ২. কার্ট থেকে আইটেম কমানো (বা মুছে ফেলা) - 🔥 নতুন ফিচার
  const removeFromCart = (item) => {
    const existing = cart.find(i => i.name === item.name);
    if (existing.qty === 1) {
      setCart(cart.filter(i => i.name !== item.name)); // ১টা থাকলে মুছে ফেলবে
    } else {
      setCart(cart.map(i => i.name === item.name ? { ...i, qty: i.qty - 1 } : i)); // সংখ্যা কমাবে
    }
  };

  // ৩. কার্ট ক্লিয়ার করা
  const clearCart = () => setCart([]);

  // ৪. মোট আইটেম সংখ্যা
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);