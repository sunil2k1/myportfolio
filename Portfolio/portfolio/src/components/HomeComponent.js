import React from "react";
import TitleMessage from "./title-message/title-message.component";
import About from "../pages/about/about.component"
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import MyCarousal from "./my-carousal/my-carousal.component"


const Home= () => {
    return (
      <div>
      <MyCarousal />
      <TitleMessage />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("../assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
              <Fade duration={500}>
                <About />
              </Fade>
          </div>
        </Parallax>
      </div>
      </div>
    );
  };
  
  export default Home;