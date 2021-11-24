import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
const itemsJSON = require('./products.json');

const itemsPromise = (mockURL) => {
    return new Promise((resolve, reject) => {
        resolve({
            status: 'ok',
            response: mockURL
        })
    })
}

function ItemListContainer ({name, setCurrentItem}) {
    
        const [items, setItems] = useState([])

        const getItems = async () => {
            const res = await itemsPromise(itemsJSON);
            const itemsData = await res.response;
            setItems(itemsData);

        }

        useEffect( () => {
          setTimeout(() => {
              getItems();
          }, 2000); }
        ,)

        return ( 
            <div className="container-fluid pt-3 text-center">
                <h2 className="display-5">{name ? `¡${name}, bienvenido  a Play4Less!` : "Inicia sesión para continuar."}</h2>
                <ItemList items={items} setCurrentItem={setCurrentItem}/>
            </div>
         );
    }

 
export default ItemListContainer;