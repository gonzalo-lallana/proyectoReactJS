// import Navbar from "./navbar"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartWidget';


function Header() {
    return (
    <Navbar id='header' bg="dark" expand="lg">
        <Container>
            <Navbar.Brand id='header__brand' href="/">Crazy<span id='brand4'>4</span>Boxing</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link id='header__link' href='/productos/guantes' variant='dark'>Guantes</Nav.Link>
                    <Nav.Link id='header__link' href='/productos/cascos' variant='dark'>Cascos</Nav.Link>
                    <Nav.Link id='header__link' href='/productos/accesorios' variant='dark'>Accesorios</Nav.Link>
                    <Nav.Link id='header__link' href='/productos/entrenamiento' variant='dark'>Entrenamiento</Nav.Link>
                    <CartWidget></CartWidget>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Header;