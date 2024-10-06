import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import "./Navvbar.css";


const Navvbar = () => {
  return (
    <Navbar bg="black" expand="lg"variant="dark" className="navbar fixed-top navbar-custom" >
      <Container>
        <Navbar.Brand href="/" className="flex items-center">
  <img alt="" src="/logo.webp" className="mr-3 h-6 sm:h-9" />
  <span className="self-center text-xl font-semibold text-white">
    Cosmic Explorer
  </span>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Planets" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Mercury</NavDropdown.Item>
              <NavDropdown.Item href="#">Venus</NavDropdown.Item>
              <NavDropdown.Item href="#">Earth</NavDropdown.Item>
              <NavDropdown.Item href="#">Mars</NavDropdown.Item>
              <NavDropdown.Item href="#">Jupiter</NavDropdown.Item>
              <NavDropdown.Item href="#">Saturn</NavDropdown.Item>
              <NavDropdown.Item href="#">Uranus</NavDropdown.Item>
              <NavDropdown.Item href="#">Neptune</NavDropdown.Item>
            </NavDropdown>
            {/*<NavDropdown title="Planets" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/mercury">Mercury</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/venus">Venus</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/earth">Earth</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mars">Mars</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jupiter">Jupiter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/saturn">Saturn</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/uranus">Uranus</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/neptune">Neptune</NavDropdown.Item>
            </NavDropdown>*/}
            <NavDropdown title="Asteroids" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">1</NavDropdown.Item>
              <NavDropdown.Item href="#">2</NavDropdown.Item>
              <NavDropdown.Item href="#">3</NavDropdown.Item>
              <NavDropdown.Item href="#">4</NavDropdown.Item>
              <NavDropdown.Item href="#">5</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Comets" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">1</NavDropdown.Item>
              <NavDropdown.Item href="#">2</NavDropdown.Item>
              <NavDropdown.Item href="#">3</NavDropdown.Item>
              <NavDropdown.Item href="#">4</NavDropdown.Item>
              <NavDropdown.Item href="#">5</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Satellites" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">1</NavDropdown.Item>
              <NavDropdown.Item href="#">2</NavDropdown.Item>
              <NavDropdown.Item href="#">3</NavDropdown.Item>
              <NavDropdown.Item href="#">4</NavDropdown.Item>
              <NavDropdown.Item href="#">5</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navvbar;
