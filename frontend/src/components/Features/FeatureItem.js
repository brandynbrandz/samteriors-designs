import React from "react";
import featuresImg from "../../assets/img/feature/01.png";

function FeatureItem(props) {
  return (
    <div className="col-md-3">
      <div className="icon-box-item">
        <div className="icon-box__icon">
          {/* <img src={require('../../assets/img/' + props.img)} alt="Businex-Feature"/> */}
          <img src={featuresImg} alt="Brandz-Interior-Feature" />
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
