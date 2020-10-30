import React from "react";

const IconBox = ({ icon, title, text }) => {
  return (
    <div className="col-md-6">
      <div className="icon-box-item">
        <div className="icon-box__icon">
          <img
            src={process.env.PUBLIC_URL + ("/assets/img/" + icon)}
            alt={title}
          />
        </div>
        <div className="icon-box__info">
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default IconBox;
