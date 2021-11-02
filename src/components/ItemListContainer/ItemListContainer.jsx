import React from 'react';
const photos = require('./photosPlaceholder.json');

function ItemListContainer (props) {

        const {name} = props;        
        let welcomeMessage;
        name ? welcomeMessage = `¡${name}, bienvenido  a Play4Less!` : welcomeMessage = "Inicia sesión para continuar.";

        const album = [];
        photos.map(x => {
            album.push(
                <div className="d-flex flex-column">
                    <img src={x.url} className="imgCatalogo"/>
                    <strong>{x.id}</strong>
                </div>
            )
        })

        return ( 
            <div className="container-fluid pt-3 text-center">
                <h2 className="display-5">{welcomeMessage}</h2>
                <div className="container-fluid flex-wrap catalogo mt-3">{album}</div>
            </div>
         );
    }

 
export default ItemListContainer;