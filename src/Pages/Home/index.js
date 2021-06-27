import React from "react";

import "./style.css";
import Forms from "./Form";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="pageTitle">Check Covid-19 Vaccine Slots</div>
        <div className="homeContainerRight">
          <Forms />
        </div>
      </div>
    </>
  );
};

export default Home;
