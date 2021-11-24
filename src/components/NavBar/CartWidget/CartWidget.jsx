import React from 'react';
import { NavLink, Badge } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs"

    export default function CartWidget({counter : cartItemCounter}){
         
        return(
            <div>
                <NavLink><BsFillCartFill style={{fontSize:25}}/></NavLink>
                <Badge bg="danger" id="cartCounter">{cartItemCounter}</Badge>
            </div>
        )
    }