import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ bgImg, title, content, headRoute }) => {
  return (
    <div
      className="page-header-area bg-img"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-8 m-auto text-center">
            <div className="page-header-content-inner">
              <div className="page-header-content">
                <h2>{title}</h2>
                <p>{content}</p>
                <nav className="bradcaump-inner">
                  <Link
                    className="breadcrumb-item"
                    to={process.env.PUBLIC_URL + "/"}
                  >
                    <i className="fa fa-home" aria-hidden="true"></i>
                    Home
                  </Link>
                  <span className="brd-separetor">/</span>
                  <span className="breadcrumb-item active">{headRoute}</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
