import React, { useEffect, useState } from "react";
import "./home.scss";
import FetchData from "../../api/api";

// import components

import ProductsList from "../../components/ProductsList/ProductsList";

//#region our brand images
import brand1 from "../../assets/home_page/brand-1.png";
import brand2 from "../../assets/home_page/brand-2.png";
import brand3 from "../../assets/home_page/brand-3.png";
import brand4 from "../../assets/home_page/brand-4.png";
import brand5 from "../../assets/home_page/brand-5.png";
import brand6 from "../../assets/home_page/brand-6.png";
import brand7 from "../../assets/home_page/brand-7.png";
import brand8 from "../../assets/home_page/brand-8.png";
import brand9 from "../../assets/home_page/brand-9.png";
import brand10 from "../../assets/home_page/brand-10.png";
import brand11 from "../../assets/home_page/brand-11.png";
import brand12 from "../../assets/home_page/brand-12.png";

//#endregion images

import introImg from "../../assets/flash-sale-ads.png";
import { NavLink } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularSales, setPopularSales] = useState([]);
  const [gamerWorldPopularProducts, setGamerWorldPopularProducts] = useState(
    []
  );

  async function getPopularSales() {
    const response = await FetchData.getData("products?_limit=3");
    setPopularSales(response.data);
  }

  async function getGamerWorldPopularProducts() {
    const response = await FetchData.getData("products?category=1&_limit=4");
    setGamerWorldPopularProducts(response.data);
  }

  useEffect(() => {
    getPopularSales();
    getGamerWorldPopularProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />

      <div className="intro">
        <div className="container">
          <div className="intro--content">
            <img src={introImg} title="intro photo" />
            <div className="intro--timer">
              <div className="intro--timer__hours"></div>
              <div className="intro--timer__minutes"></div>
              <div className="intro--timer__seconds"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="container">
          <div className="services--content">
            <div className="services--content__item">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H5.63636V24.1818H35"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M34.9982 1H11.8164V18H34.9982V1Z"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M11.8164 7.18164H34.9982"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
              </svg>
              <div>
                <h3>Pulsuz Kargo</h3>
                <p>100₼ və yuxarı sifarişlərə</p>
              </div>
            </div>
            <div className="services--content__item">
              <svg
                width="32"
                height="34"
                viewBox="0 0 32 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M30.7 2L29.5 10.85L20.5 9.65"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
              </svg>
              <div>
                <h3>Pulsuz Qaytarma</h3>
                <p>30 gün ərzində</p>
              </div>
            </div>
            <div className="services--content__item">
              <svg
                width="32"
                height="38"
                viewBox="0 0 32 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
              </svg>
              <div>
                <h3>Təhlükasiz Ödəniş</h3>
                <p>100% təhlükəsiz online ödəniş</p>
              </div>
            </div>
            <div className="services--content__item">
              <svg
                width="32"
                height="35"
                viewBox="0 0 32 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M16 28V22"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
              </svg>
              <div>
                <h3>Ən Yaxşı Keyfiyyət</h3>
                <p>Orijinal Məhsul Zəmanəti</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our_brands">
        <div className="container">
          <div className="our_brands--content">
            <p>Partnyorlarımız</p>
            <div className="our_brands--images">
              <div className="our_brands--images__item">
                <img src={brand1} alt="brand1" />
              </div>
              <div className="our_brands--images__item">
                <img src={brand2} alt="brand2" />
              </div>
              <div className="our_brands--images__item">
                <img src={brand3} alt="brand3" />
              </div>
              <div className="our_brands--images__item">
                <img src={brand4} alt="brand4" />
              </div>
              <div className="our_brands--images__item">
                <img src={brand5} alt="brand5" />
              </div>
              <div className="our_brands--images__item">
                <img src={brand6} alt="brand6" />
              </div>
              <div className="our_brands--images__item">
                <img src={brand7} alt="brand7" />
              </div>
              <div className="our_brands--images__item">
                <img src={brand8} alt="brand8" />
              </div>
              <div className="our_brands--images__item">
                <img src={brand9} alt="brand9" />
              </div>
              <div className="our_brands--images__item">
                <img src={brand10} alt="brand10" />
              </div>
              <div className="our_brands--images__item">
                <img src={brand11} alt="brand11" />
              </div>
              <div className="our_brands--images__item">
                <img src={brand12} alt="brand12" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gamer_world">
        <div className="container">
          <div className="gamer_world--content">
            <p className="gamer_world--head">
              <span>Oyunçu</span> Dünyası
            </p>
            <ProductsList data={gamerWorldPopularProducts} />
          </div>
        </div>
      </div>

      <div className="popular_sales">
        <div className="container">
          <div className="popular_sales--content">
            <div className="popular_sales--head">
              <p>
                <span>Məhşur</span> Məhsullar
              </p>
              <div className="popular_sales--head__button">
                <button>View All</button>
              </div>
            </div>
            <div className="popular_sales--products">
              {popularSales &&
                popularSales.map((item, index) => {
                  return (
                    <div className="popular_sales--products__item" key={index}>
                      <div className="popular_sales--products__item--image">
                        <img src={item.img[0]} alt={index} />
                      </div>
                      <div className="popular_sales--products__item--desc">
                        <NavLink to={"shop/single-product/" + item.id}>
                          {item.name}
                        </NavLink>
                        <div className="popular_sales--products__item--desc--prices">
                          <span className={item.offer && "old_price"}>
                            ₼ {item.price}
                          </span>
                          {item.offer && (
                            <span className="new_price">₼ {item.offer}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;