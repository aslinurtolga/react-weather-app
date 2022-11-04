import React from "react";
import { BsCloudMoonFill } from "react-icons/bs";

const Header = () => {
  return (
    <section className="top-banner">
      <div className="container">
        <center>
          <BsCloudMoonFill size="34px" />
          <h1 className="heading">Weather App</h1>
        </center>
      </div>
    </section>
  );
};

export default Header;
