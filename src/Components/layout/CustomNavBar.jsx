import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function CustomNavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            JsonForm Poc
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/createForm" className="nav-link"> Criar Formulário </Link>
            <Link to="/fillForm" className="nav-link"> Preencher Formulário </Link>
            <Link to="/viewForm" className="nav-link"> Ver Formulários </Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavBar;
