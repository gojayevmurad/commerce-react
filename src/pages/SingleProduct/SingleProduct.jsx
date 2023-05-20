import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import StarRating from "../../components/StarRating/StarRating";
import "./singleproduct.scss";
import AddToCartBtn from "../../components/AddToCartBtn/AddToCartBtn";
import Loading from "../../components/Loading/Loading";
import FetchData from "../../api/api";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  let category;

  switch (product.category) {
    case 1:
      category = "Smartfonlar";
      break;
    case 2:
      category = "Laptoplar";
      break;
    default:
      break;
  }
  useEffect(() => {
    FetchData.getSingleProduct(id).then((res) => {
      setProduct(res.data);
      setCurrentImage(res.data.image[0]);
    });

    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const changeImage = (item) => {
    if (item === currentImage) return;
    setCurrentImage(item);
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="single_product_location">
        <div className="container">
          <div className="single_product_location--content">
            <NavLink to="/shop">Mağaza</NavLink> /{" "}
            <p className="current">{product.name}</p>
          </div>
        </div>
      </div>

      <div className="single_product_main">
        <div className="container">
          <div className="single_product_main--content">
            <div className="single_product_main--images">
              <div className="single_product_main--images--slider">
                <img src={currentImage} alt="" />
              </div>
              <div className="single_product_main--images--list">
                <div className="slider_prev_btn"></div>
                <div className="slider_next_btn"></div>
                {product.img &&
                  product.img.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="single_product_main--images--list__item"
                        style={{ cursor: "pointer" }}
                        onMouseDown={() => changeImage(item)}
                      >
                        <img src={item} alt="photo" />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="single_product_main--info">
              <p>{category}</p>
              <h3>{product.name}</h3>
              <StarRating rating={product.rating} />
              <div className="single_product_main--info__pricing">
                <p
                  className={
                    product.offer ? "single_old_price" : "single_price"
                  }
                >
                  ₼ {product.price}
                </p>
                {product.offer && (
                  <p className="single_new_price"> ₼ {product.offer}</p>
                )}
              </div>
              <div className="single_product_main--info__add_to_cart">
                <AddToCartBtn id={id} inStock={product.in_stock} />
              </div>
              <div className="single_product_main--info__description">
                <p>Category : {category}</p>
                <p>Brand : {product.brand}</p>
              </div>
              <div className="single_product_main--info__report">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-flag"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
                <p>Şikayət et</p>
              </div>
              <div className="single_product_main--info__share">
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z"
                    fill="#3E75B2"
                  ></path>
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.6 0 0 3.6 0 8C0 11.4 2.1 14.3 5.1 15.4C5 14.8 5 13.8 5.1 13.1C5.2 12.5 6 9.1 6 9.1C6 9.1 5.8 8.7 5.8 8C5.8 6.9 6.5 6 7.3 6C8 6 8.3 6.5 8.3 7.1C8.3 7.8 7.9 8.8 7.6 9.8C7.4 10.6 8 11.2 8.8 11.2C10.2 11.2 11.3 9.7 11.3 7.5C11.3 5.6 9.9 4.2 8 4.2C5.7 4.2 4.4 5.9 4.4 7.7C4.4 8.4 4.7 9.1 5 9.5C5 9.7 5 9.8 5 9.9C4.9 10.2 4.8 10.7 4.8 10.8C4.8 10.9 4.7 11 4.5 10.9C3.5 10.4 2.9 9 2.9 7.8C2.9 5.3 4.7 3 8.2 3C11 3 13.1 5 13.1 7.6C13.1 10.4 11.4 12.6 8.9 12.6C8.1 12.6 7.3 12.2 7.1 11.7C7.1 11.7 6.7 13.2 6.6 13.6C6.4 14.3 5.9 15.2 5.6 15.7C6.4 15.9 7.2 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0Z"
                    fill="#E12828"
                  ></path>
                </svg>
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0722 1.60052C16.432 1.88505 15.7562 2.06289 15.0448 2.16959C15.7562 1.74278 16.3253 1.06701 16.5742 0.248969C15.8985 0.640206 15.1515 0.924742 14.3335 1.10258C13.6933 0.426804 12.7686 0 11.7727 0C9.85206 0 8.28711 1.56495 8.28711 3.48557C8.28711 3.7701 8.32268 4.01907 8.39382 4.26804C5.51289 4.12577 2.9165 2.73866 1.17371 0.604639C0.889175 1.13814 0.71134 1.70722 0.71134 2.34742C0.71134 3.5567 1.31598 4.62371 2.27629 5.26392C1.70722 5.22835 1.17371 5.08608 0.675773 4.83711V4.87268C0.675773 6.5799 1.88505 8.00258 3.48557 8.32268C3.20103 8.39382 2.88093 8.42938 2.56082 8.42938C2.34742 8.42938 2.09845 8.39382 1.88505 8.35825C2.34742 9.74536 3.62784 10.7768 5.15722 10.7768C3.94794 11.7015 2.45412 12.2706 0.818041 12.2706C0.533505 12.2706 0.248969 12.2706 0 12.2351C1.56495 13.2309 3.37887 13.8 5.37062 13.8C11.8082 13.8 15.3294 8.46495 15.3294 3.84124C15.3294 3.69897 15.3294 3.52113 15.3294 3.37887C16.0052 2.9165 16.6098 2.31186 17.0722 1.60052Z"
                    fill="#3FD1FF"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single_product_about">
        <div className="container">
          <div className="single_product_about--content">
            <h4>Xüsusiyyətlər</h4>
            {product?.features?.map((feature, index) => (
              <div key={index} className="single_product_about--item">
                <p className="single_product_about--item__key">
                  {feature[0].split("_").join(" ").toUpperCase()}
                </p>
                <p className="single_product_about--item__value">
                  {feature[1] == true
                    ? "Bəli"
                    : feature[1] == false
                    ? "Xeyr"
                    : feature[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
