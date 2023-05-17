import React, { useState } from "react";
import StarRating from "../StarRating/StarRating";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import "./quickView.scss";
import AddToWishListBtn from "../AddToWishListBtn/AddToWishListBtn";
import { NavLink } from "react-router-dom";

const QuickView = (props) => {
  const { product, setMaximize } = props;
  const {
    name,
    price,
    image: img,
    rating,
    _id: id,
    stock_count,
    brand,
    offer,
    order_count,
    in_stock,
  } = product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <div
        className="quickview_overlay"
        onMouseDown={() => setMaximize(false)}
      ></div>
      <div className="quickview">
        <div className="quickview--left">
          <div className="quickview--left__img">
            <img src={img[currentImageIndex]} alt="image" />
          </div>
          <div className="quickview--left__images">
            {img.map((image, index) => {
              return (
                <img
                  src={image}
                  alt="image"
                  key={index}
                  onMouseDown={() => setCurrentImageIndex(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="quickview--right">
          <h3 className="quickview_name">{name}</h3>
          <p>Brend : {brand}</p>
          <p>Stokdakı məhsul sayı : {stock_count}</p>
          <StarRating rating={rating} />
          <div className="quickview--right__price">
            <p className={offer ? "old_price" : "price"}>₼ {price}</p>
            {offer && <p className="new_price">₼ {offer}</p>}
          </div>
          <div className="quickview_actions">
            <AddToCartBtn id={id} inStock={in_stock} />
            <AddToWishListBtn id={id} />
          </div>
          <p>Sifariş Sayı: {order_count}</p>
          <div className="quickview_page">
            <NavLink to={`/product-detail/${id}`}>
              Məhsul səhifəsinə keç
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickView;
