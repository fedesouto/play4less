import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const calculateTotal = () => {
        if (cart.length > 0) {
            const totalPerProduct = cart.map(
                x => x.quantity * x.item.price
            );
            const total = totalPerProduct.reduce((x, y) => x + y);
            return total;
        }
    }
    const addItem = (product) => {

        const exists = cart.findIndex(element => element.item.id === product.item.id)
        if (exists > -1) {

            cart[exists].quantity += product.quantity;
            const newCart = [...cart]
            setCart(newCart)
        }
        else {
            const newCart = [...cart, product]
            setCart(newCart)
        }


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

