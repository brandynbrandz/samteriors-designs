import React from "react";

function FeatureItem(props) {
  return (
    <div className="col-md-3">
      <div className="icon-box-item">
        <div className="icon-box__icon">
          <img
            src={process.env.PUBLIC_URL + ("/assets/img/" + props.img)}
            alt="Businex-Feature"
          />
        </div>
        <div className="icon-box__info">
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureItem;
