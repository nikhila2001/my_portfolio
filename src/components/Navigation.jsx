import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation  } from "react-router-dom";
import { HouseDoor } from "react-bootstrap-icons";
import { Award } from "react-bootstrap-icons";
import { LightningCharge } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { CreditCard2Front } from "react-bootstrap-icons";

function Navigation() {
  const [expanded,setExpanded] = useState(false);
  const location = useLocation();
  return (
    
 <Navbar fixed="top"  expand="lg" expanded={expanded} className="header " >
    <Navbar.Brand href="#home" className="ms-3 fs-2 fw-bold" style={{color:"#468FAF"}}> NS</Navbar.Brand>
      <Navbar.Toggle className="me-3" onClick={() => setExpanded(!expanded)
      } aria-controls="basic-navbar-nav" style={{backgroundColor:"#0077B6"}} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav onClick={() => setExpanded(false)} className="ms-auto">
          <Nav.Link className={`mx-3 custom-nav-item fs-5 ${location.pathname === '/' ? 'active-link' : ''}`} as={Link} to="/"><HouseDoor/> Home</Nav.Link>
          <Nav.Link className={`mx-3 custom-nav-item fs-5 ${location.pathname === '/projects' ? 'active-link' : ''}`} as={Link} to="/projects"><CreditCard2Front/> Projects</Nav.Link>
          <Nav.Link className={`mx-3 custom-nav-item fs-5 ${location.pathname === '/technologies' ? 'active-link' : ''}`} as={Link} to="/technologies"><LightningCharge/> Technologies</Nav.Link>
          <Nav.Link className={`mx-3 custom-nav-item fs-5 ${location.pathname === '/education' ? 'active-link' : ''}`} as={Link} to="/education"><Award/> Education</Nav.Link>
          <Nav.Link className={`mx-3 custom-nav-item fs-5 ${location.pathname === '/contact' ? 'active-link' : ''}`} as={Link} to="/contact"><Envelope/> Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
   
  );
}

export default Navigation;