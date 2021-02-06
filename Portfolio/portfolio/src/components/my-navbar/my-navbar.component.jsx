import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button } from "react-bootstrap";
import "./my-navbar.styles.css";
import { bubble as Menu } from 'react-burger-menu';
class MyNavbar extends Component {
  constructor() {
    super();

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor =" rgb(10, 4, 99)";
      } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
      }
    }

    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    // the rest is the same...
  
    if (isMobile) {
      return (
        <div >
        <Menu id="navbar">
        <a>
        <Nav.Link className="skilllogo" href="https://sunil2k1.github.io/myportfolio/#/home">Home</Nav.Link>
        </a>
        <a>
        <Nav.Link className="skilllogo" href="https://sunil2k1.github.io/myportfolio/#/skills">Skills</Nav.Link>  
        </a>
        <a >
        <Nav.Link className="skilllogo" href="https://sunil2k1.github.io/myportfolio/#/projects">Projects</Nav.Link>  
        </a>
        <a>
        <Nav.Link className="skilllogo" href="https://drive.google.com/file/d/1xi9HnXnFqgH3IygtzbuYnOx1l-ZXM2hY/view?usp=sharing ">Resume</Nav.Link>   
        </a>
        </Menu>
        </div>
      );
    } else {
      return (
        <div >
        <Navbar
          fixed="top" 
          variant="dark"
          expand="md"
          id="navbar"
        >
                 <Navbar.Brand><Nav.Link className="skilllogos" href="https://sunil2k1.github.io/myportfolio/#/home"><span className ="fa fa-home fa-lg"></span></Nav.Link></Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ">
              <Nav.Link className="skilllogo" href="https://sunil2k1.github.io/myportfolio/#/home">Home</Nav.Link>
                  <Nav.Link className="skilllogo" href="https://sunil2k1.github.io/myportfolio/#/skills">Skills</Nav.Link>  
                  <Nav.Link className="skilllogo" href="https://sunil2k1.github.io/myportfolio/#/projects">Projects</Nav.Link>  
                  <Nav.Link className="skilllogo" href="https://drive.google.com/file/d/1xi9HnXnFqgH3IygtzbuYnOx1l-ZXM2hY/view?usp=sharing ">Resume</Nav.Link>   
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      );
    }
  }
}



 



export default MyNavbar;

