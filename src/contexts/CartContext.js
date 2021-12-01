import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addItem = (item) => {
        const newCart = [...cart, item]
        setCart(newCart)
    }
    const deleteItem = (item) => {
        cart.filter(cartItem => cartItem.item.id !== item.id);
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, deleteItem }}>
            {children}
        </CartContext.Provider>
    )
};

