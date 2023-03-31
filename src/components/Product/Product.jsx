import React from "react";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import "./product.scss";
import logo from "../../console.png";

let emptyStar = <BsStar />;
let star = <BsStarFill />;
let halfStar = <BsStarHalf />;

let price = 15.99;
let offerPrice = 12;

let rating = 4.5;

let countStars = Math.floor(rating);
let isHalf = rating % 1 >= 0.5;
let countEmptyStars = 5 - countStars - (isHalf ? 1 : 0);

const stars = [];

for (let i = 0; i < countStars; i++) stars.push(star);
isHalf && stars.push(halfStar);
for (let i = 0; i < countEmptyStars; i++) stars.push(emptyStar);

const Product = () => {
  return (
    <div className="product">
      <div className="product--img">
        <img src={logo} alt="" />
      </div>
      <div className="product--rating">
        <div className="product--rating__star">{stars}</div>
      </div>
      <div className="product--name">
        <a href="">Lorem ipsum dolor sit amet consectetur.</a>
      </div>
      <div className="product--price">
        <div
          className={
            offerPrice
              ? "discount product--price__item"
              : " product--price__item"
          }
        >
          ₼<p>{price}</p>
        </div>
        {offerPrice && (
          <div className="product--price__item new--price">
            ₼ <p>{offerPrice}</p>
          </div>
        )}
      </div>
      <div className="product--addToCart">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1px"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-shopping-bag"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          Əlavə Et
        </button>
      </div>
      <div className="product--actions">
        <div className="product--actions__maximize" data-title="Böyüt">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="feather feather-maximize"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </div>
        <div className="product--actions__wish" data-title="İstək Siyahısı">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="feather feather-heart"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <div className="product--actions__compare" data-title="Müqayisə">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="feather feather-refresh-cw"
          >
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Product;
