import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function Custom_NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            JsonForm Poc
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/form" className="nav-link"> Formulário </Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Custom_NavBar;
