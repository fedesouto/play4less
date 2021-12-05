import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { getAllProducts } from '../../config/firebase/firestoreService';


function ItemListContainer({ name, setCurrentItem }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        getAllProducts(setItems)
        }, [])
    

    return (
        <div className="container-fluid pt-3 text-center">
            <h2 className="display-5">{name ? `¡${name}, bienvenido  a Play4Less!` : "Inicia sesión para continuar."}</h2>
            <ItemList items={items} setCurrentItem={setCurrentItem} />
        </div>
    );
}


export default ItemListContainer;