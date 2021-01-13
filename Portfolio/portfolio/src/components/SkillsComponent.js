import React from "react";
import TecSkills from "../pages/skills/skills.component"
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Experience from "../pages/experience/experience.component";
import Slide from "react-reveal/Slide";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';
const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
    font-family: 'Times New Roman', Times, serif;
  }
  div {
    color:aqua;

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage className="tittle">
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          <br />
          <span>
          <Zoom right opposite>
            <strong>Skills</strong>
           </Zoom> 
          </span>
        </div>
        <br />
      </div>
    </div>
  </MyTitleMessage>
);

const Skills= () => {
    return (
      <div>
      <TitleMessage />
      <div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TecSkills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
    </div>
    </div>
    );
  };
  
  export default Skills;