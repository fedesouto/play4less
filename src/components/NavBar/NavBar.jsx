import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown, FormControl, Navbar, Offcanvas, Button, Form  } from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";
import { BsXCircleFill } from 'react-icons/bs'


function NavBar(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return(
            <Navbar variant="dark" expand={false} className="px-2 mainColors" id="mainNav">
                <div className="d-flex align-items-center justify-content-between w-100">
                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleShow}/>
                    <Navbar.Brand className="px-2"><Link to="/" className="navbar-brand">Play4Less</Link></Navbar.Brand>
                    <CartWidget counter={props.counter}/>
                </div>
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="mainColors"
            show={show}
            backdrop={true}
            onHide={handleClose}
            >
            <Offcanvas.Header>
                <Offcanvas.Title id="offcanvasNavbarLabel">Play4Less</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                <NavDropdown title="Catálogo" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item><Link to="/" className="nav-link-dark" onClick={handleClose}>Todos los Productos</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>PC</NavDropdown.Item>
                    <NavDropdown.Item>PlayStation</NavDropdown.Item>
                    <NavDropdown.Item>Xbox</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to="/" className="nav-link" onClick={handleClose}>Carrito</Link></Nav.Link>
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
                <div id="navClose" onClick={handleClose}>
                    <BsXCircleFill />
                </div>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
        );}
    export default NavBar;