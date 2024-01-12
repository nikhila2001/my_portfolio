import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  const [expanded,setExpanded] = useState(false);
  return (
    
 <Navbar fixed="top"  expand="lg" expanded={expanded} className="header " >
    <Navbar.Brand href="#home" className="ms-3 fs-2" style={{color:"#468FAF"}}>NS</Navbar.Brand>
      <Navbar.Toggle className="me-3" onClick={() => setExpanded(!expanded)
      } aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav onClick={() => setExpanded(false)} className="ms-auto">
          <Nav.Link className=" mx-3 custom-nav-item fs-5" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className=" mx-3 custom-nav-item fs-5" as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link className=" mx-3 custom-nav-item fs-5" as={Link} to="/technologies">Technologies</Nav.Link>
          <Nav.Link className=" mx-3 custom-nav-item fs-5" as={Link} to="/education">Education</Nav.Link>
          <Nav.Link className=" mx-3 custom-nav-item fs-5" as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
   
  );
}

export default Navigation;
