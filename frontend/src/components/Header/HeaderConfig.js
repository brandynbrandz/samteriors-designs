import React from "react";

function HeaderConfig(props) {
  const LoginRegHandler = () => {
    const offCanvasConfig = document.querySelector(".off-canvas-cog");
    offCanvasConfig.classList.add("active");
    document.querySelector("body").classList.add("fix");
  };

  const MobileMenuHandler = () => {
    const offCanvasMenu = document.querySelector(".off-canvas-menu");
    offCanvasMenu.classList.add("active");
  };

  return (
    <div className="header-action mt-lg-3 text-right">
      <a href="tel:+254710219069" className="tel-no">
        +2547 10 100100
      </a>
      <button onClick={LoginRegHandler} className="btn-cog">
        <i className="fa fa-cog" />
      </button>
      <button onClick={MobileMenuHandler} className="btn-menu d-lg-none">
        <i className="fa fa-bars" />
      </button>
    </div>
  );
}

export default HeaderConfig;
