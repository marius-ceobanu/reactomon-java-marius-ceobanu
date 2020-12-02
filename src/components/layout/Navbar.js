import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

function Navbar() {
    const [theme, setTheme] = useContext(ThemeContext);

    const checked = theme==='#F8F8FF' ? false : true;

    const toggleTheme = () => {
        setTheme(theme==='#F8F8FF'?'#2F4F4F':'#F8F8FF');
        console.log("toggle: "+localStorage.getItem('theme'));
        console.log("theme: "+theme);
    };

    return (
        <Nav variant="pills" defaultActiveKey="/pokemons" style={navStyle} className="pt-5">
            <Nav.Item className="pr-5">
                <Nav.Link as={Link} to="/pokemons" eventKey="/pokemons">Pokemons</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/types" eventKey="/types">Types</Nav.Link>
            </Nav.Item>
            <div className="custom-control custom-switch" style={{ marginLeft: '250px', fontSize: 'large' }}>
                <input type="checkbox" className="custom-control-input" id="darkSwitch" onChange={e => toggleTheme()} checked={checked}></input>
                <label className="custom-control-label" htmlFor="darkSwitch">🌓</label>
            </div>
        </Nav>
    );
}

const navStyle = {
    fontFamily: 'Impact, Charcoal, sans-serif',
    marginLeft: '430px'
}

export default Navbar;
