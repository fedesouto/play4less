import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList';
import { getAllProducts } from '../../config/firebase/firestoreService';


function ItemListContainer({ name, setCurrentItem }) {

    const { categoryID } = useParams();
    const [items, setItems] = useState([])

    useEffect(() => {
        getAllProducts(setItems, categoryID)
    }, [categoryID])


    return (
        <div className="container-fluid pt-3 text-center">
            <h2 className="display-5">{name ? `¡${name}, bienvenido  a Play4Less!` : "Inicia sesión para continuar."}</h2>
            <ItemList items={items} setCurrentItem={setCurrentItem} />
        </div>
    );
}


export default ItemListContainer;