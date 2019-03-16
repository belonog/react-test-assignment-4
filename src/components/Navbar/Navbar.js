import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavbarCustom = () => {
    return (
        <header>
            <Navbar bg="light">
                <Navbar.Brand href="#home">STARNAVI</Navbar.Brand>
            </Navbar>
        </header>
    );
};

export default React.memo(NavbarCustom);
