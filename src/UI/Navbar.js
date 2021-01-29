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
          <Link to="/">voice4rural</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/jobs">Jobs</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/vaccine">Vaccine</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">News</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/market">Market</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">Crop</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbarr;
