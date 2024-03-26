import React from "react";
import "./Mainhead.css";

const Mainhead = () => {
  return (
    <div className="xuv-mainhead">
      <div>
        <img
          className="logo"
          src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/logo/mahindra-new-logo.png?h=138&w=240&rev=3bfdf2f090074b88bc1a9b9d94de952f&extension=webp"
        ></img>
      </div>

      <div className="main-login">
        <a href="#">Test Drive</a>
        <a href="#">Locate Us</a>
        <a href="#">LogIn</a>
      </div>
    </div>
  );
};

export default Mainhead;
