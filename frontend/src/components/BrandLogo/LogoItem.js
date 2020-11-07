import React from "react";
// import { Link } from "react-router-dom";

function LogoItem(props) {
  return (
    <div className="brand-logo-item">
      {/* <Link to={`${process.env.PUBLIC_URL + props.URL}`}> */}
      <img
        src={process.env.PUBLIC_URL + "/assets/img/" + props.logoSrc}
        alt="Samterior-Logo"
      />
      {/* </Link> */}
    </div>
  );
}

export default LogoItem;
