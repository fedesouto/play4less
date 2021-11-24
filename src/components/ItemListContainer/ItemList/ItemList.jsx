import React from 'react';
import Item from './Item/Item';
import { Skeleton } from '@mui/material';

function ItemList({items, setCurrentItem}) {
 return(               
    <div className="container-fluid flex-wrap catalogo mt-5">
        {
        items.length !== 0 ?
        items.map(item => {
            return <Item item={item} key={item.id} setCurrentItem={setCurrentItem}/>
        }):
        <Skeleton variant="rectangular" height='25rem' width="80%"/>
        }
    </div>)

}

export default ItemList;