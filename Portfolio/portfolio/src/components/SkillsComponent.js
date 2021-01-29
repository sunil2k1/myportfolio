import React from "react";
import TecSkills from "../pages/skills/skills.component"
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Experience from "../pages/experience/experience.component";
import Slide from "react-reveal/Slide";
import Image from "react-bootstrap/Image";

const Skills= () => {
    return (
      <div>
         
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