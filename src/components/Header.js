import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
      <Button
                href="https://https://github.com/dilnazalban"
                target="_blank"
                className="fork-btn-inner"
              >
                My Git
              </Button>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="footer-copywright" defaultActiveKey="#home">
            <Nav.Item>
              <ScrollLink
                className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  updateExpanded(false);
                  setActiveSection('home');
                }}
              >
                Home
              </ScrollLink>
            </Nav.Item>
            <Nav.Item>
              <ScrollLink
                className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  updateExpanded(false);
                  setActiveSection('about');
                }}
              >
                About
              </ScrollLink>
            </Nav.Item>
            <Nav.Item>
              <ScrollLink
                className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  updateExpanded(false);
                  setActiveSection('projects');
                }}
              >
                Projects
              </ScrollLink>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
