import React from "react";

const Thumbnail = ({ imgSrc, classes }) => {
  return (
    <figure className={classes}>
      <img src={imgSrc} alt="Brandz-Interior" />
    </figure>
  );
};

export default Thumbnail;
