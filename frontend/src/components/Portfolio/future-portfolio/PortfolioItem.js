import React from "react";
import styles from "./Portfolio2.module.scss";
import { Link } from "react-router-dom";

function Port(props) {
  const portfolioURL = `/portfolio/${props.title
    .split(" ")
    .join("-")
    .toLowerCase()}?id=${props.id}`;
  return (
    <>
      <div className={styles.item}>
        <img
          className="item-container rounded"
          src={process.env.PUBLIC_URL + ("/assets/img/" + props.image)}
          alt="interior-works"
        />
        <div className={styles.project_description}>
          <div className="item-caption">
            <Link to={`${process.env.PUBLIC_URL + portfolioURL}`}>
              <h3>{props.title}</h3>
            </Link>
            <p className="text-primary">{props.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Port;
