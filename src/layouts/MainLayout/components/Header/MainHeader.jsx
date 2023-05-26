import React from "react";
import wish from "../../../../assets/header/wish.png";
import cart from "../../../../assets/header/cart.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const MainHeader = () => {
  const wishCount = useSelector((state) => state.favorites.data.length);
  const categories = ["All categories", "Fashion", "Sports", "Games"];

  return (
    <div className="header--main">
      <div className="container">
        <div className="header--main--content">
          <Link to="/" className="header--logo">
            D<span className="diff-text">NP</span>
          </Link>
          <form className="header--search">
            <select name="category" id="category">
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input type="text" name="query" placeholder="Search in..." />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div className="header--main__right">
            <div className="header--phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p>
                Canlı çat və ya :<span>0(800)123-456</span>
              </p>
            </div>
            <ul>
              <li
                className={wishCount > 0 ? "header_count" : ""}
                data-count={wishCount}
              >
                <NavLink to="profile/favorites">
                  <img src={wish} alt="wish" className="header-icon" />
                  İstəklər
                </NavLink>
              </li>
              <li>
                <img src={cart} alt="cart" className="header-icon" />
                Səbət
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
