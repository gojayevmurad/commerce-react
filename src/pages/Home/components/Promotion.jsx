import React from "react";

const Promotion = (props) => {
  const { imgUrl, text, header, type, priceText, price, dark } = props.item;

  const className = dark
    ? "promotions--section__promo dark"
    : "promotions--section__promo";

  return (
    <div style={{ backgroundImage: `url(${imgUrl})` }} className={className}>
      <p className="text-secondary">{text}</p>
      <h5 className="text-secondary">{header}</h5>
      <p className="text-secondary  ">{type}</p>
      <p className="text-light ">
        <span className="text-orange">{price}-DAN </span>
        {priceText}
      </p>
    </div>
  );
};

export default Promotion;
