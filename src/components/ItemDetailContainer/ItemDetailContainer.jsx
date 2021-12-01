import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail';
import { Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

const itemsJSON = require('../ItemListContainer/products.json');


const itemPromise = (mockURL) => {
    return new Promise((resolve, reject) => {
        resolve({
            status: 'ok',
            response: mockURL
        })
    })
}

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {itemID} = useParams()
    console.log(itemID)
    

    
    const getItemDetail = async (id) => {
        const res = await itemPromise(itemsJSON);
        const items = await res.response;
        const itemDetail = await items.find(item => item.id === id);
        setItem(itemDetail);
    }

    useEffect(() => {
        setTimeout(() => {
            getItemDetail(parseInt(itemID));
        }, 2000)
    }, [])



    return (
        <div className="detail">
            {Object.keys(item).length !== 0 ?
                <Fragment>
                    <ItemDetail item={item} />
                    <button className="btn mainColorButton mt-5"><Link to="/" className="nav-link">Volver atras</Link></button>
                </Fragment>
                : <Fragment>
                    <Skeleton variant="text" height={100} width="100%" className="mt-5" />
                    <Skeleton variant="rectangular" width="100%" height={300} />
                </Fragment>
            }
        </div>
    )

}

export default ItemDetailContainer;