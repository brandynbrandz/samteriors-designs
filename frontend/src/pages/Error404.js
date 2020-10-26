import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div style={styles}>
      <div>
        <img src={process.env.PUBLIC_URL + "/assets/img/404.png"} alt="404" />
        <Link
          to="/"
          className={"btn-brand"}
          style={{ display: "inline-Block", marginTop: 30 }}
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

const styles = {
  maxWidth: 500,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  textAlign: "center",
  padding: 30,
};

export default Error404;
