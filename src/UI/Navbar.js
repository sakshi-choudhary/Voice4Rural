import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbarr() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{
          backgroundColor: "#3f51b5",
          boxShadow: "1px 1px 3px #336699",
        }}
      >
        <Navbar.Brand>
          <Link to="/" className="a">
            Voice4Rural
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/jobs" className="a">
                Jobs
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/vaccine" className="a">
                Vaccine
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" className="a">
                News
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/market" className="a">
                Market
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/crop" className="a">
                Crop
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbarr;
