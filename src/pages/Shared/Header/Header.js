import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthPorvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Navbar
      className="mb-2"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <div>
              {user?.uid ? (
                <>
                  {user?.photoURL ? (
                    <Image
                      style={{ height: "30px" }}
                      roundedCircle
                      className="me-2"
                      src={user.photoURL}
                    ></Image>
                  ) : (
                    <FaUserAlt></FaUserAlt>
                  )}
                  {user.displayName}
                  <Button
                    onClick={handleLogOut}
                    className="ms-2"
                    variant="dark"
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="light">Login</Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="light">Register</Button>
                  </Link>
                </>
              )}
            </div>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
