import React from "react";
import { Efectin, Efectin1, Efectin2 } from "../assets/styles/effect.styles";

const Preloader = () => {
  return (
    <section id="preloader">
      <Efectin />
      <Efectin1 />
      <Efectin2 />
      <div className="text">
        <div className="spinner"></div>
      </div>
    </section>
  );
};

export default Preloader;
