import { Component } from "react";
import { Nav, NavDropdown, FormControl, Navbar, Offcanvas, Button, Form  } from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";


class NavBar extends Component {
render(){
    return(
            <Navbar variant="dark" expand={false} className="px-2 mainColors" id="mainNav">
                <div className="d-flex align-items-center justify-content-between w-100">
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                    <Navbar.Brand href="#" className="px-2">Play4Less</Navbar.Brand>
                    <CartWidget />
                </div>
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="mainColors"
            >
            <Offcanvas.Header closeButton >
                <Offcanvas.Title id="offcanvasNavbarLabel">Play4Less</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" className="mainColors">
                <NavDropdown title="Catálogo" id="offcanvasNavbarDropdown" className="mainColors">
                    <NavDropdown.Item href="#action/3.1">Todos los Productos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">PC</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">PlayStation</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Xbox</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2" className="mainColors">Carrito</Nav.Link>
                </Nav>
                <Form className="d-flex mt-2">
                <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Buscar"
                />
                <Button variant="outline-light">Buscar</Button>
                </Form>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
        );}

    }
    export default NavBar;


