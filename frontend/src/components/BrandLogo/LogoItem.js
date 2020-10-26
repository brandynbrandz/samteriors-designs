import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/brand-logo/01.png";

function LogoItem(props) {
  return (
    <div className="brand-logo-item">
      <Link to={`${process.env.PUBLIC_URL + props.URL}`}>
        <img
          //   src={('../../assets/img/' + props.logoSrc}
          src={logo}
          alt="Brandz-interior-Logo"
        />
      </Link>
    </div>
  );
}

export default LogoItem;
