import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const TopNav = ({ view }) => {
    return(
        <div id='navbar'>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Ven-U</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Events">Events</Nav.Link>
                    <Nav.Link href="#Profiles">Profiles</Nav.Link>
                    <Nav.Link href="#Purchase">Purchase</Nav.Link>
                    <Nav.Link href="#Logout">Logout</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default TopNav;