import React from 'react';
import { BsPlusLg, BsDashLg } from 'react-icons/bs'
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';

const ItemCount = ({ initial, stock, onAdd }) => {

    return(
        <Container>
                <InputGroup className="itemCounter">
                    <Button className="mainColorButton">
                        <BsDashLg />
                    </Button>
                    <FormControl type="number" value={initial} className="text-center"/>
                    <Button className="mainColorButton">
                        <BsPlusLg />
                    </Button>
                </InputGroup>
                    <Button className="my-2 mainColorButton" onClick={onAdd}>
                         Agregar al carrito
                    </Button>
        </Container>
    )
}

export default ItemCount;