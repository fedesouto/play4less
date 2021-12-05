import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const calculateTotal = () => {
        if(cart.length > 0) {
        const totalPerProduct = cart.map(
            x => x.quantity * x.item.price
        );
        const total = totalPerProduct.reduce((x, y) => x + y);
        return total;
    }
    }
    const addItem = (item) => {
        const newCart = [...cart, item]
        setCart(newCart)
    }
    const deleteItem = (id) => {
        const newCart = cart.filter(cartItem => cartItem.item.id !== id);
        setCart(newCart)
    }
    
    return (
        <CartContext.Provider value={{ cart, setCart, addItem, deleteItem, calculateTotal }}>
            {children}
        </CartContext.Provider>
    )
};

