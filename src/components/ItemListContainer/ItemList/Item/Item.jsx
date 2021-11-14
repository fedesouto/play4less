import React from 'react';
import { Card, Button } from 'react-bootstrap'
const style = {
    width: '18rem',
    height: 500,
    justifyContent: 'space-between',
    margin: '1rem',
}

function Item ({item}) {
    const {image, title, price} = item;
    return(
        <Card style={style}>
        <Card.Img variant="top" src={image} style={{width: 150, maxHeight: 'auto', alignSelf: 'center', margin: 'auto'}}/>
        <Card.Body style={{flex: 0}}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            $ {price}
            </Card.Text>
            <Button className="mainColorButton" size="lg">Ver detalle</Button>
        </Card.Body>
        </Card>
    )
}

export default Item;
