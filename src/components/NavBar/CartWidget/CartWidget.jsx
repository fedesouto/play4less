import { NavLink, Badge } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs"
import { useCart } from '../../../contexts/CartContext';

    export default function CartWidget(){
    
        const {cart} = useCart();
        const cartItemCounter = cart.length;
        return(
            <div>
                <NavLink><BsFillCartFill style={{fontSize:25}}/></NavLink>
                <Badge bg="danger" id="cartCounter">{cartItemCounter}</Badge>
            </div>
        )
    }