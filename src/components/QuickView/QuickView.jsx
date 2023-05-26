import React, { useState } from "react";
import StarRating from "../StarRating/StarRating";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import "./quickView.scss";
import AddToWishListBtn from "../AddToWishListBtn/AddToWishListBtn";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Controller } from "swiper";
import { NavLink } from "react-router-dom";

const ChangeSwiper = (index) => {
  const swiper = useSwiper();
  swiper.slideTo(index);
};

// const slideChangeHandler = (swiper) => {
//   const elements = swiper.pagination.bullets;
//   const nextBtn = document.querySelector(".swiper-next-btn");
//   const prevBtn = document.querySelector(".swiper-prev-btn");

//   if (elements[elements.length - 1].classList.contains("active")) {
//     nextBtn.classList.add("hide");
//   } else {
//     nextBtn.classList.remove("hide");
//   }

//   if (elements[0].classList.contains("active")) {
//     prevBtn.classList.add("hide");
//   } else {
//     prevBtn.classList.remove("hide");
//   }
// };

const QuickView = (props) => {

  const { product, setMaximize } = props;
  const [controllerSwiper, setControllerSwiper] = useState(null);

  const slideTo = (index) => controllerSwiper.slideTo(index);

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
  } = product;
  
  return (
    <>
      <div
        className="quickview_overlay"
        onMouseDown={() => setMaximize(false)}
      ></div>
      <div className="quickview">
        <div className="quickview--left">
          <div className="quickview--left__img">
            <Swiper
              className="about_slider"
              spaceBetween={50}
              slidesPerView={1}
              onSwiper={setControllerSwiper}
            >
              {img.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="slide_quick">
                    <img src={item} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="quickview--left__images">
            {img.map((image, index) => {
              return (
                <img
                  src={image}
                  alt="image"
                  key={index}
                  onMouseDown={() => slideTo(index)}
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
            <p className={offer > 0 ? "old_price" : "price"}>₼ {price}</p>
            {offer > 0 && <p className="new_price">₼ {offer}</p>}
          </div>
          <div className="quickview_actions">
            <div>
              <AddToCartBtn id={id} inStock={stock_count > 0} />
            </div>
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
