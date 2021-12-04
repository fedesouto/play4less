import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail';
import { Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import { getDoc, getFirestore, doc } from '@firebase/firestore';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {itemID} = useParams()
    console.log(itemID)
    
    
    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db, "items",itemID)
        getDoc(docRef).then(snapshot =>{
            if(snapshot.exists()){
                setItem(snapshot.data())
            }
        }
        )

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