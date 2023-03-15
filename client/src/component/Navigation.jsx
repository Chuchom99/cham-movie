
import {Navbar, Button, Nav, NavDropdown, Container} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import "./Navigation.css"


function Navigation() {

  return (
      <Navbar  >
        <Container>
          <Navbar.Brand href="#">Cham</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/create">
             <Nav.Link >Create</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Navigation;