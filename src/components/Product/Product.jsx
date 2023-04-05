import React, { useState, useEffect } from "react";

import "./product.scss";
import StarRating from "../StarRating/StarRating";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AddToWishListBtn from "../AddToWishListBtn/AddToWishListBtn";

const Product = (props) => {
  const { product } = props;

  const { name, price, offer: offerPrice, rating, img, id } = product;

  return (
    <div className="product">
      <div className="product--img">
        <img src={img[0]} alt={name} />
        <img src={img[1]} alt={name} />
      </div>
      <div className="product--rating">
        <div className="product--rating__star">
          {<StarRating rating={rating} />}
        </div>
      </div>
      <div className="product--name">
        <NavLink to={`/single-product/${id}`}>{product.name}</NavLink>
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
        <AddToCartBtn id={product.id} />
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
            className="feather feather-maximize"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </div>
        <AddToWishListBtn id={id}/>
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
            className="feather feather-refresh-cw"
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
