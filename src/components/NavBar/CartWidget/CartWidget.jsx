import { NavLink, Badge } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs"
import { Link } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';

    export default function CartWidget(){
    
        const {cart} = useCart();
        let cartItemCounter = 0;
        cart.map(item => cartItemCounter += item.quantity);

        return(
            <div>
                <NavLink><Link to="/cart"><BsFillCartFill style={{fontSize:25, color: "whitesmoke"}}/></Link></NavLink>
                <Badge bg="danger" id="cartCounter">{cartItemCounter}</Badge>
            </div>
        )
    }