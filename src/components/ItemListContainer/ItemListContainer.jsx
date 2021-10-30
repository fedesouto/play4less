import { Component } from 'react';
const photos = require('./photosPlaceholder.json');

class ItemListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = photos;
    }
    render() { 
        let album = [];
        this.state.map(x => {
            album.push(
                <div className="d-flex flex-column">
                    <img src={x.url} className="imgCatalogo"/>
                    <strong>{x.id}</strong>
                </div>
            )
        })
        return ( 
            <div className="container-fluid pt-3 text-center">
                <h2 className="display-5">¡Bienvenido a Play4Less!</h2>
                <div className="container-fluid flex-wrap catalogo mt-3">{album}</div>
            </div>
         );
    }
}
 
export default ItemListContainer;