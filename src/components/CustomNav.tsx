import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CustomNav = () => {
  const location = useLocation();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Space News</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className={location.pathname === "/" ? "fw-bold" : ""}>
              Home
            </Link>
            <Link to="#">Features</Link>
            <Link to="#">About</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default CustomNav;
