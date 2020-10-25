import React from "react";

const HeaderConfig = () => {
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
    <div>
      <a href="tel:00199823568658" className="tel-no">
        +254 700 100100
      </a>
      <button onClick={LoginRegHandler} className="btn-cog">
        <i className="fa fa-cog" />
      </button>
      <button onClick={MobileMenuHandler} className="btn-menu d-lg-none">
        <i className="fa fa-bars" />
      </button>
    </div>
  );
};

export default HeaderConfig;
