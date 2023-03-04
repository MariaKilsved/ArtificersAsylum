import React, { useState } from 'react';
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Menu() {
  return (
    <>
        <Navbar fixed="top" bg="primary" variant="dark" expand="lg" className="mb-3 text-primary bg-primary">
          <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              scroll="true"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">                  
                <NavDropdown
                    title="Generators"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                    menuVariant="dark"
                  >
                    <Link href="/beings" className='dropdown-item'>Beings</Link>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link href="/" className='nav-link'>Home</Link>
                  <Link href="/about" className='nav-link'>About</Link>



                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Menu;