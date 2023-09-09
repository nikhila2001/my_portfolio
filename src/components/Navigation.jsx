import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  const [expanded,setExpanded] = useState(false);
  return (
    <Navbar  fixed="top"  expand="sm" expanded={expanded} >
      <Navbar.Toggle onClick={() => setExpanded(!expanded)
      } aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav onClick={() => setExpanded(false)} className="mx-auto">
          <Nav.Link className="text-light mx-5 nav-item fs-5" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="text-light mx-5 nav-item fs-5" as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link className="text-light mx-5 nav-item fs-5" as={Link} to="/technologies">Technologies</Nav.Link>
          <Nav.Link className="text-light mx-5 nav-item fs-5" as={Link} to="/education">Education</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
