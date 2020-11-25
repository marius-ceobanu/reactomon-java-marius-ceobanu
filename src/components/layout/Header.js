import React from 'react';
import pokeLogo from '../../img/pokeLogo.png';
import Navbar from "./Navbar";
import { Image } from "react-bootstrap";

function Header() {
    return (
        <header style={headerStyle}>
            <Image src={pokeLogo} fluid />
            <Navbar />
        </header>
    );
}

const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;