import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";


const NavBar = () => {


  return (
    <>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Container>
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="src/ImgEnvioos/logo2.jpg"
                width="100"
                height="45"
                className="d-inline-block align-top"
                alt="Envioos"
              />
            </Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-bolder">
              <NavLink to="/" className={"nav-link"}>
                Home
              </NavLink>
              <NavDropdown title="Registrate" id="registrate-dropdown">
                <NavLink to="/registrousuario" className={"nav-link"}>
                  Registrate cómo Usuario
                </NavLink>
                <NavLink to="/registroempleado" className={"nav-link"}>
                  Registrate cómo Empleado
                </NavLink>
                <NavLink  >
                  Inicio de sesión
                </NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default NavBar;
