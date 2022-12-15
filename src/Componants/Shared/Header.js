import React from 'react';
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='mx-5'>
            <Navbar.Brand href="#home"><h3 style={{ color: 'blue' }}>Faucets</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ms-auto ">
                    <NavDropdown title="Ethereum Kovan" id="basic-nav-dropdown" className='border border-secondary'>
                        <NavDropdown.Item href="#action/3.1">Arbitrum Rinkeby</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Avalanche Fuji</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">BNB Chain Testnet</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Ethereum Rinkeby</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Fantom Testnet</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">Harmony Testnet</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.7">POA Network Sokol</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.">Polygon Mumbai</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;