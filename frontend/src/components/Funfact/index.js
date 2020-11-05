import React from "react";
import FunfactItem from "./funfactItem";

import Funfacts from "../../data/Funfact/funfact";

function Funfact() {
  return (
    <div
      className="fun-fact-area sm-top parallax"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/img/backgrounds/kitchen.jpg"
        })`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="row mtn-40">
          {Funfacts.map((funfact) => (
            <FunfactItem
              key={funfact.id}
              counterNumber={funfact.counterNumber}
              counterText={funfact.counterText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Funfact;
