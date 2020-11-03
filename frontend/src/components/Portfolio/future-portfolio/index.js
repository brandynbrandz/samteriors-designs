// To be used later

import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";
import SectionTitle from "../../UI/SectionTitle";

import PortfolioData from "../../../data/Portfolio/portfolio";
import THEME from "./theme";
import styles from "./Portfolio2.module.scss";
import { SpringGrid, enterExitStyle } from "react-stonecutter";
import useCurrentWidth from "./helpers/useCurrentWidth";
import useHover from "./helpers/useHover";
// import FadeIn from "react-fade-in";

// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

function Port() {
  // Active category (start with all)
  const [active, setActive] = useState("All");

  const width = useCurrentWidth();
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    switch (true) {
      case width > 1920:
        setItemWidth(width / 5);
        break;
      case width > 992:
        setItemWidth(width / 4);
        break;
      case width > 768:
        setItemWidth(width / 3);
        break;
      case width > 576:
        setItemWidth(width / 2);
        break;
      default:
        setItemWidth(width);
        break;
    }
  }, [width]);
  //------------------------------------------------------------

  // Animation styles for masonry component
  const { enter, entered, exit } = enterExitStyle.simple;

  // Take category tags from every item in database, and make array with unique values
  const categories = [
    ...new Set(
      Array.prototype.concat(
        ...PortfolioData.map((item) =>
          item.category.split(" ").map((cat) => cat)
        )
      )
    ),
  ];

  // Creating array of jsx items for masonry grid
  const portfolioList = shuffleArray(
    PortfolioData.filter(
      (item) => item.category.includes(active) || active === "All"
    )
      .map(({ item, index, title, image, subtitle, id }) => (
        <div className="mt-15">
          <div
            key={index}
            style={{
              width: itemWidth,
              height: width > 576 ? itemWidth : itemWidth / 1.5,
            }}
          >
            <PortfolioItem
              image={image}
              title={title}
              subtitle={subtitle}
              id={id}
            />
          </div>
        </div>
      ))
      .splice(0, useCurrentWidth() > 576 ? 8 : 4)
  );
  // Randomizing array every time component re-rendering for better animation
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
  return (
    <>
      <section className="section mt-40">
        <div className="text-center">
          <SectionTitle title="Our Works" heading="Portfolio" />
        </div>

        <div className={styles.portfolio}>
          <ul>
            <Button
              key="all"
              item="All"
              active={active}
              setActive={setActive}
            />
            {categories.map((item, index) => (
              <Button
                key={index}
                item={item}
                active={active}
                setActive={setActive}
              />
            ))}
          </ul>
          <SpringGrid
            component="ol"
            columns={window.outerWidth / itemWidth - 1}
            columnWidth={itemWidth}
            itemHeight={width > 576 ? itemWidth : itemWidth / 1.5}
            enter={enter}
            entered={entered}
            exit={exit}
            springConfig={{ stiffness: 170, damping: 26 }}
          >
            {portfolioList}
          </SpringGrid>
        </div>
      </section>
    </>
  );
}

const Button = ({ item, active, setActive }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <li
      ref={hoverRef}
      onClick={() => setActive(item)}
      className={active === item ? styles.active : null}
      style={{
        color: active === item || isHovered ? THEME.color : null,
        borderColor: active === item && THEME.color,
      }}
    >
      {item}
    </li>
  );
};
export default Port;
