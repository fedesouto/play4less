import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { Skeleton } from '@mui/material';

const itemsJSON = require('../ItemListContainer/products.json');

//ItemCount onAdd
/* const handleAdd = (orderedItems) => {
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

const itemPromise = (mockURL) => {
    return new Promise((resolve, reject) => {
        resolve({
            status: 'ok',
            response: mockURL
        })
    })
}

const ItemDetailContainer = ({itemId}) => {

    const [item, setItem] = useState({})

    const getItemDetail = async (id) => {
        const res = await itemPromise(itemsJSON);
        const items = await res.response;
        const itemDetail = await items.find(item => item.id === id);
        setItem(itemDetail);
    }

    useEffect(() => {
        setTimeout(() => {
            getItemDetail(itemId);
        }, 2000)
    },[])



    return (
        <div className="detail">
            {Object.keys(item).length !== 0?
            <ItemDetail item={item} />
            :<>
                <Skeleton variant="text" height={100} width="100%" className="mt-5"/>
                <Skeleton variant="rectangular" width="100%" height={300} />
            </> 
            }
        </div>
    )

}

export default ItemDetailContainer;