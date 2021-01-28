import React from "react";
import { Navbar, Nav } from "react-bootstrap";

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
        <Navbar.Brand href="/">voice4rural</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/jobs">Jobs</Nav.Link>
            <Nav.Link href="/vaccine">Vaccine</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/market">Market</Nav.Link>
            <Nav.Link href="/crop">Crop</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Social</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbarr;
