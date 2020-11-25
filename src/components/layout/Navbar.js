import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <Nav variant="pills" defaultActiveKey="/pokemons" style={navStyle} className="pt-5">
            <Nav.Item className="pr-5">
                <Nav.Link as={Link} to="/pokemons" eventKey="/pokemons">Pokemons</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/types" eventKey="/types">Types</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

const navStyle = {
    fontFamily: 'Impact, Charcoal, sans-serif',
    marginLeft: '430px'
}

export default Navbar;
