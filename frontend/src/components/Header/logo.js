import React from "react";
import logo from "../../assets/img/logo.svg";

const logo = () => {
  return (
    <div className="logo-area">
      <a href="/">
        <img src={logo} alt="Brandz-interior-Logo" />
      </a>
    </div>
  );
};

export default logo;
