import { Component } from 'react';
import { NavLink, Badge } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs"

class CartWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItemCounter : 1
        }
    }
    render() {
        const {cartItemCounter} = this.state;
        return(
            <div>
                <NavLink href="#action"><BsFillCartFill style={{fontSize:25}}/></NavLink>
                <Badge bg="danger" id="cartCounter">{cartItemCounter}</Badge>
            </div>
        )
    }
}
        
export default CartWidget;
    