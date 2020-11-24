import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <Nav variant="pills" defaultActiveKey="/pokemons">
            <Nav.Item>
                <Nav.Link as={Link} to="/pokemons" eventKey="/pokemons">Pokemons</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/types" eventKey="/types">Types</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;
