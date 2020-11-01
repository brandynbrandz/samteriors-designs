import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.scss";
// import "slick-carousel/slick/slick-theme.css";
function SlickSlider({ children, settings }) {
  return (
    <>
      <Slick {...settings}>{children}</Slick>
    </>
  );
}

export default SlickSlider;
