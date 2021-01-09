import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logow.png";
import "./my-navbar.styles.css";
import projects from "../../assets/project.svg"
const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="https://sunil2k1.github.io/myportfolio/#/home">        
            <Navbar.Collapse id="basic-navbar-nav">
                 <img className="logo" src={Logo} alt="" />
                  <Nav.Link href="https://sunil2k1.github.io/myportfolio/#/home"><span className ="fa fa-home fa-lg"></span></Nav.Link>
                  <Nav.Link className="skilllogos" href="https://sunil2k1.github.io/myportfolio/#/skills">Skills</Nav.Link>  
                  <Nav.Link href="https://sunil2k1.github.io/myportfolio/#/projects">Projects</Nav.Link>        
                  <a href="https://drive.google.com/file/d/1xi9HnXnFqgH3IygtzbuYnOx1l-ZXM2hY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                       Resume
                      </Button>
                    </a>
              </Navbar.Collapse>  
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">                           
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
