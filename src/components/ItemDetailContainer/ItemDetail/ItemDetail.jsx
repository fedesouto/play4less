import React, { Component } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { RatingView } from 'react-simple-star-rating'


const ItemDetail = ({item}) =>{
    const {id, title, price, description, category, image, rating } = item;
    const {rate} = rating
    return (
        <div className="container">
            <h1 className="display-6 text-center my-4">{title}</h1>  
            <div className="row">
                <div className="col bg-white d-flex justify-content-center border">
                    <img src={image} alt={title} className="img-fluid w-75"/>
                </div>
                <div class="w-100 d-block d-md-none"></div>
                <div className="col text-center mt-3 d-flex flex-column justify-content-center">
                    <h5 className="mt-4">Descripción</h5>
                    <p className="lh-base">{description}</p>
                    <h2>${price}</h2>
                    <ItemCount initial={1} />
                    <RatingView ratingValue={rate} />
                    <b className="text-muted text-capitalize">Categoría: {category}</b>

                </div>
            </div>
        </div>
    ) 
}

export default ItemDetail;