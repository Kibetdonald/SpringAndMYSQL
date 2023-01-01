import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="cyan" expand="lg" style={{borderBottom: "1px solid #ddd"}}>
      <Container fluid>
        <Navbar.Brand href="#">Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">View Users</Nav.Link>
            <NavDropdown title="Reports" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#report1">Report 1</NavDropdown.Item>
              <NavDropdown.Item href="#report2">Report 2</NavDropdown.Item>
              <NavDropdown.Item href="#report3">Report 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/add">Add Users</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
