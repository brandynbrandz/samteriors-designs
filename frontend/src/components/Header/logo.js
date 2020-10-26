import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div className="logo-area">
        <a href="/">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/logo.svg"}
            alt="brandz-interior-Logo"
          />
        </a>
      </div>
    );
  }
}

export default Logo;
