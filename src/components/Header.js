import React from "react";

const Header = () => {
  return (
    <section className="top-banner">
      <div className="container">
        <center>
          <img
            src="https://media.giphy.com/media/9G1tb6uVcZ0vJeZSIe/giphy.gif"
            alt="Bank logo"
            className="nav__logo"
            id="logo"
          />
          <h1 className="heading">Weather App</h1>
        </center>
      </div>
    </section>
  );
};

export default Header;
