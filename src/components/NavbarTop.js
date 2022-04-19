import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavbarTop() {
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">TIME // FLOW</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/todos">TO DO'S</Nav.Link>
              <NavDropdown title="TEAMS" id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">My Teams</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Team ToDo's
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
