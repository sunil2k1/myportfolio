import React from "react";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";
import TimeLine from "./projects-timeline/projects-timeline.component";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';

const Skills= () => {
    return (
      <div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
    </div>
    );
  };
  
  export default Skills;