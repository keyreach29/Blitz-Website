import React from 'react';
import { Container, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>BLITZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="#scholarships" className="nav-link">
                Scholarships
              </Link>
              <Link to="#ieltsTraining" className="nav-link">
                IELTS Training
              </Link>
              <Link to="#ieltsBooking" className="nav-link">
                Book IELTS
              </Link>
              <Link to="#schoolApplications" className="nav-link">
                School Applications
              </Link>
              <Link to="#jobApplications" className="nav-link">
                Job Applications
              </Link>
              <Link to="#contact" className="nav-link">
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;