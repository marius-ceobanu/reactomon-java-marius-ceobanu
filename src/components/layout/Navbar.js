import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Badge } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { PokeBallContext } from "../PokeBallContext";


function Navbar() {
    // eslint-disable-next-line no-unused-vars
    const [pokeBall, catchPokemon] = useContext(PokeBallContext);
    const [theme, setTheme] = useContext(ThemeContext);

    const checked = theme !== '#E0FFFF';

    const toggleTheme = () => {
        setTheme(theme==='#E0FFFF'?'#2F4F4F':'#E0FFFF');
    };

    return (
        <Nav variant="pills" defaultActiveKey="/pokemons" style={navStyle} className="pt-5">
            <Nav.Item className="pr-5">
                <Nav.Link as={Link} to="/pokemons" eventKey="/pokemons">Pokemons</Nav.Link>
            </Nav.Item>
            <Nav.Item className="pr-0">
                <Nav.Link as={Link} to="/types" eventKey="/types">Types</Nav.Link>
            </Nav.Item>
            <Nav.Item className="pl-5">
                <Nav.Link as={Link} to="/my_pokemons" eventKey="/my_pokemons">
                    <img alt="catch pokemons" src="https://img.icons8.com/color/36/000000/pokebag.png"/>
                    <Badge>{pokeBall.length}</Badge>
                </Nav.Link>
            </Nav.Item>
            <div className="custom-control custom-switch" style={{ marginLeft: '160px', fontSize: 'large' }}>
                <input type="checkbox" className="custom-control-input" id="darkSwitch" onChange={e => toggleTheme()} checked={checked}/>
                <label className="custom-control-label" htmlFor="darkSwitch">🌓</label>
            </div>
        </Nav>
    );
}

const navStyle = {
    fontFamily: 'Impact, Charcoal, sans-serif',
    marginLeft: '400px'
}

export default Navbar;
