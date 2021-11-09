import React from 'react';
import ItemCount from './ItemCount/ItemCount';
const photos = require('./photosPlaceholder.json');

function ItemListContainer ({name}) {
          
        return ( 
            <div className="container-fluid pt-3 text-center">
                <h2 className="display-5">{name ? `¡${name}, bienvenido  a Play4Less!` : "Inicia sesión para continuar."}</h2>
                <div className="container-fluid flex-wrap catalogo mt-3">
                    {photos.map(({url, id, title}) => {
                        return(
                        <div className="d-flex flex-column" key={id}>
                            <img src={url} className="imgCatalogo" alt={title}/>
                            <strong>{id}</strong>
                            <ItemCount initial="1"/>
                        </div>)})}
                </div>
            </div>
         );
    }

 
export default ItemListContainer;