import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button } from "react-bootstrap";
import "./my-navbar.styles.css";

class MyNavbar extends Component {
  constructor(props) {
    super(props);

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor =" rgb(10, 4, 99)";
      } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
      }
    }
  }


  render() {
    return (
      <div >
        <Navbar
          fixed="top" 
          variant="dark"
          expand="md"
          id="navbar"
        >
                 <Navbar.Brand><Nav.Link className="skilllogos" href="/#/home"><span className ="fa fa-home fa-lg"></span></Nav.Link></Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ">
              <Nav.Link className="skilllogo" href="/#/home">Home</Nav.Link>
                  <Nav.Link className="skilllogo" href="/#/skills">Skills</Nav.Link>  
                  <Nav.Link className="skilllogo" href="/#/projects">Projects</Nav.Link>  
                  <Nav.Link className="skilllogo" href="https://drive.google.com/file/d/1xi9HnXnFqgH3IygtzbuYnOx1l-ZXM2hY/view?usp=sharing ">Resume</Nav.Link>   
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;

