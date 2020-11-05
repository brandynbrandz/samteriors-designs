import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <div className="logo-area">
        <Link to={`${process.env.PUBLIC_URL + "/"}`}>
          <img
            src={process.env.PUBLIC_URL + "/assets/img/logo.svg"}
            alt="brandz-interior-Logo"
          />
        </Link>
      </div>
    );
  }
}

export default Logo;
