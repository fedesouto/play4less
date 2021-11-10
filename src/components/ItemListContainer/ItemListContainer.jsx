import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import ItemCount from './ItemCount/ItemCount';
const photos = require('./photosPlaceholder.json');

function ItemListContainer ({name}) {
    
        const [stock, setStock] = useState(10);
        const [cartItems, setCartItems] = useState(0)

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
            <div className="container-fluid pt-3 text-center">
                <h2 className="display-5">{name ? `¡${name}, bienvenido  a Play4Less!` : "Inicia sesión para continuar."}</h2>
                <div className="container-fluid flex-wrap catalogo mt-3">
                    
                        <div className="d-flex flex-column" key={photos[0].id}>
                            <img src={photos[0].url} className="imgCatalogo" alt={photos[0].title}/>
                            <strong>{photos[0].id}</strong>
                            <ItemCount initial={1} stock={stock} onAdd={handleAdd}/>
                        </div>
                </div>
            </div>
         );
    }

 
export default ItemListContainer;