import React from "react";
import "../style/sidebar.css";
import andrew from "../img/img-1.jpg";
import { Nav, Navbar } from "react-bootstrap";


function sidebar() {
  return (
    <>
      {/*is enabled for bigger screen untill hamburger menu media query is triggered */}
      <div class="sidebar">
        <img
          src={andrew}
          className="img-fluid img-profile rounded-circle mb-4 ms-4"
          alt="error"
        />
        <a href="about">About</a>
        <a href="education">Education</a>
        <a href="experience">Experience</a>
        <a href="leadership">Leadership</a>
        <a href="skillsawards">Skills & Awards</a>
        <a href="projects">Projects</a>
       
      </div>

       {/*disappears when screen is small and enable hamburger menu*/}
      <div class="menutoggle">
        <Navbar collapseOnSelect expand="lg" className = "navbar-color" variant="dark">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className = "text-dark ps-2 square border-bottom border-dark" href="about">About</Nav.Link>
              <Nav.Link className = "text-dark ps-2 square border-bottom border-dark" href="education">Education</Nav.Link>
              <Nav.Link className = "text-dark ps-2 square border-bottom border-dark" href="experience">Experience</Nav.Link>
              <Nav.Link className = "text-dark ps-2 square border-bottom border-dark" href="leadership">Leadership</Nav.Link>
              <Nav.Link className = "text-dark ps-2 square border-bottom border-dark" href="skillsawards">Skills & Awards</Nav.Link>
              <Nav.Link className = "text-dark ps-2" href="projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default sidebar;
