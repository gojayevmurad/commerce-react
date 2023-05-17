import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./locationheader.scss";

const categoryBackImage = [
  "https://c1.wallpaperflare.com/preview/399/729/117/phone-mobile-phone-screen-saver-time-thumbnail.jpg",
  "https://c4.wallpaperflare.com/wallpaper/486/1022/515/funny-thinking-brain-slogan-useful-1600x1200-entertainment-funny-hd-art-wallpaper-preview.jpg",
  "https://c0.wallpaperflare.com/preview/487/39/826/person-holding-black-fujica-camera.jpg",
  "https://c4.wallpaperflare.com/wallpaper/57/340/874/motherboard-black-and-white-technology-wallpaper-thumb.jpg",
  "https://media.istockphoto.com/id/1132606352/photo/blackboard-with-chalk-border.jpg?b=1&s=170667a&w=0&k=20&c=R1i7MzTAWrlkmuC5vuCRUuZX-w337Kphjp2sv6r_frI=",
];

const LocationHeader = () => {
  const [menuCategory, setMenuCategory] = useState(4);

  const mouseEnterCategory = (e) => {
    setMenuCategory(e.target.dataset.category);
  };

  return (
    <div className="locationheader">
      <div className="container">
        <div className="locationheader--content">
          <ul className="locationheader--list">
            <li className="locationheader--list__categories">
              <div
                className="locationheader--list__categories__leftside"
                style={{ cursor: "pointer" }}
              >
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
                  className="feather feather-align-left"
                >
                  <line x1="17" y1="10" x2="3" y2="10" />
                  <line x1="21" y1="6" x2="3" y2="6" />
                  <line x1="21" y1="14" x2="3" y2="14" />
                  <line x1="17" y1="18" x2="3" y2="18" />
                </svg>
                Bütün kateqoriyalar
              </div>
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
                className="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <ul
                style={{
                  backgroundImage: `url(${categoryBackImage[+menuCategory]})`,
                  backgroundPosition: "center",
                }}
                className="locationheader--list__categories--absolutecategories"
              >
                <li onMouseEnter={mouseEnterCategory} data-category="0">
                  <div className="absolutecategories--leftside">
                    <i className="fa-solid fa-laptop-code"></i>
                    Mobil və Laptop
                  </div>

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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>

                <li onMouseEnter={mouseEnterCategory} data-category="1">
                  <div className="absolutecategories--leftside">
                    <i className="fa-solid fa-gamepad"></i>
                    Əyləncə
                  </div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>

                <li onMouseEnter={mouseEnterCategory} data-category="2">
                  <div className="absolutecategories--leftside">
                    <i className="fa-solid fa-photo-film"></i>
                    Şəkil və Video
                  </div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>

                <li onMouseEnter={mouseEnterCategory} data-category="3">
                  <div className="absolutecategories--leftside">
                    <i className="fa-solid fa-microchip"></i>
                    Aparat təminatı
                  </div>
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>
              </ul>
            </li>
            <li className="locationheader--list__items">
              <NavLink to="/">Əsas Səhifə</NavLink>
            </li>
            <li className="locationheader--list__items">
              <NavLink to="/shop">Mağaza</NavLink>
            </li>
            <li className="locationheader--list__items">
              <NavLink to="/about">Haqqımızda</NavLink>
            </li>
            <li className="locationheader--list__items">
              <NavLink to="/blogs">Bloqlar</NavLink>
            </li>
            <li className="locationheader--list__items">
              <NavLink to="/contact">Əlaqə</NavLink>
            </li>
          </ul>
          <div className="locationheader--seller">
            <button>
              Become a Seller
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
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHeader;
