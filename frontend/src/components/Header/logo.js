import React, { Component } from "react";
import logo from "../../assets/img/logo.svg";

class Logo extends Component {
  render() {
    return (
      <div className="logo-area">
        <a href="/">
          <img src={logo} alt="brandz-interior-Logo" />
        </a>
      </div>
    );
  }
}

export default Logo;
