import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../../assets/images/logo.png'
import FontAwesome from 'react-fontawesome'
// import classes from './Toolbar.css';
const bgStyle = {
    backgroundColor: '#990033'
}

const toolbar = (props) => {
    return (
        <header>
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
            {/* <Navbar collapseOnSelect expand="lg" variant="dark" className={classes.BgMt}> */}
            <Navbar collapseOnSelect expand="lg" variant="dark" style={bgStyle}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Markettable</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> */}
                        <Nav className="ml-auto">
                            <Nav.Link href="#blog"><FontAwesome name='rss' /> Blog</Nav.Link>
                            <Nav.Link href="#signin"><FontAwesome name='sign-in' /> Login</Nav.Link>
                            <Nav.Link href="#cart"><FontAwesome name='shopping-cart' /> Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default toolbar