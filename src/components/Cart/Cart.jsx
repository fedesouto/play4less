import React, { Component, useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import { BsXCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { addOrder } from '../../config/firebase/firestoreService';

export const CartComponent = () => {

    const { cart, calculateTotal, deleteItem } = useCart();
    const [total, setTotal] = useState(calculateTotal)
    const [orderId, setOrderId] = useState(null);

    const handleDelete = (itemId, price, quantity) => {
        deleteItem(itemId);
        setTotal(total - (price * quantity));
    }

    const onSubmit = () => {
        const name = document.querySelector('#buyer-name').value;
        const email = document.querySelector('#buyer-email').value;
        const phone = document.querySelector('#buyer-phone').value;

        const order = {
            buyer: { name, email, phone },
            items: cart,
            date: Date.now(),
            total: total
        }
        addOrder(order, setOrderId);

    }
    if (cart.length === 0) {
        return (
            <div className="cart">
                <h1>Tu carrito está vacío.</h1>
                <Link to="/"><button className="btn btn-lg mainColorButton mt-3">Comprár aquí</button></Link>
            </div>
        )
    }
    else if (orderId) {
        return (
            <div className="cart">
                <h1>Gracias por tu compra!</h1>
                <h2 className="lead mt-4">Tu orden {orderId} ya fue procesada.</h2>
                <Link to="/"><button className="btn btn-lg mainColorButton mt-5">Volver al inicio</button></Link>
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
                            const { quantity, item } = product;
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
                <Link to="/"><button className="btn btn-lg mainColorButton mb-5">Seguir comprando</button></Link>
                <div className="checkout">
                    <h3 className="text-center">Finalizá tu compra</h3>
                    <form>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-3">
                                <label htmlFor="buyer-name" className="mb-2">Nombre</label>
                            </div>
                            <div className="col-9">
                                <input type="text" className="form-control" id="buyer-name" />
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-3">
                                <label htmlFor="buyer-email" className="mb-2">E-mail</label>
                            </div>
                            <div className="col-9">
                                <input type="email" className="form-control" id="buyer-email" />

                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-3">
                                <label htmlFor="buyer-phone" className="mb-2">Teléfono</label>
                            </div>
                            <div className="col-9">
                                <input type="number" className="form-control" id="buyer-phone" />
                            </div>
                        </div>
                    </form>
                    <button className="btn btn-success mt-4" onClick={onSubmit}>Comprar</button>
                </div>
            </div>
        )
    }

}