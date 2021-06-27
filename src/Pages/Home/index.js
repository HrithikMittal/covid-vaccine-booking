import React from "react";

import "./style.css";
import LeftSideBarImage from "../../assets/left-banner.jpeg";
import Forms from "./Form";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div className="homeContainer">
        <div className="homeContainerLeft">
          <img src={LeftSideBarImage} width="100%" alt="covid-vaccination" />
        </div>
        <div className="homeContainerRight">
          <Forms />
        </div>
      </div>
    </>
  );
};

export default Home;
