import React from "react";
import Slide2 from "../../assets/videos.mp4";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <video autoPlay loop muted
      style={{
        height: "119.5vh",
        objectFit: "cover",
        width: "100%",

      }}>
          <source  src={Slide2} type="video/mp4" />
       </video>   
    </div>
  );
};


export default MyCarousal;
