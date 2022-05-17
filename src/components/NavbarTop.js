import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavbarTop() {
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Coffee Shop Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/stores">Stores</Nav.Link>
              <Nav.Link href="/employees">Employees</Nav.Link>
              <Nav.Link href="/equipment">Equipment</Nav.Link>
              <Nav.Link href="/vehicles">Vehicles</Nav.Link>

              <NavDropdown title="Sign In" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
