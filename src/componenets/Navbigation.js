import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {

    Link
} from "react-router-dom";
const Navbigation = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='text-white'>Form Builder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='fs-5 text-decoration-none text-white' to='/home'>Home</Link>
                            <Link className='fs-5 text-decoration-none mx-3 text-white' to='/form'>GenerateForm</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbigation;