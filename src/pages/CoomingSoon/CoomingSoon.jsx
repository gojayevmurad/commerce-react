import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./coomingSoon.scss";

const CoomingSoon = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className={isMouseOver ? "cooming-soon change" : "cooming-soon"}>
      <h2>Tezliklə...</h2>
      <NavLink
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        to="/"
      >
        Mağazaya qayıt.
        <div className={isMouseOver ? "circle" : "circle hide"}></div>
      </NavLink>
    </div>
  );
};

export default CoomingSoon;
