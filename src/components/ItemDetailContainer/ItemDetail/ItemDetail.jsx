import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { RatingView } from "react-simple-star-rating";
import { useCart } from "../../../contexts/CartContext";
import { useEffect } from "react";

const ItemDetail = ({ item }) => {
  const { title, price, description, category, image, rating, stock } = item;
  const { itemID } = useParams();

  const { cart, addItem } = useCart();
  const [stockAmount, setStockAmount] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const exists = cart.findIndex((element) => element.item.id === itemID);

    setStockAmount(stock - (cart[exists]?.quantity || 0));
  }, [itemID]);

  //ItemCount onAdd
  const handleAdd = (quantity) => {
    if (quantity <= stockAmount) {
      addItem({ item, quantity });
      setAdded(!added);
    } else if (stock === 0) {
      alert("No hay productos disponibles.");
    } else alert(`Solo hay ${stock} productos disponibles.`);
  };

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
          {!stockAmount && <b className="text-danger mb-2">Fuera de stock</b>}
          {!added ? (
            <ItemCount initial={1} onAdd={handleAdd} stock={stockAmount} />
          ) : (
            <Link to="/cart">
              <button className="btn btn-success my-3">Terminar compra</button>
            </Link>
          )}
          <RatingView ratingValue={rating} />
          <b className="text-muted text-capitalize">Categoría: {category}</b>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
