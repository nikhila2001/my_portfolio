import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HouseDoor } from "react-bootstrap-icons";
import { Award } from "react-bootstrap-icons";
import { LightningCharge } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { CreditCard2Front } from "react-bootstrap-icons";

function Navigation() {
  const [expanded,setExpanded] = useState(false);
  return (
    
 <Navbar fixed="top"  expand="lg" expanded={expanded} className="header " >
    <Navbar.Brand href="#home" className="ms-3 fs-2 fw-bold" style={{color:"#468FAF"}}> NS</Navbar.Brand>
      <Navbar.Toggle className="me-3" onClick={() => setExpanded(!expanded)
      } aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav onClick={() => setExpanded(false)} className="ms-auto">
          <Nav.Link className=" mx-3 custom-nav-item fs-5" as={Link} to="/"><HouseDoor/> Home</Nav.Link>
          <Nav.Link className=" mx-3 custom-nav-item fs-5" as={Link} to="/projects"><CreditCard2Front/> Projects</Nav.Link>
          <Nav.Link className=" mx-3 custom-nav-item fs-5" as={Link} to="/technologies"><LightningCharge/> Technologies</Nav.Link>
          <Nav.Link className=" mx-3 custom-nav-item fs-5" as={Link} to="/education"><Award/> Education</Nav.Link>
          <Nav.Link className=" mx-3 custom-nav-item fs-5" as={Link} to="/contact"><Envelope/> Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
   
  );
}

export default Navigation;
