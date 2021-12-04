import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import { getFirestore, getDocs, collection } from 'firebase/firestore';


function ItemListContainer({ name, setCurrentItem }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'items')
        getDocs(itemCollection).then(snapshot => {
            if(snapshot) {
                setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            }
        }, [])
    }
        ,)

    return (
        <div className="container-fluid pt-3 text-center">
            <h2 className="display-5">{name ? `¡${name}, bienvenido  a Play4Less!` : "Inicia sesión para continuar."}</h2>
            <ItemList items={items} setCurrentItem={setCurrentItem} />
        </div>
    );
}


export default ItemListContainer;