import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const StarRating = ({ rating }) => {
  let emptyStar = <BsStar className="product__rating__star" />;
  let star = <BsStarFill className="product__rating__star" />;
  let halfStar = <BsStarHalf className="product__rating__star" />;

  let countStars = Math.floor(rating);
  let isHalf = rating % 1 >= 0.5;
  let countEmptyStars = 5 - countStars - (isHalf ? 1 : 0);

  const stars = [];

  for (let i = 0; i < countStars; i++) stars.push(star);
  isHalf && stars.push(halfStar);
  for (let i = 0; i < countEmptyStars; i++) stars.push(emptyStar);
  return (
    <div className="rating_component">
      {stars.map((star, index) => {
        return <span key={index}>{star}</span>;
      })}
    </div>
  );
};

export default StarRating;
