import { NavLink, Badge } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs"
import { useCart } from '../../../contexts/CartContext';

    export default function CartWidget(){
    
        const {cart} = useCart();
        let cartItemCounter = 0;
        cart.map(item => cartItemCounter += item.quantity);

        return(
            <div>
                <NavLink><BsFillCartFill style={{fontSize:25}}/></NavLink>
                <Badge bg="danger" id="cartCounter">{cartItemCounter}</Badge>
            </div>
        )
    }