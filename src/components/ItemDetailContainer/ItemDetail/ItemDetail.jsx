import React, { Component, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { RatingView } from 'react-simple-star-rating'


const ItemDetail = ({item}) =>{
    const {id, title, price, description, category, image, rating } = item;
    const {rate} = rating

    const [stock, setStock] = useState(10);
    const [cartItems, setCartItems] = useState(0)

    //ItemCount onAdd
    const handleAdd = (orderedItems) => {
        if(orderedItems <= stock) {
            setStock(stock - orderedItems)
            setCartItems(cartItems + orderedItems)
            alert(`Se agregaron ${orderedItems} productos al carrito.`) 
            }
        else if(stock === 0){
            alert('No hay productos disponibles.')
        }
        else alert(`Solo hay ${stock} productos disponibles.`);
    }


    return (
        <div className="container">
            <h1 className="display-6 text-center my-4">{title}</h1>  
            <div className="row">
                <div className="col bg-white d-flex justify-content-center border">
                    <img src={image} alt={title} className="img-fluid w-50"/>
                </div>
                <div class="w-100 d-block d-md-none"></div>
                <div className="col text-center mt-3 d-flex flex-column justify-content-center">
                    <h5 className="mt-4">Descripción</h5>
                    <p className="lh-base">{description}</p>
                    <h2>${price}</h2>
                    <ItemCount initial={1} onAdd={handleAdd} stock={stock}/>
                    <RatingView ratingValue={rate} />
                    <b className="text-muted text-capitalize">Categoría: {category}</b>

                </div>
            </div>
        </div>
    ) 
}

export default ItemDetail;