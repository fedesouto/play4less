import React, { Component, useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import { BsXCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const CartComponent = () => {

    const { cart, calculateTotal, deleteItem } = useCart();
    const [total, setTotal] = useState(calculateTotal)

    const handleDelete = (itemId, price, quantity) => {
        deleteItem(itemId);
        setTotal(total - (price * quantity));
    }

    if (cart.length === 0) {
        return (
            <div className="cart">
                <h1>Tu carrito está vacío.</h1>
                <Link to="/"><button className="btn btn-lg mainColorButton mt-3">Comprár aquí</button></Link>
            </div>
        )
    }

    else {
        return (
            <div className="cart">
                <h1 className="text-center mb-3">Tu Carrito</h1>
                <table className="table table-striped table-light text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Título</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(product => {
                            const { quantity, item} = product;
                            const { id, title, image, price } = item;


                            return (
                                <tr key={id} className="align-middle">
                                    <th scope="row"><img src={image} className="cartItem-image" /></th>
                                    <td>{title}</td>
                                    <td>{product.quantity}</td>
                                    <td>$ {price}</td>
                                    <td><BsXCircleFill className="text-danger removeButton" onClick={() => { handleDelete(id, price, quantity) }} /></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                <p>Total: $ {total}</p>
                <button className="btn btn-success">Finalizar compra</button>
            </div>
        )
    }

}