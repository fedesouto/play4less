import React, { Component, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { RatingView } from 'react-simple-star-rating'
import { useCart } from '../../../contexts/CartContext';


const ItemDetail = ({ item }) => {
    const { title, price, description, category, image, rating, stock } = item;
    

    const [stockAmount, setStockAmount] = useState(stock);
    const { cart, addItem } = useCart();

    //ItemCount onAdd
    const handleAdd = (quantity) => {
        if (quantity <= stock) {
            setStockAmount(stock - quantity)
            addItem({item, quantity})
            console.log(cart)
            alert(`Se agregaron ${quantity} productos al carrito.`)
        }
        else if (stock === 0) {
            alert('No hay productos disponibles.')
        }
        else alert(`Solo hay ${stock} productos disponibles.`);
    }


    return (
        <div className="container">
            <h1 className="display-6 text-center my-4">{title}</h1>
            <div className="row">
                <div className="col bg-white d-flex justify-content-center border">
                    <img src={image} alt={title} className="img-fluid w-50" />
                </div>
                <div className="w-100 d-block d-md-none"></div>
                <div className="col text-center mt-3 d-flex flex-column justify-content-center">
                    <h5 className="mt-4">Descripción</h5>
                    <p className="lh-base">{description}</p>
                    <h2>${price}</h2>
                    <ItemCount initial={1} onAdd={handleAdd} stock={stockAmount} />
                    <RatingView ratingValue={rating} />
                    <b className="text-muted text-capitalize">Categoría: {category}</b>

                </div>
            </div>
        </div>
    )
}

export default ItemDetail;