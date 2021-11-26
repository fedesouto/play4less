import React, { useState } from 'react';
import { BsPlusLg, BsDashLg } from 'react-icons/bs'
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [selectedItems, setSelectedItems] = useState(initial);

    const handlePlus = () => {
        if (selectedItems < stock) {
            setSelectedItems(selectedItems + 1);
        }
        else {
            alert(`Hay ${stock} productos disponibles.`)
        }
    }
    const handleDash = () => {
        if (selectedItems > 1) {
            setSelectedItems(selectedItems - 1);
        }
    }

    return (
        <Container>
            <InputGroup className="itemCounter">
                <Button className="mainColorButton" onClick={handleDash}>
                    <BsDashLg />
                </Button>
                <FormControl className="itemCounter" value={selectedItems} />
                <Button className="mainColorButton" onClick={handlePlus}>
                    <BsPlusLg />
                </Button>
            </InputGroup>
            <Button className="my-2 mainColorButton" onClick={() => onAdd(selectedItems)}>
                Agregar al carrito
            </Button>
        </Container>
    )
}

export default ItemCount;