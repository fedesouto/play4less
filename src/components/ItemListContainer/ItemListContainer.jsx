import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
const itemsJSON = require('./products.json');

const itemPromise = (mockURL) => {
    return new Promise((resolve, reject) => {
        resolve({
            status: 'ok',
            response: mockURL
        })
    })
}

function ItemListContainer ({name}) {
    
        const [stock, setStock] = useState(10);
        const [cartItems, setCartItems] = useState(0)
        const [items, setItems] = useState([])

        const getItems = async () => {
            const res = await itemPromise(itemsJSON);
            const itemsData = await res.response;
            setItems(itemsData);

        }

        /* ItemCount onAdd
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
        } */

        useEffect( () => {
          setTimeout(() => {
              getItems();
          }, 3000); }
        ,)

        return ( 
            <div className="container-fluid pt-3 text-center">
                <h2 className="display-5">{name ? `¡${name}, bienvenido  a Play4Less!` : "Inicia sesión para continuar."}</h2>
                <ItemList items={items}/>
            </div>
         );
    }

 
export default ItemListContainer;