import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (product) => {

        const exists = cart.findIndex(element => element.item.id === product.item.id)
        if (exists > -1) {

            const newCart = [...cart]
            newCart[exists].quantity += product.quantity;
            return setCart(newCart)
        }

        setCart([...cart, product])
    }
    const deleteItem = (id) => {
        const newCart = cart.filter(cartItem => cartItem.item.id !== id);
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, deleteItem }}>
            {children}
        </CartContext.Provider>
    )
};

